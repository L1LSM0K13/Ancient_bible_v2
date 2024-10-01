import { cookies } from "next/headers";
import NavBar from "@/components/NavBar";

export default function ServerSideAuthNavBar() {
  const cookieStore = cookies();
  const token = cookieStore.get("Authorization");
  const isLoggedIn = !!token;

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn}></NavBar>
    </>
  );
}
