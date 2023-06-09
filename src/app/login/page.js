'use client';
import React from "react";
import { useRouter } from 'next/navigation'

function Login() {

  const changeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();
        router.push("/friends");


  };
  return (

    <div className="flex  h-screen justify-center flex-col ">
      <form
        onSubmit={handleSubmit}
        className=" items-center flex flex-col p-6 font-black"
      >
        <h1 className="text-[70px]">LOGIN</h1>
        <div className=" w-2/5 flex text-[20px] flex-col ">
          <label className="flex  flex-col">
            <p className="flex items-start"> USERNAME</p>
            <input
              name={"username"}
              onChange={changeHandle}
              type="text"
              className=" px-2 h-16 text-white bg-black"
            />
          </label>
          <label className="flex item flex-col">
            <p className=" flex items-start  mt-3">PASSWORD</p>
            <input
              name={"password"}
              onChange={changeHandle}
              type="password"
              className="px-2 h-16 text-white bg-black"
            />
          </label>
          <label className="flex  flex-col">
            <button
              type="submit"
              className="text-white text-[20px] mt-4 h-16 bg-black"
            >
              {" "}
              SUMBIT
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Login;