import Image from "next/image";

export default function Splash() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-black">
      <Image
        src="/Images/logo.jpeg"
        alt="Ambaari Tours and Travels"
        width={900}
        height={400}
        priority
        className="animate-pulse"
      />
    </section>
  );
}