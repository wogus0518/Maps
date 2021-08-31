import "./input.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import { useRef, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import fire from "../../firebaseInit";
const db = fire.firestore();

function Input({isLoggedIn}) {
    const { youtuber } = useParams();
    const [seslectedCategory, setSelectedCategory] = useState(null);
    const [postNumber, setPostNumber] = useState();

    const latitude = useRef();
    const longitude = useRef();
    const address = useRef();
    const storeName = useRef();
    const youtubeLink = useRef();
    const category = useRef();
    let pinColor = "";
    async function setPostNum(){
        await db.collection("Post").doc("PostNum").update({
            postNum: postNumber+1
        })
    }
    async function getPostNum(){
        await db.collection("Post").doc("PostNum").get().then((doc)=>{
            setPostNumber(doc.data()["postNum"]);
        })
    }    
    useEffect(()=>{
        getPostNum()
    },[])

    async function onSubmit(event) {
        event.preventDefault();
        if(seslectedCategory){
            console.log(seslectedCategory)
            if(seslectedCategory === "한식"){pinColor = "red"}
            else if(seslectedCategory === "일식"){pinColor = 'orange'}
            else if(seslectedCategory === "양식"){pinColor = 'yellow'}
            else if(seslectedCategory === "중식"){pinColor = 'green'}
            else if(seslectedCategory === "고기집"){pinColor = 'blue'}
            else if(seslectedCategory === "횟집"){pinColor = 'purple'}
    
            await db.collection(`${youtuber}`).add({
                latitude: Number(latitude.current.value),
                longitude: Number(longitude.current.value),
                address: address.current.value,
                storeName: storeName.current.value,
                youtubeLink: youtubeLink.current.value,
                youtuber: youtuber,
                category: category.current.value,
                color: pinColor,
                postNum: postNumber+1
            })
            .then((docRef) => {
                console.log("Document successfully written!",  docRef.id);
                setPostNum();
                alert("Success");
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }else{
            alert("카테고리를 선택해주세요!")
        }
    }

    return (
        <div>
            <Topbar isLoggedIn={isLoggedIn}/>
            <div className="formContainer">
                <form onSubmit={onSubmit} className="inputGroup">
                    <h1 className="title">장소 등록</h1>
                    <input placeholder="Youtuber" type="youtuber" className="placeInput" value={youtuber} disabled={true} required/>
                    <div className="btnContainer">
                        <div className="btnBox">
                            <button className="categoryBtn" type="button" onClick={function onClick(){setSelectedCategory("한식")}}>한식</button>
                            <button className="categoryBtn" type="button" onClick={function onClick(){setSelectedCategory("일식")}}>일식</button>
                            <button className="categoryBtn" type="button" onClick={function onClick(){setSelectedCategory("양식")}}>양식</button>
                            <button className="categoryBtn" type="button" onClick={function onClick(){setSelectedCategory("중식")}}>중식</button>
                            <button className="categoryBtn" type="button" onClick={function onClick(){setSelectedCategory("고기집")}}>고기집</button>
                            <button className="categoryBtn" type="button" onClick={function onClick(){setSelectedCategory("횟집")}}>횟집</button>
                        </div>
                        <input placeholder="Click the Category" type="category" className="placeInput" ref={category} value={seslectedCategory} disabled={true} required/>
                    </div>
                    <input placeholder="Latitude" type="float" className="placeInput" ref={latitude} required />
                    <input placeholder="Longitude" type="float" className="placeInput" ref={longitude} required />
                    <input placeholder="Address" type="address" className="placeInput" ref={address} required />
                    <input placeholder="Store Name" type="storeName" className="placeInput" ref={storeName} required />
                    <input placeholder="Youtube Link" type="youtubeLink" className="placeInput" ref={youtubeLink} required/>

                    <button className="button-33" type="submit">등록</button>
                </form>
            </div>
        </div>
    )

}

export default Input;