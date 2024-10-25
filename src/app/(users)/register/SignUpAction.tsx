"use server";
import { redirect } from "next/navigation";
import validateEmail from "@/helpers/validateEmail";
import validatePassword from "@/helpers/validatePassword";
import bcrypt from "bcrypt";
import crypto from "node:crypto";
import { pool } from "../../../../config/dbConfig";

export default async function SignUpAction(
  currentState: any,
  formData: FormData,
): Promise<any> {
  "use server";

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const password2 = formData.get("password2");

  // Checks if form that is entered meets the criteria
  switch (true) {
    case !name:
      return Response.json(
        {
          error: "Must have a name",
        },
        {
          status: 400,
        },
      );

    case !validateEmail(email):
      return Response.json(
        {
          error: "Invalid email format",
        },
        { status: 400 },
      );

    case !validatePassword(password):
      return Response.json(
        {
          error: "Invalid password format",
        },
        { status: 400 },
      );

    case password !== password2:
      console.log(password, password2);
      return Response.json(
        {
          error: "Passwords do not match",
        },
        { status: 400 },
      );

    default:
      // Proceed if everything is valid
      break;
  }

  // Generates the hashed password and the email token
  const hashedPassword = await bcrypt.hash(password, 10);
  const generatedToken = crypto.randomBytes(16).toString("hex");

  await pool.query(
    `INSERT INTO users (name, email, password, email_token) VALUES ($1, $2, $3, $4)`,
    [name, email, hashedPassword, generatedToken],
  );

  redirect("/");
}
