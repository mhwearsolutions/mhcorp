import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-sky-900 height-4 w-full">
        <p className="text-white md:hidden">A la bestia el menu para fones :v</p>
        <p className="text-white hidden md:block">A la bestia el menu para compus :v</p>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-2">
        <Image src="/mhcorp/logo.png" alt="Logo de la corp :v" width={320} height={320} />
        <h1 className="text-4xl font-bold">Vistiendo el mañana, hoy :v</h1>
      </div>
    </div>
  );
}
