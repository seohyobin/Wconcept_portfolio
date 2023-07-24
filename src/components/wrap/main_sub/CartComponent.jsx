import React from 'react';
import './scss/cart.scss';
export default function CartComponent(){
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
                                <h3>쇼핑백 상품 <span>(<em>3</em>)</span></h3>
                            </div>
                            <div className="cart-content">
                                <div className="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span><input type="checkbox" /></span>
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
                                            <tr>
                                                <td className='td1'>
                                                    <span><input type="checkbox" /></span>
                                                    <label htmlFor="">&nbsp;</label>
                                                </td>
                                                <td>
                                                    <div className="product">
                                                        <div className="img">
                                                            <img src="./img/cart/302116091_GG62867.png" alt="" />
                                                        </div>
                                                        <div className="product-info">
                                                            <p className='p1'>hince</p>
                                                            <p className='p2'>세컨 스킨 파운데이션</p>
                                                            <p className='p3'>옵션 : 001_13호 페일</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='td-btn'>
                                                    <button className='button1'><img src="./img/cart/icon-arrow-up.svg" alt="" /></button>
                                                        <div className="strong">
                                                            <strong>1</strong>
                                                        </div>
                                                    <button className='button2'><img src="./img/cart/icon-arrow-up.svg" alt="" /></button>
                                                </td>
                                                <td> 32,400</td>
                                                <td></td>
                                                <td>
                                                    <p>무료배송</p>
                                                    {/* <p className='blind'>3,000</p> */}
                                                </td>
                                                <td>
                                                    <p>32,400 원</p>
                                                </td>
                                                <td className='lastbtn'>
                                                    <p><button>바로구매</button></p>
                                                    <p><button>선물하기</button></p>
                                                    <p><button>MY <img src="./img/cart/icon-heart-fill.svg" alt="" /></button></p>
                                                    <p><button>삭제<img src="./img/cart/icon-delete.svg" alt="" /></button></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="bottom-left">
                                <div className="btn-wrap">
                                    <button className='bbtn1'>선택상품삭제</button>
                                    <button className='bbtn2'>쇼핑계속하기</button>
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
                                        <p><em>453,500</em>원</p>
                                    </li>
                                    <li>
                                        <strong>배송비</strong>
                                        <p><em>3,000</em>원</p>
                                    </li>
                                    <li>
                                        <strong>할인쿠폰</strong>
                                        <p><em>-0</em>원</p>
                                    </li>
                                    <li className='total'>
                                        <strong>총 결제금액</strong>
                                        <p><em>462,500</em>원</p>
                                    </li>
                                    <li className='point'>
                                        <strong>적립예정 포인트</strong>
                                        <p><em>4,535</em>p</p>
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

