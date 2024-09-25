import BaseNode from "@/components/BaseNode";
import LoginForm from "@/components/UserAuthForms/LoginForm";

export default function Login() {
  return (
    <>
      <BaseNode className={"nodeMargins"} title={"Login"}>
        <LoginForm />
      </BaseNode>
    </>
  );
}
