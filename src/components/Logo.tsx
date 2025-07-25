import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center cursor-pointer overflow-visible mt-[-32px] mb-[-32px]">
      <img
        src="/mi-logo.png"
        alt="Logo de Social Lab"
        className="h-28 w-auto"
      />
    </Link>
  );
} 