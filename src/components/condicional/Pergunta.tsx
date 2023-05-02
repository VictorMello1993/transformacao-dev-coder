import { useState } from "react"
import If from "./If";

interface PerguntaProps {
  pergunta: string;
  resposta: string;
}

export default function Pergunta(props: PerguntaProps) {
  const [aberta, setAberta] = useState(false)
  return (
    <div className="border border-zinc-600 rounded-md overflow-hidden">
      <div className="bg-zinc-800 p-5 cursor-pointer select-none"
        onClick={(event) => setAberta(!aberta)}>
        {props.pergunta}
      </div>
      <If teste={aberta}>
        <div className="p-5">
          {props.resposta}
        </div>
      </If>
      {/* {aberta && (
        <div className="p-5">
          {props.resposta}
        </div>
      )} */}

    </div>
  )
}