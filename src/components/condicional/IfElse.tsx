interface IfElseProps {
  teste: boolean
  children: any
}

export default function IfElse(props: IfElseProps) {
  return props.teste ? props.children[0] : props.children[1];
}