import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Secondary School Certificate (SSC)",
      institution: "Madhya Madanpura Secondary School",
      year: "2019-2021",
      details:
        "Studied in science. Developed early interest in coding, design, and technology.",
      grade: 3.06,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-center text-primary mb-12">
          Education
        </h1>
        <div className="space-y-8 flex gap-12">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body">
                <h2 className="card-title text-primary">{edu.degree}</h2>
                <p>{edu.institution}</p>
                <p>{edu.year}</p>
                <p className="badge badge-outline">{edu.grade}</p>
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
