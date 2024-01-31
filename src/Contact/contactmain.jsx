import { useState } from "react";
import toast from "react-hot-toast";
import { isEmail } from "./helper/RegexMatcher.js";
import axios from "axios";

function ContactMain() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    // console.log({name, value})
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fields are mandatory");
      return;
    }

    if (!isEmail(userInput.email)) {
      toast.error("Invalid Email");
      return;
    }

    try {
      const response = axios.post(
        "https://portfolio-server-sp28.onrender.com/api/vi/contact",
        {
          ...userInput,
        }
      );
      // const response = axios.post("http://localhost:5000/api/vi/contact", {
      //   ...userInput,
      // });
      toast.promise(response, {
        loading: "Submitting your message",
        success: "form submitted successfully",
        error: "failed to submit form",
      });

      const contactResponse = await response;
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (e) {
      toast.error("All Operation failed...");
    }
  }

  return (
    <div className="py-[19px]">
      <div className="flex flex-col items-center" id="project">
        <div>
          <h1 className="text-white text-5xl hover:text-blue-400 font-semibold">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <a href="https://edupw-skills.netlify.app/">
              <img
                src="./../../assets/clg.png"
                className="h-[250px]"
                alt="project"
              />
            </a>
            <h1 className="text-white text-xl font-lg">LMS</h1>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://combonation.netlify.app/">
              <img
                src="./../../assets/clg.png"
                className="h-[250px]"
                alt="project"
              />
            </a>
            <h1 className="text-white text-xl font-lg">Combonation</h1>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://pok-e-ashmon.netlify.app">
              <img
                src="./../../assets/clg.png"
                className="h-[250px]"
                alt="project"
              />
            </a>
            <h1 className="text-white text-xl font-lg">Pokemon</h1>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://foodies579.netlify.app">
              <img
                src="./../../assets/clg.png"
                className="h-[250px]"
                alt="project"
              />
            </a>
            <h1 className="text-white text-xl font-lg">Foodies</h1>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://sem4project.netlify.app/">
              <img
                src="./../../assets/clg.png"
                className="h-[250px]"
                alt="project"
              />
            </a>
            <h1 className="text-white text-xl font-lg">College Dekho</h1>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://react-tic.netlify.app">
              <img
                src="./../../assets/clg.png"
                className="h-[250px]"
                alt="project"
              />
            </a>
            <h1 className="text-white text-xl font-lg">Tic-tac-toe</h1>
          </div>
        </div>
      </div>

      <div className="my-[20px]" id="contact">
        <div className="flex flex-col items-center text-xl">
          <h1 className="text-white text-5xl font-semibold my-4 hover:text-blue-400">
            Contact Me
          </h1>
          <form
            noValidate
            onSubmit={onFormSubmit}
            className="flex flex-col gap-2 items-center text-xl p-5 text-white  border-[1px] border-white drop-shadow-[0_1px_3px_1px_rgba(60, 64, 67, 0.15)] rounded-md"
          >
            <input
              className="bg-transparent border-2 border-white w-[100%] my-2 rounded-lg text-md"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              onChange={handleInputChange}
              value={userInput.name}
              autoComplete="on"
            />
            <input
              className="bg-transparent border-2 border-white w-[100%] my-2 rounded-lg text-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              onChange={handleInputChange}
              value={userInput.email}
              autoComplete="off"
            />
            <textarea
              className="bg-transparent border-2 border-white w-[100%] my-2 rounded-lg text-md"
              type="text"
              name="message"
              id="message"
              placeholder="Enter your Message..."
              onChange={handleInputChange}
              value={userInput.message}
            />

            <button
              type="submit"
              className="text-medium font-semibold py-1 px-2 rounded-md border-2 border-spacing-2 text-white hover:text-black hover:bg-white hover:border-black"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex gap-3 justify-center my-4 items-center">
          <a href="">
            <img
              src="./../../assets/github.png"
              className="h-[30px]"
              alt="gitub"
            />
          </a>
          <a href="">
            <img
              src="./../../assets/linkedin.png"
              className="h-[30px]"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMain;
