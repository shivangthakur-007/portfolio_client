import React, { useContext } from "react";
import { Image, tool } from "../Imagelogo/image.js";

const About_skills = () => {
  let img = Image;
  let tool_new = tool;
  //   let a=img.map((e)=>{
  //     return e.img
  //   })
  //   console.log(a)
  return (
    <div className="py-[19px]">
      <div className="flex flex-col gap-2 items-center my-8" id="about">
        <h1 className="text-white text-5xl hover:text-blue-400 font-semibold my-2">ABOUT ME</h1>
        <div className="grid grid-cols-2 justify-center">
          <div className="flex justify-around  ">
            <img
              src="./../../assets/Snapchat-95776787.jpg"
              className="w-[30vw] rounded-lg"
              alt="profile"
            />
          </div>
          <div className="flex justify-start items-center">
            <h2 className="text-white text-2xl font-medium text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              illum officia, perferendis voluptates eum consequatur earum,
              temporibus commodi dolorum velit minus incidunt ipsa assumenda
              error reiciendis pariatur. Molestiae eligendi harum voluptatem
              iusto autem reprehenderit repudiandae? Incidunt quis et nostrum
              amet molestiae enim ducimus aspernatur. Dolore at possimus,
              repellat accusantium pariatur dolores distinctio quibusdam
              perspiciatis tenetur architecto dignissimos numquam aspernatur ea
              quod ipsum fuga aliquid nesciunt culpa accusamus incidunt, nam
              blanditiis. Minus provident nam harum in fuga debitis deleniti
              saepe beatae distinctio possimus magni quia ullam asperiores
              officiis consequuntur, esse, quam soluta consequatur dicta?
              Temporibus nemo consequuntur doloremque, autem eligendi minima!
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center " id="skills">
        <h1 className="text-white text-5xl hover:text-blue-400 font-semibold my-2">Skills</h1>
        <div className="grid grid-cols-4 gap-10 my-2 items-center">
          {img.map((e, i) => {
            return (
              <img
                src={e.img}
                key={i}
                className="w-[200px] h-[150px] border-2 rounded-md hover:border-black bg-white"
                alt={e.alt}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center m-9">
        <h1 className="text-white text-5xl hover:text-blue-400 font-semibold my-2">TOOLS</h1>
        <div className="grid grid-cols-4 gap-8 m-2 ">
          {tool_new.map((e, i) => {
            return (
              <img
                src={e.img}
                key={i}
                className="w-[200px] hover:border-black h-[150px] border-2 rounded-md bg-white"
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
