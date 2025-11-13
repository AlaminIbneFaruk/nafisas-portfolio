import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Secondary School Certificate (SSC)",
      institution: "Madhya Madanpura Secondary School",
      year: "2019-2020",
      details:
        "Studied in science. Developed early interest in coding, design, and technology.",
      grade: "3.06",
    },
    {
      id: 2,
      degree: "Diploma in CST",
      institution: "Nabarun Survey Institute",
      year: "2021-2022",
      details:
        "Studied in science. Developed early interest in coding, design, and technology.",
      grade: "3.58/4",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-base-200 py-12"
      id="education"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-center text-primary mb-12">
          Education
        </h1>
        <div className=" flex items-center justify-center gap-x-12">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl"
            >
              <div className="card-body">
                <h2 className="card-title text-primary text-2xl">
                  {edu.degree}
                </h2>
                <p className="text-2xl">{edu.institution}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg">{edu.year}</p>
                  <p className="badge badge-outline text-lg">{edu.grade}</p>
                </div>
                <p className="pt-3 ">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
