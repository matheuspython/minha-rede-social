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
  

  return(
    <MainStyled>
      <div className="container">
        <input placeholder="digite as suas tarefas aqui" type="text" name="tarefa" onChange={onChange} /> 
        <button className="btn-enviar" onClick={adiciona} type="button">adicionar tarefa</button>   
     

      <ul className="tarefas">
        {
          tasks.map(val => (
            <li>
              <p>{val.tarefa}</p>
              <button className={val.stat === 'false'? "green" : "red" }>tarefa comprida?</button>   
            </li>
          ))
        }
      </ul>
      </div>
    </MainStyled>
    
  )
}