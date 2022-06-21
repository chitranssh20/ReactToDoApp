import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
let initTodo;
if(localStorage.getItem('todos')===null){
  initTodo= []
}
else{
  initTodo= JSON.parse(localStorage.getItem('todos'));
}
  const onDelete = (todo)=>{
  console.log("I am one delehe of todo", todo)
  // let index= todos.indexOf(todo);
  // todos.slice(index, 1); 
  setTodos(todos.filter((e)=>{
    return e!== todo;
  }))  
  localStorage.setItem('todos', JSON.stringify(todos) );
  
}
const addTodo= (title, desc) =>{
  let sno;
  if(todos.length==0){
    sno=0
  }
  else{

 
   sno= todos[todos.length-1].sno
  } 
  console.log("The titlle and desc is ", title, desc)
  const myTodo= {
    title: title,
    desc: desc,
    sno: sno+1
  }
  setTodos([...todos, myTodo])
  console.log(myTodo);
 
}
const [todos, setTodos]= useState(initTodo)

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])

  return (
    <>
    
    <Router>
    <Header title= "ToDO List" searchBar= {true} /> 

    <Switch>
      <Route exact path='/' render= {()=>{
        return(
          <>
          <AddTodo addTodo= {addTodo} />
          <Todos todos= {todos} onDelete= {onDelete} />
          </>
        )
      }} >
      
      </Route>
      <Route exact path= '/about' render = {()=>{
        return (
          <About />
        )
      }} >

      </Route>
    </Switch>
    
    

    <Footer />
    </Router>
    </>
  );
}

export default App;
