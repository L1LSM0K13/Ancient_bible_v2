"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutAction(currentState: any): Promise<string> {
  cookies().delete("Authorization");

  redirect("/");
}
