import React from "react";
import { Container, WTFImage, WTFText } from "./Homepage.styled";
import catImage from "./img/sorry.jpg";

function Homepage(){
    const [catHover, setCatHover] = React.useState(false);

    function setHover(value){
        setCatHover(value)
    }
    return(
        <Container>
            <WTFText onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>I haven't decided what to put here...</WTFText>
            {catHover && <WTFImage onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} src={catImage} />}
        </Container>
    )
}

export default Homepage;