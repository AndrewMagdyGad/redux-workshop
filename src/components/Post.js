export default function Post({ post }) {
    return (
        <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">{post.name}</div>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    );
}
