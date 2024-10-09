import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(req: Request) {
  cookies().delete("Authorization");

  redirect("/");
}
