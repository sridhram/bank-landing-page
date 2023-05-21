import React from 'react';
import { stats } from '../constants';

const Stats = () => {
  return (
    <section className="flex gap-24 lg:gap-8 md:gap-8 flex-wrap justify-evenly my-4 md:mt-8">
      {stats.map((stat, index) => {
        return (
          <>
            <div
              key={`${stat.id}__${index}`}
              className="text-white flex gap-4 items-center"
            >
              <h4 className="font-semibold text-2xl">{stat.value}</h4>
              <p className="bg-text-gradient bg-clip-text text-transparent uppercase text-lg">
                {stat.title}
              </p>
            </div>
          </>
        );
      })}
    </section>
  );
};
export default Stats;
