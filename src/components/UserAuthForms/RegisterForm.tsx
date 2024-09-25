export default function RegisterForm() {
  return (
    <div className="flex justify-center">
      <form className={"text-center"}>
        <div className="m-4">
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="m-4">
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="m-4">
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="m-4">
          <input
            className="input"
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm password"
            required
          />
        </div>
        <div className="m-4">
          <input type="submit" value="Register" className="input" />
        </div>
        <p className="m-4">
          Already have an account? Log in{" "}
          <a className="text-blue-600" href="/login">
            Here
          </a>
        </p>
      </form>
    </div>
  );
}
