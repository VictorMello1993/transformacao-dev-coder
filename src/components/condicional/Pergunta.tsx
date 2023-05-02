import { useState } from "react"

export default function Pergunta() {
  const [aberta, setAberta] = useState(false)
  return (
    <div className="border border-white rounded-md">
      <div className="bg-zinc-700 p-5 cursor-pointer">
        Pergunta
      </div>
      <div className="p-5">
        Resposta
      </div>
    </div>
  )
}