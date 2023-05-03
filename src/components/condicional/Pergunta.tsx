import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react"
import If from "./If";
import IfElse from "./IfElse";

interface PerguntaProps {
  pergunta: string;
  resposta: string;
  indice: number
  alternarVisibilidade: (indice: number) => void
  aberta: boolean
}

export default function Pergunta(props: PerguntaProps) {
  // const [aberta, setAberta] = useState(false)

  return (
    <div className="border border-zinc-600 rounded-md overflow-hidden">
      <div className="bg-zinc-800 p-5 cursor-pointer select-none flex justify-between"
        onClick={(event) => props.alternarVisibilidade(props.indice)}>
        <span>{props.pergunta}</span>
        {props.aberta ? <IconChevronDown /> : <IconChevronUp />}

        {/* OUTRA FORMA DE RENDERIZAÇÃO CONDICIONAL */}
        {/* <IfElse teste={aberta}>
          <IconChevronDown />
          <IconChevronUp />
        </IfElse> */}

      </div>
      <If teste={props.aberta}>
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