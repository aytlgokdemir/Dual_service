import Schlüssel from "../assets/Schlüssel.jpg";
import Uhr from "../assets/Uhr.jpg";
import Handy from "../assets/Handy.jpg";
import AutoKey from "../assets/AutoKey.jpg";

const callouts = [
  {
    name: "AUTOSCHLÜSSEL SERVICE",
    description: "Fahrzeugschlüssel-Dienstleistungen für Ihre Autos",
    imageSrc: AutoKey,
    href: "#",
  },
  {
    name: "SCHLÜSSEL SERVICE",
    description: "Schlüsselanfertigung und Reparaturservice",
    imageSrc: Schlüssel,
    href: "#",
  },
  {
    name: "HANDY SERVICE",
    description: "Problemanalyse und Reparatur vom Handy",
    imageSrc: Handy,

    href: "#",
  },
  {
    name: "UHREN SERVICE",
    description: "Uhrenreparatur und Wartung",
    imageSrc: Uhr,
    href: "#",
  },
];

export default function Example() {
  return (
    <div id="diensleistungen" className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-xl sm:text-2xl lg:text-3xl lg:-ml-12 font-bold text-gray-900 ">
            DIENSLEISTUNGEN
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10 lg:space-y-0 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 hover:opacity-75 duration-200 ">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className=" text-sm font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
