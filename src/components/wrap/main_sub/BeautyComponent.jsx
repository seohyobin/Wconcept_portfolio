import React from 'react';
import'./scss/beauty.scss';
import $ from 'jquery';
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function BeautyComponent(){
    const {product,setViewProduct}=React.useContext(GlobalContext);

    
    const [state, setState]=React.useState({
        beauty:[]
    })
    const {beauty}=state
    const [best,setBest]=React.useState({
        best:[]
    })
    const [beautyItem,setBeautyItem]=React.useState({
        beautyItem:[]
    })
    const [rank,setRank]=React.useState({
        rank1:[],
        rank2:[]
    })

    React.useEffect(()=>{
        axios({
            url:'./data/beauty.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setRank({
                    ...rank,
                    rank1:res.data.rank1,
                    rank2:res.data.rank2,
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/beauty.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setBeautyItem({
                    ...beautyItem,
                    beautyItem:res.data.beautyItem
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/beauty.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    beauty:res.data.beauty
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        axios({
            url:'./data/beauty.json',
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
        <div id='beauty'>
            <div className="bcontainer">
                <div className="btitle">
                    <h2>BEAUTY</h2>
                </div>
                <div className="slide-beauty">
                    <div className="content"> 
                        <div className="slide-container">
                            <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide7"><a href="!#"><img src="./img/sub_beauty/PBM1_chicor_1880x600_20230614094749.jpg" alt="" /></a></li>
                                        <li className="slide slide0"><a href="!#"><img src="./img/sub_beauty/PBM1_beauty_1880x600_20230619094908.jpg" alt=""/></a></li>
                                        <li className="slide slide1"><a href="!#"><img src="./img/sub_beauty/2_20230615093700.jpg" alt="" /></a></li>
                                        <li className="slide slide2"><a href="!#"><img src="./img/sub_beauty/2_20230619094704.jpg" alt="" /></a></li>
                                        <li className="slide slide3"><a href="!#"><img src="./img/sub_beauty/2_20230619135815.jpg" alt="" /></a></li>
                                        <li className="slide slide4"><a href="!#"><img src="./img/sub_beauty/22_20230615093711.jpg" alt="" /></a></li>
                                        <li className="slide slide5"><a href="!#"><img src="./img/sub_beauty/3333_20230614095928.png" alt="" /></a></li>
                                        <li className="slide slide6"><a href="!#"><img src="./img/sub_beauty/PBM1_1880x600_20230616093934.jpg" alt="" /></a></li>
                                        <li className="slide slide7"><a href="!#"><img src="./img/sub_beauty/PBM1_chicor_1880x600_20230614094749.jpg" alt="" /></a></li>
                                        <li className="slide slide0"><a href="!#"><img src="./img/sub_beauty/PBM1_beauty_1880x600_20230619094908.jpg" alt=""/></a></li>
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
                        <li className='be-li'><a href="!#">스킨케어</a></li>
                        <li className='be-li'><a href="!#">메이크업</a></li>
                        <li className='be-li'><a href="!#">헤어&바디</a></li>
                        <li className='be-li'><a href="!#">센트</a></li>
                        <li className='be-li'><a href="!#">맨뷰티</a></li>
                        <li className='be-li'><a href="!#">이너뷰티</a></li>
                        <li className='be-li'><a href="!#">디바이스</a></li>
                        <li className='be-li'><a href="!#">뷰티툴</a></li>
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
                <div className="wcontent">
                    <div className="content1">
                        <div className="content1-title">
                            <h3>BEAUTY ITEM FOR YOU</h3>
                            <p>좋아하실 만한 상품을 추천해 드려요.</p>
                        </div>
                        <div className="img-wrap">
                            <ul className='img-box'>
                            {
                                beautyItem.beautyItem.map((item)=>{
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
                                                                <span className='base-price'>{item.basePrice}</span>
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
                                                            <span className='dis-price'>{item.disPrice !== '' ? item.disPrice.toLocaleString('ko-KR'):item.basePrice.toLocaleString('ko-KR')}</span>
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
                                    beauty.map((item)=>{
                                        return(
                                                
                                            <li className='product-list'  onClick={(e)=>onClickProductList(e,item)}>
                                                <Link to ={`/product/${item.id}`}>
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
                                                                <span className='base-price' style={(item.disPrice)!==''? {} : {visibility:'hidden'} }>{item.basePrice}</span>
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
