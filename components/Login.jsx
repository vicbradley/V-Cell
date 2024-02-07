"use client";
import { useProductContext } from "@/app/context/Context";
import { useState } from "react";

export default function Login() {
  const { isLogin, setIsLogin } = useProductContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (username === "root" && password === "root") {
      setIsLogin(true);
      localStorage.setItem("isLogin", true);
    } else {
      alert("Wrong Username/Password ");
    }
  };

  return (
    <form className="max-w-sm mx-auto p-4">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={handleOnSubmit}>
        Submit
      </button>

      <button onClick={() => alert(isLogin)}>test</button>
    </form>
  );
}
