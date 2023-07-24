import React from 'react';
import'./scss/life.scss';
import $ from 'jquery';
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function LifeComponent(){
    const {product,setViewProduct}=React.useContext(GlobalContext);

    const [state,setState]=React.useState({
        life:[]
    })
    const {life}=state;
    const [best,setBest] =React.useState({
        best:[]
    })
    const [home,setHome] =React.useState({
        home:[]
    })
    const [culture,setCulture] =React.useState({
        culture:[]
    })
    const [food,setFood] =React.useState({
        food:[]
    })
    const [rank,setRank] =React.useState({
        rank1:[],
        rank2:[]
    })
    React.useEffect(()=>{
        axios({
            url:'./data/life.json',
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
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/life.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setFood({
                    ...food,
                    food:res.data.food
                })
            }
        })  
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/life.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setCulture({
                    ...culture,
                    culture:res.data.culture
                })
            }
        })  
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/life.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setHome({
                    ...home,
                    home:res.data.home
                })
            }
        })  
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/life.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setBest({
                    ...best,
                    best:res.data.best
                })
            }
        })  
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/life.json',
            method:''
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    life:res.data.life
                })
            }
        })  
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        const $slideContainer = $('.slide-beauty .slide-container');
        const $slideWrap = $('.slide-beauty .slide-container');
        const $slide = $('.slide-beauty .slide');
        const $slideA = $('.slide-beauty .slide a');
        const $pageBtn = $('.slide-beauty .page-btn');

        const $leftArrowBtn = $('.slide-beauty .left-btn'); 
        const $rightArrowBtn = $('.slide-beauty .right-btn'); 


        let cnt =0;
        let setId=0;
        let n=$slide.length-2;

        //1.메인

        function mainSlide(){
            $slideWrap.stop().animate({left:`${-100*cnt}%`},600,function(){
                if(cnt >= n){
                    cnt = 0;
                }
                if(cnt < 0){
                    cnt = n-1;
                }
                $slideWrap.stop().animate({left:`${-100*cnt}%`},0)

            })
            pageNation();
        }
        //2.다음
        function nextCount(){
            cnt++;
            mainSlide();

        }
        //3.이전
        function prevCount(){
            cnt--;
            mainSlide();

        }
        //4.타이머
        function autoTimer(){
            clearInterval(setId);
            setId= setInterval(nextCount,3000);
        }
        autoTimer();

        //5.마우스 엔터 리브
        $slideContainer.on({
            mouseenter(){
                clearInterval(setId);
            },
            mouseleave(){
                autoTimer();
            }
        
        });
        //6.에이링크
        $slideA.on({
            click(e){
                e.preventDefault();
            }
        })

   

        //8.페이지네이션
        function pageNation(){
            $pageBtn.removeClass('on');
            $pageBtn.eq(cnt > 7 ? 0 : cnt).addClass('on');
        }

        $pageBtn.each(function(idx){
            $(this).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);
                    cnt = idx;
                    mainSlide();
                }
            });
        });
        

                //6.클릭이벤트
                $leftArrowBtn.on({
                    click(e){
                        e.preventDefault();
                        prevCount();
                    }
                })
                $rightArrowBtn.on({
                    click(e){
                        e.preventDefault();
                        nextCount();
                    }
                })


    },[]);
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
        <div id='life'>
            <div className="lcontainer">
                <div className="ltitle">
                    <h2>LIFE</h2>
                </div>
                <div className="slide-beauty">
                    <div className="content-l"> 
                        <div className="slide-container">
                            <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide7"><a href="!#"><img src="./img/sub_life/PLA1_fabric_1880x600_20230615084457.jpg" alt="" /></a></li>
                                        <li className="slide slide0"><a href="!#"><img src="./img/sub_life/PLA1_wpc_1880x600_최종_20230619083456.jpg" alt=""/></a></li>
                                        <li className="slide slide1"><a href="!#"><img src="./img/sub_life/PLA1_러기지위크_1880x600_20230614094753.jpg" alt="" /></a></li>
                                        <li className="slide slide2"><a href="!#"><img src="./img/sub_life/PLA1_브랜드명_1880x600_20230619083130.jpg" alt="" /></a></li>
                                        <li className="slide slide3"><a href="!#"><img src="./img/sub_life/PLA1_포식스먼스_1880x600_20230614102402.jpg" alt="" /></a></li>
                                        <li className="slide slide4"><a href="!#"><img src="./img/sub_life/PLA1_피에프캔들_1880x600_20230615103334.jpg" alt="" /></a></li>
                                        <li className="slide slide5"><a href="!#"><img src="./img/sub_life/PLA1_1880x600_20230619101248.jpg" alt="" /></a></li>
                                        <li className="slide slide6"><a href="!#"><img src="./img/sub_life/PLA1_COLEMAN_1880x600_20230619140344.jpg" alt="" /></a></li>
                                        <li className="slide slide7"><a href="!#"><img src="./img/sub_life/PLA1_fabric_1880x600_20230615084457.jpg" alt="" /></a></li>
                                        <li className="slide slide0"><a href="!#"><img src="./img/sub_life/PLA1_wpc_1880x600_최종_20230619083456.jpg" alt=""/></a></li>
                                    </ul>
                            </div>
                          
                        </div>
                        <a href="!#" className='left-btn'><img src="./img/main/arrow_left.svg" alt="" /></a>
                        <a href="!#" className='right-btn'><img src="./img/main/arr_right.svg" alt="" /></a>
                        {/* 페이지네이션 */}
                        <div class="page-btn-box">
                                <span><a href="!#" class="page-btn blind on">페이지1</a></span>
                                <span><a href="!#" class="page-btn blind">페이지2</a></span>
                                <span><a href="!#" class="page-btn blind">페이지3</a></span>
                                <span><a href="!#" class="page-btn blind">페이지4</a></span>
                                <span><a href="!#" class="page-btn blind">페이지5</a></span>
                                <span><a href="!#" class="page-btn blind">페이지6</a></span>
                                <span><a href="!#" class="page-btn blind">페이지7</a></span>
                                <span><a href="!#" class="page-btn blind">페이지8</a></span>
                        </div>
                    </div>
                </div>
                <div className="beauty-cate-wrap">
                    <ul>
                        <li className='be-li'><a href="!#">홈</a></li>
                        <li className='be-li'><a href="!#">트래블</a></li>
                        <li className='be-li'><a href="!#">디지털</a></li>
                        <li className='be-li'><a href="!#">컬쳐</a></li>
                        <li className='be-li'><a href="!#">푸드</a></li>
                    </ul>
                </div>
                <div className="bottom-box">
                    <div className="title-b-b">
                        <h2>BEST PICK</h2>
                    </div>
                            <ul className="img-slide">
                            {
                                    best.best.map((item)=>{
                                        return(
                                        <li className="img">
                                            <Link to ={`/product/${item.id}`} onClick={(e)=>onClickProductList(e,item)}>
                                                <img src={item.img} alt="" />
                                                <h3>{item.brand}</h3>
                                                <p className='p2'>{item.desc}</p>
                                                <div className="price">
                                                    <span className='dis-price'>{item.disPrice !== '' ? item.disPrice.toLocaleString('ko-KR') : item.basePrice.toLocaleString('ko-KR')}</span>
                                                    <span className='base-price' style={(item.disPrice)!==''? {} : {visibility:'hidden'} }>{item.basePrice.toLocaleString('ko-KR')}</span>
                                                    <span className='discount'>{item.discount}</span>
                                                </div>
                                            </Link>
                                        </li>
                                        )
                                    })

                                }
                            </ul>
                </div>
                <div className="content5">
                    <div className="right-left-wrap">
                            <div className="right">
                                <a href="!#">
                                    <img src="./img/sub_life/PLA2,4_560x880_20230619111932.jpg" alt="" />
                                </a>
                            </div>
                            <div className="left">
                                <div className="left-title">
                                    <h2>HOME</h2>
                                </div>
                                <div className="left-box">
                                    <ul className='left-content'>
                                        {home.home.map((item)=>{
                                            return(
                                                <li className='left-list'  onClick={(e)=>onClickProductList(e,item)}>
                                                   <Link to ={`/product/${item.id}`} >
                                                    <div className="left-img">
                                                        <a href="!#" className="heart-img">
                                                            <img src="./img/sub_new/icon-heart-fill.svg" alt="" />
                                                        </a>
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="left-info">
                                                        <p>{item.brand}</p>
                                                        <p>{item.desc}</p>
                                                        <div className="price-left">
                                                            <strong>{item.basePrice.toLocaleString('ko-KR')}</strong><em>{item.discount}</em>
                                                        </div>
                                                        <span>
                                                            뉴시즌
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
                <div className="between">
                    <div className="img-img">
                        <img src="./img/sub_life/PLA3_fabric_1880x450_20230615104841.jpg" alt="" />
                    </div>
                </div>
                <div className="content6">
                    <div className="right-left-wrap">
                            <div className="right">
                                <a href="!#">
                                    <img src="./img/sub_life/PLA2,4_560x880_20230619163405.jpg" alt="" />
                                </a>
                            </div>
                            <div className="left1">
                                <div className="left-title">
                                    <h2>CULTURE</h2>
                                </div>
                                <div className="left-box">
                                    <ul className='left-content'>
                                        {culture.culture.map((item)=>{
                                            return(
                                        <li className='left-list'  onClick={(e)=>onClickProductList(e,item)}>
                                            <Link to ={`/product/${item.id}`} >
                                            <div className="left-img">
                                                <a href="!#" className="heart-img">
                                                    <img src="./img/sub_new/icon-heart-fill.svg" alt="" />
                                                </a>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="left-info">
                                                <p>{item.brand}</p>
                                                <p>{item.desc}</p>
                                                <div className="price-left">
                                                    <strong>{item.basePrice.toLocaleString('ko-KR')}</strong><em>{item.discount}</em>
                                                </div>
                                                <span>
                                                    뉴시즌
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
                            <div className="left2">
                                <div className="left-title">
                                    <h2>FOOD</h2>
                                </div>
                                <div className="left-box">
                                    <ul className='left-content'>
                                    {food.food.map((item)=>{
                                            return(
                                        <li className='left-list'  onClick={(e)=>onClickProductList(e,item)}>
                                            <Link to ={`/product/${item.id}`} >
                                            <div className="left-img">
                                                <a href="!#" className="heart-img">
                                                    <img src="./img/sub_new/icon-heart-fill.svg" alt="" />
                                                </a>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="left-info">
                                                <p>{item.brand}</p>
                                                <p>{item.desc}</p>
                                                <div className="price-left">
                                                    <strong>{item.basePrice.toLocaleString('ko-KR')}</strong><em>{item.discount}</em>
                                                </div>
                                                <span>
                                                    뉴시즌
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
                <div className="wcontent">
                    <div className="content3">
                        <div className="title3">
                            <h3>BEST LIFE ITEM</h3>
                            <p>어제 많이 구매한 라이프 상품이에요.</p>
                        </div>
                        <div className="best-item-wrap">
                            <div className="rank1">

                                {rank.rank1.map((item)=>{
                                    return(
                                        <Link to ={`/product/${item.id}`} >
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
                                    {rank.rank2.map((item)=>{
                                        return(
                                        <li  onClick={(e)=>onClickProductList(e,item)}>
                                            <Link to ={`/product/${item.id}`} >
                                            <div className="rank-img">
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
                                        life.map((item)=>{
                                            return(
                                            <li className='product-list'  onClick={(e)=>onClickProductList(e,item)}>
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
                                                            <span className='dis-price'>{item.disPrice !== '' ? item.disPrice.toLocaleString('ko-KR') : item.basePrice.toLocaleString('ko-KR')}</span>
                                                            <span className='base-price'>{item.basePrice.toLocaleString('ko-KR')}</span>
                                                            <span className='discount'>{item.discount}</span>
                                                        </div>
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
                </div>
            </div>
        </div>
    );
};
