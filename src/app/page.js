"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  // const [state, setState] = useState(initialState);
  // Don't call inside loops, conditions, or nested functions.

  const [count, setCount] = useState(0);
  const [isvisible, setIsVisible] = useState(true);
  const [form, setForm] = useState({firstName:"Adrean", lastName:"Cajigas", age:"20"});

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {

    const newTodo = {
      id: todos.length + 1,
      text: input,
    }

    setTodos([todos, newTodo]);
    setInput("");
  }

  function ChangeNumber() {
    setCount(prevCount => prevCount + 1);
  }

  function ChangeVisibility() {
    setIsVisible(!isvisible);
  }

  function ChangeForm() {

    setForm(prevForm => { // curly braces are used for multiple statements
      return {            // return is also used for multiple statements 
        ...prevForm,            // the ... is used to create copies of arrays
        firstName: "Jonathon",
        lastName: "Barron",
        age: "49"
      };
    });
  }

  
  return (
    <main>
      {/* USE STATE EXAMPLE 1 */}
      <div className="flex flex-col items-center my-[4rem]"> 
      {isvisible ? ( 
      <p className="text-[2rem] text-center mb-[2rem]">Now you see me.</p>
      ):( 
        <p className="text-[2rem] text-center mb-[2rem]">Now you don't.</p>
      )}  
   
        <button className="border-4 border-black p-4"
        onClick={ChangeVisibility}>Change Visibility
        </button>
      </div>

      {/* USE STATE EXAMPLE 2 */}
      <div className="flex flex-col items-center my-[4rem]">
        <p className="text-[2rem] text-center mb-[2rem]">I have {count} siblings.</p>
        <button className="border-4 border-black p-4"
        onClick={ChangeNumber}>Add Sibling
        </button>
      </div>

      {/* USE STATE EXAMPLE 3 */}
      <div className="flex flex-col items-center my-[4rem]">
        <p className="text-[2rem] text-center mb-[2rem]">
          My name is {form.firstName} {form.lastName}. I am {form.age} years old.</p>
        <button className="border-4 border-black p-4"
        onClick={ChangeForm}>Change Person
        </button>
      </div>

      {/* USE STATE EXERCISE 1 */}
      <div className="my-[8rem]">
        <h1 className="font-[600] text-center text-[2rem]">Todo List</h1>
        <div className="flex justify-center gap-10 mt-[2rem]">
          <input className="border-4 border-black p-4" placeholder="Enter a Todo Item" onChange={(e)=>setInput(e.target.value)}></input>
          <button className="border-4 border-black p-4" onClick={addTodo}>Add Todo Item</button>
        </div>

        
        { todos.map((todo) => (

        <div className="flex justify-start gap-4 w-[25rem] mx-auto right-0 left-0 items-center mt-12"
        key={todo.id}>
          <input type="checkbox" className="w-[1.2rem] h-[1.2rem]"></input>
          <p className="text-[1.2rem]">{todo.text}</p>
        </div>

        ))}

      </div>


    
    </main>
  );
}
