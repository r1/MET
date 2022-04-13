/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function News() {
  return (
    <>
      <div className="container mx-auto xl:pl-2">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <h2 className="ogg-regular pl-5 text-[3rem] text-[#2d2d2d] lg:pl-0 lg:text-[4.1rem] ">
              What&apos;s new
            </h2>
            <div className="mt-3 ml-5 hidden lg:mt-5 lg:ml-0 lg:block">
              <a href="/" className="plain-regular text-md text-[#ec0426]">
                See all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45px"
                  height="35px"
                  fill="#ec0426"
                  viewBox="0 0 29 32"
                  version="1.1"
                  className="inline-block"
                >
                  <g id="surface1">
                    <path d="M 22.488281 6.398438 C 21.9375 6.734375 20.484375 7.464844 19.871094 7.71875 C 17.703125 8.605469 15.613281 9.140625 13.246094 9.421875 C 12.148438 9.550781 11.300781 9.578125 10.683594 9.496094 C 10.085938 9.417969 9.503906 9.300781 8.816406 9.109375 C 8.519531 9.027344 8.277344 8.96875 8.273438 8.972656 C 8.253906 8.996094 11.246094 11.324219 13.542969 13.066406 C 14.164062 13.539062 14.679688 13.9375 14.6875 13.953125 C 14.695312 13.96875 14.4375 14.253906 14.109375 14.582031 C 13.78125 14.914062 12.101562 16.636719 10.371094 18.414062 L 7.222656 21.644531 L 7.660156 22.09375 L 8.101562 22.542969 L 11.820312 18.675781 C 13.871094 16.546875 15.550781 14.804688 15.5625 14.804688 C 15.570312 14.804688 15.851562 15.160156 16.1875 15.601562 C 17.539062 17.359375 18.671875 18.933594 19.609375 20.335938 L 20.171875 21.175781 L 20.171875 19.226562 C 20.171875 17.140625 20.199219 16.664062 20.390625 15.097656 C 20.730469 12.308594 21.597656 9.097656 22.679688 6.613281 C 22.777344 6.382812 22.859375 6.191406 22.851562 6.1875 C 22.847656 6.183594 22.683594 6.28125 22.488281 6.398438 Z M 22.488281 6.398438 " />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="mb-2 border-l-0 border-[#777572] pl-4 pr-4 lg:mb-32 lg:border-l-2 lg:pr-4">
            <img className="w-full" src="/images/M.png" alt="" />
            <div className="mt-8 space-y-6">
              <h3 className="ogg-medium text-[2.3rem] leading-10 text-[#2d2d2d] lg:text-[2.6rem]">
                SPINARIO'S THORN
              </h3>
              <div className="pb-4">
                <p className="plain-regular text-[1.07rem] text-[#2d2d2d]">
                  Explore Antico's greatest work—online or at the Museum—with
                  new perspectives on pain, mindfulness, and the creative
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mb-32 mb-0 grid grid-cols-2 border-t-0 border-[#777572] sm:grid-cols-2 lg:grid-cols-4 lg:border-t-2">
          <div className="mt-0 border-r-0 border-[#777572] pl-4 pr-1 lg:mt-20 lg:border-r-2 lg:pr-4 lg:pl-0">
            <div className="hidden md:block lg:block">
              <Image
                src="/images/SL.jpeg"
                alt="Sign Tour"
                width={362}
                height={245}
              />
            </div>
            <div className="block md:hidden lg:hidden">
              <Image
                src="/images/SL.jpeg"
                alt="Sign Tour"
                width={362}
                height={259}
              />
            </div>
            <div className="mt-6 space-y-3 lg:mt-8 lg:space-y-6">
              <h3 className="plain-regular leading-7 text-[#2d2d2d] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] lg:leading-10">
                Met Signs Tour
              </h3>
              <div className="pb-4">
                <p className="plain-regular pb-12 text-[0.8rem] text-[#2d2d2d] md:text-[0.9rem] lg:text-[1.1rem]">
                  Explore Juan Gris's cubist masterpiece Still Life with Checked
                  Tablecloth. Presented in American Sign Language.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-0 border-r-0 border-[#777572] pl-1 pr-4 lg:mt-20 lg:border-r-2 lg:px-5 lg:pl-5">
            <Image
              src="/images/SW.jpeg"
              alt="Snow White"
              width={342}
              height={245}
            />
            <div className="mt-6 space-y-3 lg:mt-8 lg:space-y-6">
              <h3 className="plain-regular leading-7 text-[#2d2d2d] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] lg:leading-10">
                Paint and Movie Magic
              </h3>
              <div className="pb-4">
                <p className="plain-regular pb-12 text-[0.8rem] text-[#2d2d2d] md:text-[0.9rem] lg:text-[1.1rem]">
                  A close look at Disney's animation cels and drawings reveals a
                  side to movie magic that often goes unseen.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 hidden border-r-2 border-[#777572] pr-5 pl-5 lg:grid">
            <Image
              src="/images/Dusasa.jpg"
              alt="Dusasa"
              width={342}
              height={245}
            />
            <div className="mt-8 space-y-6">
              <h3 className="plain-regular text-[1.7rem] leading-10 text-[#2d2d2d]">
                Contribute to our future
              </h3>
              <div className="pb-20">
                <p className="plain-regular pb-12 text-[1.1rem] text-[#2d2d2d]">
                  Support our mission in a new way. Become a member.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 hidden border-r-2 border-[#777572] pr-5 pl-5 lg:grid">
            <Image
              src="/images/AG.png"
              alt="Audio Guide"
              width={342}
              height={245}
            />
            <div className="mt-8 space-y-6">
              <h3 className="plain-regular text-[1.7rem] leading-10 text-[#2d2d2d]">
                Audio Guide
              </h3>
              <div className="pb-0">
                <p className="plain-regular pb-12 text-[1.1rem] text-[#2d2d2d]">
                  Listen to contemporary indigenous artists, curators, and
                  historians who share their perspectives on the traditions and
                  techniques on display from the Charles and Valerie Diker
                  Collection.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-32 block text-center lg:hidden">
          <a href="/" className="plain-regular text-md text-[#ec0426]">
            See all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45px"
              height="35px"
              fill="#ec0426"
              viewBox="0 0 29 32"
              version="1.1"
              className="inline-block"
            >
              <g id="surface1">
                <path d="M 22.488281 6.398438 C 21.9375 6.734375 20.484375 7.464844 19.871094 7.71875 C 17.703125 8.605469 15.613281 9.140625 13.246094 9.421875 C 12.148438 9.550781 11.300781 9.578125 10.683594 9.496094 C 10.085938 9.417969 9.503906 9.300781 8.816406 9.109375 C 8.519531 9.027344 8.277344 8.96875 8.273438 8.972656 C 8.253906 8.996094 11.246094 11.324219 13.542969 13.066406 C 14.164062 13.539062 14.679688 13.9375 14.6875 13.953125 C 14.695312 13.96875 14.4375 14.253906 14.109375 14.582031 C 13.78125 14.914062 12.101562 16.636719 10.371094 18.414062 L 7.222656 21.644531 L 7.660156 22.09375 L 8.101562 22.542969 L 11.820312 18.675781 C 13.871094 16.546875 15.550781 14.804688 15.5625 14.804688 C 15.570312 14.804688 15.851562 15.160156 16.1875 15.601562 C 17.539062 17.359375 18.671875 18.933594 19.609375 20.335938 L 20.171875 21.175781 L 20.171875 19.226562 C 20.171875 17.140625 20.199219 16.664062 20.390625 15.097656 C 20.730469 12.308594 21.597656 9.097656 22.679688 6.613281 C 22.777344 6.382812 22.859375 6.191406 22.851562 6.1875 C 22.847656 6.183594 22.683594 6.28125 22.488281 6.398438 Z M 22.488281 6.398438 " />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
