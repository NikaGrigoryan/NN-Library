import styled from "styled-components";

const getSpinnerWidth = (size)=> {
    switch (true) {
        case (size < 15):
            return size / 3.5;
        case (size < 50):
            return size / 5;
        case (size < 100):
            return size / 7.5;
        case (size >= 100):
            return size / 10;
        default:
            return size / 10;
    }
}

export const StyledSpinner = styled.span`
    box-sizing: border-box;
    display: block;
    border: ${pr => getSpinnerWidth(pr.size)}px solid transparent;
    border-top: ${pr => getSpinnerWidth(pr.size)}px solid ${pr => pr.light ? 'lightgray' :  '#3d4ed1'};
    border-right: ${pr => getSpinnerWidth(pr.size)}px solid ${pr => pr.light ? 'lightgray' :  '#3d4ed1'};
    border-bottom: ${pr => getSpinnerWidth(pr.size)}px solid ${pr => pr.light ? 'lightgray' :  '#3d4ed1'};
    border-radius: 50%;
    width: ${pr => pr.size}px;
    height: ${pr => pr.size}px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const DarkBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #2c2c59;
`;