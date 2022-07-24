import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 150px;
    height:185px;
    overflow: hidden;
    font-family: 'Red Hat Text', sans-serif;
    user-select: none;

    @media screen and (max-width:800px) {
        max-width: 80px;
        max-height: 100px;
    }
`
const TabElement = styled.div`
    height: 140px;
    width:100%;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2C2C44;
    position: relative;

    -webkit-box-shadow: 0px 10px 0px 0px rgba(0,0,0,0.3); 
    box-shadow: 0px 10px 0px 0px rgba(0,0,0,0.3);
    @media screen and (max-width:800px) {
        max-height: 75px;
        -webkit-box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.3); 
        box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.3);
    }
    
    &:before{
        position: absolute;
        content: "";
        width:12px;
        height:12px;
        background-color: black;
        border-radius: 50%;
        left:-5px;
        right:0;
        z-index: 100;

    }

    &:after{
        position: absolute;
        content: "";
        width:12px;
        height:12px;
        background-color: black;
        border-radius: 50%;
        right:-5px;
        z-index: 100;
    }

    @media screen and (max-width:800px) {
        &::before, &::after{
            width:8px;
            height:8px;
        }
    }
`

const TabText = styled.p`
    font-size: 80px;
    color:#D84C71;
    position: relative;
    z-index: 1;

    @media screen and (max-width:800px) {
        font-size: 40px;
    }

`

const TabCrease = styled.div`
    position: absolute;
    width:100%;
    height:70px;
    bottom: 0;
    left:0;
    background-color: rgba(255, 255, 255, 0.05);
    z-index: 2;
    border-top: 1px solid rgba(255, 255, 255, 0.051);

    @media screen and (max-width:800px) {
        max-height: 38px;
    }

`
const TabTitle = styled.p`
    color:#8A8AA6;
    font-size: 14px;
    letter-spacing: 5px;

    @media screen and (max-width:800px) {
        font-size: 8px;
        letter-spacing: 3px;
    }
`


function TimerElement(props){
    let timeValue = props.value.toString().length === 1 ? "0" + props.value.toString() : props.value
    return(
        <Container>
            <TabElement>
                <TabText>{timeValue}</TabText>
                <TabCrease></TabCrease>
            </TabElement>
            <TabTitle>{props.title}</TabTitle>
        </Container>
    )
}

export default TimerElement;