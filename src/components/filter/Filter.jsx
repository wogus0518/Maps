import "./filter.css"
import { useState, useEffect } from 'react';
import CheckBoxYoutuber from '../checkbox/CheckBoxYoutuber.jsx'
import CheckBoxCategory from '../checkbox/CheckBoxCategory.jsx'

function Filter({ setYoutuberFilterResult, setCategoryFilterResult }) {

    const [youtuberFilter, setYoutuberFilter] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState(false);

    let youtuberList = [];
    let categoryList = [];

    const [youtubers, setYoutubers] = useState({
        섬마을훈태: false,
        먹적: false,
        윤호찌: false,
        지뉼랭가이드: false,
    });
    const [categories, setCategories] = useState({
        한식: false,
        일식: false,
        양식: false,
        중식: false,
        고기집: false,
        횟집: false
    });

    function clickYoutuber() {
        setYoutuberFilter(true);
        setCategoryFilter(false)
    }
    function clickCategory() {
        setYoutuberFilter(false);
        setCategoryFilter(true)
    }
    function searchClick(){
        for (const [key, value] of Object.entries(youtubers)) {
            if(value){
                youtuberList.push(key)
            }
        }
        setYoutuberFilterResult(youtuberList)
        for (const [key, value] of Object.entries(categories)) {
            if(value){
                categoryList.push(key)
            }
        }
        setCategoryFilterResult(categoryList)
    }
    return (
        <div className="filterContainer">
            <button className="button-18" onClick={clickYoutuber}>유튜버 채널명</button>
            <button className="button-18" onClick={clickCategory}>카테고리</button>
            <button className="button-18" onClick={searchClick}>검색</button>
            {
                youtuberFilter
                && <CheckBoxYoutuber youtubers={youtubers} setYoutubers={setYoutubers}/>
            }
            {
                categoryFilter
                && <CheckBoxCategory categories={categories} setCategories={setCategories}/>
            }
        </div>
    )

}

export default Filter;