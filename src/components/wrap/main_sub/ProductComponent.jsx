import React from 'react';
import './scss/product.scss';
import zoom from'./js/zoom';
import { useParams } from 'react-router-dom';
export default function ProductComponent(){

    const [isCart,setIsCart]=React.useState(false);
    const [isCartOk,setIsCartOk]=React.useState(false);

    const [state, setState] = React.useState({
        product1: {},
        key:'CARTPRODUCT',
        allPrice:''
    });
    const { product1,key } = state;
    let { id } = useParams();

    const [cnt,setCnt]=React.useState(1);

    const onClickMinus=(e)=>{
        e.preventDefault();
        if(cnt<=1) return;
        setCnt(cnt-1);
        //setIsCart(false);
    }
    const onClickAdd=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
        //setIsCart(true);
    }
    
    React.useEffect(() => {
        //상품정보 가져오기
        if (localStorage.getItem('WCONCEPT_RECENTLY_VIEW') !== null) {
            let result = JSON.parse(localStorage.getItem('WCONCEPT_RECENTLY_VIEW'));
            console.log(result);

            setState({
                ...state,
                product1: result[0]
            })
            // console.log(result[0]);

        }

    },[])

    // React.useEffect(()=>{
    //     setState({
    //         ...state,
    //         product1:{
    //             ...state.product1,
    //             cnt:cnt,
    //             allPrice:Number(product1.basePrice).toLocaleString('ko-KR')
    //         }  
    //     })
    // },[cnt]);

        

    const onClickCart=(e)=>{
        e.preventDefault();
        setIsCartOk(true); //장바구니 버튼 클릭했다.
    }
    
    
    React.useEffect(()=>{
        let arr = [];
        if(isCartOk===true){ 
            //1.저장소(장바구니)에 데이터가 비어있으면 배열을 생성하여 저장소에 저장
            if(localStorage.getItem('CARTPRODUCT')===null){
                arr = [product1]
            }
            else{
                arr = JSON.parse(localStorage.getItem('CARTPRODUCT'));
                arr = arr.map((item)=>item.id === product1.id ? {...item,cnt:item.cnt+=product1.cnt , allPrice:item.allPrice+=product1.allPrice} : item);
                const result = arr.map((item)=>item.no===product1.no ? true : false);

                if(result.includes(true) !== true){
                    arr = [product1, ...arr]
                    console.log(arr);   
                }
            } 
            //3.장바구니에 저장  
            localStorage.setItem('CARTPRODUCT', JSON.stringify(arr));
            setIsCartOk(false);

            setCnt(1);

        
        }
    },[isCartOk])
    

    // React.useEffect(()=>{

    //     if(product1.basePrice<product1.disPrice){
    //         setState({
    //             ...state,
    //             allPrice:Number(product1.basePrice).toLocaleString('ko-KR')
    //         })
    //     }
    //     else{
    //         setState({
    //             ...state,
    //             allPrice:Number(product1.disPrice).toLocaleString('ko-KR')
    //         })
    //     }
    // },[state.allPrice])


    
    
    function reset() {
        window.scrollTo(0, 0);
      };

    React.useEffect(()=>{
        reset();
    },[])




    return (
        <div id='product'>
            <div className="container-pro"key={id}>
                <div className="left-right-wrap">
                    <div className="cotent-left">
                        <div className="img-good-wrap">
                            <div className="img-zoom-container">
                                <img src={`../${product1.img}`} alt="" />
                                <div className="img-zoom-lens">

                                </div>
                                <div className="img-zoom-result">

                                </div>
                            </div>
                        </div>
                        {/* <ul className="gallery-wrap">
                            <li><a href="!#"><img src="../img/sub_product/302285519_XU35167.jpg" alt="" /></a></li>
                            <li><a href="!#"><img src="../img/sub_product/302285519_add2_II88337.jpg" alt="" /></a></li>
                            <li><a href="!#"><img src="../img/sub_product/302285519_add1_OE54059.jpg" alt="" /></a></li>
                        </ul> */}
                    </div>
                    <div className="cotent-right">
                        <div className="row1">
                            <ul className='row1-ul'>
                                <li className='row1-li1'>
                                    <h2 className='brand'>
                                        <a href="!#">
                                       {product1.brand}
                                        </a>
                                    </h2>
                                    <button>
                                        <em className='em1'>MY</em>
                                        <span><img src="../img/sub_new/icon-heart-blank_dart.svg" alt="" /></span>
                                        <em className='em1'>BRAND</em>
                                    </button>
                                </li>
                                <li className='row1-li2'>
                                     <span className='newseason' style={(product1.status==='' ? {visibility:'hidden',  marginRight:'-50px'} : {})}>
                                         {product1.status}
                                     </span>
                                    <span className='reserve' style={(product1.reserve==='' ? {visibility:'hidden',  marginRight:'-50px'} : {})}>
                                        {product1.reserve}
                                    </span>
                                </li>
                                <li className='row1-li3'>
                                    <div className="product-front">
                                        <p>{product1.desc}</p>
                                        <a href="!#"><img src="../img/sub_product/1828960.png" alt="" /></a>
                                    </div>
                                </li>
                                <li className='row1-li4'>
                                    <dl>
                                        <dt>정상가</dt>
                                        <dd>

                                        {
                                         Number(product1.basePrice) < Number(product1.disPrice) || product1.disPrice=== '' ? 
                                         (
                                         <>
                                            <em className='em1'>{product1.basePrice!== '' ? Number(product1.basePrice).toLocaleString('ko-KR') : Number(product1.disPrice).toLocaleString('ko-KR')}</em>
                                            <em className='em2'>{Number(product1.disPrice).toLocaleString('ko-KR')}</em>
                                         </>
                                         )
                                         :
                                         (
                                            <>
                                            <em className='em1'>{product1.disPrice!== '' ? Number(product1.disPrice).toLocaleString('ko-KR') : Number(product1.basePrice).toLocaleString('ko-KR')}</em>
                                            <em className='em2'>{Number(product1.basePrice).toLocaleString('ko-KR')}</em>
                                            </>
                                         )    
                                           
                                        
                                        
                                        }
                                        </dd>
                                    </dl>
                                    <button>쿠폰받기<span><img src="../img/sub_new/icon-small-arrow.svg" alt="" /></span></button>
                                </li>
                            </ul>
                        </div>
                        <div className="row2">
                            <div>
                                <div className="box1">
                                    <p className='dt1'>신규회원 혜택가</p>
                                    <div className='dd1'>
                                        <span class="price">
                                            
                                        </span>
                                        <span>신규 가입시 10% 쿠폰 즉시 지급</span>
                                    </div>
                                </div>
                                <div className="box2">
                                    <p className='dt2'>추가혜택가</p>
                                    <div className='dd2'>
                                        <div>
                                            <span className='s1'>우리카드</span> 
                                            <strong className='st1'>할인 &nbsp;</strong>
                                            <span className='s2' class="red">2,000원</span>
                                           
                                            <strong className='st2'>할인</strong><br />
                                            <em>우리페이 첫결제 고객 대상 1만원 이상 결제 시, <br /> 2천원 청구할인(즉시할인 5천원 혜택 중복적용 가능)</em>
                                        </div>
                                    </div>
                                    <a href="!#">추가혜택 더보기<span><img src="../img/sub_new/icon-arrow-right.svg" alt="" /></span></a>
                                </div>

                
                            </div>
                        </div>
                        <div className="row3">
                            <div class="card_info_wrap">
                                <div className="box3">
                                    <p className='dtt1'>포인트 적립</p>
                                    <div className='dd3'>
                                        {
                                         Number(product1.basePrice) < Number(product1.disPrice) || product1.disPrice=== '' ? 

                                        (<span><em>{product1.basePrice!== '' ? Number(Math.round((1-0.9)*product1.basePrice)).toLocaleString('ko-KR') :Number(Math.floor((1-0.9)*product1.disPrice)).toLocaleString('ko-KR')}</em> p 적립&nbsp;</span>)
                                        :
                                        (<span><em>{product1.disPrice!== '' ? Number(Math.round((1-0.9)*product1.disPrice)).toLocaleString('ko-KR') :Number(Math.floor((1-0.9)*product1.basePrice)).toLocaleString('ko-KR')}</em> p 적립&nbsp;</span>)

                                        }
                                        <button type="button" class="btn_layer_plus open-layer open-pop_point">
                                            <span>포인트안내</span>
                                            <img src="../img/sub_product/bg-plus.gif" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="box4">
                                    <p className='dtt2'>쇼핑가이드</p>
                                    <div class="labels">
                                        <span class="coupon">쿠폰</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row4">
                            <div className="row4-btn">
                                <p></p>
                                {/* <button>재입고알림</button> */}
                                {/* <a href='!#' class="open-layer open-pop_size_chart">사이즈 가이드<img src="../img/sub_new/icon-arrow-right.svg" alt="" /></a> */}
                            </div>
                            <div className="row4-size">
                                <p className='sizeP'>수량</p>
                                <div className="allall">
                                    <div className="how">
                                        <button className='minu' onClick={onClickMinus}>-</button>
                                            <span className='amount'>{cnt}</span>
                                        <button className='add' onClick={onClickAdd}>+</button>
                                    </div>
                                    <div className="all-price">
                                        {
                                         Number(product1.basePrice) < Number(product1.disPrice) || product1.disPrice=== '' ? 

                                        (<span>{product1.basePrice!== '' ? Number(cnt*(product1.basePrice)).toLocaleString('ko-KR') : Number(cnt*(product1.disPrice)).toLocaleString('ko-KR')} <span className='won'>원</span></span>)
                                       :
                                        (<span>{product1.disPrice!== '' ? Number(cnt*(product1.disPrice)).toLocaleString('ko-KR') : Number(cnt*(product1.basePrice)).toLocaleString('ko-KR')} <span className='won'>원</span></span>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row5">
                            <ul class="btn_group">
                                <li className='sell'>
                                    <div className="sell-big">
                                        <button type="button" class="btn">바로 구매</button>
                                        <button type="button" class="btn1 black" onClick={onClickCart}>쇼핑백 담기</button>
                                    </div>
                                    <div className="sell-small">
                                        <button type="button" class="btn_gift">
                                            <img src="../img/sub_product/ico_prod_gift.svg" alt="" />
                                            <p>선물하기</p>
                                        </button>
                                        <button type="button" class="btn_heart">
                                        <span><img src="../img/sub_new/icon-heart-blank_dart.svg" alt="" /></span>
                                            <p class="myHeartAllCount">{product1.saved}</p>
                                        </button>
                                    </div>
                                </li>
                                <li className='sold-out'>
                                    <div className="big-btn">
                                        <button type="button" class="soldout">SOLD OUT</button>
                                        <button type="button" class="restock">재입고 알림</button>
                                    </div>
                                    <button type="button" class="btn_heart">
                                        <span><img src="../img/sub_new/icon-heart-blank_dart.svg" alt="" /></span>
                                        <p class="myHeartAllCount">{product1.saved}</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="row6">
                            <dl class="info cottonusa">
                                <dt>상품 요약 정보</dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <span>상품코드</span>
                                            <strong>{product1.brand}</strong>
                                        </li>
                                            <li>
                                                <span>소재</span>
                                                <strong>Body: Polyester 100%</strong>
                                            </li>
                                            <li>
                                                <span>제조사/원산지</span>
                                                <strong>(주)레이어 / VIETNAM</strong>
                                                
                                            </li>
                                            <li>
                                                <span>배송비</span>
                                                <strong>50,000원 미만구매시 배송비 2,500원</strong>
                                                 <p>(제주 : 3,000원 / 도서산간 : 3,000원) 추가</p>
                                            </li>
                                            <li>
                                                <span>배송정보</span>
                                                <strong>결제완료 후 평균 3일 이내 출고(공휴일 제외)</strong>
                                                
                                            </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

