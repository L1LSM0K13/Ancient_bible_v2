import BaseNode from "../../BaseNode";

export default function PasswordEmailSent() {
  return (
    <>
      <BaseNode title={"Email Sent"} className={"nodeMargins"}>
        <span>We emailed you with a link to reset your password.</span>
      </BaseNode>
    </>
  );
}
