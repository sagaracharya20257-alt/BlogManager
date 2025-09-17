import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    navigate("/posts");
  };

  return (
    <div className="centered">
      <form className="card" onSubmit={submit}>
        <h2>Login</h2>
        <label>
          Username
          <input value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
        {authError && <div className="error">{authError}</div>}
        <div className="hint">
          Try: <b>alice / 1234</b> or <b>bob / abcd</b>
        </div>
      </form>
    </div>
  );
}
