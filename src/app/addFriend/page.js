import { useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

export default function AddFriend() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    axiosWithAuth()
      .post("http://localhost:9000/api/friends", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1 className="text-5xl font-extrabold mt-10 ">ADD FRIEND</h1>
      <div className=" mr-44 mt-5">
        <form onSubmit={handleSubmit} className=" w-24 flex-col mx-auto ">
          <label className=" w-28 font-extrabold whitespace-nowrap ">
            FRIEND NAME
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={data.value}
            className="p-1  mb-4 border text-white bg-black border-neutral-900 h-16  w-72"
          />
          <label className=" whitespace-nowrap   font-extrabold">
            FRIEND MAIL
          </label>
          <input
            onChange={handleChange}
            value={data.value}
            type="text"
            name="email"
            className="p-1 border mb-4 text-white bg-black border-neutral-900 h-16 w-72"
          />
          <button
            type="submit"
            className="p-1 mt- border text-white font-extrabold h-16 w-72 bg-black"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
