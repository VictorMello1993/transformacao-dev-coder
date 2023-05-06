interface TabelaSerieAProps {
  times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
  return (
    <ol>
      {props.times.map((time, index) => {
        return (
          <li key={index}
              className={`text-xl list-decimal ${index % 2 === 0 ? 'text-blue-500' : 'text-yellow-400'}`}>{time}</li>
        )
      })}
    </ol>
  )
}