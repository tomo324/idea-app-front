import React from "react";
import { render, fireEvent, RenderResult, waitFor } from "@testing-library/react";
import Signup from "../Signup/Signup";

describe("Signupコンポーネント", () => {
  let getByLabelText: RenderResult['getByLabelText'];
  let getByRole: RenderResult['getByRole'];

  // フォーム入力
  const fillForm = () => {
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(getByLabelText("Name"), { target: { value: "testUser" } });
  };

  // フォーム送信
  const submitForm = async () => {
    fireEvent.click(getByRole("button", { name: "Sign Up" }));
    await new Promise(resolve => setTimeout(resolve, 100))
  };

  // テスト開始時にSignupコンポーネントをレンダリング
  beforeEach(() => {
    const renderResult = render(<Signup />);
    getByLabelText = renderResult.getByLabelText;
    getByRole = renderResult.getByRole;
  });

  // テスト終了時fetch関数のモック化を解除
  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
    jest.restoreAllMocks();
  });

  it("フォーム入力が正常に行え、fetchが正しく呼び出されていること", async () => {
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
    
    // フォームを埋め送信
    fillForm();
    await submitForm();

    // fetchが一度だけ呼び出されたことをテスト
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

  it("fetchのレスポンスが失敗した場合、console.logとalertが実行されること", async () => {

    const mockResponse = {
      ok: false,
      status: 401,
      json: async () => ({
        error: "Unauthorized",
      }),
    };

    const dataSignupMock = () => Promise.resolve(mockResponse);

    // fetch関数をモック化
    global.fetch = jest.fn().mockImplementation(dataSignupMock);

    // console.logをモック化
    jest.spyOn(console, 'log');

    // alertをモック化
    jest.spyOn(window, 'alert');

    // フォームを埋めて送信
    fillForm();
    await submitForm();

    // fetchが一度だけ呼び出されたことを確認
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // console.logが一度だけ呼び出されたことを確認
    expect(console.log).toHaveBeenCalledTimes(1);
    // console.logの引数が正しいことを確認
    expect(console.log).toHaveBeenCalledWith('Server Error', { error: 'Unauthorized' });

    // alertが一度だけ呼び出されたことを確認
    expect(window.alert).toHaveBeenCalledTimes(1);
    // alertの引数が正しいことを確認
    expect(window.alert).toHaveBeenCalledWith('Server Error');
  });

  // TODO バリデーション用のテストを追加する
});
