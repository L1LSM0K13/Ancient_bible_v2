"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import chalk from "chalk";

const log = console.log;

export default async function LoginAction(
  currentState: any,
  formData: FormData,
): Promise<string> {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(process.env.ROOT_URL + "/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();

  try {
    cookies().set("Authorization", json.token, {
      secure: true,
      httpOnly: true,
      expires: Date.now() * 24 * 60 * 1000 * 3,
      path: "/",
      sameSite: "strict",
    });

    if (res.ok) {
      redirect("/");
    } else {
      return json.error;
    }
  } catch (err) {
    log(chalk.bgRedBright("message", err));
  }
}
