import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100%;
    padding: 10px 0;
    .container{
      width: 100%;
      max-width: 1280px;
      padding: 0 2%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      input{
        border: 0;
        width: 300px;
        height: 45px;
        padding-left: 15px;
        border-radius: 12px;
        background-color: #fff;
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
        margin: 8px 0;
        &:hover{
          margin: 12px 0;
          background-color: #1a79af;
        }
      }
      .tarefas{
        margin: 0 auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        li{
          margin: 3px 0;
          height: 35px;
          width: 100%;
          max-width: 768px;
          align-items: center;
          justify-content: space-between;
          p{
            height: 100%;
            width: 80%;
            display: inline-block;
            
          }
          button{
            height: 100%;
            width: 20%;
            cursor: pointer;
            display: inline-block;
            border: 0;
            border-radius: 12px;
            color: white;
            text-transform: uppercase;
          }
        
          .red{
          background-color: #eb4c4c;
        }
        .green{
          background-color: green;
        }



        }
      }
    }

`