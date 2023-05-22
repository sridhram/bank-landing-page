import React from 'react';
import { card } from '../assets';

const CardDeal = () => {
  return (
    <article className="h-screen p-8 md:h-auto flex gap-4 items-center justify-center max-w-[1300px] mx-auto md:flex-col md:gap-12">
      <section className="flex flex-col my-auto gap-8">
        <h2 className="text-[3rem] font-bold lg:text-[2.5rem] text-white sm:text-[1.5rem] md:text-center">
          Find a better card deal in few easy steps.
        </h2>
        <p className="text-dimWhite sm:text-sm">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-blue-gradient py-4 px-6 text-black rounded-lg self-start md:self-center">
          Get Started
        </button>
      </section>
      <figure>
        <img src={card} alt="card image" />
      </figure>
    </article>
  );
};
export default CardDeal;
