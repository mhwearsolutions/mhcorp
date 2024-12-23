import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-2">
      <Image src="/logo.png" alt="Hero" width={320} height={320} />
      <h1 className="text-4xl font-bold">Vistiendo el mañana, hoy :v</h1>
    </div>
  );
}
