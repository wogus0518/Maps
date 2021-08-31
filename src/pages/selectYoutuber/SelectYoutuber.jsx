import "./selectYoutuber.css"
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Topbar from "../../components/topbar/Topbar";

const ButtonDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
height: 100hv;
button{
        font-weight : bolder
        font-size: 1rem;
        padding: 5px;
        height: 3rem;
        width: 10rem;
        border-radius: 15px;
        margin-bottom : 2rem;
    }
    .daisybutton{
        color:black;
        border: 2px solid rgb(238,236,142,0.3);
        background-color:rgb(238,236,142,0.2)
    }
`
const Title = styled.div`
font-size : 2rem;
text-align : center;
margin-top: 2rem;
font-weight : bolder

`
const Subtitle = styled.div`
font-size : 1rem;
text-align : center;
margin-top: 1rem;
font-weight : bolder
`

function SelectYoutuber({ isLoggedIn }) {

    return (
        <div>
            {isLoggedIn 
            ?
            <div>
                <Topbar isLoggedIn={isLoggedIn} />
                <Title>
                    장소 등록하기
                </Title>
                <Subtitle>
                    등록할 유튜버를 골라주세요.<br />
                </Subtitle>
    
                <ButtonDiv>
                    <NavLink to={`/selectYoutuber/섬마을훈태`}>
                        <button className='daisybutton'>섬마을훈태</button>
                    </NavLink>
                    <NavLink to={`/selectYoutuber/먹적`}>
                        <button className='daisybutton'>먹적</button>
                    </NavLink>
                    <NavLink to={`/selectYoutuber/윤호찌`}>
                        <button className='daisybutton'>윤호찌</button>
                    </NavLink>
                    <NavLink to={`/selectYoutuber/지뉼랭가이드`}>
                        <button className='daisybutton'>지뉼랭가이드</button>
                    </NavLink>
    
                </ButtonDiv>
                </div>
                :
                <div>error</div>
            }
        </div>
    )
}
export default SelectYoutuber;