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
    <section className=" ml-72 mr-10 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Skills & Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[sky] p-6 rounded-lg h-48 shadow-md hover:bg-[lightgrey] transition duration-300 ease-in-out transform   hover:text-1xl hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl pt-6 font-semibold text-[gray8] mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
