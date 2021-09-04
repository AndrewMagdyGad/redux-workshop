import { connect } from "react-redux";
import { addPost, getPosts } from "../Slices/postSlice";
import Post from "./Post";
import { useEffect } from "react";
import axios from "axios";

function Postlist({ posts, addPost, dispatch }) {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            const posts = res.data;
            const data = [];
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    const users = response.data;
                    for (let i = 0; i < posts.length; i++) {
                        const currentPost = posts[i];
                        const user = users.filter(
                            (item) => item.id === currentPost.userId
                        )[0];
                        data.push({ ...user, ...currentPost });
                    }
                    dispatch(getPosts(data));
                });
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 m-auto">
                    {posts.map((post, index) => (
                        <Post post={post} key={index} />
                    ))}
                    <button
                        onClick={() =>
                            addPost({
                                name: "Ahmed",
                                title: "Psot Title",
                                body: "bla bla blab bla",
                            })
                        }
                        type="button"
                        className="btn btn-primary d-block mx-auto my-5"
                    >
                        Add Post
                    </button>
                </div>
            </div>
        </div>
    );
}

// const listPosts = () => {
//     return (dispatch, getState) => {
//         return axios
//             .get("https://jsonplaceholder.typicode.com/posts")
//             .then((res) => {
//                 dispatch(getPosts(res.data));
//             })
//             .catch((e) => console.log(e));
//     };
// };

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post)),
        dispatch: dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Postlist);
