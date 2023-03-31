import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useState } from "react";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const {email, setEmail } = useState("");
  const {password, setPassword } = useState("");

  return (
    <div className="text-center mt-5">
      <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
      <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
	  <button >Login!</button>
    </div>
  );
};
