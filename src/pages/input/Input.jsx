import "./input.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import { useRef } from 'react';
import fire from "../../firebaseInit";
const db = fire.firestore();

function Input({isLoggedIn}) {
    const latitude = useRef();
    const longitude = useRef();
    const address = useRef();
    const storeName = useRef();
    const youtubeLink = useRef();
    const youtuber = useRef();
    const category = useRef();
    let pinColor = "";

    async function onSubmit(e) {
        e.preventDefault();
        if(category.current.value === "한식"){pinColor = "red"}
        else if(category.current.value === "일식"){pinColor = 'orange'}
        else if(category.current.value === "양식"){pinColor = 'yellow'}
        else if(category.current.value === "중식"){pinColor = 'green'}
        else if(category.current.value === "고기집"){pinColor = 'blue'}
        else if(category.current.value === "횟집"){pinColor = 'purple'}

        await db.collection(`${youtuber.current.value}`).add({
            latitude: Number(latitude.current.value),
            longitude: Number(longitude.current.value),
            address: address.current.value,
            storeName: storeName.current.value,
            youtubeLink: youtubeLink.current.value,
            youtuber: youtuber.current.value,
            category: category.current.value,
            color: pinColor
        })
        .then((docRef) => {
            console.log("Document successfully written!",  docRef.id);
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
    return (
        <div>
            <Topbar isLoggedIn={isLoggedIn}/>
            <div className="formContainer">
                <form onSubmit={onSubmit} className="inputGroup">
                    <h1 className="title">장소 등록</h1>
                    <input placeholder="Latitude" type="float" className="placeInput" ref={latitude}  />
                    <input placeholder="Longitude" type="float" className="placeInput" ref={longitude}  />
                    <input placeholder="Address" type="address" className="placeInput" ref={address}  />
                    <input placeholder="Store Name" type="storeName" className="placeInput" ref={storeName}  />
                    <div> 카테고리 : 한식 일식 양식 중식 고기집 횟집  중 택1</div>
                    <input placeholder="Category" type="category" className="placeInput" ref={category}  />
                    <input placeholder="Youtube Link" type="youtubeLink" className="placeInput" ref={youtubeLink}  />
                    <input placeholder="Youtuber" type="youtuber" className="placeInput" ref={youtuber}  />
                    <button className="button-33">등록</button>
                </form>
            </div>
        </div>
    )

}

export default Input;