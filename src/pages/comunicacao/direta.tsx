import Avo from "../../components/comunicacao/direta/Avo";

export default function PaginaDireta() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10 font-black">Comunicação direta</h1>
      <Avo nome="Fernando" sobrenome="Rocha Santos" />
      <Avo nome="Antônio" sobrenome="Barreiros de Mello" />
    </div>
  )
}