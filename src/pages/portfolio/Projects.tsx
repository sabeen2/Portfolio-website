import studybest from "../../assets/stuybest.png";
import kicks from "../../assets/kicks.png";
import bookRental from "../../assets/bookRental.png";
import bhasika from "../../assets/bhasika.png";

import { Image } from "antd";

const projects = [
  {
    title: "Study Best Feed",
    description:
      "A modern, user-friendly platform for students to explore universities and find study destinations, built with React, TypeScript, Ant Design, Tailwind, Context API, and React Query.",
    imageSrc: studybest,
    altText: "Study Best Feed",
    liveLink: "https://study-best-feed-dev.vercel.app",
    sourceLink: "",
  },
  {
    title: "Bhasika",
    description:
      "Bhaskia is a platform for students to apply for studying abroad and prepare for exams like IELTS, offering guidance, resources, and support throughout the process build on Next JS.",
    imageSrc: bhasika,
    altText: "bhasika",
    liveLink: "https://bhasika.hobes.tech/",
    // sourceLink: "https://github.com/sabeen2/Book-Rental-System",
  },

  {
    title: "Snickers Order Management System",
    description:
      "An Order Management System for sneakers using React, TypeScript, Ant Design, Tailwind, Context API, React Query, and Chart.js for seamless, efficient, and stylish order processing. ",
    imageSrc: kicks,
    altText: "Kicks",
    liveLink: "https://kicks-sneaker-store.netlify.app",
    sourceLink: "https://github.com/sabeen2/Kicks-sneakers-store",
  },
  {
    title: "Book Rental System",
    description:
      "A Book Rental System using React, TypeScript, Ant Design, Tailwind, Context API, React Query, Styled Components, and Chart.js for efficient, modern, and visually appealing book rentals.",
    imageSrc: bookRental,
    altText: "bookRental",
    liveLink: "https://book-rental-system-ts.netlify.app/",
    sourceLink: "https://github.com/sabeen2/Book-Rental-System",
  },
];

const ProjectsSection = () => (
  <div>
    <section className="w-full  py-12 md:py-20" id="projects">
      <div className="container mx-auto space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out some of my recent web development projects.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[480px] rounded-lg overflow-hidden shadow-md shadow-gray-400  border border-gray-300 pb-2 hover:scale-[1.02] duration-[400ms] "
            >
              <Image
                alt={project.altText}
                className="w-full aspect-video object-cover border-b-[1px] border-gray-200 rounded-lg border border-t-0 border-x-0"
                height="310"
                src={project.imageSrc}
                width="550"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex space-x-4 mt-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700  duration-300 flex-shrink text-sm  "
                    >
                      View Live Deployment
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:px-4 px-2 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700  duration-300 flex-shrink"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ProjectsSection;
