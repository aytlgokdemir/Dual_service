import React from "react";

function Content() {
  return (
    <div className="my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[500px]">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.60)] bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h2 className="mb-12 text-4xl font-bold leading-tight tracking-tight">
                  Unsere personalisierten Gravur-Optionen
                  <br />
                  <span>für Ihre besonderen Anlässe </span>
                </h2>
                {/* <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Get started
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
