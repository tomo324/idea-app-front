import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Signup from "../Signup/Signup";

describe("Signupコンポーネント", () => {
  // テスト終了時fetch関数のモック化を解除
  afterAll(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  test("フォーム入力が正常に行え、fetchが正しく呼び出されていること", async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      json: async () => ({
        accessToken: "token",
      }),
    };

    const dataSignupMock = () => Promise.resolve(mockResponse);

    // fetch関数をモック化
    global.fetch = jest.fn().mockImplementation(dataSignupMock);

    // Signupコンポーネントをレンダリング
    const { getByLabelText, getByRole } = render(<Signup />);

    // 入力フィールドに値を入力
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(getByLabelText("Name"), { target: { value: "testUser" } });

    // 送信ボタンをクリック;
    fireEvent.click(getByRole("button", { name: "Sign Up" }));

    // fetchが一度だけ呼び出されたことを確認
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // fetchの引数が正しいことをテスト
    expect(global.fetch).toHaveBeenCalledWith("auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "password123",
        name: "testUser",
      }),
    });

    // fetchの返り値が正しいことをテスト
    const fetchResponse = await global.fetch("dummyUrl", { method: "POST" });
    expect(fetchResponse).toEqual(mockResponse);
  });

  // TODO エラーになる場合の、コンソールの出力ををテストする 
  // TODO バリデーション用のテストを追加する
});
