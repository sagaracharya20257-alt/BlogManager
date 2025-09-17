import React, { useState } from "react";

export default function EditModal({ initial, onClose, onSave }) {
  const [title, setTitle] = useState(initial.title);
  const [body, setBody] = useState(initial.body);

  const submit = (e) => {
    e.preventDefault();
    onSave({ title: title.trim(), body: body.trim() });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal card">
        <h3>Edit Post</h3>
        <form onSubmit={submit}>
          <label>
            Title
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            Body
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={4} required />
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="btn-ghost">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
