import React from 'react';
import { feedback, clients } from '../constants/index';
import Clients from './Clients';
const Testimonials = () => {
  return (
    <article
      className="h-screen p-8 md:h-auto flex flex-col items-center justify-center max-w-[1300px] mx-auto gap-8 justify-between"
      id="about us"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <section className="flex justify-between px-4 text-white items-center md:flex-col gap-20 md:gap-8">
        <h2 className="text-[2.5rem] font-bold lg:text-[2rem] md:text-[2.5rem]">
          What people are saying about us
        </h2>
        <p className="text-dimWhite md:[text-lg]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </section>
      <section className="flex gap-8 md:flex-col flex-1 items-center md:items-start">
        {feedback.map(({ title, name, id, img, content }) => {
          return (
            <Clients
              title={title}
              name={name}
              id={id}
              img={img}
              content={content}
            />
          );
        })}
      </section>
      <section className="flex gap-8 flex-wrap justify-center">
        {clients.map((client) => {
          return (
            <figure key={client.id}>
              <img
                src={client.logo}
                alt="client logo"
                className="w-[200px] h-[60px]"
              />
            </figure>
          );
        })}
      </section>
    </article>
  );
};
export default Testimonials;
