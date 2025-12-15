import Navbar from "@/app/_views/navbar.view";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="m-auto p-4 mt-[120px] bg-white rounded-xl xl:max-w-5xl">
        {children}
      </main>
    </div>
  );
}
