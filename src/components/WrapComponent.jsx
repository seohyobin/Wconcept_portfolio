import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import NewComponent from './wrap/main_sub/NewComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WomenComponent from './wrap/main_sub/WomenComponent';
import MenComponent from './wrap/main_sub/MenComponent';
import BeautyComponent from './wrap/main_sub/BeautyComponent';
import LifeComponent from './wrap/main_sub/LifeComponent';
import ProductComponent from './wrap/main_sub/ProductComponent';
import { GlobalContext } from '../context/GlobalContext';
import { ConfirmContext } from '../context/ConfirmContext';
import GoTopComponent from './wrap/GoTopComponent';
import RecentlyViewComponent from './wrap/RecentlyViewComponent';
import ViewedProductComponent from './wrap/main_sub/ViewedProductComponent';
import LoginComponent from './wrap/main_sub/LoginComponent';
import SignupComponent from './wrap/main_sub/SignupComponent';
import CartComponent from './wrap/main_sub/CartComponent';
import PostCodeComponent from './wrap/PostCodeComponent';
import ConfirmModal from './wrap/ConfirmModal';


export default function WrapComponent(){

  const [login,setLogin]=React.useState({
    user_email:''
  });
  
  React.useEffect(() => {
    const storedData = localStorage.getItem('WCONCEPTLOGIN');
  
    if (storedData) {
      const { user_email } = JSON.parse(storedData);
  
      setLogin(prevLogin => ({
        ...prevLogin,
        user_email
      }));
      console.log(login.user_email)
    }
  }, []);

    const [product,setProduct] =React.useState({
      key:'WCONCEPT_RECENTLY_VIEW',
      sign: false,
      getViewProduct :[]
  });

  //  비구조화 !! 구조분할할당
  const {getViewProduct,key,sign} = product;

  const [addr,setAddr] =React.useState({
    addr1:'',
    addr2:'',
    isAddr:false,
    key :'WCONCEPT_SESSION'
});

  // 상품 클릭 이벤트 매개변수 들어옴
  const setViewProduct=(value)=>{
      let arr = [];

      if(localStorage.getItem(key)!==null){
          arr = JSON.parse(localStorage.getItem(key));
          arr = [value, ...arr]
          localStorage.setItem(key, JSON.stringify(arr) );  
          setProduct({
              ...product,
              sign: !sign,
              getViewProduct: arr
          });  
      }
      else {
          arr = [value]
          localStorage.setItem(key, JSON.stringify(arr) );
          setProduct({
              ...product,
              sign: !sign,
              getViewProduct: arr
          });
      }        
  }
  const [postModal, setPostModal]=React.useState(false);

  const postCodeClose=()=>{
    setPostModal(false);

}
//카카오 모달 닫기
const postCodeOpen=()=>{
    setPostModal(true);
}

//헤더영역 배송지 등록, 장바구니, 회원가입 주소등록
const openPopupDaumPostApi= async ()=>{
 //주소변경없이 창을 닫는다면 주소 변경 못하게 막는다.
 setPostModal(true);        
}
    //새로고침시 자동 실행
const addressAuto= async()=>{
  if(sessionStorage.getItem('WCONCEPT_SESSION')!==null){
      const addr1=JSON.parse(sessionStorage.getItem('WCONCEPT_SESSION')).주소1;
      const addr2=JSON.parse(sessionStorage.getItem('WCONCEPT_SESSION')).주소2;
      setAddr({
          ...addr,
          addr1:addr1,
          addr2:addr2,
          isAddr:true
      })
     }    
     return ''; //메세지 안보이게 
  }
  React.useEffect(()=>{
      addressAuto();
  },[addr.isAddr])

  const [modal, setModal]  =  React.useState({
    confirmMsg: '',
    isConfirmModal: false, // true 모달열기  false 모달닫기    
  });
  const {confirmMsg,isConfirmModal} = modal;
  
  const confirmModalOpen=(msg)=>{
    setModal({
        ...modal,
        confirmMsg: msg,
        isConfirmModal: true
    });
  }
  
  const confirmModalClose=()=>{
  setModal({
      ...modal,
      isConfirmModal: false
  });
  }



  
 



    return (
        <div id='wrap'>
          <GlobalContext.Provider value={{product,setViewProduct,addressAuto,postCodeClose,addr}}>
          <ConfirmContext.Provider value={{confirmModalOpen,confirmModalClose,confirmMsg,isConfirmModal}}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              {/* 루트 라우트 */}
              <Route path='/' element={<HeaderComponent />}>
                <Route index element={<MainComponent />} />
                <Route path='/main' element={<MainComponent local={product} setViewProduct={setViewProduct} />} />
                <Route path='/new' element={<NewComponent />} />
                <Route path='/woman' element={<WomenComponent />} />
                <Route path='/man' element={<MenComponent />} />
                <Route path='/beauty' element={<BeautyComponent />} />
                <Route path='/life' element={<LifeComponent />} />
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/signup' element={<SignupComponent openPopupDaumPostApi={openPopupDaumPostApi} addr={addr} />} />
                <Route path='/cart' element={<CartComponent />} />
                <Route path='/product' element={<ProductComponent />} />
                <Route path='/product/:id' element={<ProductComponent />} />
                <Route path='/viewed/:id' element={<ViewedProductComponent  product={product}/>} />
              </Route>
            </Routes>
          <FooterComponent />

         { 
          isConfirmModal && <ConfirmModal/>
         }
          {/* <GoTopComponent/> */}
            {
            postModal && <PostCodeComponent/>
            }
          <RecentlyViewComponent product={product}/>
          </BrowserRouter>
          </ConfirmContext.Provider>
          </GlobalContext.Provider>
        </div>  
      );
};

