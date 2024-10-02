"use client";
import { useState } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { LogoutAction } from "@/app/api/logout/route";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavBarProps {
  isLoggedIn: boolean;
}

export default function NavBar({ isLoggedIn }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, formAction] = useFormState(LogoutAction, undefined);
  const router = useRouter();

  const navBarClasses = `menuOption p-1 w-full mx-1 duration-150 hover:bg-[#2e3e58] dark:hover:dark:bg-[#202124] rounded-md`;

  function toggleHamMenu() {
    setMenuOpen(!menuOpen);
  }

  async function handleLogout(e: React.FormEvent) {
    e.preventDefault();

    formAction();
    router.refresh();
  }

  return (
    <nav
      className={
        "sticky top-0 flex sm:flex-row flex-col sm:items-center bg-[#51688e] dark:bg-[#303134] border border-[#355488] dark:border-[#474747] p-2 text-white mb-5"
      }
    >
      <p>{error}</p>
      <div className={"flex justify-between"}>
        <Link href={"/"} className={"hover:shadow-2xl"}>
          <Image
            className={"w-14"}
            src={"/logos/ancient-bible-logo-no-text.png"}
            alt="icon"
            width={100}
            height={100}
          />
        </Link>

        <div className={"sm:hidden inputHamburgerMenu hover:shadow-2xl"}>
          <button onClick={toggleHamMenu}>
            <Image
              src={"/svgs/hamburger-lg-svgrepo-com.svg"}
              alt={"iconForMenu"}
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      <div className={"w-full"}>
        <ul className={"p-0 m-0 flex sm:flex-row flex-col"}>
          <li className={"text-center"}>
            <Link
              className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className={"text-center"}>
            <Link
              className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
              href={"/bible"}
            >
              Bible
            </Link>
          </li>
          <li className={"text-center"}>
            <Link
              className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
              href={"/fathers"}
            >
              Church Fathers
            </Link>
          </li>
          <li className={"text-center"}>
            <Link
              className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li className={"text-center"}>
            <Link
              className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
              href={"/donate"}
            >
              Support The Project
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className={"text-center"}>
                <Link
                  className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
                  href={"/account"}
                >
                  My Account
                </Link>
              </li>
              <li className={"text-center"}>
                <form
                  onSubmit={handleLogout}
                  className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
                >
                  <input
                    type="submit"
                    value={"Log Out"}
                    className={"cursor-pointer"}
                  />
                </form>
              </li>
            </>
          ) : (
            <li className={"text-center"}>
              <Link
                className={`${navBarClasses} ${menuOpen ? "block" : "hidden"} sm:block`}
                href={"/login"}
              >
                Login or Signup
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
