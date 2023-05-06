import { IconBallFootball } from "@tabler/icons-react"
import TabelaSerieA from "../../components/listas/TabelaSerieA"

export default function PaginaListaBasica() {
  const times = [
    'Botafogo',
    'Fortaleza',
    'Palmeiras',
    'Internacional',
    'Fluminense',
    'Cruzeiro',
    'Grêmio',
    'São Paulo',
    'Vasco',
    'Atlético-MG'
  ]

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="flex items-center text-5xl font-black">
        <IconBallFootball size={50} stroke={1} className="text-green-400"  />
        Tabela Série A
      </h1>
      <TabelaSerieA times={times} />
    </div>
  )
}