import  { type PropsWithChildren } from "react";

// type ComponentProps = {
//     name:string
//     id:number
//     children?:React.ReactNode
// }

type ComponentProps = PropsWithChildren< {
    name:string
    id:number
}>

const Component = (props : ComponentProps) => {
  return (
    <div>
      <h1>Props</h1>
      <h3>I'm {props.name} and my id is {props.id}</h3>
      <p>{props.children}</p>
    </div>
  );
};

export default Component;
