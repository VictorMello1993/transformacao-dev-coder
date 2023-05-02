interface IfProps {
  teste: boolean
  children: any
}

export default function If(props: IfProps) {
  return props.teste ? props.children : null;
}