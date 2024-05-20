import Lottie from "lottie-react";
import devlottie from "../../assets/devlottie.json";
const Hero = () => {
  return (
    <div className="  pb-[110px]">
      <section className="w-full py-12 md:py-24 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Sabin Pandey
                </h1>
                <h2 className="text-xl font-medium text-gray-500 dark:text-gray-400">
                  Full Stack Developer
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  I am a passionate full stack developer with expertise in
                  building modern, scalable, and user-friendly web applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row items-center">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  View Projects
                </button>
                <button className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-400 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                  Contact Me
                </button>
              </div>
            </div>
            <div>
              <Lottie animationData={devlottie} loop={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
