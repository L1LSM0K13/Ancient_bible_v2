"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { pool } from "@/../config/dbConfig";
import validateEmail from "@/helpers/validateEmail";
import validatePassword from "@/helpers/validatePassword";

export default async function LoginAction(
  currentState: any,
  formData: FormData,
): Promise<any> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!validateEmail(email) || !validatePassword(password)) {
    return Response.json(
      { error: "Invalid Email or Password" },
      { status: 400 },
    );
  }

  const results = await pool.query(
    `SELECT id, email, password FROM users WHERE email = $1`,
    [email],
  );
  const user = results.rows[0];
  if (!user) return "No user found";

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return "Password does not match";

  // Sets JWT Cookie
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";
  const jwt = await new jose.SignJWT()
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(user.id)
    .sign(secret);

  cookies().set("Authorization", jwt, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: "/",
    sameSite: "strict",
  });

  redirect("/");
}
