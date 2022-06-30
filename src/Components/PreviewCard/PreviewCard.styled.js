import styled from "styled-components";

const PHONE_SIZE_MEDIA = "375px";

export const Page = styled.div`
    width:100vw;
    height:100vh;
    background-color: hsl(30, 38%, 92%);
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap');
`
export const Container = styled.div`
    display: flex;
    
    border-radius: 10px;
    width:100%;
    height:100%;
    max-width:${({ maxWidth }) => maxWidth || "500px"};
    max-height: ${({ maxHeight }) => maxHeight || "450px"};
    background-color: white;
    overflow: hidden;

    @media (max-width: ${PHONE_SIZE_MEDIA}){
        flex-direction: column;
        max-height:611px;
        height:fit-content;
    }
`

export const Image = styled.img`
    object-fit: cover;
    width:50%;
    transition: all 1s;
    @media (max-width: 485px){
        width: 40%;
    }

    @media (max-width: ${PHONE_SIZE_MEDIA}){
        width:100%;
        height:240px;
        object-position: 0 40%;
    }

    @media (max-width: calc(${PHONE_SIZE_MEDIA} - 30px)){
        height:190px;
        object-position: 0 35%;
    }
`

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:50%;
    padding:32px;

    @media (max-width: 600px) and (min-width:${PHONE_SIZE_MEDIA}){
        padding:25px;
    }

    transition: all 1s;

    @media (max-width: 485px) and (min-width:${PHONE_SIZE_MEDIA}){
        width: 60%;
    }

    @media (max-width: ${PHONE_SIZE_MEDIA}){
        width:100%;
        padding: 24px;
    }

    @media(max-height: 480px){
        overflow: scroll;
        overflow-x: hidden;
    }
`

export const CategoryText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;

    letter-spacing: 5px;

    color: #6C7289;
    margin-bottom: 10px;
`

export const TitleText = styled.h2`
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    
    color: #1C232B;


    margin-bottom: 24px;
    transition: all 1s;

    @media (max-width: 600px) and (min-width:${PHONE_SIZE_MEDIA}){
        margin-bottom: 12px;
        font-size: 28px;
    }

    @media (max-width: 430px) and (min-width:${PHONE_SIZE_MEDIA}){
        font-size: 25px;
    }

    @media (max-width: ${PHONE_SIZE_MEDIA}){
        margin-bottom: 16px;
    }
`

export const AboutText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;

    color: #6C7289;
    
    margin-bottom:25px;
    transition: all 1s;

    @media (max-width: 530px) and (min-width:${PHONE_SIZE_MEDIA}){
        line-height: 20px;
    }

    @media (max-width: 430px) and (min-width:${PHONE_SIZE_MEDIA}){
        margin-bottom:15px;
    }

    @media (max-width: ${PHONE_SIZE_MEDIA}){
        margin-bottom: 24px;
    }
`

export const PriceBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;

    @media (max-width: 530px) and (min-width:${PHONE_SIZE_MEDIA}){
        margin-bottom: 15px;
    }

    @media (max-width: ${PHONE_SIZE_MEDIA}){
        margin-bottom: 20px;
    }
`

export const PriceText = styled.div`
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;

    color: #3D8168;

    @media (max-width: 600px) and (min-width:${PHONE_SIZE_MEDIA}){
        font-size: 28px;
    }

    @media (max-width: 530px) and (min-width:375px){
        font-size: 24px;
    }

    ${({ old }) => old && `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;

        text-decoration-line: line-through;

        color: #6C7289;

        @media (max-width: 600px) and (min-width:${PHONE_SIZE_MEDIA}){
            font-size: 12px;
        }
    `}

    
`

export const CartButton = styled.button`
    background-color: #3D8168;
    border-radius: 8px;
    width:100%;
    min-height:48px;
    max-height:48px;
    display: flex;
    justify-content: center;
    align-items: center;

    gap:12px;

    cursor: pointer;

    transition: all 0.3s;
    &:hover{
        background-color: #1A4032;
    }

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
`
export const CartIcon = styled.svg`
    width:14px;
    height:16px;
    fill:white;
`