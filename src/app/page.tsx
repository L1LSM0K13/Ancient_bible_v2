import LogoAndNotice from "../components/HomeSubNodes/LogoAndNotice";
import BookList from "../components/HomeSubNodes/BookList";
import HowToUse from "../components/HomeSubNodes/HowToUse";
import BaseNode from "../components/BaseNode";

export default function HomeNode() {
  return (
    <>
      <LogoAndNotice
        title={"NOTICE 9/11/2024 (v1.3.1)"}
        innerNote={"Join the Discord"}
      />

      {/*Home page nodes*/}
      <BaseNode className={"nodeMargins"} title={"About Ancient Bible"}>
        <span>
          This is a Bible website that contains all books of the typical
          Orthodox canon, as well as other non-canonical writings, gnostic
          texts, the local and ecumenical councils, and the writings of the
          early church fathers. This website is a work in progress, so I will be
          adding more content to expand the library. This website is on its
          first release version (v1.3.1){" "}
        </span>
      </BaseNode>

      <BaseNode className={"nodeMargins"} title={"Whats Included"}>
        <span className={"flex justify-center mb-1"}>
          This website contains the extended canon of the Orthodox Church, for
          those who do not know this canon:
        </span>

        <BaseNode title="List of Books" className={"nodeMargins"}>
          <BookList />
        </BaseNode>
      </BaseNode>

      {/*How to use*/}
      <BaseNode className={"nodeMargins"} title={"Quick Start Guide"}>
        <HowToUse />
      </BaseNode>
    </>
  );
}
