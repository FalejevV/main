import React from "react";
import { Column, ColumnsContainer, IconImage, Page, Title, Text, Button } from "./Columns.styled";
import sedanIcon from "./img/icon-sedans.svg";
import suvsIcon from "./img/icon-suvs.svg";
import luxuryIcon from "./img/icon-luxury.svg";
function Columns(){
    return(
        <Page>
            <ColumnsContainer>
                <Column mainColor="#E28525">
                    <IconImage src={sedanIcon} />
                    <Title>SEDANS</Title>
                    <Text>
                        Choose a sedan for its affordability and excellent
                        fuel economy. Ideal for cruising in the city or on
                        your next road trip.
                    </Text>
                    <Button mainColor="#E28525">Learn More</Button>
                </Column>
                    
                <Column mainColor="#016972">
                    <IconImage src={suvsIcon} />
                    <Title>SUVS</Title>
                    <Text>
                        Take and SUV for its spacious interior, power, and versatility.
                        Perfect for your next family vacation and off-road adventures.
                    </Text>
                    <Button mainColor="#016972">Learn More</Button>
                </Column>

                <Column mainColor="#00403F">
                    <IconImage src={luxuryIcon} />
                    <Title>LUXURY</Title>
                    <Text>
                        Cruise in the best car brands without the bloated prices.
                        Enjoy the enhanced comfort of a luxury rental and arrive in style
                    </Text>
                    <Button mainColor="#00403F">Learn More</Button>
                </Column>
            </ColumnsContainer>
        </Page>
    )
}
export default Columns;