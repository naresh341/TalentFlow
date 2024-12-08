import React, { useState } from "react";

const LoginPage = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-xl ">
          <form
            onSubmit={submithandler}
            className="flex  flex-col items-center justify-center "
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="border-2 border-emerald-600 py-4 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400   rounded-full "
              type="email"
              placeholder="admin@me.com/e1@e.com"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="border-2 border-emerald-600 py-4 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400   rounded-full mt-3"
              type="password"
              placeholder="123"
            />
            <button className=" border-none bg-emerald-600 py-4 px-4 w-[15rem]  text-xl  text-white outline-none   placeholder:text-white rounded-full mt-7">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
