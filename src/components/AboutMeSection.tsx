import avatar from "../assets/myAvatar.png";

function AboutMeSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <h1 className="text-3xl font-bold mb-5 text-lime-600 ">About Me</h1>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua?
        </p>
        <a
          href="mailto:nuno98gomes@gmail.com"
          className="block mt-3 text-md md:text-lg font-regular underline text-lime-600 dark:text-white hover:text-gray-600  dark:hover:text-lime-600"
        >
          nuno98gomes@gmail.com
        </a>
      </div>
      <img
        src={avatar}
        alt="avatar"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default AboutMeSection;
