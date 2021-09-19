import React from 'react'
import { ComentStyled } from './style'

interface PropsComent {
  name: string;
  img: string;
  comentario?: string
}

/* <div className="coment">
  

</div> */

export const ComentImage: React.FC<PropsComent> = ({ img,name, comentario})=>{
  return (
    <ComentStyled>
      <img src={img} />
      <h2>{name}</h2>
      {comentario && <p className="comentario">{comentario}</p>}
    </ComentStyled>
  )
}