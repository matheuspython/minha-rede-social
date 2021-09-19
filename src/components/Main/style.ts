import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    .container{
      width: 100%;
      max-width: 768px;
      padding: 0 2%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
     

      

      textarea{
        border: 0;
        outline: 0;

        font-size: 18px;
        resize: none;
        margin: 20px;
        width: 300px;
        height: 45px;
        padding: 8px;
        background-color: #fff;
        width: 100%;

        height: 180px;
      }
      .btn-enviar{
        border: 0;
        width: 280px;
        height: 40px;
        cursor: pointer;
        border-radius: 12px;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #2c97d4;
        transition: all .4s;
        &:hover{
          background-color: #1a79af;
        }
      }
      .tarefas{
        margin: 0 auto;
        width: 100%;
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        li{
          margin: 3px 0;
          width: 100%;
          max-width: 768px;
          display: flex;
          flex-direction: column;
        
        
          p{
            width: 100%;
            background-color: white;
            padding: 3px;
            min-height: 30px;
          }

        }
      }
    }

`