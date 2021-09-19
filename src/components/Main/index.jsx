import React,{ useEffect,useState } from "react";
import api from "../../services/api";
import { ComentImage } from "../Coment";

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
      <ComentImage
       img="https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142838450" alt="img de perfil"
       name="sheiliane silva"
       comentario="que ferias de verão sensacional 💜 foi incrivel e tive experiencias otimas voltei renovada" />

        <img className="post" src="https://blog.bemmaisseguro.com/wp-content/uploads/2014/12/seguro-viagem-bemmaisseguro.com_.jpg" alt="imagem de ferias na praia" />
        <textarea placeholder="comente aqui" type="text" name="tarefa" onChange={onChange} >
        </textarea> 
        <button className="btn-enviar" onClick={adiciona} type="button">adicionar comentario</button>   
     

      <ul className="tarefas">
        {
          tasks.map(val => (
            <li key={val.id}>
             <ComentImage
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjoM3ZAMPmJ23rJQ7r8i4jz2B0-BjZyo-Gg&usqp=CAU" alt="img perfil"
              name="nick"
             />
              <p>{val.tarefa}</p>
            </li>
          ))
        }
      </ul>
      </div>
    </MainStyled>
    
  )
}