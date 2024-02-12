"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Brain from "../components/brain";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3">
          {/* Bio Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Bio Image */}
            <Image
              src="https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="placeholder"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* Bio Title */}
            <h1 className="font-bold text-2xl ">BIOGRAPHY</h1>
            {/* Bio DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              fugiat quibusdam magni. Blanditiis ab earum nam reprehenderit, hic
              exercitationem cupiditate, dolor cumque pariatur neque temporibus
              rem architecto. Dolorem, nam tempore?
            </p>
            {/* Bio Quote */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* Bio Sign SVG*/}
            <div className="self-end">
              <svg
                width="377"
                height="124"
                viewBox="0 0 377 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73 70C73 78 73 86 73 94C73 102.388 73.9261 109.798 74.9445 117.944C75.0728 118.971 76.5733 122 75 122C72.3365 122 68.5517 118.308 66.4445 117C48.0059 105.555 28.9494 89.7391 6.8889 86.2222C-1.60718 84.8678 2.3462 83.3259 8.22223 81C16.5903 77.6877 25.6069 76.3973 34.1111 73.4444C55.6196 65.9762 77.1261 58.3166 98.8333 51.4444C143.989 37.1489 189.849 25.7237 235.278 12.4444C243.008 10.1848 250.911 7.59367 258.556 5C260.291 4.41128 264.256 3.48823 265 2"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M80 77C80 87.4626 77.6784 102.396 85.2222 110.778C87.8411 113.688 88.1969 118.641 90.7778 121.222C93.4482 123.893 87.6884 113.451 89.2222 110C92.6183 102.359 94.5068 104.67 101.778 105C113.937 105.553 125.721 108 138 108C143.667 108 149.333 108 155 108C163.875 108 171.594 105.811 180.222 104C193.019 101.314 207.785 101.004 220.778 102.222C228.66 102.961 235.972 105 244 105"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M174 58C172.408 58 164.492 56.9658 165.056 59.5C165.966 63.5991 173.071 65.1718 176.222 66.2222C181.727 68.0572 192.578 70.403 193 78C193.471 86.4769 192.119 93.4369 185.778 99.7778C180.451 105.105 173.676 106 166.5 106C159.013 106 146.994 103.795 141 99"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M194 99H197"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M208 109C208 92.5 208 76 208 59.5C208 55.3209 212.732 67.5294 213 68.2222C214.813 72.9143 215.835 81.7238 219.5 85.3889C220.066 85.9544 219.993 81.4437 220.056 80.9444C220.451 77.7787 222.318 75.069 223 72C223.177 71.2041 227.389 58.9877 228.778 60.2222C230.328 61.6005 230.899 65.1377 231 67C231.35 73.4825 234.222 80.2223 235.5 86.6111C236.823 93.2277 238.939 99.8147 240 106.444C240.409 109.003 240.628 111.814 243 113"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M258 88C255.064 88.367 255 94.3714 255 96.5C255 99.5823 255.966 100.747 258.222 102.778C259.597 104.015 265.697 105.129 267 103.5C269.025 100.968 267.695 98.1813 266.944 95.5556C266.262 93.1681 265.073 91.6286 263.222 89.7778C259.951 86.5069 261.125 88.5296 262.5 91.5556C264.982 97.0162 268.569 101.569 273 106"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M263 51C263 64.8449 263.303 77.6821 269 90.5C272.086 97.4441 278 104.103 278 112"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M251 83C261.61 83 272.939 82 283 82"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M270 62C270 71.8671 269.966 78.3383 274.778 87C276.814 90.6659 278.888 94.2211 280.778 98C282.087 100.619 287.706 107.426 285.778 105.222C283.336 102.432 284 98.473 284 94.7778C284 85.3361 289.488 79 299.222 79C306.272 79 312.254 78.9418 318.944 81.5C324.811 83.7433 329.986 85.317 336.222 86.2222C351.774 88.4797 362.107 84.5951 375 76"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M291 69C292.388 69 287.354 68.6768 290 70"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Skill Title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* Skill List */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience Container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* Experience Title */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* Experience List */}
            <div className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provide web solutions, applying a range of technologies to
                    address client requirements.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Freelancer
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Product Owner
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    In charge of monthly development cycles for two government
                    applications
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2020{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Norwegian Civil Affairs Authority
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
