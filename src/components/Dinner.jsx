import React from "react";

function Dinner() {
  return (
    <div className="px-2 md:px-28">
      <div className="w-full mt-12 pt-8 flex justify-center items-center bg-blue-400 p-12 rounded-2xl">
        <img
          className="w-52"
          src="./DinnerBoxSystem_Logo.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="my-20 hover:bg-blue-200 py-7  flex px-12 flex-col rounded-xl gap-y-3 justify-between border border-blue-300 items-center md:flex-row">
        <p className="text-black opacity-70 flex-1 font-[500] leading-[22px] text-[18px]">
          Mehr Ästhetik, mehr Qualität und mehr Nachhaltigkeit. Mit unserem
          DinnerBox System definieren wir das Außer-Haus-Geschäft neu.
          Hochwertiges Porzellan verleiht Ihren Speisen auch beim Kunden zu
          Hause eine ansprechende Optik, die mit herkömmlichen To-Go-Behältern
          kaum zu erreichen ist. Was uns aber besonders am Herzen liegt, ist der
          Umweltaspekt. Denn ob PET, Aluminium oder Pappe, selbst recyclebare
          Verpackungen landen nach dem Essen im Abfall und werden häufig nicht
          einmal sachgemäß entsorgt. Das DinnerBox System hingegen ermöglicht
          eine konsequente Müllvermeidung. Darüber hinaus erfüllt es auch in
          puncto Optik und Hygiene die höchsten Ansprüche, wovon Gastronomen und
          Kunden gleichermaßen profitieren. Stilvoll servieren & genussvoll
          dinieren. Vom klassischen Gericht bis zum aufwendigen Menü bietet das
          DinnerBox System ausreichend Platz für alle Komponenten. Wählen Sie
          aus einer Vielzahl verschiedener Teller, Schälchen und Servierplatten,
          um Ihre Speisen optimal anzurichten. Ein praktisches Stapel-System
          sowie ein stabiler Melamin-Träger sorgen für ausreichend Schutz und
          eine zuverlässige Außer-Haus-Lieferung.
        </p>
        <div className="flex-1">
          <img
            className="w-[100%] h-[100%]"
            src="./DBS_Image01.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="my-20 bg-blue-200  flex px-12 flex-col rounded-xl gap-y-3 justify-between border border-blue-300 items-center md:flex-row">
        <div className="flex-1">
          <img className="w-[100%] h-[100%]" src="./12.png" alt="" srcset="" />
        </div>
        <p className="text-black opacity-70 py-8 flex-1 font-[500] leading-[22px] text-[18px]">
          <ul class="list-disc space-y-3 ml-6">
            <li>
              Ideal für klassische Gerichte mit 3 Komponenten oder Menüs mit 3
              Gängen
            </li>
            <li>Träger aus hochwertigem Melamin</li>
            <li>Geschirr aus deutschem Hart-Porzellan</li>
            <li>Mix & Match: Verschiedene Teller & Schalen kombinierbar</li>
            <li>Melamin Spülmaschinengeeignet</li>
            <li>Porzellan Spülmaschinenfest, mikrowellenfest</li>
            <li>Maße: 22,4 x 22,4 x 26,7 cm</li>
          </ul>
        </p>
      </div>

      <div className="my-20 hover:bg-blue-200  flex px-12 flex-col rounded-xl gap-y-3 justify-between border border-blue-300 items-center md:flex-row">
        <div className="flex-1">
          <img className="w-[100%] h-[100%]" src="./11.png" alt="" srcset="" />
          <img src="./DSC_0196.png" alt="" srcset="" />
        </div>
        <p className="text-black opacity-70 py-8 flex-1 font-[500] leading-[22px] text-[18px]">
          <ul class="list-disc space-y-3 ml-6">
            <li>
              Eine Dinner Box besteht aus 3 Melamin-Boxen, 1 Deckel inklusive
              Transport-Gurt und Antirutschmatte. Das Porzellan lässt sich
              individuell aus den folgenden Komponenten zusammenstellen:
            </li>
            <li>Bowl(10x10x7cm,0,23ltr)</li>
            <li>Bowl(10x20x7cm,0,60ltr)</li>
            <li>
            Bowl(20x20x7cm,1,50ltr)

            </li>
            <li>Bowl(Ø20x7cm,1,20ltr)</li>
            <li>Glasbehälter (Ø 8 x 6 cm, 0,20 ltr)</li>
            <li>Glasbehälter (Ø 8 x 7 cm, 0,15 ltr)</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Dinner;
