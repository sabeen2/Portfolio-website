const workExperiences = [
  {
    date: "Nov 2023 - Present",
    title: "FrontEnd Engineer at Hobes Technology.",
    description:
      "Developed and maintained responsive user interfaces using React, Tailwind CSS, AntD, Typescript.",
  },
  // {
  //   date: "May 2021 - June 2022",
  //   title: "Frontend Developer at XYZ Corp.",
  //   description:
  //     "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
  // },
  // {
  //   date: "June 2020 - May 2021",
  //   title: "Intern at ABC Tech.",
  //   description:
  //     "Gained experience in full-stack web development, including building RESTful APIs with Node.js and integrating with a PostgreSQL database.",
  // },
];

const WorkExperience = () => (
  <section className="w-full py-12 md:py-24 lg:py-20">
    <div className="container  mx-auto space-y-12 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl">
            Work Experience
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out my work experience timeline.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative pl-6 grid gap-10 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
          {workExperiences.map((experience, index) => (
            <div key={index} className="grid gap-1 text-lg relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
              <div className="font-medium">
                {experience.date}: {experience.title}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {experience.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkExperience;
