import BibleLoader from "@/components/ReadingComponents/Bible";
import { cookies } from "next/headers";

export default function Bible() {
  const token = cookies().get("Authorization");
  const isLoggedIn = !!token;

  return <BibleLoader isLoggedIn={isLoggedIn} />;
}
