import validateEmail from "@/helpers/validateEmail";
import validatePassword from "@/helpers/validtatePassword";
import { pool } from "@/../config/dbConfig";
import bcrypt from "bcrypt";
import * as jose from "jose";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!validateEmail(email) || !validatePassword(password)) {
    return Response.json({ error: "Invalid Email or Password" });
  }

  const results = await pool.query(
    `SELECT email, password FROM users WHERE email = $1`,
    [email],
  );
  const user = results.rows[0];
  if (!user) {
    return Response.json({
      error: "User does not exist",
    });
  }
  console.log(user);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return Response.json({
      error: "Password does not match",
    });
  }
  console.log(isMatch);

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";
  const jwt = await new jose.SignJWT()
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(user.id)
    .sign(secret);

  console.log({ JWT: jwt });

  return Response.json({ token: jwt });
}