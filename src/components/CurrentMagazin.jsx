import React from "react";
import { motion } from "framer-motion";

function CurrentMagazin() {
  return (
    <div className="bgimage min-h-screen h-[100%] px-8 md:px-32">
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1 }}
        className="w-52 pt-8"
      >
        <img src="./BentoBoxSystem_Logo.png" alt="" srcset="" />
      </motion.div>
      <div className="mt-2 screen sm:mt-24 sm:space-y-8">
        <motion.p
          initial={{ opacity: 0, x: 150, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1 }}
          className="text-white font-[500] text-[28px]"
        >
          Current offer you can find in our
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50}}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: [0,1, 2, 2, 1,,1],
          }}
          transition={{ duration: 1 }}
        >
          <p className=" font-[600] text-blue-400 text-[72px]">Magazine</p>
          <p className="text-white font-[600] text-[72px]">2023</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 450, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: [1, 2, 2, 1, 1],
            // rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 1 }}
          className="pages sm:space-y-3"
        >
          <p className="text-white font-[700] text-[28px]">108 Pages</p>
          <p className=" font-[700] underline text-blue-400 text-[28px]">
            Edition 1
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,           
          }}
          transition={{ duration: 1.5 }} className="sm:space-x-6 sm:flex-row sm:justify-start sm:items-start flex flex-col justify-center items-center gap-y-4 pt-12">
          <button className="bg-blue-400 px-12 py-3 text-white font-[800] rounded-lg">
            Online View
          </button>
          <button className="hover:bg-blue-400 font-[900] border-[2px] border-blue-500 px-12 py-2.5 text-blue-600 rounded-lg">
            PDF Download
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default CurrentMagazin;
