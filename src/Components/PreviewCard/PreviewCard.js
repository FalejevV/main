import React from "react";
import { Container, Page, Image, InfoBox, CategoryText, TitleText, AboutText, PriceBox, PriceText, CartButton, CartText, CartIcon } from "./PreviewCard.styled";

function PreviewCard(props){
    return (
        <Page>
            <Container maxWidth={props.maxWidth} maxHeight={props.maxHeight}>
                <Image src={props.image} />
                <InfoBox>
                    <CategoryText>PERFUME</CategoryText>
                    <TitleText>Gabrielle Essence Eau De Parfum</TitleText>
                    <AboutText>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</AboutText>
                    <PriceBox>
                        <PriceText>$149.99</PriceText>
                        <PriceText old>$169.99</PriceText>
                    </PriceBox>
                    <CartButton>
                        <CartIcon>
                            <path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/>
                        </CartIcon>
                        <CartText>Add to Cart</CartText>
                    </CartButton>
                </InfoBox>
            </Container>
        </Page>
    )
};

export default PreviewCard;