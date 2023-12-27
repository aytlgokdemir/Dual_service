import React from "react";
import p4 from "../assets/p4.jpg";

function ÜberUns() {
  return (
    <div className="About">
      <div className="mx-auto max-w-7xl">
        <div className="container">
          <div className="leftSide w-full h-full">
            <div className="mt-12">
              <img src={p4} alt="..." className="w-full" />
            </div>
            <div className="items-center content-center text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-12 indent-3 sm:indent-4 md:indent-8 max-w-5xl">
              <h5 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#354259]">
                ÜBER UNS
              </h5>
              <p className=" leading-6 sm:leading-7 md:leading-8 lg:leading-relaxed text-base sm:text-lg md:text-xl lg:text-xl mt-6 mx-4 sm:mt-8 md:mt-10 font-medium text-[#354259] text-justify indent-10">
                Wir bieten erfolgreiche Reparaturen und Wartung von
                Autoschlüsseln und Hausschlüsseln sowie die Diagnose und
                Reparatur von Handyproblemen an. In unserem Geschäft finden Sie
                auch Handyzubehör und eine Vielzahl von personalisierten
                Gravurprodukten für besondere Anlässe. Zögern Sie nicht, uns für
                Ihre Wünsche zu kontaktieren!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ÜberUns;
