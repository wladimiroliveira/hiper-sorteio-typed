import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary pr-[4px] pl-[2px] text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Image
              src="/logo-senna-block.svg"
              alt="Logo HiperSenna"
              width={38}
              height={28}
            />
          </div>
          GHS Sistema
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
