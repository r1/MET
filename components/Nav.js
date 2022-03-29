/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Search from "../public/svgs/search.svg";
import METLogo from "../public/svgs/logo.svg";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="container mx-auto flex flex-row items-center p-5">
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
              className="plain-regular bg-[#f2eee5] text-[0.9em] tracking-[0.8px] text-[#363636] placeholder-[#878683] outline-none"
              placeholder="SEARCH"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
