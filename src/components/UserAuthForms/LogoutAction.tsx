"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutAction(currentState: any): Promise<string> {
  cookies().set("Authorization", "", { path: "/", expires: new Date(0) });
  redirect("/");
}
