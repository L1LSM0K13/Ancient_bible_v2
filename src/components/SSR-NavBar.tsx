import { cookies } from "next/headers";
import NavBar from "@/components/NavBar";

export default function ServerSideAuthNavBar() {
  const token = cookies().get("Authorization");
  const isLoggedIn = !!token;

  return <NavBar isLoggedIn={isLoggedIn}></NavBar>;
}
