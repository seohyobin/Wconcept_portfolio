import React from 'react';
import'./scss/women.scss';
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalContext';
import { Link } from 'react-router-dom';
export default function WomenComponent(){
    const {product,setViewProduct}=React.useContext(GlobalContext);
    const [state, setState]=React.useState({
        women:[]
    })
    const [item,setItem]=React.useState({
        itemforyou:[]
    })
    const [section1,setSection1]=React.useState({
        section1:[]
    })
    const [rank, setRank]=React.useState({
        rank1:[],
        rank2:[]
    })
    React.useEffect(()=>{
        axios({
            url:'./data/new.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setRank({
                    ...rank,
                    rank1:res.data.rank1,
                    rank2:res.data.rank2
                })
            }
        })
        .catch((err)=>{

        })
    },[])

    React.useEffect(()=>{
        axios({
            url:'./data/women.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
             
                setState({
                    ...state,
                    women:res.data.women
                })
        
            }
        })
        .catch((err)=>{
            console.log(`err ${err}`);
        })
    },[]);

    React.useEffect(()=>{
        axios({
            url:'./data/women.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
             
                setItem({
                    ...state,
                    itemforyou:res.data.itemforyou
                })
                console.log(res.data.itemforyou);
            }
        })
        .catch((err)=>{
            console.log(`err ${err}`);
        })
    },[])

    React.useEffect(()=>{
        axios({
            url:'./data/main.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
             
                setSection1({
                    ...section1,
                    section1:res.data.section1
                })
             
            }
        })
        .catch((err)=>{
            console.log(`err ${err}`);
        })
    },[])

    const onClickProductList=(e, item)=>{
        //e.preventDefault();
        let obj ={
            id:item.id,
            brand:item.brand,
            rank:item.rank,
            img:item.img,
            desc:item.desc,
            disPrice:item.disPrice,
            basePrice:item.basePrice,
            discount:item.discount,
            status:item.status,
            rate:item.rate,
            review:item.review,
            saved:item.saved,
            reserve:item.reserve,
            savedDate:new Date().getTime()
        }
        console.log(obj);   
        setViewProduct(obj);
    }


    return (
        <div id='women'>
            <div className="wcontainer">
                <div className="wtitle">
                    <h2>WOMEN</h2>
                </div>
                <div className="main-img-wrap">
                    <ul className='img-ul'>
                        <li className='img-ul-li'>
                            <a href="!#">
                                <div className="img-btn">
                                    <img src="./img/sub_women/PWA1_618x824_1_20230616121410.jpg" alt="" />
                                    <div className="img-info">
                                        <h3>blank03</h3>
                                        <p>23SU 단독 10%세일</p>
                                    </div>
                                    <div className="btn">
                                        <a href="!#"><h4>Women</h4><h5>SHOES</h5><br /></a>
                                        <a href="!#"><h4>Women</h4><h5>ACC</h5><br /></a>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className='img-ul-li'>
                            <a href="!#">
                                <div className="img-btn">
                                    <img src="./img/sub_women/PWA1_618x824_2_2_20230616113018.jpg" alt="" />
                                    <div className="img-info">
                                        <h3>SUMMER VACANCE BAG</h3>
                                        <p>써머 바캉스백 모아보기</p>
                                    </div>
                                    <div className="btn">
                                        <a href="!#"><h4>Women</h4><h5>SHOES</h5></a>
                                        <a href="!#"><h4>Women</h4><h5>ACC</h5></a>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className='img-ul-li'>
                            <a href="!#">
                                <div className="img-btn">
                                    <img src="./img/sub_women/PWA1_618x824_3_20230616113215.jpg" alt="" />
                                    <div className="img-info">
                                        <h3>APTO</h3>
                                        <p>APTO 23 CAPSULE</p>
                                    </div>
                                    <div className="btn">
                                        <a href="!#"><h4>Women</h4><h5>LUXURY</h5></a>
                                        <a href="!#"><h4>Women</h4><h5>ACTIVE</h5></a>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-box">
                    <div className="title-b-b">
                        <h2>BEST PICK</h2>
                    </div>
                            <ul className="img-slide">
                            {
                                    section1.section1.map((item)=>{
                                        return(
                                        <li className="img">
                                            <Link to ={`/product/${item.id}`} onClick={(e)=>onClickProductList(e,item)}>
                                                <img src={item.img} alt="" />
                                                <h3>{item.brand}</h3>
                                                <p className='p2'>{item.desc}</p>
                                                <div className="price">
                                                    <span className='dis-price'>{item.disPrice !== '' ? item.disPrice.toLocaleString('ko-KR') : item.basePrice.toLocaleString('ko-KR')}</span>
                                                    <span className='base-price' style={(item.disPrice)!==''? {} : {visibility:'hidden'} }>{item.basePrice}</span>
                                                    <span className='discount'>{item.discount}</span>
                                                </div>
                                            </Link>
                                        </li>
                                        )
                                    })

                                }

                            </ul>
                    </div>
                <div className="wcontent">
                    <div className="content1">
                        <div className="content1-title">
                            <h3>WOMEN ITEM FOR YOU</h3>
                            <p>좋아하실 만한 상품을 추천해 드려요.</p>
                        </div>
                        <div className="img-wrap">
                            <ul className='img-box'>

                            {
                                item.itemforyou.map((item)=>{
                                    return(
                                        <li className='img img1'>
                                            <Link to ={`/product/${item.id}`} onClick={(e)=>onClickProductList(e,item)}>
                                            <div className="img-wrap">
                                                <img src={item.img} alt="" />
    
                                            </div>
                                            <div className="img-info">
                                                <p>{item.brand}</p>
                                                <div className="price">
                                                    <strong>{item.basePrice.toLocaleString('ko-KR')}</strong>
                                                    <span>{item.discount}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    )
                                })
                            
                            }


                            </ul>
                        </div>
                    </div>
                    <div className="content3">
                        <div className="title3">
                            <h3>BEST WOMEN ITEM</h3>
                            <p>어제 많이 구매한 여성 상품이에요.</p>
                        </div>
                        <div className="best-item-wrap">
                            <div className="rank1">

                                {rank.rank1.map((item)=>{
                                    return(
                                        <Link to ={`/product/${item.id}`} onClick={(e)=>onClickProductList(e,item)}>
                                            <div className="product">
                                            <span>{item.rank}</span>
                                            <div className="img-b">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="item-b">
                                                <p className='name'>{item.brand}</p>
                                                <p className='info'>{item.desc}</p>
                                                <div className="price-b">
                                                    <div className="price">
                                                        <span className='dis-price'>{item.basePrice !== '' ? item.basePrice.toLocaleString('ko-KR') : item.disPrice.toLocaleString('ko-KR')}</span>
                                                        <span className='base-price'>{item.disPrice}</span>
                                                        <span className='discount1'>{item.discount}</span>
                                                    </div>  
                                                </div>
                                                <span style={(item.status==='' ? {visibility:'hidden',  marginRight:'-7.5px'} : {})}>
                                                            {item.status}
                                                        </span>
                                                        <span className='reserve' style={(item.reserve==='' ? {visibility:'hidden',  marginRight:'-7.5px'} : {})}>
                                                            {item.reserve}
                                                        </span>
                                            </div>
                                            </div>
                                        </Link>
                                    )
                                })

                                }

                                <div className="btn-wrap">
                                    <button className='btn1'>1~9 위</button>
                                    <button className='btn2'>10~18 위</button>
                                </div>
                            </div>
                            <div className="rank-an">
                                <div className="rank-row1">
                                    <ul className='row1-content'>
                                    {rank.rank2.map((item)=>{
                                        return(
                                        <li onClick={(e)=>onClickProductList(e,item)}>
                                            <Link to ={`/product/${item.id}`}>
                                                <div className="rank-img">
                                                    <span>{item.rank}</span>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="rank-info">
                                                    <p>{item.brand}</p>
                                                    <p>{item.desc}</p>
                                                    <div className="price-b">
                                                        <div className="price">
                                                            <span className='dis-price'>{item.basePrice !== '' ? item.basePrice.toLocaleString('ko-KR') : item.disPrice.toLocaleString('ko-KR')}</span>
                                                            <span className='base-price' style={(item.disPrice)!==''? {} : {visibility:'hidden'} }>{item.disPrice}</span>
                                                            <span className='discount'>{item.discount}</span>
                                                        </div>

                                                    </div>
                                                    <span style={(item.status==='' ? {visibility:'hidden',  marginRight:'-7.5px'} : {})}>
                                                            {item.status}
                                                        </span>
                                                        <span className='reserve'>
                                                            예약상품
                                                        </span>
                                                </div>
                                            </Link>
        
                                        </li>
                                        )
                                    })

                                    }
                                    </ul>
                                </div>

                            </div>
                          
                        </div>
                    </div>
                    <div className="content4">
                        <div className='sort-btn-wrap'>
                            <div className="btn-cate-wrap">
                                <button className='btn-cate on'>뉴시즌</button>
                                <button className='btn-cate cate2'>카테고리</button>
                                <button className='btn-cate cate3'>컬러</button>
                                <button className='btn-cate cate4'>가격</button>
                                <button className='btn-cate cate5'>할인/혜택</button>
                                <button className='btn-cate cate6'>브랜드</button>
                            </div>
                            <div className="sort-wrap">
                                <span className='input-wrap'>
                                    <label htmlFor=""><input className='on' type="checkbox" name='soldout' id='soldout'/>&nbsp;품절제외</label>
                                </span>
                                <a href="!#"><span>신상품순<img src="./img/sub_new/icon-small-arrow.svg" alt="" /></span></a>
                            </div>
                        </div>
                        <div className="product-list-wrap">
                            <div className="p-row1">
                                    <ul className='pr-content'>


                                    {
                                        state.women.map((item)=>{
                                            return(
                                                <li className='product-list' onClick={(e)=>onClickProductList(e,item)}>
                                                    <Link to ={`/product/${item.id}`} >
                                                        <div className="pr-img">
                                                            <a href="!#" className="heart-img">
                                                                <img src="./img/sub_new/icon-heart-fill.svg" alt="" />
                                                            </a>
                                                            <img src={item.img} alt="" />
                                                        </div>
                                                        <div className="pr-info">
                                                            <p>{item.brand}</p>
                                                            <p>{item.desc}</p>
                                                            <div className="price-b">
                                                                <div className="price">
                                                                    <span className='dis-price'>{item.basePrice === '' ? (item.disPrice.toLocaleString('ko-KR')) : (item.basePrice.toLocaleString('ko-KR'))}</span>
                                                                    <span className='base-price' style={(item.disPrice)!==''? {} : {visibility:'hidden'} }>{item.disPrice.toLocaleString('ko-KR')}</span>
                                                                    <span className='discount'>{item.discount}</span>
                                                                </div>
                                                            </div>
                                                            <span style={(item.status==='' ? {visibility:'hidden',  marginRight:'-7.5px'} : {})}>
                                                                {item.status}
                                                            </span>
                                                            <span className='reserve'style={(item.reserve==='' ? {visibility:'hidden',  marginRight:'-7.5px'} : {})}>
                                                                {item.reserve}
                                                            </span>
                                                        </div>
                                                    </Link>

                                            </li>
                                            )
                                        })

                                        }


                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
