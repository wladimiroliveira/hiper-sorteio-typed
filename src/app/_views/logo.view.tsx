import Image from "next/image";

export default function LogoBlock() {
  return (
    <div className="bg-red-500 pr-[4px] pl-[2px] text-primary-foreground flex size-6 items-center justify-center rounded-md">
      <Image
        src="/logo-senna-block.svg"
        alt="Logo HiperSenna"
        width={38}
        height={28}
      />
    </div>
  );
}
