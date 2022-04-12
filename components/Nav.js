/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Search from "../public/svgs/search.svg";
import METLogo from "../public/svgs/logo.svg";
import useMediaQuery from "./useMediaQuery";
import { motion } from "framer-motion";

export default function Nav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  let easing = [0.6, 0.05, 0.01, 0.99];

  const fadeInUp = {
    hidden: { opacity: 0 },
    initial: {
      y: 60,
      opacity: 1,
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
    hidden: { opacity: 0 },
    initial: {
      y: 60,
      opacity: 1,
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

  return (
    <>
      <motion.div
        initial="hidden"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={isDesktop ? fadeInUp : fadeInUpMobile}
        className="container mx-auto flex flex-row items-center p-5"
      >
        <a className="mb-4 mr-20 flex items-center font-medium text-gray-900 md:mb-0">
          <Link href="/" passHref>
            <a>
              <METLogo />
            </a>
          </Link>
        </a>
        <div className="plain-medium hidden flex-wrap items-center justify-center gap-x-16 text-[0.9rem] text-[#3b3b3b] md:ml-auto md:mr-auto xl:flex">
          <Link href="/visit" passHref>
            <a className="transition hover:text-black">VISIT</a>
          </Link>
          <Link href="/exhibition" passHref>
            <a className="transition hover:text-black">EXHIBITION</a>
          </Link>
          <Link href="/events" passHref>
            <a className="transition hover:text-black">EVENTS</a>
          </Link>
          <Link href="/art" passHref>
            <a className="transition hover:text-black">ART</a>
          </Link>
          <Link href="/learn" passHref>
            <a className="transition hover:text-black">LEARN</a>
          </Link>
          <Link href="/membership" passHref>
            <a className="transition hover:text-black">MEMBERSHIP</a>
          </Link>
          <Link href="/shop" passHref>
            <a className="transition hover:text-black">SHOP</a>
          </Link>
        </div>
        <div className="grow xl:hidden" />
        <div className="flex flex-row">
          <span className="pr-3">
            <Search />
          </span>
          <input
            type="text"
            className="plain-regular bg-[#f2eee5] text-[0.9em] tracking-[0.8px] text-[#363636] placeholder-[#878787] outline-none"
            placeholder="SEARCH"
          />
        </div>
      </motion.div>
    </>
  );
}
