import React from 'react';
import { robot, discount, arrowUp } from '../assets/';
import styles from '../constants/style';
import Stats from './Stats';

const GetStarted = ({ className = '' }) => {
  return (
    <div
      className={`rounded-full bg-text-gradient w-[120px] h-[120px] p-[.1rem] cursor-pointer lg:w-[100px] lg:h-[100px] ${className}`}
    >
      <div className="flex items-center justify-center bg-primary w-full h-full rounded-full aspect-square">
        <span className="bg-text-gradient bg-clip-text text-transparent">
          <div className="inline">Get </div>
          <img src={arrowUp} alt="arrow icon" className="inline-block" />
          <div>Started</div>
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <article className="h-screen p-8 md:h-auto flex flex-col gap-4 items-center justify-center max-w-[1300px] mx-auto">
      <article
        id="home"
        className={`${styles.flexCenter} md:flex-col md:gap-8 flex-1`}
      >
        <section className={`${styles.flexStart} text-white flex-col gap-8`}>
          <div className="flex items-center gap-2 bg-discount-gradient p-4 rounded-lg text-dimWhite sm:text-xs">
            <img className="inline-block" src={discount} alt="discount icon" />
            <p>
              <span className="text-white">20%</span> DISCOUNT FOR{' '}
              <span className="text-white">1 MONTH</span> ACCOUNT
            </p>
          </div>
          <div>
            <div className="flex">
              <h1 className="text-7xl capitalize font-bold lg:text-6xl md:text-7xl sm:text-5xl">
                The next{' '}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  generation
                </span>
              </h1>
              <GetStarted className="md:hidden" />
            </div>
            <h1 className="capitalize font-bold text-7xl lg:text-6xl md:text-7xl sm:text-5xl">
              payment method
            </h1>
          </div>
          <p className="text-dimWhite">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </section>
        <figure className="flex md:my-0 my-10 relative">
          <img src={robot} alt="card" />
          <div className="pink__gradient absolute z-[0] w-[40%] h-[35%]"></div>
          <div className="white__gradient absolute z-[1] w-[80%] h-[80%]"></div>
          <div className="blue__gradient absolute z-[0] w-[50%] h-[50%]"></div>
        </figure>
        <GetStarted className="hidden md:block" />
      </article>
      <Stats />
    </article>
  );
};
export default Hero;
