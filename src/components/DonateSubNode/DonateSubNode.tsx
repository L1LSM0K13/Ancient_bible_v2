export default function DonateSubNode() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-start-2 my-2">
          <p>
            If you would like to support the website and keep it running. And
            even help upgrade the website so that you can have a better user
            experience, go to this link.
            <a
              className=" text-blue-800 rounded-lg"
              href="https://www.paypal.com/donate/?hosted_button_id=G3B7HVGRCCC7Q"
            >
              {" "}
              Here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
