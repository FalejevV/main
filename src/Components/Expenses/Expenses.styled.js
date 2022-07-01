import styled from "styled-components";

export const Page = styled.div`
    width:100vw;
    height:100vh;
    background-color: #F7E9DC;

    padding:20px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    max-width: 540px;
    width:100%;
    height:fit-content;
    gap:23px;
`

export const BalanceTab = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width:100%;
    height:125px;
    background-color: #EC755D;
    border-radius:20px;
    padding:27px 25px;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
    padding-left: 8px;
`
export const Text = styled.p`
    color:${({ color }) => color || "white"};
    font-weight: ${({ fontWeight }) => fontWeight || "400"};
    font-size: ${({ fontSize }) => fontSize || "17px"};
    margin-bottom: ${({marginBottom}) => marginBottom || "0px" };
    text-align: ${({ textAlign }) => textAlign || "left"};

    ${({ mediaFont }) => mediaFont && `
        @media (max-width: 500px){
            font-size: ${mediaFont};
        }
    `}
`

export const LogoSvg = styled.svg`
    max-width: 74px;
    max-height: 50px;
    margin-right: 10px;
`

export const DataTab = styled.div`
    width:100%;
    height: 470px;
    border-radius:20px;

    background-color: #FFFCF7;
    padding:25px 35px;

    @media (max-width:400px){
        padding:20px 30px;
    }
`

export const ChartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 62px;

    @media (max-width:400px){
        margin-bottom: 42px;
    }
`

export const Divider = styled.hr`
    margin: 0 auto;
    width:96%;
    height:1px;
    background-color: #b9b3ad;
    opacity: 0.7;
    margin-bottom: 35px;

    @media (max-width:400px){
        margin-bottom: 20px;
    }
`

export const TotalContainer = styled.div`
    width:96%;
    height:70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const MonthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:50%;
    justify-content: space-between;
    height:100%;
`

export const ComparisonContainer = styled(MonthContainer)`
    align-items: flex-end;
    justify-content: flex-end;
`

export const ShuffleButton = styled.button`
    width:40%;
    height:50px;
    background-color:#EC755D;
    font-size:20px;
    border-radius: 15px;
    color:white;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        background-color: #FF9B87;
    }
`