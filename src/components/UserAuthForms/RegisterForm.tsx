"use client";

require("dotenv").config({ path: "./config/.env" });
import SignUpAction from "@/app/(users)/register/SignUpAction";
import { useFormState } from "react-dom";

export default function RegisterForm() {
  const [error, setSignUpAction] = useFormState(SignUpAction, undefined);

  return (
    <>
      {error && (
        <div className={"flex justify-center"}>
          <p className={"errorMsg"}>{error}</p>
        </div>
      )}
      <div className="flex justify-center">
        <form className={"text-center"} action={setSignUpAction}>
          <div className="m-4">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="m-4">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="m-4">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="m-4">
            <input
              className="input"
              type="password"
              name="password2"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="m-4">
            <input type="submit" value="Register" className="input" />
          </div>
          <p className="m-4">
            Already have an account? Log in{" "}
            <a className="text-blue-600" href="/login">
              Here
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
