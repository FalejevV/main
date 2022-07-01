import React from "react";
import { BalanceTab, Container, LogoSvg, Page, TextContainer, Text, DataTab, ChartContainer, Divider, TotalContainer, MonthContainer, ComparisonContainer, ShuffleButton } from "./Expenses.styled";
import data from "./data.json";
import ChartBar from "./ChartBar";

function Expenses(){
    const[dataState,setDataState] = React.useState(data);
    const [selectedBar, setSelectedBar] = React.useState("");
    const maxValue = dataState.reduce((acc,item) => {
        return item.amount > acc ? item.amount : acc;
    }, 0)
    const bars = dataState.map((item, index) => 
    <ChartBar 
        key={index} 
        value={item.amount} 
        name={item.day} 
        height={item.amount / maxValue} 
        selected={index === selectedBar} 
        onClick={() => {
        if(selectedBar === index){
            setSelectedBar("");
        }else{
            setSelectedBar(index);
        }
        }} 
    />);

    function shuffleData(){
        setSelectedBar("");
        setDataState(prevData => prevData.map(dataItem => {
            return {
                ...dataItem,
                "amount" : Math.floor(Math.random() * 1000)
            }
        }))
    }
    return(
        <Page>
            <Container>
                <BalanceTab>
                    <TextContainer>
                        <Text>My balance</Text>
                        <Text fontSize="32px" fontWeight="700" mediaFont="28px">$921.48</Text>
                    </TextContainer>
                    <LogoSvg>
                        <g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23"/></g>
                    </LogoSvg>
                </BalanceTab>
                <DataTab>
                    <Text mediaFont="25px" marginBottom="65px" color="#37231A" fontWeight="700" fontSize="32px">Spending - Last 7 days</Text>
                    <ChartContainer>
                        {bars}
                    </ChartContainer>
                    <Divider />
                    <TotalContainer>
                        <MonthContainer>
                            <Text color="#b9b3ad">Total this month</Text>
                            <Text color="black" fontWeight="700" fontSize="45px" mediaFont="27px">$478.33</Text>
                        </MonthContainer>
                        <ComparisonContainer>
                            <Text color="black" fontWeight="700">+2.4%</Text>
                            <Text textAlign="right" color="#b9b3ad">from last month</Text>
                        </ComparisonContainer>
                    </TotalContainer>
                </DataTab>
                <ShuffleButton onClick={shuffleData}>Shuffle Data</ShuffleButton>
            </Container>
        </Page>
    )
}

export default Expenses;