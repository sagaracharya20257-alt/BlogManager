import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../store/actions/postsActions";
import EditModal from "./EditModal";

export default function PostItem({ post }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    if (confirm("Delete this post?")) {
      dispatch(deletePost(post.id));
    }
  };

  const onSave = (data) => {
    dispatch(editPost({ id: post.id, ...data }));
    setOpen(false);
  };

  return (
    <div className="post card">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <div className="post-actions">
        <button onClick={() => setOpen(true)}>Edit</button>
        <button onClick={onDelete} className="danger">
          Delete
        </button>
      </div>

      {open && <EditModal initial={{ title: post.title, body: post.body }} onClose={() => setOpen(false)} onSave={onSave} />}
    </div>
  );
}
