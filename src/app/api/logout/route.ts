"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function LogoutAction() {
  const res = await fetch(process.env.ROOT_URL + "/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const cookie = cookies();
  const token = cookie.get("Authorization");

  if (!token) {
    return Response.json(
      { error: "There was an issue with your request" },
      { status: 400 },
    );
  }

  cookie.delete("Authorization");

  if (res.ok) {
    redirect("/bible");
  } else {
    console.log("ERROR");
  }
}
