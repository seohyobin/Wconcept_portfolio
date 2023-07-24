import React from 'react';
import './scss/login.scss';
import axios from 'axios';
import {useNavigate}  from 'react-router-dom';
import { ConfirmContext } from '../../../context/ConfirmContext';
export default function LoginComponent(){
    const navigate = useNavigate();
    const {confirmModalOpen,confirmModalClose,confirmMsg,isConfirmModal} = React.useContext(ConfirmContext);

    const [state, setState]=React.useState({
        email:'',
        pw:''
    })
    const [login,setLogin]=React.useState({
        email:''
    })


    const onChangeEmail=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            email:e.target.value
        })
    }
    const onChangePw=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            pw:e.target.value
        })
    }

    const onClickSubmitLogin=(e)=>{
        e.preventDefault();
        let formData=new URLSearchParams();
        
        formData.append("email",state.email);
        formData.append("pw",state.pw);

        axios({
            url:'http://janeseo0530.cafe24.com/JSP/w_loginAction.jsp',
            method:'POST',
            data:{},
            params:formData
      
        })
        .then((res)=>{     
                if( res.data <= 0 ){                     
                    confirmModalOpen('가입된 회원이 아닙니다. 회원가입 후 시도해주세요. ');
                    navigate('/signup');
                  
                }
               else if( res.data > 0 ){               
                    confirmModalOpen('로그인 되었습니다'); 
                    
                     const obj = {
                        email:state.email, 
                        expires: new Date().getTime()
                    }
                    localStorage.setItem('WCONCEPTLOGIN',JSON.stringify(obj));

                    setLogin({
                        ...login,
                        email:state.email
                    })
                    setTimeout(function(){
                      
                        navigate('/main');
                       
                    }, 1000);   
                }
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);

        })
        
    }

    
    return (
        <div id='login'>
            <div className="container">
                <div className="title">
                        <h2>LOGIN</h2>
                </div>
                <div className="content">
                        <div className="input-btn-wrap">
                            <div className="input-wrap">
                                <form action="./loginAction.jsp" method='POST' id='formLogin' name='formLogin'>
                                    <ul className='input-ul'>
                                        <li>
                                            <label className='label' htmlFor="">이메일 아이디</label>
                                            <input onChange={onChangeEmail} type="email" autoComplete='off' maxLength={50} id='email' name='email' placeholder='이메일 아이디를 @까지 정확하게 입력하세요' />
                                        </li>
                                        <li>
                                            <label className='label2' htmlFor="">비밀번호</label>
                                            <input onChange={onChangePw} autoComplete='off' type="password" id='pw' maxLength={16} name='pw' placeholder='영문+숫자+특수문자 조합 8~16자리를 입력해주세요.' />
                                        </li>
                                        <li>
                                            <span className='chk-input'>
                                                <input type="checkbox" name='idSave' id='idSave'/>
                                                <label htmlFor="idSave">이메일 아이디 저장</label>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <div className='btn'>
                                            <button type='submit' onClick={onClickSubmitLogin}>LOGIN</button>
                                            <div className="a-wrap">
                                                <a href="!#">아이디 찾기</a>
                                                <span>|</span>
                                                <a href="!#">비밀번호 찾기</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='join-email'>
                            <div className="pp">
                                <div className='p'>
                                    <p>지금 가입하면 <strong>10% 할인 쿠폰+웰컴 쿠폰팩</strong> 증정</p>
                                </div>
                                <div className="btn-p">
                                    <a className='emaillogin' href="!#">
                                        <span>이메일로 가입하기</span>
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="icon-wrap">
                            <div className="icon-p">
                                <p>SNS계정으로 W컨셉을 이용해 보세요.</p>
                            </div>
                            <ul className="icon-ul">
                                <li className="icon">
                                    <a href="!#">
                                        <img src="./img/login/ico_sm_naver.svg" alt="" />        
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="!#">
                                        <img src="./img/login/ico_sm_kakao.svg" alt="" />        
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="!#">
                                        <img src="./img/login/ico_sm_facebook.svg" alt="" />        
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="!#">
                                        <img src="./img/login/ico_sm_instagram.svg" alt="" />        
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="!#">
                                        <img src="./img/login/ico_sm_google.svg" alt="" />        
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="!#">
                                        <img src="./img/login/ico_sm_apple.svg" alt="" />        
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="nomember">
                            <div className="a-box">
                                <a href="!#">
                                    <span>비회원 주문조회</span>
                                </a>
                            </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

