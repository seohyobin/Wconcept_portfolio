import React from 'react';
import'./scss/new.scss';
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalContext'
import { Link } from 'react-router-dom';
export default function NewComponent(){
    const {product,setViewProduct}=React.useContext(GlobalContext);

    const [state, setState]=React.useState({
        rank1:[],
        rank2:[]
    });
    const [new1,setNew1]=React.useState({
        new1:[]
    })
    const [porta,setPorta]=React.useState({
        porta:[]
    })
    const [remy,setRemy]=React.useState({
        remy:[]
    })
    const [lifeLove,setLifeLove]=React.useState({
        lifeLove:[]
    })

    const {rank1,rank2}=state
    React.useEffect(()=>{
        axios({
            url:'./data/new.json',
            method:''
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
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
            url:'./data/new.json',
            method:''
        })
        .then((res)=>{
            if(res.status===200){
                setNew1({
                    ...new1,
                    new1:res.data.new1
                   
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
             
                setPorta({
                    ...porta,
                    porta:res.data.porta
                })
            }
        })
        .catch((err)=>{
            console.log(`err ${err}`);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/women.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
             
                setLifeLove({
                    ...lifeLove,
                    lifeLove:res.data.lifeLove
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
            url:'./data/women.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
             
                setRemy({
                    ...remy,
                    remy:res.data.remy
                })
                console.log(res.data.itemforyou);
            }
        })
        .catch((err)=>{
            console.log(`err ${err}`);
        })
    },[])
    const onClickProductList=(e, item)=>{
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
        <div id='new'>
            <div className="ncontainer">
                <div className="ntitle">
                    <h2>NEW</h2>
                </div>
                <div className="ncontent">
                    <div className="content1">
                        <div className="content1-title">
                            <h3>NEW ITEM FOR YOU</h3>
                            <p>좋아하실 만한 신상품을 추천해 드려요.</p>
                        </div>
                        <div className="img-wrap">
                            <ul className='img-box'>
                                {new1.new1.map((item,idx)=>{
                                    return(
                                    <li className='img img1' key={idx}>
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
                    <div className="content2">
                        <div className="title2">
                            <a href="!#">
                                <strong>NEW BRAND</strong>
                                <p>새롭게 입점한 브랜드를 만나보세요.</p>
                            </a>
                        </div>
                        <div className="brand-wrap">
                            <div className="brand">
                                <div className="item-box">
                                    <img src="./img/sub_new/20230609135911673_7517.jpg" alt="" />
                                </div>
                                <div className="item-info">
                                    <div className="info-info">
                                        <span>Porta</span>
                                        <h4>포르타</h4>
                                    </div>

                                </div>
                                <ul className="product-wrap">
                                 {
                                porta.porta.map((item)=>{
                                        return(
                                        <li className='li'  onClick={(e)=>onClickProductList(e,item)}>
                                            <Link to ={`/product/${item.id}`}>
                                                <div className="p-img">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="p-info-txt">
                                                    <h5>{item.brand}</h5>
                                                    <p>{item.desc}</p>
                                                    <div className="price1">
                                                        <span>{item.basePrice.toLocaleString('ko-KR')}</span>
                                                        <em>{item.discount}</em>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        )
                                    })
                                
                                    }
                                </ul>
                            </div>
                            <div className="brand">
                                <div className="item-box">
                                    <img src="./img/sub_new/20230607160028696_7647.jpg" alt="" />
                                </div>
                                <div className="item-info">
                                    <div className="info-info">
                                        <span>REMY</span>
                                        <h4>레미</h4>
                                    </div>
                                </div>
                                <ul className="product-wrap">
                                {
                                remy.remy.map((item)=>{
                                        return(
                                        <li className='li'  onClick={(e)=>onClickProductList(e,item)}>
                                            <Link to ={`/product/${item.id}`}>

                                                <div className="p-img">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="p-info-txt">
                                                    <h5>{item.brand}</h5>
                                                    <p>{item.desc}</p>
                                                    <div className="price1">
                                                        <span>{item.basePrice.toLocaleString('ko-KR')}</span>
                                                        <em>{item.discount}</em>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        )
                                })
                                
                                    }
                                </ul>
                            </div>
                            <div className="brand">
                                <div className="item-box">
                                    <img src="./img/sub_new/20230608121304534_2899.jpg" alt="" />
                                </div>
                                <div className="item-info">
                                    <div className="info-info">
                                        <span>Life Liberty Love</span>
                                        <h4>라이프리버티러브</h4>
                                    </div>
                                </div>
                                <ul className="product-wrap">
                                {
                                lifeLove.lifeLove.map((item)=>{
                                        return(
                                        <li className='li'  onClick={(e)=>onClickProductList(e,item)}>
                                            <Link to ={`/product/${item.id}`}>
                                                <div className="p-img">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="p-info-txt">
                                                    <h5>{item.brand}</h5>
                                                    <p>{item.desc}</p>
                                                    <div className="price1">
                                                        <span>{item.basePrice.toLocaleString('ko-KR')}</span>
                                                        <em>{item.discount}</em>
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
                    </div>
                    <div className="content3">
                        <div className="title3">
                            <h3>BEST NEW ITEM</h3>
                            <p>어제 많이 구매한 신상품이에요.</p>
                        </div>
                        <div className="best-item-wrap">
                            <div className="rank1">

                                {rank1.map((item)=>{
                                    return(
                                        <Link to ={`/product/${item.id}`}>
                                                <div className="product"  onClick={(e)=>onClickProductList(e,item)}>
                                                    <span>{item.rank}</span>
                                                    <div className="img-b">
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="item-b">
                                                        <p className='name'>{item.brand}</p>
                                                        <p className='info'>{item.desc}</p>
                                                        <div className="price-b">
                                                            <div className="price">
                                                                <span className='dis-price'>{item.disPrice !== '' ? item.disPrice.toLocaleString('ko-KR') : item.basePrice.toLocaleString('ko-KR')}</span>
                                                                <span className='base-price'>{item.basePrice.toLocaleString('ko-KR')}</span>
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
                                    {rank2.map((item)=>{
                                        return(
                                        <li>
                                        <Link to ={`/product/${item.id}`}>

                                            <div className="rank-img"  onClick={(e)=>onClickProductList(e,item)}>
                                                <span>{item.rank}</span>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="rank-info">
                                                <p>{item.brand}</p>
                                                <p>{item.desc}</p>
                                                <div className="price-b">
                                                    <div className="price">
                                                        <span className='dis-price'>{item.disPrice !== '' ? item.disPrice.toLocaleString('ko-KR') : item.basePrice.toLocaleString('ko-KR')}</span>
                                                        <span className='base-price' style={(item.disPrice)!==''? {} : {visibility:'hidden'} }>{item.basePrice.toLocaleString('ko-KR')}</span>
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
                    {/* <div className="content4">
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
                                        <li className='product-list'>
                                                <div className="pr-img">
                                                    <a href="!#" className="heart-img">
                                                        <img src="./img/sub_new/icon-heart-fill" alt="" />
                                                    </a>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="pr-info">
                                                    <p>{item.brand}</p>
                                                    <p>{item.desc}</p>
                                                    <div className="price-b">
                                                        <div className="price">
                                                            <span className='dis-price'>{item.disPrice !== '' ? item.disPrice : item.basePrice}</span>
                                                            <span className='base-price'>{item.basePrice}</span>
                                                            <span className='discount'>{item.discount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                    </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
