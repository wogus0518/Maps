import "./home.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import Map from "../../components/map/Map.jsx";
import Filter from "../../components/filter/Filter.jsx";
import { useState, useEffect } from 'react';
import fire from "../../firebaseInit";
const db = fire.firestore();

function Home() {
  let [youtuberFilterResult, setYoutuberFilterResult] = useState([]);
  let [categoryFilterResult, setCategoryFilterResult] = useState([]);
  let [pins, setPins] = useState([]);
  const pinsCopy = [];

  useEffect(() => {
      const getPins = async () => {
          try {
              youtuberFilterResult.map((youtuber) => {
                  categoryFilterResult.map((category) => {
                    console.log(youtuber, category)
                      db.collection(youtuber).where("category", "==", category).get().then((querySnapshot) => {
                          querySnapshot.forEach((doc) => {
                              pinsCopy.push(doc.data());
                              setPins(pinsCopy);
                          })
                      })
                  })
              })
          } catch (err) { console.log(err) }
      }
      getPins();
  }, [categoryFilterResult])
  return(
    <div>
      <Topbar/>
      <div className="homeContainer">
        <Filter 
          setYoutuberFilterResult={setYoutuberFilterResult}
          setCategoryFilterResult={setCategoryFilterResult}
          />
          {youtuberFilterResult}<br/>
          {categoryFilterResult}
        <Map
          pins={pins}
          />
      </div>
    </div>

  )
  
}

export default Home;