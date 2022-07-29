import React from "react";
import { Container, HeaderImage, List, Page } from "./JobListings.styled";

import headerDesktop from "./img/bg-header-desktop.svg";
import headerMobile from "./img/bg-header-mobile.svg";
import ListItem from "./ListItem";
import data from "./data.json";
import SearchBar from "./SearchBar";
import { nanoid } from "nanoid";

function JobListings(){
    const [tagList, setTaglist] = React.useState(["Frontend", "CSS", "JavaScript"]);
    const [width, setWidth] = React.useState(window.innerWidth);
    function addTag(tagName){
        if(!tagList.find(item => item === tagName)){
            setTaglist(prevTaglist => {
                let newList = [...prevTaglist];
                newList.push(tagName);
                return newList;
            })
        }
    }

    React.useEffect(() => {
        window.addEventListener('resize', function(event) {
            setWidth(window.innerWidth);
        }, true);

        return () => {
            window.removeEventListener('resize', function(event) {
                setWidth(window.innerWidth);
            }, true);
        }
    },[])

    function removeTag(tagName){
        if(tagList.find(item => item === tagName)){
            setTaglist(prevTaglist => prevTaglist.filter(item => item !== tagName));
        }
    }

    function clearTags(){
        setTaglist([]);
    }

    function getSearchTags(item){
        let tags = []
        tags.push(item.role);
        tags.push(item.level);
        tags.push(...item.languages);
        return tags;
    }


    function getFilteredItems(){
        if(tagList.length === 0) {
            return data;
        }else{
            return data.filter(dataItem => {
                let dataTags = getSearchTags(dataItem);
                let tagsPassed = true;
                tagList.forEach(tag => {
                    if(!dataTags.includes(tag)){
                        tagsPassed = false;
                    }
                })
                if (tagsPassed){
                    return dataItem;
                }else{
                    return null;
                }
            })
        }
    }
    return(
        <Page>
            <Container>
                <picture>
                    <source srcSet={headerDesktop} media="(min-width:375px)" />
                    <HeaderImage src={headerMobile} alt="header" />
                </picture>

                {tagList.length > 0 && <SearchBar clearTags={clearTags} removeTag={removeTag} tags={tagList} />}

                <List shiftDown={tagList.length > 0}>
                    {getFilteredItems().map((item) => {
                        return <ListItem hr={width <= 950} key={nanoid()} addTag={addTag} data={item} />
                    })}
                </List>
            </Container>
        </Page>
    )
}

export default JobListings;