
interface Props{
    children:string;
    color?:'primary' | 'secondary' | "warning" | "info";
}

const Boton = ({children,color,} : Props) => {
  return (
    <button type="button" 
    className={"btn btn-"+color}
    onClick={() =>{
       
    }}
    >
        {children}</button>
  )
}

export default Boton