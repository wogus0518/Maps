import './footer.css'
import React from 'react'
import styled from 'styled-components'
import kakaochannel from '../../assets/kakaochannel.png'


const 푸터 = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    color: grey;
    background: rgb(255,180,224,0.2);
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
        .left{
            width: 61%;
                .info{
                    padding: 2px;
                }
        }
        .right{
            flex:1
        }
        .hashTag{
            text-align: center;
            font-size: 0.6rem;
            padding:5px;

        }
        .info{
            height:50px;
            font-size: 0.6rem;
            padding:0px;
            text-align: right;
            border-right : 1px solid white;
        }
        .snsIcon{
            text-align: center;
            display:flex;
            justify-content: center;
            align-items: center;
            img{
                height: 1rem;
                width: 1rem;
                margin-left: 1rem;
                margin-top: 5px;
            }
        }
    }
`


function Footer(){

    return(
        <div className="footerContainer">
            <div className="footer">
                {/* <div className="footerLeft">
                </div> */}
                <div className='footerCenter'>
                    <div className='info'>
                        사업자 등록번호 : 899-33-01066 | 플로스 컴패니 <br/>
                        업태: 정보통신업| 데이터베이스 및 온라인 정보 제공업 <br/>
                        대표이사: 이상민 | 전화번호: 010-8284-9782<br/>
                        경기도 용인시 수지구 정평로 89, 202 1001<br/>
                    </div>
                </div>
                <div className='footerRight'>
                    <div className='snsIcon'>
                        <div className="iconContainer" onClick={ ()=>{window.open('http://pf.kakao.com/_mBXUs', '_blank')}}>
                            <span className="iconLabel">카카오채널</span>
                            <img calssName='icon' src={kakaochannel} />
                        </div>
                    </div>            
                </div>  
            </div>
            <div className="footerBottom">
                <div style={{ textAlign: 'center', fontSize: '0.5rem' }}>Copyright © Flos company All rights reserved.</div>
            </div>

        </div>
    
    )
};
export default Footer;
