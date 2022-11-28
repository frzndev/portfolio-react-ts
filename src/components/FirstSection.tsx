function FirstSection() {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-lime-600 font-semibold">
          Hi, my name is Nuno
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 md:text-md"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default FirstSection;
