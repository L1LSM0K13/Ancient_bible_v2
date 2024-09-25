import BaseNode from "@/components/BaseNode";
import RegisterForm from "@/components/UserAuthForms/RegisterForm";

export default function Register() {
  return (
    <>
      <BaseNode className={"nodeMargins"} title={"Register"}>
        <RegisterForm />
      </BaseNode>
    </>
  );
}
