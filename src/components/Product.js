import React from "react";
import Handy from "../assets/Handy.jpg";
import Band from "../assets/Band.jpg";

function Product() {
  return (
    <div id="product">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">UNSERE PRODUKTE</h2>
          <div className="mt-7">
            <div className="product-container grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="relative h-100 w-full overflow-hidden rounded-lg lg:aspect-w-2 lg:row-span-2 hover:opacity-75">
                <img
                  src={Handy}
                  className="h-full w-full object-cover object-center"
                  alt="..."
                />
                <div className="bg-black bg-opacity-30"></div>
                <div className="text-white ">
                  <h3 className="font-bold text-lg absolute bottom-16 left-8">
                    Handy Zubehör
                  </h3>
                </div>
              </div>

              <div className="relative h-60 pb-0 rounded-lg opacity-150 overflow-hidden lg:aspect-w-2 hover:opacity-75 duration-200">
                <img
                  src="https://images.unsplash.com/photo-1675681451141-d33252d9115a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="..."
                  className="w-full h-full object-cover object-center"
                />
                <div className="bg-black bg-opacity-30"></div>
                <div className="text-white">
                  <h3 className="font-bold text-lg absolute bottom-16 left-8">
                    Victorinox
                  </h3>
                </div>
              </div>

              <div className="relative h-60 pb-0 rounded-lg opacity-150 overflow-hidden lg:aspect-w-2 hover:opacity-75 duration-200">
                <img
                  src={Band}
                  alt="..."
                  className="w-full h-full object-cover object-center"
                />
                <div className="bg-black bg-opacity-30"></div>
                <div className="text-white">
                  <h3 className="font-bold text-lg absolute bottom-16 left-8">
                    Armbänder
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
