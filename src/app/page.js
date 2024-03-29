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
  const [todoInput, setTodoInput] = useState("")

function addTodo()
{
  const newTodo = {
    id: todos.length + 1,   
    text: todoInput,
  };

  setTodos([...todos, newTodo]);
  setTodoInput("")
}

const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
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
      <h1 className="text-center font-[600] text-[2rem] mt-[8rem]">To-do List</h1>
      <div className="my-[4rem]">
        <div className="flex justify-center gap-8">
          <input type="text" className="border-4 border-black p-4" 
          placeholder="Enter a new item"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}></input>
          <button className="border-4 border-black p-4"
          onClick={addTodo}>Add to List</button>
        </div>


        {/* todos is the array, map is the array method, todo is the paramter */}
        {todos.map((todo) => (
        <div className="flex justify-start items-center gap-4 mt-[3rem] w-[23rem] mx-auto right-0 left-0"
        key={todo.id}>
          <input type="checkbox" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => removeTodo(todo.id)}></input>
          <p className="text-[1.5rem]">{todo.text}</p>
        </div>
        ))}  

      </div>
    </main>
  );
}
