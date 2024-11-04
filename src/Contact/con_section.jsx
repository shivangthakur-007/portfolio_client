import React, { useContext } from "react";
import { Image, tool } from "../Imagelogo/image.js";
import Snapchatimg from "../../assets/Snapchat-95776787.jpg"

const About_skills = () => {
  let img = Image;
  let tool_new = tool;
  return (
    <div className="py-[19px]">
      <div className="flex flex-col gap-2 items-center my-8" id="about">
        <h1 className="text-white text-5xl hover:text-blue-400 font-semibold my-2">
          ABOUT ME
        </h1>
        <div className="grid grid-cols-2 justify-center my-5">
          <div className="flex justify-around  ">
            <img
              src={Snapchatimg}
              className="w-[30vw] rounded-lg"
              alt="profile"
            />
          </div>
          <div className="flex justify-start items-center mr-10">
            <h2 className="text-white text-2xl font-medium text-justify">
              As a Full Stack Web Developer, I am a student of BCA at Glocal
              University. I have a three-year journey in web development, and I
              am eager to learn web development frameworks. While continuing on
              this journey, I aspire to learn other frameworks in web
              development. I completed a 10-month Full Stack Web Development
              course with PW Skills, where I acquired new key points in
              development. Towards the end of the year, I specialized in
              MongoDB, SQL, JavaScript, Node.js, Express.js, React.js, basically
              MERN, and Redux. I gained knowledge in various tools such as Git,
              GitHub, code editors like VSCode and Replit, Canva, Netlify,
              Cloudinary, and Render. I have one year of experience in MERN and
              achieved three stars on HackerRank in SQL. I am continuously
              learning and improving in various technologies, enjoying the
              intellectual challenge of coding and debugging. I find
              satisfaction in turning ideas into functional, interactive
              websites and developing visually appealing and user-friendly
              interfaces.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center " id="skills">
        <h1 className="text-white text-5xl hover:text-blue-400 font-semibold my-2">
          Skills
        </h1>
        <div className="grid grid-cols-4 gap-10 items-center my-5">
          {img.map((e, i) => {
            return (
              <img
                src={e.img}
                key={i}
                className="w-[200px] h-[150px] border-2 rounded-md hover:border-black bg-white bg-center"
                alt={e.alt}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center m-9">
        <h1 className="text-white text-5xl hover:text-blue-400 font-semibold my-2">
          TOOLS
        </h1>
        <div className="grid grid-cols-4 gap-8 mx-2 my-5">
          {tool_new.map((e, i) => {
            return (
              <img
                src={e.img}
                key={i}
                className="w-[200px] hover:border-black bg-cover h-[150px] border-2 rounded-md bg-white p-3"
                alt={e.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About_skills;
