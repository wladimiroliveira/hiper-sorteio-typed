import { DrawController } from "@/app/_controllers/draw.controller";

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Sortear</h1>
      </div>
      <DrawController />
    </div>
  );
}
