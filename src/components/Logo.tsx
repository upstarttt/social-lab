import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center cursor-pointer overflow-visible mt-[-32px] mb-[-32px]">
      <Image
        src="/mi-logo.png"
        alt="Logo de Social Lab"
        width={112}
        height={112}
        className="h-28 w-auto"
      />
    </Link>
  );
} 