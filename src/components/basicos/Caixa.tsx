export default function Caixa(props: any) {
  return (
    <div className="bg-purple-500 flex justify-center items-center rounded-md p-2 w-64 h-64 text-xl font-bold">
      {props.children}
    </div>
  )
}