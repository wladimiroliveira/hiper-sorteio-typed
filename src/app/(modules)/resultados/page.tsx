import { columns, Raffle } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Raffle[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      raffle_number: "string",
      status: "string",
      client_id: 8,
      client_name: "Carlos",
      client_cpf: "06068954269",
      branch_id: 0,
      num_cupom: 123456,
      serie: 102,
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">Resultados</h1>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
