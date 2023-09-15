import React from "react";
import { motion } from "framer-motion";

function Aboutus() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 sm:py-9 px-4">
        <div className="flex flex-col items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: [0.8, 1.1, 1],
            }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12 flex flex-col items-center justify-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-blue-500 underline pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              This is what we say about ourselves Who we are and what we want to
              do for you: ...a partner is more than just a supplier!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{ duration: 1 }}
            className="w-full lg:w-8/12 "
          >
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </motion.div>
        </div>

        <div className="flex w-full lg:flex-row flex-col items-center justify-between gap-8 pt-12">
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: [0, 0, -30, -30, 0],
            }}
            transition={{ duration: 1 }} 
            className="w-full flex items-center flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-blue-500 underline pb-4">
              Are you planning a property?
            </h1>
            <p className="font-normal md:px-32 text-base mt-4 leading-6 text-gray-600 ">
              Right from the start we bundle your ideas and our suggestions. We
              will assist you in determining the qualities and quantities of
              OS&E equipment in the areas of rooms, kitchen equipment,
              restaurant, stewarding, storage, public areas and housekeeping. We
              create budget lists for you that are kept up to date at all times.
              We would be happy to show you selected articles in a presentation.
              Once the order has been placed, we will work with you to plan the
              desired delivery dates for the individual areas. You don't have to
              manage a large number of individual invoices, but rather you
              receive an overall statement with a final invoice. …we are here
              for you !
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
