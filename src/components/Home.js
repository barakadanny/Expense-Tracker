import React from "react";
import iphone from "./../assets/imgs/iphone.png";

function Home() {
  return (
    <div class="max-w-xl mx-auto text-center pt-16">
      <div class="inline-flex px-4 py-1.5 mx-auto rounded-lg bg-gradient-to-r bg-secondaryColor">
        <p class="text-xs font-semibold tracking-widest text-gray-400">
          Next generation of
        </p>
      </div>
      <h2 class="mt-6 mb-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
        expense tracking.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-gray-400">
        Finfit is the ultimate tool for managing your money and staying on top
        of your expenses. With our easy-t-use app, you can quickly input and
        categorize your expenses, set and track a budget.
      </p>

      <div class="mt-8 flex justify-center gap-3">
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-1 text-sm font-base text-black transition-all duration-200 bg-greenColor hover:bg-transparent hover:text-greenColor border border-greenColor rounded-lg"
          role="button"
        >
          Download
        </a>

        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-1 text-sm font-base text-gray-300 transition-all duration-200 bg-transparent hover:bg-transparent hover:text-greenColor border border-gray-300 hover:border-greenColor rounded-lg"
        >
          How it works
        </a>
      </div>

      <div class="flex justify-center mt-10">
        <img src={iphone} alt="iphone" className="w-[35rem]" />
      </div>
    </div>
  );
}

export default Home;
