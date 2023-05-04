import { IconBallFootball } from "@tabler/icons-react"
import TabelaSerieA from "../../components/listas/TabelaSerieA"

export default function PaginaListaBasica() {
  const tabelaSerieA = [
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
      <h1 className="flex items-center text-5xl font-black">Tabela Série A</h1>
      <IconBallFootball />
      <TabelaSerieA />
    </div>
  )
}