"use client";

require("dotenv").config({ path: "./config/.env" });
import LoginAction from "@/app/(users)/login/LoginAction";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [error, formAction] = useFormState(LoginAction, undefined);

  return (
    <>
      {error && <p className={"errorMsg"}>{error}</p>}
      <div className={"flex justify-center"}>
        <form action={formAction}>
          <div className="m-4">
            <div className="flex flex-col justify-center">
              <input
                className="input mb-2"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />

              <input
                className="input mb-2"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex justify-between items-baseline">
              <span className="text-sm">
                Forgot{" "}
                <a
                  href="/reset-password"
                  className="text-blue-600 dark:text-yellow-500 underline"
                >
                  password?
                </a>
              </span>
              <input type="submit" value="Login" className="input" />
            </div>
          </div>

          <p className="m-4">
            Don&apos;t have an Account? Sign up{" "}
            <a className="text-blue-600 dark:text-yellow-500" href="/register">
              Here
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
