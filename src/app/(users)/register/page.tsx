import BaseNode from "@/components/BaseNode";
import RegisterForm from "@/components/UserAuthForms/RegisterForm";

export default function Register() {
  return (
    <main className={"flex justify-center"}>
      <BaseNode title={"Register"}>
        <RegisterForm />
      </BaseNode>
    </main>
  );
}
