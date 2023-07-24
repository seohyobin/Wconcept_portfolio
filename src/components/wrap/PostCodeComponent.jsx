import React from 'react';
import Postcode  from 'react-daum-postcode';
import './scss/post_code.scss';
import { GlobalContext } from '../../context/GlobalContext';
export default function PostCodeComponent(){
    const {addr,addressAuto,postCodeOpen,postCodeClose}=React.useContext(GlobalContext,);
    const [state,setState]=React.useState({
        주소1:'',
        주소2:'',
        우편번호:'',
        영문주소:''
    })
    const {주소1,주소2,우편번호,영문주소}=state;



    //주소검색 api 메소드
    const onCompletePost=(data)=>{
        if(data.address!==''){
            setState({
                ...state,
                주소1:data.address,
                우편번호:data.zonecode,
                영문주소:data.addressEnglish
            
            })

        }
      

    }
    const onChangeAddr2=(e)=>{

        setState({
            ...state,
            주소2:e.target.value
        })
    }
    const onChangeAddr1=(e)=>{

        setState({
            ...state,
            주소:e.target.value
        })
    }
    const post={
        width:'100%',
        height:'100%',
        border:0,
        zIndex:2,
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'#fff',
        margin:0,
        padding:0
    }
    //주소저장 버튼 클릭 이벤트
     const onClickSave=(e)=>{
        e.preventDefault();

        const addr={
            주소1:주소1,
            주소2:주소2,
        }
        sessionStorage.setItem('WCONCEPT_SESSION',JSON.stringify(addr));
        addressAuto();  
        
        postCodeClose();

     }

    return (
        <div id='postCode'>
            <div className="container">
                <div className="content">
                    <Postcode 
                        autoClose
                        onComplete={onCompletePost}
                        style={post}
                    />
                    <div className="gap">
                        <div className="content1">
                            <ul>
                                <li>
                                    <div className="input-box box1">
                        
                                        <input type="text" 
                                            name="api-add1" 
                                            id="apiAdd1" 
                                            onChange={onChangeAddr1}
                                            placeholder="주소검색API 검색내용 바인딩"
                                            value={`${우편번호} ${state.주소1}`}
                                            disabled={true}
                                        />
                                        <button className='research' style={{'color':'#6c6c6c','border':'1px solid #6c6c6c'}}><img src="./images/sign_up/search.svg" alt=""/>재검색</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="input-box box2">
                                        <input 
                                            type="text"
                                            name="api-add2" 
                                            id="apiAdd2"
                                            placeholder="나머지 주소를 입력해 주세요"
                                            onChange={onChangeAddr2}
                                            value={state.주소2}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <button 
                                    className="save" 
                                    type="button"
                                    onClick={onClickSave}
                                    style={{'backgroundColor':'#6a6a6a','border':0,'fontSize':'15px'}}
                                    >
                                    저장</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                
                </div>
               
         
            </div>
        </div>
    );
};

