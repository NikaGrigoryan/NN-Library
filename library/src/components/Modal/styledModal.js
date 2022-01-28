import styled from "styled-components";

export const StyledModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    .modalContainer{
        width: 250px;
        height: 250px;
        border-radius: 12px;
        background-color: ${({backgroundColor})=> backgroundColor};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;
        padding: 25px;
        z-index: 2;
        opacity: 100;
        color: ${({color})=>color};
        z-index: 1;

    .title{
        display: inline-block;
        text-align: center;
        margin-top: 10px;
    }
    .body{
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        text-align: center;
    }
    .footer{
        flex: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        button{
            width: 90px;
            height: 35px;
            margin: 13px;
            border: none;
            background-color: ${({continueBtnColor})=>continueBtnColor};
            color: ${({color})=>color};
            border-radius: 8px;
            font-size: 15px;
            cursor: pointer;
        }
    }

    .titleCloseBtn {
    display: flex;
    justify-content: flex-end;

    button{
        background-color: transparent;
        border: none;
        font-size: 13px;
        cursor: pointer;
        color: ${({color})=>color};
    }
   }
   }
   #cancelBtn {
    background-color: ${({cancelBtnColor})=>cancelBtnColor};
    color: ${({color})=>color};
  }
`