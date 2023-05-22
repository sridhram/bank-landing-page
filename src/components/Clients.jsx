import React from 'react';
import { quotes } from '../assets';

const Clients = ({ title, name, id, img, content }) => {
  return (
    <section
      id={id}
      className="cursor-pointer feature-card rounded-lg p-8 lg:p-4 flex flex-col gap-8"
    >
      <figure>
        <img src={quotes} alt="quotes" className="" />
      </figure>
      <p className="text-white">{content}</p>
      <div className="flex gap-4 items-center">
        <figure>
          <img src={img} alt="people" className="w-[65px]" />
        </figure>
        <div className="flex flex-col">
          <h4 className="text-white">{name}</h4>
          <p className="text-dimWhite text-sm">{title}</p>
        </div>
      </div>
    </section>
  );
};
export default Clients;
