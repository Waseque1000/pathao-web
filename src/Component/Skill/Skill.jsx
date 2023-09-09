import { faAlgolia, faSquarespace } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faDragon,
  faFaceAngry,
  faFileContract,
  faFileDownload,
  faGhost,
  faHand,
  faHippo,
  faShop,
  faThumbTack,
  faTruckFast,
  faVirus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skill = () => {
  const skills = [
    {
      name: "Web Development",
      description: "Proficient in HTML, CSS, JavaScript, and more.",
    },
    {
      name: "UI/UX Design",
      description: "Creating user-friendly and visually appealing interfaces.",
    },
    {
      name: "Backend Development",
      description: "Experience in server-side scripting and databases.",
    },
    {
      name: "Mobile App Development",
      description: "Building mobile apps for iOS and Android platforms.",
    },
    {
      name: "Database Management",
      description: "Managing and optimizing databases for applications.",
    },
    {
      name: "Responsive Design",
      description: "Creating responsive layouts for various devices.",
    },
    {
      name: "Frontend Frameworks",
      description: "Expertise in React, Angular, and Vue.js.",
    },
    {
      name: "Version Control (Git)",
      description: "Managing code using Git and GitHub.",
    },
    {
      name: "RESTful API Integration",
      description: "Integrating APIs for data exchange in applications.",
    },
    {
      name: "JavaScript (ES6+)",
      description: "Strong proficiency in modern JavaScript.",
    },
    {
      name: "HTML5 & CSS3",
      description: "Creating structured HTML and stylish CSS.",
    },
    {
      name: "User Testing & Feedback",
      description: "Gathering and implementing user feedback.",
    },
    {
      name: "Agile & Scrum Methodologies",
      description: "Working in Agile and Scrum development environments.",
    },
    {
      name: "Problem Solving",
      description: "Analyzing and solving complex problems.",
    },
    {
      name: "UI/UX Prototyping",
      description: "Prototyping and wireframing user interfaces.",
    },
  ];

  return (
    <section className=" ml-72 mr-10 mb-10 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-10 font-semibold text-gray-800 ">
          Skills & Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {/*  skills  */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faFaceAngry}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Web Development
            </h3>
            <p className="text-gray-600">
              Proficient in HTML, CSS, JavaScript, and more.{" "}
            </p>
          </div>

          {/* 02  */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faTruckFast}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Creating user-friendly and visually appealing interfaces.
            </p>
          </div>
          {/* 03 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faHippo}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Backend Development
            </h3>
            <p className="text-gray-600">
              Experience in server-side scripting and databases.
            </p>
          </div>
          {/* 04 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faGhost}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Mobile App Development{" "}
            </h3>
            <p className="text-gray-600">
              Building mobile apps for iOS and Android platforms.
            </p>
          </div>
          {/* 5 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faAlgolia}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Database Management
            </h3>
            <p className="text-gray-600">
              Managing and optimizing databases for applications.
            </p>
          </div>
          {/* 06 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faThumbTack}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Frontend Frameworks
            </h3>
            <p className="text-gray-600">
              Expertise in React, Angular, and Vue.js.
            </p>
          </div>
          {/* 07 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faSquarespace}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Version Control (Git)
            </h3>
            <p className="text-gray-600">Managing code using Git and GitHub</p>
          </div>
          {/* 08 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faShop}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              RESTful API Integration
            </h3>
            <p className="text-gray-600">
              Integrating APIs for data exchange in applications.
            </p>
          </div>
          {/* 09 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faHand}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              JavaScript (ES6+)
            </h3>
            <p className="text-gray-600">
              Strong proficiency in modern JavaScript.
            </p>
          </div>
          {/* 10 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faFileContract}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              User Testing & Feedback
            </h3>
            <p className="text-gray-600">
              Gathering and implementing user feedback.
            </p>
          </div>
          {/* 11 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faVirus}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Agile & Scrum Methodologies
            </h3>
            <p className="text-gray-600">
              Working in Agile and Scrum development environments
            </p>
          </div>
          {/* 12 */}
          <div className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faDragon}
            ></FontAwesomeIcon>
            <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-600">
              Analyzing and solving complex problems.
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Skill;
