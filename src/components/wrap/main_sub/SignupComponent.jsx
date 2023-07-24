import React from 'react';
import './scss/signup.scss';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { ConfirmContext } from '../../../context/ConfirmContext';
import {useNavigate}  from 'react-router-dom';

export default function SignupComponent({openPopupDaumPostApi,addr}){
const navigate = useNavigate();
const {confirmModalOpen,confirmModalClose,confirmMsg,isConfirmModal} = React.useContext(ConfirmContext);

const [state,setState]=React.useState({
    recieve:'',
    isRecieveY:false,
    isRecieveN:false,
    all:[],
    serviceAgree:[
        '만 14세 이상입니다.',
        '이용약관 동의(필수)',
        '개인정보 수집 및 이용에 대한 동의(필수)',
        '개인정보 수집 및 이용안내(선택)'],
    email:'',
    pw:'',
    pwOk:'',
    name:'',
    hp:'',
    addr1:'',
    addr2:'',
    event:'',
    service:'',


 })

 const [id ,setId]=React.useState({
    errMsg:'',
    id:'',
    isIdErr:false
 })

 const [pw,setPw]=React.useState({
    errMsg:'',
    pw:'',
    isPwErr:false
 })

 const [pw2,setPw2]=React.useState({
    errMsg:'',
    pw2:'',
    isPwErr2:false
 })
 const [name,setName]=React.useState({
    errMsg:'',
    name:'',
    isNameErr:false
 })
 const [hp,setHp]=React.useState({
    errMsg:'',
    hp:'',
    isHpErr:false
 })
    const onChangeId=(e)=>{
        const {value}=e.target;
        const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*_\-|+='/?{}]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*_\-|+='/?{}]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*_\-|+='/?{}]+\.[a-z]{2,3}$/gi;
        const regExp1=/^(.){5,}$/g
        let id ='';
        let isIdErr = false;
        let errMsg ='';
        if(value === ''){
            //console.log('6자이상 16자 이하로 입력해주세요');
            errMsg='아이디를 입력해주세요.';
            isIdErr=true;
        }
        else if(regExp.test(value) ===false){
            errMsg='이메일 형식으로 입력해주세요.';
            isIdErr=true;
        }
        else if(regExp1.test(value)===false){
            errMsg='아이디는 5자 이상으로 입력해 주세요.';
            isIdErr=true;
        }
        else{
            errMsg='';
            isIdErr=false;

        }
        setId({
            ...id,
            id:value,
            errMsg:errMsg,
            isIdErr:isIdErr
        })


    }
    const onChangePw1=(e)=>{
        let pw ='';
        let isPwErr = false;
        let errMsg ='';
        const {value} = e.target;
        const regExp1 = /.{8,16}/g; //1)8자이상 16자이하true 
        const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;  //3)한글사용안돼 false이면 정상
        const regExp3 = /\s/g; //4)공백사용안돼 false이면 정상   공백은 사용하실수 없습니다.
        const regExp4 = /(\d)\1\1/g;  //5)동일한 숫자 3개이상 연속 사용 불가 false 이면 정상  
        const regExp6 = /(\w)\1\1/g;  //5)동일한 숫자 3개이상 연속 사용 불가 false 이면 정상  같은 글자 또는 숫자를 3번 연속 입력하실 수 없습니다.
        const regExp5 =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).*$/g;


        if(regExp1.test(value)===false){
            isPwErr=true;
            errMsg='8자~16자로 입력해주세요.';
        }
        else if(regExp2.test(value)===true || regExp3.test(value)===true || regExp5.test(value)===false){
            isPwErr=true;
            errMsg='영문, 숫자, 특수문자를 모두 사용하여 입력해주세요.';
        }
        else if(regExp4.test(value)===true || regExp6.test(value)===true){
            isPwErr=true;
            errMsg='같은 글자 또는 숫자를 3번 연속 입력하실 수 없습니다.';
        }
        else{
            isPwErr=true;
            errMsg='사용 가능합니다.';
        }
        setPw({
            ...pw,
            pw:value,
            errMsg:errMsg,
            isPwErr:isPwErr

        })


    }
    const onChangePw2=(e)=>{
        const {value} =e.target;

        let isPwErr2 =false;
        let errMsg = '';

        if(value===''){
            isPwErr2 =true;
            errMsg = '비밀번호를 한번 더 입력해주세요.';
        }
        else if(value!==pw.pw){
            isPwErr2 =true;
            errMsg = '비밀번호 정보가 일치 하지 않습니다';
        }
        else{
            isPwErr2= false;
            errMsg='';
        }
        setPw2({
            ...pw2,
            isPwErr2:isPwErr2,
            errMsg:errMsg,
            pw2:value
        })
    }
    const onChangeName=(e)=>{
        const {value}=e.target;
        let name='';
        let errMsg ='';
        let isNameErr=false;

        const regExp =  /[`~!@#$%^&*()-_=+,<.>/?;:'"\\|[{}]/g; 
        name=value.replace(regExp,'');

        if(name===''){
            errMsg ='이름을 입력해주세요.';
            isNameErr =true;
        }
        else{
            errMsg ='';
            isNameErr =false;
        }
        setName({
            ...name,
            isNameErr:isNameErr,
            errMsg:errMsg,
            name:value
        })


    }
    const onChangeHp=(e)=>{
        const {value}=e.target;
        const regExp = /[^0-9]/g ;
        let errMsg='';
        let hp='';
        let isHpErr=false;

        hp = value.replace(regExp,'');

        if(hp===''){
            errMsg='휴대폰 번호를 입력해 주세요.';
            isHpErr=true;
        }
        else{
            errMsg='';
            isHpErr=false;
        }
        setHp({
            ...hp,
            errMsg:errMsg,
            isHpErr:isHpErr,
            hp:value
        })
    }

    const onChangeEvent=(e)=>{
        let recieve='';
        let isRecieveN=false;
        let isRecieveY=false;
        if(e.target.checked===true){
            recieve=e.target.value;
            if(e.target.id==='recieveY'){
                isRecieveY=true;
                isRecieveN=false;
            }
            else{
                isRecieveY=false;
                isRecieveN=true;
            }   
        }
        else{
            recieve='';
            isRecieveY=false;
            isRecieveN=true;
        }
        setState({
            ...state,
            recieve:recieve,
            isRecieveN:isRecieveN,
            isRecieveY:isRecieveY
        });
    }
    const onChangeServiceAll=(e)=>{
            let all=[];
            if(e.target.checked===true){
                all=state.serviceAgree;
            }
            else{
                all=[];
            }
            setState({
                ...state,
                all:all
            })
    }
  
        const onChangeservice = (e) => {
            if (e.target.checked === true) {
              setState((prevState) => ({
                ...prevState,
                all: [...prevState.all, e.target.value],
              }));
            } else {
              setState((prevState) => ({
                ...prevState,
                all: prevState.all.filter((item) => item !== e.target.value),
              }));
            }
          };
    
    const onChangeAddr1=(e)=>{
        e.preventDefault();
        setState({
            ...state,   
            addr1:e.target.value
            
        })
    }
    const onChangeAddr2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            addr2:e.target.value
            
        })
    }

    const getSessionStorage=()=>{

        setState({
            ...state,
            addr1:addr.addr1,
            addr2:addr.addr2,
            isAddress:addr.isAddr
        })
    
}
React.useEffect(()=>{ //useEffect=> state뭔가 변화가 생기면 그때 실행 
    getSessionStorage();
},[addr.주소1,addr.주소2,addr.isAddr]);

    const onClickAddrPopupOpenApi=(e)=>{
        openPopupDaumPostApi(); //팝업창 열기!!
        e.preventDefault();

    }
    const onClickSubmitUser=(e)=>{
        e.preventDefault();
        let agree = '';
        state.all.map((item,idx)=>{
            if(idx===state.all.length-1){
                agree+=item ;
            }
            else{
                agree+=item + ', ';
            }
        })
        
        let formData= new URLSearchParams();

        formData.append("email",id.id);
        formData.append("pw",pw.pw);
        formData.append("pwOk",pw2.pw2);
        formData.append("name",name.name);
        formData.append("hp",hp.hp);
        formData.append("addr1",state.addr1);
        formData.append("addr2",state.addr2);
        formData.append("event",state.recieve);
        formData.append("service",agree);
        console.log(formData);

        axios({
            url:'http://janeseo0530.cafe24.com/JSP/w_signupAction.jsp',
            method:'POST',
            data:{},
            params:formData
        })
        .then((res)=>{
            console.log(res.data);
            confirmModalOpen('회원가입이 완료되었습니다.');
            navigate('/login')
          
          
        })
        .catch((err)=>{
            console.log(err);
        })


    }

    React.useEffect(()=>{
       
    },[])

    return (
        <div id='signup'>
            <div className="container">
                <div className="title">
                        <h2>JOIN MEMBER</h2>
                        <div className="ppp">
                        <p><span>* </span> 필수 입력 항목</p>

                        </div>
                </div>
                <div className="content">
                    <div className="join-form">
                        <table>
                            <tbody>
                                <tr className='tr1'>
                                    <td colSpan={2}>
                                        <div className="info">
                                            <strong>회원으로 가입하시면 즉시 사용가능한
                                            <span className='span1'>10%</span>
                                            할인쿠폰을 드립니다. 
                                            <span className='span2'>(본인인증 완료한 계정당 1회 사용 가능)</span>
                                            </strong>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='tr2'>
                                    <th>이메일 아이디<span>*</span></th>
                                    <td>
                                        <input  
                                        maxLength={30}
                                        onChange={onChangeId} 
                                        type="text"
                                        name='email' 
                                        id='email' 
                                        placeholder='@까지 정확하게 입력해주세요.' 
                                        />
                                        <span className={`span-sub ${id.isIdErr ? ' on' : '' }`}><img src="./img/signup/ico_incorrect_p_11.svg" alt="" />{id.errMsg}</span>
                                    </td>
                                </tr>
                                <tr className='tr3'>
                                    <th>비밀번호<span>*</span></th>
                                    <td>
                                        <input 
                                        type="password" 
                                        maxLength={16}
                                        name='pw' 
                                        id='pw' 
                                        onChange={onChangePw1}
                                        placeholder='영문+숫자+특수문자 조합 8~16자리' 
                                        />
                                        <span className={`span-sub ${pw.isPwErr ? ' on' : '' }`}><img src="./img/signup/ico_incorrect_p_11.svg" alt="" />{pw.errMsg}</span>
                                    </td>
                                </tr>
                                <tr className='tr4'>
                                    <th>비밀번호 확인<span>*</span></th>
                                    <td>
                                        <input 
                                        type="password"
                                        onChange={onChangePw2} 
                                        name='pwOk' 
                                        id='pwOk' 
                                        placeholder='' 
                                        maxLength={16}
                                        />
                                        <span className={`span-sub ${pw2.isPwErr2 ? ' on' : '' }`}><img src="./img/signup/ico_incorrect_p_11.svg" alt="" />{pw2.errMsg}</span>
                                    </td>
                                </tr>
                                <tr className='tr5'>
                                    <th>이름<span>*</span></th>
                                    <td>
                                        <input 
                                        onChange={onChangeName}
                                        type="text" 
                                        name='name' 
                                        id='name' 
                                        maxLength={10}
                                        placeholder='ex) 홍길동' 
                                        />
                                        <span className={`span-sub ${name.isNameErr ? ' on' : '' }`}><img src="./img/signup/ico_incorrect_p_11.svg" alt="" />{name.errMsg}</span>
                                    </td>
                                </tr>
                                <tr className='tr6'>
                                    <th>전화번호<span>*</span></th>
                                    <td>
                                        <input 
                                        maxLength={11}
                                        onChange={onChangeHp}
                                        type="text" 
                                        name='hp'
                                        id='hp' 
                                        placeholder='-를 제외하고 번호만 입력해주세요.' 
                                        />
                                        <span className={`span-sub ${hp.isHpErr ? ' on' : '' }`}><img src="./img/signup/ico_incorrect_p_11.svg" alt="" />{hp.errMsg}</span>
                                    </td>
                                </tr>
                                <tr className='tr7'>
                                    <th>주소<span>*</span></th>
                                    <td>
                                        <input onChange={onChangeAddr1} type="text" name='addr1' id='addr1' value={addr.addr1}  placeholder='상세주소까지 입력해주세요.' />
                                        <span className='span-btn'><button onClick={onClickAddrPopupOpenApi}>주소검색</button></span>
                                    </td>
                                </tr>
                                <tr className='tr8'>
                                    <th>상세주소<span></span></th>
                                    <td>
                                        <input onChange={onChangeAddr2} value={addr.addr2}  type="text" name='addr2' id='addr2' placeholder='' />
                                    </td>
                                </tr>
                                <tr className='tr9'>
                                    <th>이벤트 정보<span>*</span></th>
                                    <td>


                                        
                                        <span className='event'>
                                            <input 
                                            className={`check${state.isRecieveY===true ? ' on' : ''}`}
                                            type="radio" 
                                            onChange={onChangeEvent}
                                            name="event" 
                                            id="recieveY" 
                                            checked={state.recieve.includes('수신')}
                                            value={'수신'}
                                            />
                                            <label htmlFor="">수신</label>
                                        </span>




                                        <span className='event'>
                                            <input 
                                            onChange={onChangeEvent}
                                            className={`check${state.isRecieveN===true ? ' on' : ''}`}
                                            type="radio" 
                                            name="event" 
                                            id="recieveN" 
                                            checked={state.recieve.includes('비수신')}
                                            value={'비수신'}/>
                                            <label htmlFor="">비수신</label>
                                        </span>




                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="join-agreement">
                        <span className='span-agree'>
                            <input 
                            className=''
                            onChange={onChangeServiceAll}
                            type="checkbox" 
                            id='serviceAll' 
                            name='serviceAll' 
                            value={'전체 동의합니다.'}
                            checked={state.all.length===4}
                            />
                            <label htmlFor="">전체 동의합니다. <br /></label>
                            <span>전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다.
                                <br /> 선택항목에 대한 동의를 거부하는 경우에도 회원가입 서비스는 이용 가능합니다.
                            </span>
                        </span>
                        <ul>
                            <li className=''>
                                <input 
                                type="checkbox" 
                                onChange={onChangeservice}
                                id='service1' 
                                name='service1'
                                value={'만 14세 이상입니다.'}
                                checked={state.all.includes('만 14세 이상입니다.')}
                                />
                                <label htmlFor="">만 14세 이상입니다. (필수)</label>
                            </li>
                            <li>
                                <input 
                                type="checkbox" 
                                onChange={onChangeservice}
                                id='service2' 
                                name='service2' 
                                value={'이용약관 동의(필수)'} 
                                checked={state.all.includes('이용약관 동의(필수)')}
                                />
                                <label htmlFor="">이용약관 동의(필수)</label>
                                <span><a href="!#">내용보기</a></span>
                               
                            </li>
                            <li>
                                <input 
                                type="checkbox"
                                onChange={onChangeservice} 
                                id='service3' 
                                name='service3' 
                                value={'개인정보 수집 및 이용에 대한 동의(필수)'}
                                checked={state.all.includes('개인정보 수집 및 이용에 대한 동의(필수)')}
                                />
                                <label htmlFor="">개인정보 수집 및 이용에 대한 동의(필수)</label>
                                <span><a href="!#">내용보기</a></span>
                                
                            </li>
                            <li>
                                <input 
                                type="checkbox" 
                                onChange={onChangeservice}
                                id='service4' 
                                name='service4'
                                value={'개인정보 수집 및 이용안내(선택)'}  
                                checked={state.all.includes('개인정보 수집 및 이용안내(선택)')}
                                />
                                <label htmlFor="">개인정보 수집 및 이용안내(선택)</label>
                                <span><a href="!#">내용보기</a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-wrap">
                        <div className="btn">
                            <button className='btn1'>취소</button>
                            <button className='btn2' onClick={onClickSubmitUser}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

