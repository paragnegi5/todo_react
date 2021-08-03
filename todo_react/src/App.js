import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";



function App() {
  const onDelete=(todo)=>{
    console.log("I am onDelete of todo ",todo);
  }




  let todos=[
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market"
    },

    {
      sno:2,
      title:"Go to the gym",
      desc:"You need to go to the gym"
    },

    {
      sno:3,
      title:"Go to the mall",
      desc:"You need to go to the mall"
    }
  ]





  return (
    <>
    <Header title="My todos list" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
