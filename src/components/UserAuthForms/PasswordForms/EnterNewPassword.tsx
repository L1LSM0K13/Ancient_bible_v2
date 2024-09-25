import BaseNode from "../../BaseNode";

export default function EnterNewPassword() {
  return (
    <>
      <BaseNode className={"nodeMargins"} title={"Enter New Password"}>
        <form action="" method="POST">
          <div className="nodeMargins flex justify-center flex-col">
            <input
              type="password"
              placeholder="Enter new password"
              name="password"
              className="input mb-2"
              required
            />
            <input
              type="password"
              placeholder="Confirm new password"
              name="confirmPass"
              className="input mb-2"
              required
            />
            <input type="hidden" name="email" id="emailInput" />
            <input type="submit" className="input mb-2" value="Submit" />
          </div>
        </form>
      </BaseNode>
    </>
  );
}
