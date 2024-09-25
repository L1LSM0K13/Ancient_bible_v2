import BaseNode from "@/components/BaseNode";

export default function Login() {
  return (
    <>
      <BaseNode title={"Reset password"} className={"nodeMargins"}>
        <div className={"flex justify-center"}>
          <form action="" method="POST">
            <div className="m-4">
              <div className="flex flex-col justify-center">
                <h1 className="text-xl m-2">
                  Enter your email here, We&apos;ll send you a link to reset
                  your password.
                </h1>

                <div className="flex justify-center">
                  <input
                    className="input mb-2"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </BaseNode>
    </>
  );
}
