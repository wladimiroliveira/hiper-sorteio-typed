"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Raffle = {
  id: Number;
  raffle_number: String;
  status: String;
  client_id: Number;
  client_name: String;
  client_cpf: String;
  branch_id: Number;
  num_cupom: Number;
  serie: Number;
};

export const columns: ColumnDef<Raffle>[] = [
  {
    accessorKey: "id",
    header: "ID da Rifa",
  },
  {
    accessorKey: "raffle_number",
    header: "Rifa",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "client_id",
    header: "ID do Cliente",
  },
  {
    accessorKey: "client_name",
    header: "Nome do Cliente",
  },
  {
    accessorKey: "client_cpf",
    header: "CPF do Cliente",
  },
  {
    accessorKey: "branch_id",
    header: "Filial",
  },
  {
    accessorKey: "num_cupom",
    header: "Nº Cupom",
  },
  {
    accessorKey: "serie",
    header: "Série",
  },
];
