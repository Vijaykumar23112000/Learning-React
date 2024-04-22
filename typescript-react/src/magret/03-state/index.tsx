import { useState } from "react";

type Link ={
  id:number
  name:string
}

const NavLinks : Link[] = [
  {
    id:1,
    name:"Aaron"
  },
  {
    id:2,
    name:"Vj"
  },
  {
    id:3,
    name:"Ericka"
  },
  {
    id:4,
    name:"Aiden"
  },
  {
    id:5,
    name:"Mathew"
  },
]

const Component = () => {

  const [count, setCount] = useState<number>(0)
  const [list , setList] = useState<string []>([])
  const [links , setLinks] = useState<Link[]>(NavLinks)

  const increment = () => setCount(prev => prev + 1)

  const decrement = () => setCount(prev => prev - 1)

  const addItem = () => {
    const random = Math.random()*100
    setList([...list , random.toString()])
  }

  const addNavLinks = () => {
    setLinks([...links , {
      id:6,
      name:"Happy hanukkah"
    }])
  }

  return (
    <div>
      <h1>State</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addItem}>Add</button>
      <h1>Count Value : {count}</h1>
      <hr />
      {list.map((i , j)=> <p key={j}>{i}</p>)}
      <hr />
      <button onClick={addNavLinks}>Add Link</button>
      {links.map((i,j)=> <p key={j}>{i.id} and my name is {i.name}</p>)}
    </div>
  );
};

export default Component;
