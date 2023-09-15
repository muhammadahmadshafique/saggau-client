import React from "react";
import { motion } from "framer-motion";

function BentoBox() {
  return (
    <div className="px-2 md:px-28">
      <motion.div
       
        className="w-full mt-12 pt-8 flex justify-center items-center bg-blue-400 p-12 rounded-2xl"
      >
        <motion.img
         initial={{ opacity: 0, x: -150, rotate: 0 }}
         whileInView={{
           opacity: 1,
           x: 0,
           scale: [1, 2, 2, 1,1],
         }}
         transition={{ duration: 1.5 }}
          className="w-52"
          src="./BentoBoxSystem_Logo.png"
          alt=""
          srcset=""
        />
      </motion.div>
      <div className="my-20 hover:bg-blue-200 py-7  flex px-12 flex-col rounded-xl gap-y-3 justify-between border border-blue-300 items-center md:flex-row">
        <motion.p  initial={{ opacity: 0, x: 100 }}
         whileInView={{
           opacity: 1,
           x: 0,
         }}
         transition={{ duration: 1.5 }} className="text-black opacity-70 flex-1 font-[500] leading-[22px] text-[18px]">
          Unser BentoBox System ist eine hochwertige Variante einer Lunchbox. In
          Japan hat diese Darreichungsform, bei der in speziellen Kästchen
          unterschiedliche Speisen durch Trennwände voneinander geteilt sind,
          eine lange Tradition und nennt sich Bentobox. Unser Produkt ist extrem
          vielseitig, zeitlos und ökologisch zugleich. Das BentoBox System ist
          in den Größen SMALL und LARGE, mit jeweils zwei unterschiedlichen
          Deckeldesigns, erhältlich. Die Boxen können Sie je nach Art der
          Speisen individuell mit den hochwertigen mitgelieferten
          Porzellanteilen bestücken. Hier kennt die Kreativität keine Grenzen,
          ob beim Anrichten von Frühstück, Mittags- und Abendgerichten oder für
          kleine Snacks und Desserts. Die flexiblen Serviermöglichkeiten Ihrer
          Speisen können Ihre Gäste in allen Bereichen genießen, auf dem Zimmer,
          im Wellnessbereich, auf der Terrasse oder auch im Strandkorb.
        </motion.p>
        <motion.div initial={{ opacity: 0, x: -100 }}
         whileInView={{
           opacity: 1,
           x: 0,
           rotate: [0, -30, -30, 60, 0],
         }
         }
         transition={{ duration: 1.5 }} className="flex-1">
          <img
            className="w-[100%] h-[100%]"
            src="./20200917-IMG_4318.png"
            alt=""
            srcset=""
          />
        </motion.div>
      </div>
      <div className="my-20 bg-blue-200  flex px-12 flex-col rounded-xl gap-y-3 justify-between border border-blue-300 items-center md:flex-row">
        <motion.div initial={{ opacity: 0, x: -100 }}
         whileInView={{
           opacity: 1,
           x: 0,
           rotate: [0, -30, -30, 60, 0],
         }
         }
         transition={{ duration: 1.5 }} className="flex-1">
          <img
            className="w-[100%] h-[100%]"
            src="./20201031-IMG_4399.png"
            alt=""
            srcset=""
          />
        </motion.div>
        <motion.p initial={{ opacity: 0, x: 100 }}
         whileInView={{
           opacity: 1,
           x: 0,
         }}
         transition={{ duration: 2 }} className="text-black opacity-70 py-8 flex-1 font-[500] leading-[22px] text-[18px]">
          <ul class="list-disc space-y-3 ml-6">
            <li>
              ideal für: Frühstück, Sushi, Tapas, Speisen mit unterschiedlichen
              Komponenten, etc.
            </li>
            <li>inkl. Anti-Rutschmatte und Trennsteg für Besteck</li>
            <li>Besteck nicht im Set enthalten</li>
            <li>
              die Box besteht aus hochwertigem Melamin und ist
              spülmaschinengeeignet
            </li>
            <li>nicht mikrowellengeeignet</li>
            <li>Maße: 43,5 x 37,0 x 9,0 cm</li>
          </ul>
        </motion.p>
      </div>

      <div className="my-20 hover:bg-blue-200  flex px-12 flex-col rounded-xl gap-y-3 justify-between border border-blue-300 items-center md:flex-row">
        <motion.div initial={{ opacity: 0, x: -100 }}
         whileInView={{
           opacity: 1,
           x: 0,
           rotate: [0, -30, -30, 60, 0],
         }
         }
         transition={{ duration: 1.5 }} className="flex-1">
          <img
            className="w-[100%] h-[100%]"
            src="./DSC_0203.png"
            alt=""
            srcset=""
          />
          <img src="./DSC_0196.png" alt="" srcset="" />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 100 }}
         whileInView={{
           opacity: 1,
           y: 0,
         }}
         transition={{ duration: 2 }} className="text-black opacity-70 py-8 flex-1 font-[500] leading-[22px] text-[18px]">
          <ul class="list-disc space-y-3 ml-6">
            <li>
              ideal für: Pastagerichte, Salate, Snacks (z.B. Currywurst / Fish &
              Chips / Käseplatte), etc.
            </li>
            <li>nkl. Anti-Rutschmatte ohne Besteckmulde</li>
            <li>Besteck nicht im Set enthalten</li>
            <li>
              die Box besteht aus hochwertigem Melamin und ist
              spülmaschinengeeignet
            </li>
            <li>nicht mikrowellengeeignet</li>
            <li>Maße: 30,0 x 25,0 x 8,0 cm</li>
          </ul>
        </motion.p>
      </div>
    </div>
  );
}

export default BentoBox;
