import React,{ useEffect,useState } from "react";
import api from "../../services/api";

import './style'
import { MainStyled } from "./style";



export const Main = () => {
  const [tasks, setTasks] = useState([])
  const [inputText, setInputText] = useState('')

  useEffect(()=>{
    api.get('/').then(response => setTasks(response.data))
  },[])

  async function addTask(tarefa){
    const response = await api.post('/',{
      tarefa:tarefa,
      stat:false
    })

    const task = response.data
    setTasks([...tasks, task])
  }

  function onChange(ev){
    const { value } = ev.target
    setInputText(value)
  }

  function adiciona(){
    addTask(inputText)
  }
  
  async function muda(id){
    function tarefa(){
    const index = tasks.findIndex(task => task.id === id)
     console.log(tasks[index])
    }
     await api.put(`/${id}`, {
      tarefa: tarefa(),
      stat: true 
      });
    const index = tasks.findIndex(task => task.id === id)

    setTasks([...tasks])
  }

  return(
    <MainStyled>
      <div className="container">
        <input placeholder="digite as suas tarefas aqui" type="text" name="tarefa" onChange={onChange} /> 
        <button className="btn-enviar" onClick={adiciona} type="button">adicionar tarefa</button>   
     

      <ul className="tarefas">
        {
          tasks.map(val => (
            <li key={val.id}>
              <p>{val.tarefa}</p>
              <button onClick={muda(val.id)} className={val.stat === 'false'? "green" : "red" }>tarefa comprida?</button>   
            </li>
          ))
        }
      </ul>
      </div>
    </MainStyled>
    
  )
}