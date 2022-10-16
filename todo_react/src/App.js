import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import {Footer} from "./MyComponents/Footer";
import React, {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }




  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }


  const addTodo=(title,desc)=>{
    let s=1;
    if (todos.length>=1){
      s=todos.length+1;
    }
    const myTodo={
      sno:s,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);


  }



  const [todos, setTodos]=useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])




  return (
    <>
    <Router>
    <Header title="My todos list" searchBar={true}/>

    <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
          )
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>




    <Footer/>
    </Router>
    </>
  );
}

export default App;
