import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the submission, such as sending the email.
    console.log("Email submitted:", email);
    setSubmitted(true); // Set submitted state to true
  };

  return (
    <div className="ml-72 mt-10">
      <div className=" bg-gray p-10 rounded-3xl   mr-10 mt-8">
        <h1 className="text-3xl mb-10">Build Bangla</h1>
        <p>
          Every month, I send out the Build Bangla Newsletter – with my notes on
          startups, the economy, and stuff I’m reading. All Bangladesh focused.{" "}
          <br />
          <br />
          Around 1,200 readers: Including founders, venture capitalists,
          creatives, and builders.
          <br />
          Sign up below
        </p>

        <div>
          {!submitted ? ( // Show form when not submitted
            <form onSubmit={handleSubmit} className="flex mb-10 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="border mt-10  border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-500 "
              />
              <button
                type="submit"
                className="bg-[blue]  ml-2 rounded-y-xl mt-10  font-bold text-[white] py-2 px-4 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
              >
                Submit
              </button>
            </form>
          ) : (
            // Show "Thank you" message after submission
            <div className="text-center p-4">
              <p className="text-3xl font-bold pt-20 pb-10   text-[green]">
                Thank you for signing up!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
