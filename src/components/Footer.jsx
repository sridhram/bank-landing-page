import React from 'react';
import CTA from './CTA';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants/index';

const Footer = () => {
  return (
    <article
      className="h-screen p-8 md:h-auto flex flex-col gap-4 items-center justify-center max-w-[1300px] mx-auto md:gap-12"
      id="solution"
    >
      <div className="flex flex-1 items-center">
        <CTA />
      </div>
      <section className="flex gap-8 justify-between flex-wrap">
        <div className="w-[33%] sm:w-full">
          <img src={logo} alt="bank logo" />
          <p className="text-dimWhite mt-6">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((individualSection) => {
          return (
            <ul className="text-white">
              <li className=" text-lg font-semibold mb-4">
                {individualSection.title}
              </li>
              {individualSection.links.map((link) => {
                return (
                  <li className="text-dimWhite mb-2 text-sm">
                    <a target="_blank" href={link.link}>
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </section>
      <footer className="border-t-2 border-[#3F3E45] flex justify-between text-dimWhite w-full mt-4 py-4 md:flex-col md:items-center md:gap-4">
        <section className="flex gap-4 sm:text-xs md:text-sm">
          <p>Copyright &#169;</p>
          <p>2021 HooBank. All Rights Reserved.</p>
        </section>
        <figure className="flex gap-4 items-center pl-6">
          {socialMedia.map((icon) => {
            return (
              <a href={icon.link} target="_blank">
                <img src={icon.icon} id={icon.id} alt="social media" />
              </a>
            );
          })}
        </figure>
      </footer>
    </article>
  );
};
export default Footer;
