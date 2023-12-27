/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import logo2 from "../assets/logo2.svg";

function Footer() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScreenSize = () => {
      const screenWidth = window.innerWidth;

      setShowLogo(screenWidth > 992);
    };

    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <div className="footer bg-[#354259] text-[#d9d9d9]">
      <div className="max-w-7xl p-6">
        <div className="container grid grid-cols-1 sm:grid-cols-3 mx-8 border-b-[1px] border-[#d9d9d9] pb-8">
          <div>
            <ul className="mt-10 list-none">
              <h3 className="text-[18px] font-semibold mb-4">
                DIENSLEISTUNGEN
              </h3>
              <li className="mt-2 text-[14px]">
                <p>Schlüssel Service</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Autoschlüssel Service</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Handy Service</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Handy Akkuwechsel</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Displaywechsel</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Uhren Batteriewechsel</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Gravur Service</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-10  list-none">
              <h3 className="text-[18px] font-semibold mb-4">PRODUKT</h3>
              <li className="mt-3 text-[14px]">
                <p>Victorinox</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Handy Zubehör</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Thermos</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Uhren Bänder</p>
              </li>
              <li className="mt-2 text-[14px]">
                <p>Briefkastenschilder</p>
              </li>
            </ul>
          </div>
          <div className="mt-10 list-none ">
            <h3 className="text-[18px] font-semibold mb-4">IMMER MIT UNS</h3>
            <div className="flex cursor-pointer">
              <div className="m-1 h-9 w-9 ml-5 rounded-full border-[1px] border-[#d9d9d9] ">
                <a href="https://instagram.com/dualservice21?igshid=OGQ5ZDc2ODk2ZA==">
                  <img src={instagram} alt="instagram-icon" />
                </a>
              </div>
              <div className="m-1 h-9 w-9 ml-5 rounded-full border-[1px] border-[#d9d9d9] ">
                <a href="https://api.whatsapp.com/send?phone=41797960450">
                  <img src={whatsapp} alt="whatsapp-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container2 grid grid-cols-1 sm:grid-cols-3 mx-8 ">
          <div>
            <ul className=" list-none mt-10">
              <h3 className="text-[18px] font-semibold">ÖFFNUNGSZEITEN:</h3>

              <li className="mt-3 text-[14px]">
                <p>Mo-Do: 09.00-19.00</p>
              </li>
              <li className="mt-3 text-[14px]">
                <p>Fri: 09.00-20.00</p>
              </li>
              <li className="mt-3 text-[14px]">
                <p>Sa: 09.00-18.00</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none mt-10 lg:ml-5 sm:ml-0">
              <h3 className="text-[18px] font-semibold">KONTAKT</h3>

              <li className="mt-3 text-[14px]">
                <div className="flex cursor-pointer">
                  <a href="https://maps.app.goo.gl/WU9ToS1rzNCpT8xA7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </a>
                  <p className="ml-2">Ackerweg 2, 4665 Oftringen</p>
                </div>
              </li>
              <li className="mt-3 text-[14px]">
                <div className="flex">
                  <a href="tel:+41797960450">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </a>

                  <p className="ml-2">079 796 04 50</p>
                </div>
              </li>
              <li className="mt-3 text-[14px]">
                <div className="flex cursor-pointer">
                  <a href="https://mail.google.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                  <p className="ml-2">dualschlusselhandyservice@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
          {showLogo && (
            <div className="w-[180px] ml-10">
              <img src={logo2} alt="..." onClick={() => setShowLogo(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
