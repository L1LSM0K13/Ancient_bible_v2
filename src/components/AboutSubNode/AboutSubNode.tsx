import Image from "next/image";

export default function AboutSubNode() {
  return (
    <>
      <div className="text-left lg:flex lg:justify-center flex-row items-center">
        <div className="flex justify-center mx-auto w-52 sm:w-60 md:w-72 lg:w-full xl:w-full 2xl:w-96">
          <div className="p-5">
            <Image
              src={"/logos/profilePic.png"}
              alt="profile picture"
              className="border-2 border-black rounded-sm"
              loading={"lazy"}
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="mx-5 p-5">
          <span>
            My name is Nicolas, this is my first website. I&apos;ve been making
            this since November 2023. My original intention was to just make a
            personal note-taking bible app, but quickly became an opportunity to
            share very first online english Orthodox bible with patristic texts
            in the world.
          </span>
          <br />
          <br />
          <span>
            This website uses the Brenton&apos;s English Septuagint 2012 Edition
            for the old testament, And the Byzantine Text for the new testament.
            These translations are in the public domain.
          </span>
          <br />
          <br />
          <span>
            This website also uses the Philip Schaff Ante-Nicene, Nicene and
            Post-Nicene texts, using an open domain version.
          </span>
          <br />
          <br />
          <span>
            You can contact me on either{" "}
            <a
              className="text-blue-500 dark:text-yellow-400"
              target="_blank"
              href="https://github.com/L1LSM0K13"
            >
              GitHub
            </a>{" "}
            or my email at{" "}
            <span className="text-blue-500 dark:text-yellow-400">
              <a href="mailto:ancientbible@purelymail.com">
                ancientbible@purelymail.com
              </a>
            </span>
          </span>
          <br />
          <br />
          <br />
          <hr />
          <span className="text-sm">
            For information regarding the 2012 Brenton Septuagint click{" "}
            <a
              className="text-blue-500 dark:text-yellow-400"
              href="https://ebible.org/find/show.php?id=eng-lxx2012"
              target="_blank"
            >
              Here
            </a>
          </span>
          <br />
          <span className="text-sm">
            For information regarding the Byzantine Text click{" "}
            <a
              className="text-blue-500 dark:text-yellow-400"
              href="https://ebible.org/find/details.php?id=engasvbt"
              target="_blank"
            >
              Here
            </a>
          </span>
          <br />
          <span className="text-sm">
            For more information regarding the Ante Nicene fathers click{" "}
            <a
              href="https://en.wikisource.org/wiki/Ante-Nicene_Fathers"
              className="text-blue-500 dark:text-yellow-500"
              target="_blank"
            >
              Here
            </a>
          </span>
          <br />
          <span className="text-sm">
            For more information regarding the Post-Nicene fathers Series I
            click{" "}
            <a
              href="https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_I"
              className="text-blue-500 dark:text-yellow-500"
              target="_blank"
            >
              Here
            </a>
          </span>
          <br />
          <span className="text-sm">
            For more information regarding the Post-Nicene fathers Series II
            click{" "}
            <a
              href="https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_II"
              className="text-blue-500 dark:text-yellow-500"
              target="_blank"
            >
              Here
            </a>
          </span>
          <br />
        </div>
      </div>
    </>
  );
}
