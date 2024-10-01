import BaseNode from "@/components/BaseNode";
import LoginForm from "@/components/UserAuthForms/LoginForm";

export default function Login() {
  return (
    <main className={"flex justify-center"}>
      <BaseNode title={"Login"}>
        <LoginForm />
      </BaseNode>
    </main>
  );
}
