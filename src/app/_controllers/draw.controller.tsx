"use client";

import { DrawControl, DrawResult } from "@/app/_views/draw.view";
import { useState } from "react";

export function DrawController() {
  const [winner, setWinner] = useState({
    id: 0,
    client_id: 0,
    nfc_key: "string",
    raffle_number: "string",
    branch_id: 0,
    status: "string",
    created_at: "2025-12-15T19:52:14.841Z",
    modified_at: "2025-12-15T19:52:14.841Z",
  });
  async function raffling() {}
  return (
    <>
      <DrawControl onRaffling={raffling} winner={winner} />
      <DrawResult winner={winner} />
    </>
  );
}
