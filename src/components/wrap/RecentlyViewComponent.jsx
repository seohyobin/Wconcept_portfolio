import React from 'react';
import viwed from './img/viewed/ico_history.svg';
import RecentlyViewModal from './RecentlyViewModal';
import './scss/recently_viewed.scss';



export default function RecentlyViewComponent({product}){
    const [state, setState] =React.useState({
        isViewedModal:false
    })

    const closeViewModal = ()=>{
        setState({
            ...state,
            isViewedModal:false
        });
      }

    const onClickModal=(e)=>{
        e.preventDefault();
       setState({
        ...state,
        isViewedModal:true
       })
     
    }


    return (
        <>
            <div id='viewed'>
                <a href="#!" className='viewed-a' onClick={onClickModal}>
                    <img src={viwed} alt="" />
                </a>
            </div>
             { state.isViewedModal && <RecentlyViewModal closeViewModal={closeViewModal} product={product}/>}
         </>
    );
};

