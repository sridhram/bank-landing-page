import React from 'react';

const CTA = () => {
  return (
    <section className="flex text-white p-14 rounded-xl try-now-card md:flex-col md:gap-8">
      <div className="flex flex-col">
        <h2 className="text-5xl mb-8 md:text-4xl sm:text-3xl">
          Let’s try our service now!
        </h2>
        <p className="w-[60%] text-dimWhite md:w-full">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <button class="bg-blue-gradient py-4 px-6 text-black rounded-lg self-start md:self-center m-auto min-w-[132px]">
        Get Started
      </button>
    </section>
  );
};
export default CTA;
