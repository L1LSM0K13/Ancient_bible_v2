import Image from "next/image";
type LogoAndNoticeTypes = {
  title: string;
  innerNote: string;
};

export default function LogoAndNotice({
  title,
  innerNote,
}: LogoAndNoticeTypes) {
  return (
    <>
      <div className={"flex justify-center"}>
        <Image
          src={"/logos/ancient-bible-logo.png"}
          alt={"Ancient Bible Website logo"}
          className={"w-1/2 sm:w-1/3 lg:w-1/4"}
          loading={"lazy"}
          width={500}
          height={500}
        />
      </div>

      <div
        className={
          "flex flex-row justify-center text-yellow-700 mb-5 items-center"
        }
      >
        <div className={"noteDiv text-center p-3"}>
          <h1>{title}</h1>
          <span>
            {innerNote}
            <a
              className={"text-blue-500 bg-blue-200 mx-1 p-1 rounded-sm"}
              href={"https://discord.gg/xr8kFsKTT7"}
            >
              Here
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
