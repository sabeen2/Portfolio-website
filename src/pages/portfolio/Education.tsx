const Education = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-20 bg-gray-100 dark:bg-gray-800 ">
        <div className="container  mx-auto grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-16 ">
          <div className="space-y-3">
            <h2 className=" text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>
          </div>
          <div>
            <div className="bg-white px-6 rounded-xl py-12 space-y-10 border border-gray-100">
              <p>
                <h1 className="font-bold text-3xl mb-4">
                  Bachelors in Computer Application (BCA)
                </h1>
                <p className="text-xl">
                  Asian School of Management and Technology
                </p>
              </p>
              <p>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  2019 - 2024
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;