import React from "react";

function FooterSection() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <h1 className="block text-xl md:text-2xl font-semibold">
        nG<span className="text-lime-600">.</span>
      </h1>
      <a
        href="mailto:nuno98gomes@gmail.com"
        className="text-sm md:text-md hover:text-lime-600"
      >
        nuno98gomes@gmail.com
      </a>
      <p className="text-xs mt-2 text-gray-500">
        © nunoGomes. {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default FooterSection;
