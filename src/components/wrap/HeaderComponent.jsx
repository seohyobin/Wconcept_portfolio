import React, { useContext } from 'react';
import {Link, Outlet,useLocation,useNavigate} from 'react-router-dom';
import { ConfirmContext } from '../../context/ConfirmContext';
import { GlobalContext } from '../../context/GlobalContext';

export default function HeaderComponent (){

    const { cart1 } = useContext(GlobalContext);
    const {confirmModalOpen,confirmModalClose,confirmMsg,isConfirmModal} = React.useContext(ConfirmContext);

    const [login,setLogin]=React.useState({
        user_email:''
      })
    
      //로컬에서 장바구니 헤더적용



      React.useEffect(() => {
        const storedData = localStorage.getItem('WCONCEPTLOGIN');
      
        if (storedData) {
          const { user_email } = JSON.parse(storedData);
      
          setLogin(prevLogin => ({
            ...prevLogin,
            user_email
          }));
        }
      }, [login.user_email]); // 의존성 배열 비움
      
      //console.log(login.user_email);

      const onClickLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('WCONCEPTLOGIN'); // 로그인 정보 모두 삭제
      
        setLogin(prevLogin => ({
          ...prevLogin,
          user_email: '',
        }));
      
        confirmModalOpen('로그아웃 되었습니다.');
      }



 
    return (
        <>
        <div id='wrap'>
           <header id="header">
            <div className="container1">
                <div className="gap1">
                    <div className="title1">
                        <img className='title-banner' src="./img/main/PC_top_banner_1920x100_20230508110046.jpg" alt="" />
                    </div>
                    <div className="content1">
                        <div className="header-box1">
                            <h1>
                                <Link to="/main">
                                    <img src="./img/main/ico_gnb_logo_176.svg" alt="" />
                                </Link>
                            </h1>
                        </div>
                        <div className="header-box2">
                            <input type="text" autoComplete='off' id='mainSearch' name='main_search' placeholder='썸머 시즌 오픈 [뉴시즌]을 검색하세요!' maxLength={80}  />
                            <button type='button'><img src="./img/main/ico_search_25.svg" alt="" /></button>
                        </div>
                        <div className="header-box3">
                            <ul className='utill' style={{'position':'relative'}}>

                                {
                                    login.user_email==='' ? 

                                (<li>
                                    <Link to="/signup">
                                        <span>
                                            <img src="./img/main/ico_join.svg" alt="" />
                                        </span>
                                        <br />
                                        <strong>
                                            JOIN
                                        </strong>
                                    </Link>

                                </li>)
                                :
                                (<></>)
                                }



                                {
                                    login.user_email==='' ?
                                
                                (
                                <li>
                                    <Link to="/login">
                                        <>
                                        <span>
                                            <img src="./img/main/ico_login.svg" alt=""  style={{'margin-left':'2px'}}/>
                                        </span>
                                        <br />
                                        <strong>
                                            LOGIN
                                        </strong>
                                        </>
                                    </Link>
                                </li>
                                )
                                :
                                (
                                <li style={{'position':'absolute','top':0,'right':'60px'}}>
                                    <Link to="" onClick={onClickLogout}>
                                        <>
                                        <span>
                                            <img src="./img/main/ico_login.svg" alt="" style={{'margin-left':'8px'}}/>
                                        </span>
                                        <br />
                                        <strong>
                                            LOGOUT
                                        </strong>
                                        </>
                                    </Link>
                                </li>
                                                  )
                                                }

                            

                                <li >
                                    <a href="!#">
                                        <span >
                                            <img src="./img/main/ico_mypage.svg" alt="" />
                                        </span>
                                        <br />
                                        <strong> &nbsp; MY</strong>
                                    </a>

                                </li>

                            


                                

                                <li>
                                    <Link to="/cart">
                                        <span>
                                            <img src="./img/main/ico_bag.svg" alt="" />
                                        </span>
                                        <br />
                                        <strong style={{'margin-left':'10px'}}>{cart1.length}</strong>
                                    </Link>

                                </li>
                    
                            </ul>
                        </div>
                    </div>
                    <div className="content2">
                        <div className="left-btn">
                            <a href="!#">
                                <button type='button'>CATEGORY <img src="./img/main/ico_cat_arrow_open_12.svg" alt="" /></button>
                          
                            </a>
                        </div>
                        <div className="nav-box">
                            <div className="nav-left">
                                <ul>
                                    <li>
                                        <Link to ="/new">NEW</Link>
                                    </li>
                                    <li>
                                        <Link to="/woman">WOMEN</Link>
                                    </li>
                                    <li>
                                        <Link to ="/man">MEN</Link>
                                    </li>
                                    <li>
                                        <Link to ='/beauty'>BEAUTY</Link>
                                    </li>
                                    <li>
                                        <Link to='/life'>LIFE</Link>
                                    </li>
                                    <li>
                                        <Link to="/sale">SALE</Link>
                                    </li>
                                    <li>
                                        <a href="!#">DESIGNER</a>
                                    </li>
                                    <li>
                                        <i>   |  </i>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-right">
                                <ul>
                                    <li>
                                        <a href="!#">PRE-SHOW</a>
                                    </li>
                                    <li>
                                        <a href="!#">ORIGINAL</a>
                                    </li>
                                    <li>
                                        <a href="!#">EVENT</a>
                                    </li>
                                    <li>
                                        <a href="!#">BEST</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           </header>
        </div>
        <Outlet/>
        </>
    );
};

