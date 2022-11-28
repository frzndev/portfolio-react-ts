import { useState } from "react";

interface HeaderSectionProps {
  stateTheme: string;
  onClick(): void;
}

function HeaderSection(props: HeaderSectionProps) {
  return (
    <>
      <h1 className="fixed z-10 left-2 top-1 p-1 text-3xl text-gray-700 dark:text-white font-bold">
        nG<span className="text-lime-600">.</span>
      </h1>
      <button
        type="button"
        onClick={props.onClick}
        className="fixed z-10 right-2 top-3 bg-teal-700 text-lg p-1 rounded-md"
      >
        {props.stateTheme === "dark" ? "☀️" : "🌙"}
      </button>
    </>
  );
}

export default HeaderSection;
