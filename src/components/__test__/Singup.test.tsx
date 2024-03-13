import React from "react";
import {
  render,
  fireEvent,
  RenderResult,
  screen,
} from "@testing-library/react";
import Signup from "../Signup/Signup";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/consts/apiUrl";

  // useRouterをモック化
  jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));

describe("Signupコンポーネント", () => {
  const signupUrl = `${apiUrl.URL}/auth/signup`;

  // localStorageをモック化
  const mockLocalStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    length: 0,
    key: jest.fn(),
  };

  // global.fetchをモック化
  global.fetch = jest.fn();

  // フォーム入力
  const fillForm = async () => {
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));
  };

  // フォーム送信
  const submitForm = async () => {
    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));
    await new Promise((resolve) => setTimeout(resolve, 100));
  };

  // n文字の文字列を作成
  const createString = (n: number) => {
    return "a".repeat(n);
  };

  beforeEach(() => {
    // テスト開始時にSignupコンポーネントをレンダリング
    render(<Signup />);

    // 各テストケースが実行される前にモックの設定を行う
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true
    });

  });

  // テスト終了時モック化を解除
  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
    //(console.log as jest.Mock).mockClear();
    //(window.alert as jest.Mock).mockClear();
    (useRouter as jest.Mock).mockClear();
    (window.localStorage.setItem as jest.Mock).mockClear();
    jest.restoreAllMocks();
  });

  it("フォーム入力が正常に行え、fetch成功時の処理が行われること", async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      json: async () => ({
        access_token: "token",
      }),
    };

    const dataSignupMock = () => Promise.resolve(mockResponse);

    // fetch関数をモック化
    global.fetch = jest.fn().mockImplementation(dataSignupMock);

    // フォームを埋め送信
    await fillForm();
    await submitForm();

    // fetchが一度だけ呼び出されたことをテスト
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // fetchの引数が正しいことをテスト
    expect(global.fetch).toHaveBeenCalledWith(signupUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        name: "testUser",
        password: "password123",
      }),
    });

    // fetchの返り値が正しいことをテスト
    const fetchResponse = await global.fetch("dummyUrl", { method: "POST" });
    expect(fetchResponse).toEqual(mockResponse);

    // localStorage.setItemが正しい引数で呼び出されたことをテスト
    // TODO cookieのテストに変更
    //expect(window.localStorage.setItem).toHaveBeenCalledWith("access_token", "token");
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
    jest.spyOn(console, "log");

    // alertをモック化
    jest.spyOn(window, "alert");

    // フォームを埋めて送信
    await fillForm();
    await submitForm();

    // fetchが一度だけ呼び出されたことを確認
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // console.logが一度だけ呼び出されたことを確認
    expect(console.log).toHaveBeenCalledTimes(1);
    // console.logの引数が正しいことを確認
    expect(console.log).toHaveBeenCalledWith("Server Error", {
      error: "Unauthorized",
    });

    // alertが一度だけ呼び出されたことを確認
    expect(window.alert).toHaveBeenCalledTimes(1);
    // alertの引数が正しいことを確認
    expect(window.alert).toHaveBeenCalledWith("Server Error");
  });

  it("すべてのフォームが空の場合、Signupボタンを押せないこと", async () => {
    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();
  });

  it("フォームを埋めた後、空にするとエラーメッセージが表示され、Signupボタンが押せないこと", async () => {
    // フォームを埋めて送信
    await fillForm();
    await submitForm();

    // フォームが空になることを確認
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // エラーメッセージが表示されていることを確認
    expect(screen.getByText("メールアドレスは必須です")).toBeInTheDocument();
    expect(screen.getByText("名前は必須です")).toBeInTheDocument();
    expect(
      screen.getByText("パスワードは6文字以上で入力してください")
    ).toBeInTheDocument();

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();
  });

  it("メールアドレスが空の場合、Signupボタンを押せないこと", async () => {
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();
  });

  it("パスワードが空の場合、Signupボタンを押せないこと", async () => {
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();
  });

  it("名前が空の場合、Signupボタンを押せないこと", async () => {
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();
  });

  it("メールアドレスが不正な形式の場合、エラーメッセージが表示され、Signupボタンを押せないこと", async () => {
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();

    // エラーメッセージが表示されていることを確認
    expect(
      screen.getByText("メールアドレスの形式が正しくありません")
    ).toBeInTheDocument();
  });

  it("メールアドレスが256文字以上の場合、エラーメッセージが表示され、Signupボタンを押せないこと", async () => {
    const longEmail = createString(255) + "@example.com";

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: longEmail },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();

    // エラーメッセージが表示されていることを確認
    expect(
      screen.getByText("メールアドレスは255文字以内で入力してください")
    ).toBeInTheDocument();
  });

  it("パスワードが6文字未満の場合、エラーメッセージが表示され、Signupボタンを押せないこと", async () => {
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "pass" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();

    // エラーメッセージが表示されていることを確認
    expect(
      screen.getByText("パスワードは6文字以上で入力してください")
    ).toBeInTheDocument();
  });

  it("パスワードが128文字以上の場合、エラーメッセージが表示され、Signupボタンを押せないこと", async () => {
    const longPassword = createString(128);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: longPassword },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();

    // エラーメッセージが表示されていることを確認
    expect(
      screen.getByText("パスワードは127文字以内で入力してください")
    ).toBeInTheDocument();
  });

  it("名前が21文字以上の場合、エラーメッセージが表示され、Signupボタンを押せないこと", async () => {
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "abcdefghijklmnopqrstu" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Signupボタンが無効化されていることを確認
    const signupButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signupButton).toBeDisabled();

    // エラーメッセージが表示されていることを確認
    expect(
      screen.getByText("名前は20文字以内で入力してください")
    ).toBeInTheDocument();
  });
});
