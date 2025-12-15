import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { DicesIcon } from "lucide-react";

export function DrawControl({ onRaffling, winner }) {
  function handleDraw() {
    onRaffling();
  }
  return (
    <div className="flex flex-col pt-4 pb-4 text-center m-auto xl:w-xs">
      <label>Clique no botão abaixo para realizar o sorteio</label>
      <Button
        className="cursor-pointer bg-red-500 hover:bg-red-700"
        size="lg"
        onClick={handleDraw}
      >
        {winner ? "Sortear novamente" : "Sortear"}
        <DicesIcon />
      </Button>
    </div>
  );
}

export function DrawResult({ winner }) {
  return (
    <div className="flex flex-col pt-4 pb-4 text-center m-auto xl:w-xs">
      {winner ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Rifa <strong>#{winner.raffle_number}</strong>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent>
            <ul>
              <li>
                ID do Cliente: <strong>{winner.client_id}</strong>
              </li>
              <li>
                Fiilial: <strong>{winner.branch_id}</strong>
              </li>
              <li>
                Status: <strong>{winner.status}</strong>
              </li>
            </ul>
          </CardContent>
        </Card>
      ) : (
        <div className="flex items-center justify-center gap-4 cursor-progress"></div>
      )}
    </div>
  );
}
