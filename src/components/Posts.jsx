import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../store/actions/postsActions";
import { performLogout } from "../store/actions/authActions";
import PostItem from "./PostItem";

export default function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onAdd = () => {
    if (!title.trim() || !body.trim()) return;
    dispatch(addPost({ title: title.trim(), body: body.trim() }));
    setTitle("");
    setBody("");
  };

  const onLogout = () => {
    dispatch(performLogout());
    // Redirect is handled by ProtectedRoute
  };

  return (
    <div className="page">
      <header className="topbar">
        <h1>Posts</h1>
        <div>
          <span className="muted">Hi, {currentUser?.username}</span>
          <button className="btn-ghost" onClick={onLogout} style={{ marginLeft: 12 }}>
            Logout
          </button>
        </div>
      </header>

      <main>
        <section className="add-card card">
          <h3>Add Post</h3>
          <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} rows={3} />
          <button onClick={onAdd}>Add Post</button>
        </section>

        <section>
          {loading && <div className="info">Loading posts...</div>}
          {error && <div className="error">Error: {error}</div>}
          {posts.length === 0 && !loading && <div className="info">No posts yet.</div>}
          <div className="posts-list">
            {posts.map((p) => (
              <PostItem key={p.id} post={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
