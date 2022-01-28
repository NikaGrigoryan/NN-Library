import styled from "styled-components";

export const StyledCard = styled.div`
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    max-width: 350px;
    width: 100%;
    overflow: hidden;
    /* color: blue; */
    .text{
        color: ${({color})=>color}
    }
    header{
        overflow: hidden;
        height: 200px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .cardSub{
        background-color: ${({backgroundColor})=> backgroundColor};
        padding: 22px 30px;
        p{
            color: ${({color})=>color};
            padding: 3px;
            margin: 3px;
        }
        div{
            margin-top: 16px;
            display: flex;
            align-items: center;
            .profilePicContainer{
                width: 60px;
                height: 60px;
                overflow: hidden;
                margin-right: 1rem;
                border-radius: 50%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .profileName{
                font-weight: bold;
            }
            .profiledate{
                color: #4d4d4d;
            }
        }
    }
    .cardSub > *{
    margin: 8px 0;
    }
`