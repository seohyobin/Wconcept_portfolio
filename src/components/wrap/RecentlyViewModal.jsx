import React from 'react';
import './scss/recently_viewed_modal.scss';
import close from './img/viewed/close_black.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default  function RecentlyViewModal({closeViewModal,product}){
const [viewData,setViewData]=React.useState([]);


const onClickModalClose=(e)=>{
    e.preventDefault();
    closeViewModal();
    
}
const getLocalStorage=()=>{
    let key ='WCONCEPT_RECENTLY_VIEW';
    if(localStorage.getItem(product.key)!==null){
        let viewData =JSON.parse(localStorage.getItem(key));
        setViewData(viewData);
    }
   
}



React.useEffect(()=>{       
    getLocalStorage();
},[]);

React.useEffect(()=>{
    getLocalStorage();
},[product.sign]);


  // 모달 이외의 영역 클릭 시 닫기
  const handleOutsideClick =(e)=>{
    if (e.target === e.currentTarget) {
        closeViewModal();
    }
  };
  let {id} =useParams();

  const [state,setState] =React.useState({
    viewed1:[]
});
const {viewed1}=state;

  React.useEffect(()=>{

    if (localStorage.getItem('WCONCEPT_RECENTLY_VIEW') !== null) {
        let local1= JSON.parse(localStorage.getItem('WCONCEPT_RECENTLY_VIEW'));
        local1 = local1.filter((item)=>item.id === id);
        console.log(local1);

        setState({
            ...state,
            viewed1: local1
            
        })  
    }
},[])


    return (
        <div id='viewed-modal'>
            <div className="viewed-container">
                <div className="viewed-left" onClick={handleOutsideClick}>

                </div>
                <div className="viewed-right">
                    <div className="viewed-header">
                        <a href="!#" onClick={onClickModalClose}>
                            <div className="row1">
                                <h2>SHOPPING HISTORY</h2>
                                <img src={close} alt="" />
                            </div>
                            <div className="view-product-wrap">
                                <div className="row2">
                                    <div className='viewed-day-list'>
                                        {/* <h3>today</h3>                                   */}
                                    </div>
                                </div>


                            {
                                viewData.map((item,idx)=>{
                                    return(
                                        <div className="viewed-product-content" key={idx}> 
                                        <Link to={`/viewed/${item.id}`}>
                                            <div className="viewed-img">
                                                <img src={`${item.img}`} alt=""/>
                                            </div>
                                            <div className="viewed-text">
                                                <p>{item.brand}</p>
                                                <h2 className='view-desc'>{item.desc}</h2>
                                                <h3>{item.basePrice}</h3>
                                                <h3>{item.discPrice}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    )
                                })

                            }   



                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};