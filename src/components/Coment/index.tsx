import React from 'react'
import { ComentStyled } from './style'

interface PropsComent {
  name: string;
  img: string;
  comentario?: string
}


export const ComentImage: React.FC<PropsComent> = ({ img,name, comentario})=>{
  return (
    <ComentStyled>
      <img src={img} alt={`imagem do/a ${name}`}/>
      <h2>{name}</h2>
      {comentario && <p className="comentario">{comentario}</p>}
    </ComentStyled>
  )
}