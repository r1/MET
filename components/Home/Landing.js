/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import useMediaQuery from "../useMediaQuery";
import Image from "next/image";

export default function Landing({ variants }) {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.7,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInUpMobile = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInUp2Mobile = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInUp2 = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3.4,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  return (
    <>
      <div className="mx-auto my-0 flex max-w-7xl flex-col justify-center px-4 lg:my-20 lg:items-center">
        <div className="relative flex justify-center">
          <AnimateSharedLayout type="crossfade">
            <motion.div variants={container} initial="hidden" animate="show">
              <div className="imggrid z-0 pr-44 pl-12">
                <div className="pos-1 hidden lg:grid">
                  <div className="relative h-[9.2rem] w-28 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image
                          alt="Iyoba"
                          src="/images/Iyoba.webp"
                          height={180}
                          width={130}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-2 hidden lg:grid">
                  <div className="relative h-44 w-36 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item} className="mr-2">
                        <Image
                          alt="Brinley"
                          src="/images/Brinley.webp"
                          height={195}
                          width={145}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-3 hidden lg:grid">
                  <div className="relative h-44 w-32 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image
                          alt="Pieta"
                          src="/images/Pieta.webp"
                          height={190}
                          width={130}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-4 hidden lg:grid">
                  <div className="relative h-32 w-24  bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image
                          alt="Bronzino"
                          src="/images/Bronzino.webp"
                          height={185}
                          width={145}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-5 hidden lg:grid">
                  <div className="relative h-28 w-32 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image
                          alt="Dionysos"
                          src="/images/Dionysos.webp"
                          height={170}
                          width={130}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimateSharedLayout>
          <div className="z-10 w-full text-left lg:text-center">
            <motion.div initial="initial" animate="animate">
              <motion.h2
                variants={isDesktop ? fadeInUp : fadeInUpMobile}
                className="ogg-regular mb-4 mt-8 text-[4.2rem] leading-[4rem] text-[#303030] md:text-[5rem] lg:mt-24 lg:text-[11rem] lg:leading-[12rem]"
              >
                Welcome <span className="ogg-regular-italic">to</span> The Met
              </motion.h2>
            </motion.div>
            <div className="plain-medium ml-0 mt-6 flex justify-start text-left lg:mt-14 lg:ml-72 lg:justify-center">
              <motion.div
                initial="initial"
                animate="animate"
                className="flex flex-col"
              >
                <motion.span
                  variants={isDesktop ? fadeInUp2 : fadeInUp2Mobile}
                  className="max-w-[17rem] leading-5"
                >
                  For the health and safety of our staff and visitors, capacity
                  is limited. Prepare for longer lines outside the Museum.
                </motion.span>
                <motion.div
                  variants={isDesktop ? fadeInUp2 : fadeInUp2Mobile}
                  className="mt-6 inline-block"
                >
                  <a href="/" className="inline-block text-[#ec0426]">
                    Read our visitor guidelines
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="28px"
                    fill="#ec0426"
                    viewBox="0 0 29 28"
                    version="1.1"
                    className="ml-1 mb-1 inline-block"
                  >
                    <g id="surface1">
                      <path d="M 22.488281 6.398438 C 21.9375 6.734375 20.484375 7.464844 19.871094 7.71875 C 17.703125 8.605469 15.613281 9.140625 13.246094 9.421875 C 12.148438 9.550781 11.300781 9.578125 10.683594 9.496094 C 10.085938 9.417969 9.503906 9.300781 8.816406 9.109375 C 8.519531 9.027344 8.277344 8.96875 8.273438 8.972656 C 8.253906 8.996094 11.246094 11.324219 13.542969 13.066406 C 14.164062 13.539062 14.679688 13.9375 14.6875 13.953125 C 14.695312 13.96875 14.4375 14.253906 14.109375 14.582031 C 13.78125 14.914062 12.101562 16.636719 10.371094 18.414062 L 7.222656 21.644531 L 7.660156 22.09375 L 8.101562 22.542969 L 11.820312 18.675781 C 13.871094 16.546875 15.550781 14.804688 15.5625 14.804688 C 15.570312 14.804688 15.851562 15.160156 16.1875 15.601562 C 17.539062 17.359375 18.671875 18.933594 19.609375 20.335938 L 20.171875 21.175781 L 20.171875 19.226562 C 20.171875 17.140625 20.199219 16.664062 20.390625 15.097656 C 20.730469 12.308594 21.597656 9.097656 22.679688 6.613281 C 22.777344 6.382812 22.859375 6.191406 22.851562 6.1875 C 22.847656 6.183594 22.683594 6.28125 22.488281 6.398438 Z M 22.488281 6.398438 " />
                    </g>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
