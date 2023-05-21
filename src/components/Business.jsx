import React from 'react';
import { features } from '../constants/index';
import { bill, google, apple } from '../assets';

const Business = () => {
  return (
    <article
      className="h-screen p-8 md:h-auto grid grid-cols-2 grid-rows-2 md:flex md:flex-col gap-8 text-white max-w-[1300px] mx-auto"
      id="features"
    >
      <section className="flex flex-col my-auto gap-8">
        <h2 className="text-[2.5rem] font-bold lg:text-[2rem]">
          You do the business, we’ll handle the money.
        </h2>
        <p className="text-dimWhite">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-blue-gradient py-4 px-6 text-black rounded-lg self-start md:self-center">
          Get Started
        </button>
      </section>
      <section className="flex flex-col gap-2 my-auto">
        {features.map((feature) => {
          return (
            <div
              key={`${feature.id}`}
              className="flex items-center gap-4 feature-card p-6 lg:p-4 md:p-8 sm:p-4 cursor-pointer rounded-lg"
            >
              <figure className="min-w-[40px]">
                <img src={feature.icon} alt="feature-icon" />
              </figure>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-dimWhite">{feature.content}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="flex justify-center">
        <img src={bill} alt="bill" />
      </section>
      <section className="flex flex-col my-auto gap-8">
        <h2 className="text-[2.5rem] font-bold lg:text-[2rem]">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-dimWhite">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="self-start md:self-center">
          <button className="py-4 px-6 sm:p-4">
            <img src={google} alt="playstore" />
          </button>
          <button className="py-4 px-6 sm:p-4">
            <img src={apple} alt="playstore" />
          </button>
        </div>
      </section>
    </article>
  );
};
export default Business;
