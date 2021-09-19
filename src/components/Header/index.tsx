import React from "react";
import { HeaderStyled } from "./style";

export const Header:React.FC = ()=>{
  return (
    <HeaderStyled>
      <div className="container">
        <h1>to do list</h1>
      </div>
    </HeaderStyled>

  )
}