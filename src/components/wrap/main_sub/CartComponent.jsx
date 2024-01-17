import React from 'react';
import './scss/cart.scss';
import { GlobalContext } from '../../../context/GlobalContext';

export default function CartComponent({cart}){
    const[isLogin, setIsLogin] =React.useState(true);
    const[cartArr, setCartArr]=React.useState(GlobalContext);
    
    const [isDelete,setIsDelete]=React.useState(false);
    const [isDelcode,setIsDelcode]=React.useState(false);
    
    //개별선택 체크박스
    const [check,setCheck]=React.useState([]);
    const [isCheck,setIcCheck]=React.useState(false);


    //전체선택 체크박스
    const [checkAll,setCheckAll]=React.useState([]);
    const [isCheckAll,setIsCheckAll]=React.useState(false);


    const [arr,setArr]=React.useState([]);
    const [arr1,setArr1]=React.useState([]);

    //로컬스토리지 장바구니 배열 가지고오기

        const getCartLocalStorage = () => {
        let key = 'CARTPRODUCT';
      
        // 로컬 스토리지에서 항목을 가져오고 null이 아닌 경우에만 처리
        const storedData = localStorage.getItem(key);

        if (storedData !== null) {
          // JSON 문자열을 객체로 변환
          const arr = JSON.parse(storedData);
          setArr(arr);
          console.log(arr);
        }
        arr.map((item)=>{
            console.log(item.disPrice);
            console.log(item.basePrice);
            console.log(item.amount);
        })
        };

        React.useEffect(() => {
            getCartLocalStorage();
        }, []);


        const initMethod=()=>{
            let key = 'CARTPRODUCT';
            if(localStorage.getItem(key)!==null){
                let result = JSON.parse(localStorage.getItem(key));
        
                setArr(result);
    
                let arr1=[];
    
                // 반복문
                // 임시배열변수에 제품코드 저장
                let temp =[];
                result.map((item, idx)=>{
                    temp = [...temp,item.id]; //제품코드
                });
                //임시배열 변수에 저장된 배열 값을 모두 checkAll[]에 저장한다.
                setCheck(temp);
                setIsCheckAll(true);
                setArr1(arr1);
         
            
            }
     
        }
        React.useEffect(()=>{
            initMethod();
        },[])


        const onClickSelectDelete = (e, record) => {
            e.preventDefault();
            
            const result = window.confirm("선택하신 상품을 장바구니에서 삭제 하시겠습니까?");

            if (result) {
                const deleteCart = arr.filter(item => !check.includes(item.id));
                setArr(deleteCart);
                localStorage.setItem('CARTPRODUCT', JSON.stringify(deleteCart));
                setCheck([]); // 여기서 check 배열을 초기화
                console.log('확인');
            } else {
                console.log('취소');
            }
        };
        const onClickDel = (e,record) => {
        e.preventDefault();
    
        const result = window.confirm("상품을 쇼핑백에서 삭제하시겠습니까?");
    
        if (result) {
            // "확인"을 선택한 경우
            // 로컬 스토리지에서 해당 id 값을 가진 항목을 삭제
            const updatedCart = arr.filter(item => item.id !== record.id);
            setArr(updatedCart);
            localStorage.setItem('CARTPRODUCT', JSON.stringify(updatedCart));
    
            setIsDelete(true);
            console.log('확인');
        } else {
            // "취소"를 선택한 경우
            setIsDelete(false);
            console.log('취소');
        }
    
        console.log('삭제 클릭');
        };
        const onClickCntMinu=(e,record)=>{
        e.preventDefault();
        let key = 'CARTPRODUCT';

        const result = arr.map((item)=>{
            return(
                item.id===record.id ? ({...item, amount: (item.amount >= 2 ? item.amount-1 : 1), allPrice: Math.round((item.amount >= 2 ? item.amount-1 : 1)*(item.disPrice)) }) : ({...item})
            )
        });
        
        // console.log('result',result);
        // console.log('빼기');
        setArr(result);
        localStorage.setItem(key,JSON.stringify(result));

        };
        const onClickCntplus=(e,record)=>{
        e.preventDefault();
        let key = 'CARTPRODUCT';

        const result = arr.map((item)=>{
            return(
                item.id===record.id ? ({...item, amount:(item.amount+1), allPrice: Math.round((item.amount+1)*(item.disPrice)) }) : ({...item})
            )
        });
        
        //console.log('더하기');
        setArr(result);
        localStorage.setItem(key,JSON.stringify(result));

        
        };
        const [state, setState] = React.useState({
            cartAll: 0,
            deliveryFee: 0,
            allPayment: 0,
            rewardPoints: 0,
            zero: 0
        });
        
        const { cartAll, deliveryFee, allPayment, rewardPoints, zero } = state;
        
        React.useEffect(() => {
            let selectedProducts = arr.filter((item) => check.includes(item.id));
            let cartAll = 0;
            let deliveryFee = 0;
            let allPayment = 0;
            let rewardPoints = 0;
            
        
            selectedProducts.forEach((item) => {
                
                if (item.amount !== undefined && item.allPrice !== undefined) {
                    cartAll += item.allPrice;
                }
        
            });
        
            rewardPoints = Math.round((1 - 0.9) * cartAll);
            deliveryFee = cartAll < 40000 ? 3000 : 0;
            allPayment = cartAll + deliveryFee;
        
            setState({
                ...state,
                cartAll: cartAll,
                deliveryFee: deliveryFee,
                allPayment: allPayment,
                rewardPoints: rewardPoints
            });

            
        }, [arr, check, cartAll, deliveryFee, allPayment, rewardPoints]); // arr와 check, state를 의존성으로 지정
        
            
        const onChangeCheckAll = (e) => {
            setIsCheckAll((prev) => !prev);
            setCheck(isCheckAll ? [] : arr.map((item) => item.id));
        };
        
        const onChangeCheck = (e) => {
            const itemId = e.target.value;
            let temp = [];
            if (e.target.checked===true) {
                // 체크된 경우, 해당 아이템을 추가
                setCheck([...check, itemId]);
            } else {
                // 체크 해제된 경우, 해당 아이템을 제거
                temp = check.filter((item) => item !== itemId);
                setCheck(temp);
            }
        };
        const onClickKeepShopping =(e)=>{
            window.history.back();
        }

        React.useEffect(()=>{
            if(check.length===arr.length){
                setIsCheckAll(true);
            }
            else{
                setIsCheckAll(false);
            }


        },[arr.length,check])



    return (
        <div id='cart'>
            <div className="container">
                <div className="title">
                    <h2>SHOPPING BAG</h2>
                    <div className="banner">
                        <img src="./img/cart/친구초대 (PC 마이페이지)_20230428154537.jpg" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="cart-container">
                        <div className="left">
                            <div className="cart-title">
                                <h3>쇼핑백 상품 <span>(<em>{arr.length}</em>)</span></h3>
                            </div>
                            <div className="cart-content">
                                <div className="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span><input onChange={onChangeCheckAll} type="checkbox" checked={isCheckAll}/></span>
                                                    <label htmlFor="">&nbsp;</label>
                                                </th>
                                                <th>상품정보</th>
                                                <th>수량</th>
                                                <th>가격</th>
                                                <th>쿠폰</th>
                                                <th>배송비</th>
                                                <th>상품금액</th>
                                                <th>선택</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                
                                        {
                                            arr.map((item,idx)=>{
                                                return(
                                                    <tr key={idx}>
                                                    <td className='td1'>
                                                        <span><input checked={check.includes(item.id)} onChange={onChangeCheck} type="checkbox"  name='chk' id='chk1' value={item.id}/></span>
                                                        <label htmlFor="">&nbsp;</label>
                                                    </td>
                                                    <td>
                                                        <div className="product">
                                                            <div className="img">
                                                                <img src= {`./${item.img}`}alt="" />
                                                            </div>
                                                            <div className="product-info">
                                                                <p className='p1'>{item.brand}</p>
                                                                <p className='p2'>{item.desc}</p>
                                                                <p className='p3'>{}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='td-btn'>
                                                        <button className='button1' onClick={(e)=>onClickCntplus(e,item)}><img src="./img/cart/icon-arrow-up.svg" alt="" /></button>
                                                            <div className="strong">
                                                                <strong>{(item.amount)}</strong>
                                                            </div>
                                                        <button className='button2' onClick={(e)=>onClickCntMinu(e,item)}><img src="./img/cart/icon-arrow-up.svg" alt="" /></button>
                                                    </td>


                                                    {
                                                 
                                                    Number(item.disPrice==='' )?

                                                    <td> {Number(item.amount*item.basePrice).toLocaleString('ko-KR')}원</td>
                                                    :
                                                    <td> {Number(item.amount*item.disPrice).toLocaleString('ko-KR')}원</td>

                                                    }



                                                    <td></td>
                                                    <td>
                                                        <p>무료배송</p>
                                                        {/* <p className='blind'>3,000</p> */}
                                                    </td>
                                                    <td>
                                                        <p>{Number(item.allPrice).toLocaleString('ko-KR')}원</p>
                                                    </td>
                                                    <td className='lastbtn'>
                                                        <p><button>바로구매</button></p>
                                                        <p><button>선물하기</button></p>
                                                        <p><button>MY <img src="./img/cart/icon-heart-fill.svg" alt="" /></button></p>
                                                        <p><button onClick={(e)=>onClickDel(e,item)}>삭제<img src="./img/cart/icon-delete.svg" alt="" /></button></p>
                                                    </td>
                                                </tr>
                                                )
                                            })
                                         
                                        }



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="bottom-left">
                                <div className="btn-wrap">
                                    <button className='bbtn1'   onClick={onClickSelectDelete}>선택상품삭제</button>
                                    <button className='bbtn2'  onClick={onClickKeepShopping}>쇼핑계속하기</button>
                                </div>
                                <ul>
                                    <li>적용하신 쿠폰은 체크아웃 화면에서 변경이 가능합니다.</li>
                                    <li>쇼핑백에 상품은 최대 100개까지 담을 수 있습니다.</li>
                                    <li>쇼핑백에 담긴 상품은 30일간 보관후 삭제됩니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-title">
                                <h3>주문금액</h3>
                            </div>
                            <div className="right-content">
                                <ul>
                                    <li>
                                        <strong>총 상품 금액</strong>
                                        <p><em>{(cartAll).toLocaleString('ko-KR')}</em>원</p>
                                    </li>
                                    <li>
                                        <strong>배송비</strong>
                                        <p><em>{check.length <= 0 ? zero : (deliveryFee).toLocaleString('ko-KR')}</em>원</p>
                                    </li>
                                    {/* <li>
                                        <strong>할인쿠폰</strong>
                                        <p><em>-0</em>원</p>
                                    </li> */}

                                    
                                    <li className='total'>
                                        <strong>총 결제금액</strong>
                                        <p><em>{check.length <=0 ? zero : (allPayment).toLocaleString('ko-KR')}</em>원</p>
                                    </li>


                                    <li className='point'>
                                        <strong>적립예정 포인트</strong>
                                        <p><em>{(rewardPoints).toLocaleString('ko-KR')}</em>p</p>
                                    </li>
                                </ul>

                            </div>
                            <div className="right-btn">
                                <button className='bt1'>선택상품 주문하기</button>
                                <button className='bt2'>선물하기</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

