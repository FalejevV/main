import React from "react";
import { Container, DataBlock, DataDivider, DataItem, DataTitle, DataValue, InputButton, InputContainer, InputField, Page, Title, TopBackground } from "./IPTracker.styled";
import topBackgroundImage from "./img/pattern-bg.png";
import Map from "./Map";

function IPTRacker(){
    const [location,setLocation] = React.useState({
        ip: "192.212.174.101",
        location:{
            region: "Brooklyn",
            city: "NY",
            postalCode: "10001",
            timezone: "-05:00",
            lat: 40.650002,
            lng: -73.949997,
        },
        isp: "SpaceX Starlink"
    })
    const[ip, setIp] = React.useState("");
    const[ipRequested, setIpRequested] = React.useState(false);
    React.useEffect(() => {
        if(ipRequested){
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_pc6TNvD8vdYp1ejUyAGGucXCn2edp&ipAddress=${ip}`)
            .then(res => res.json())
            .then(data => setLocation(data));
            setIpRequested(false);
        }
    }, [ipRequested, ip])
    function ipInputChange(e){
        setIp(e.target.value);
    }
    return(
        <Page>
            <Container>
                <TopBackground src={topBackgroundImage} />       
                <Title>IP Adress Tracker</Title> 
                <InputContainer>
                    <InputField value={ip} onChange={(e) => ipInputChange(e)} type="text" placeholder="Search for any IP address or domain"/>
                    <InputButton onClick={() => setIpRequested(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
                    </InputButton>
                </InputContainer>

                <DataBlock>
                    <DataItem>
                        <DataTitle>IP ADDRESS</DataTitle>
                        <DataValue>{location.ip}</DataValue>
                    </DataItem>
                    <DataDivider />
                    <DataItem>
                        <DataTitle>LOCATION</DataTitle>
                        <DataValue>{`${location.location.region},  ${location.location.city} ${location.location.postalCode}` }</DataValue>
                    </DataItem>
                    <DataDivider />
                    <DataItem>
                        <DataTitle>TIMEZONE</DataTitle>
                        <DataValue>UTC {location.location.timezone}</DataValue>
                    </DataItem>
                    <DataDivider />
                    <DataItem>
                        <DataTitle>ISP</DataTitle>
                        <DataValue>{location.isp}</DataValue>
                    </DataItem>
                </DataBlock>
                {location.location.lat && <Map location={location}/>}
                
            </Container>
        </Page>
    )
}

export default IPTRacker;