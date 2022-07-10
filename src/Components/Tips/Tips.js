import React from "react";
import InputField from "./InputField";
import { CalculatorContainer, Container, Page, ResetButton, ResultContainer, Title } from "./Tips.styled";
import iconDollar from "./img/icon-dollar.svg";
import iconPerson from "./img/icon-person.svg";
import TipsSelection from "./TipsSelection";
import ResultValue from "./ResultValue";

function Tips(){
    const [data, setData] = React.useState({
        bill: "",
        tip: "",
        customTip: "",
        people: ""
    });
    const [tipAmount, setTipAmount] = React.useState("0.00");
    const [total,setTotal] = React.useState("0.00");

    function updateData(e,name){
        setData(prevData => {
            return {
                ...prevData,
                [name]: e.target.value,
            }
        });
    }

    function selectTip(value){
        setData(prevData => {
            return {
                ...prevData,
                "tip": value,
                "customTip": "",
            }
        });
    }

    function selectCustomTip(e){
        setData(prevData => {
            return {
                ...prevData,
                "tip": "",
                "customTip": e.target.value,
            }
        })
    }
    
    function resetData(){
        setData({
            bill: "",
            tip: "",
            customTip: "",
            people: ""
        });
    }
    React.useEffect(() => {
        try{
            if(data.people !== "" && Number(data.people) > 0){
                if(data.tip !== ""){
                    setTipAmount(((data.bill / 100 * Number(data.tip)) / data.people) || "0.00");
                }else if (data.customTip !== ""){
                    setTipAmount(((data.bill / 100 * Number(data.customTip)) / data.people) || "0.00");
                }
            }else{
                setTotal("0.00")
                setTipAmount("0.00");
            }
            if(data.people !== "" & Number(data.people) > 0){
                setTotal(Number(data.bill) / Number(data.people) + Number(tipAmount) || "0.00")
            }else{
                setTotal("0.00")
                setTipAmount("0.00");
            }
        }catch(e){
            setTotal("0.00")
            setTipAmount("0.00");
        }
    }, [data,tipAmount])
       return(
        <Page>
            <Title>SPLI<br/>TTER</Title>
            <Container>
                <CalculatorContainer>
                    <InputField title="Bill" onChange={updateData} value={data.bill} name="bill" icon={iconDollar} />
                    <TipsSelection setCustomTip={selectCustomTip} customValue={data.customTip} onClick={selectTip} value={data.tip} />
                    <InputField noZero title="Number of People" onChange={updateData} value={data.people} name="people" icon={iconPerson} />
                </CalculatorContainer>

                <ResultContainer>
                    <ResultValue title="Tip Amount" subtitle="/ person" result={`$${Number(tipAmount).toFixed(2)}`}/>
                    <ResultValue fat title="Total" subtitle="/ person" result={`$${Number(total).toFixed(2)}`}/>
                    <ResetButton active={data.bill !== "" || data.tip !== "" || data.customTip !== "" || data.people || ""} onClick={resetData}>RESET</ResetButton>
                </ResultContainer>
            </Container>
        </Page>
    )
}

export default Tips;