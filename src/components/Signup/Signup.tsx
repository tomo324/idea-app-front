import React, { useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const clickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // レスポンスが成功した場合
        console.log('Success:', data);
      } else {
        // レスポンスが失敗した場合
        console.log('Server Error', data);
        alert('Server Error')
      }
    } catch (error) {
      console.log('Fetch Error', error);
      alert('Fetch Error')
    }
  };

  // TODO バリデーションを追加する 参考：https://zenn.dev/thirosue/books/13ac92fc34ae22/viewer/c7b14d
  // TODO /homeにルーティングされるようにする
  // TODO パスワード入力欄に目のやつをつける

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="mb-8 text-3xl font-semibold text-center text-gray-700">
          Sign Up
        </h2>
        <label htmlFor="email" className="block text-sm text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={changeEmail}
          value={email}
          name="email"
          className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        ></input>

        <label htmlFor="password" className="block text-sm text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={changePassword}
          value={password}
          name="password"
          className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        ></input>

        <label htmlFor="name" className="block text-sm text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          onChange={changeName}
          value={name}
          name="name"
          className="block w-full px-4 py-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        ></input>

        <button
          type="submit"
          onClick={clickSubmit}
          className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-400"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
