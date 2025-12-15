"use client";

import LogoBlock from "@/app/_views/logo.view";
import { CircleUserIcon } from "lucide-react";
import Link from "next/link";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, .9)"],
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  return (
    <motion.div
      id="navigation"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background,
        height,
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="flex w-full justify-between xl:max-w-5xl m-auto p-4">
        <Link href="/home">
          <LogoBlock />
        </Link>
        <ul className="flex gap-4">
          {/* <li className="transition-colors hover:text-gray-400">
            <Link href="/home">Home</Link>
          </li> */}
          <li className="transition-colors hover:text-gray-400">
            <Link href="/sortear">Sortear</Link>
          </li>
          <li className="transition-colors hover:text-gray-400">
            <Link href="/resultados">Resultados</Link>
          </li>
        </ul>
        <div className="bg-red-500 p-1 text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <CircleUserIcon />
        </div>
      </div>
    </motion.div>
  );
}
