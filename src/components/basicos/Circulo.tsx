interface CirculoProps {
  texto: string,
  quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
  return (
    <div className={`h-64 w-64 bg-cyan-500 rounded-full flex justify-center items-center text-black text-3xl 
                     font-black ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}`}>
      {props.texto}
    </div>
  )
}