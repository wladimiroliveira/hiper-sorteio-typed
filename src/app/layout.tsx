import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
