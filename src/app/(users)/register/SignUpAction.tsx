"use server";
import { redirect } from "next/navigation";

export default async function SignUpAction(
  currentState: any,
  formData: FormData,
): Promise<string> {
  "use server";

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const password2 = formData.get("password2");

  const res = await fetch(process.env.ROOT_URL + "/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, password2 }),
  });
  const json = await res.json();

  if (res.ok) {
    redirect("/");
  } else {
    return json.error;
  }
}
