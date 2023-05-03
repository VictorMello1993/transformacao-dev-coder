import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {

  const [ativo, setAtivo] = useState<number>(0);

  function alternarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1)
    }
    else {
      setAtivo(indice)
    }
  }

  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
      <Pergunta aberta={ativo === 0} indice={0} alternarVisibilidade={alternarVisibilidade} pergunta="O que é TypeScript?" resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <Pergunta aberta={ativo === 1} indice={1} alternarVisibilidade={alternarVisibilidade} pergunta="Quais são as principais funcionalidades do NextJs?" resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <Pergunta aberta={ativo === 2} indice={2} alternarVisibilidade={alternarVisibilidade} pergunta="Qual a diferença entre React.js e Angular?" resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <Pergunta aberta={ativo === 3} indice={3} alternarVisibilidade={alternarVisibilidade} pergunta="React.js é considerado Framework?" resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </div>
  )
}