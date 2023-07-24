import React from 'react';
import $ from 'jquery';
import NewComponent from './main_sub/NewComponent';


export default function MainComponent (){

    
    React.useEffect(()=>{
        const $slideContainer= $('#section1 .slide-container');
        const $slideWrap= $('#section1 .slide-wrap');
        const $slide= $('#section1 .slide');
        const $slideA = $('#section1 .slide a');
        const $leftArrowBtn = $('#section1 .left-arrow-btn'); 
        const $rightArrowBtn = $('#section1 .right-arrow-btn'); 

        let cnt=0;
        let n =$slide.length-2;
        let setId =0;

        //1.메인함수

        function mainslide(){
            $slideWrap.stop().animate( {left:`${-100*cnt}%`},600,function(){
                if(cnt >= n){
                    cnt = 0; 
                }
                if(cnt < 0){
                    cnt = n-1;
                }
                $slideWrap.stop().animate( {left:`${-100*cnt}%`},0)
            })
        }

        //2.다음 카운트
        function nextCount (){
            cnt ++;
            mainslide();
        }
        //3.이전카운트
        function prevCount (){
            cnt--;
            mainslide();
        }

        //4.자동타이머
        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount,3000);
        }
      autoTimer();

      //5.마우스 엔터 오버
        $slideContainer.on({
            mouseenter(){
                clearInterval(setId);
                $leftArrowBtn.stop().fadeIn(500);
                $rightArrowBtn.stop().fadeIn(500);
            },
            mouseleave(){
                $leftArrowBtn.stop().fadeOut(500);
                $rightArrowBtn.stop().fadeOut(500);
                autoTimer();
            }
        }) 
        //a링크
        $slideA.on({
            click(e){
                e.preventDefault();
            }
        })

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

    React.useEffect(()=>{
        const $slideContainer = $('#section4 .slide-container');
        const $slideWrap = $('#section4 .slide-wrap');
        const $slide = $('#section4 .slide');
        const $slideA =$('#section4 .slide a');
        const $nextArrowBtn = $('#section4 .next-arrow-btn');
        const $prevArrowBtn= $('#section4 .prev-arrow-btn');

        let cnt = 0;
        let n =$slide.length-5;
        let setId = 0;


        //1.메인
        function mainSlide(){
            $slideWrap.stop().animate({left:`${-20*cnt}%`},600,function(){
                if(cnt >= n){
                    cnt = n;
                    clearInterval(setId);
                }
                if(cnt < 0){
                    clearInterval(setId);
                   cnt = 0;
                }
                $slideWrap.stop().animate({left:`${-20*cnt}%`},0)
            });
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
            setId=setInterval(nextCount,4000);
        }
        autoTimer();
        //5.마우스 오버 리브

        $slideContainer.on({
            mouseenter(){
                clearInterval(setId);
            },
            mouseleave(){
                autoTimer();
            }
        })

        $slideA.on({
            click(e){
                e.preventDefault();
            }
        })
        //6.클릭
        $nextArrowBtn.on({
            click(e){
                e.preventDefault();
                if(cnt>=n ){
                    mainSlide();
                }
                else{
                    nextCount();
                    
                }
            }
            
        })
        $prevArrowBtn.on({
            click(e){
                e.preventDefault();
                if(cnt <=0){
                    mainSlide();
                 
                }
                else{
                    prevCount();
                }
            }
        })

    },[]);

    React.useEffect(()=>{

        const $slideContainer =$('#section5 .slide-container');
        const $slideWrap =$('#section5 .slide-wrap');
        const $slide =$('#section5 .slide');
        const $slideA =$('#section5 .slide a');
        const $nextArrowBtn = $('#section5 .next-arrow-btn');
        const $prevArrowBtn= $('#section5 .prev-arrow-btn');

        let cnt = 0;
        let setId = 0;
        let n = $slide.length-2;

        //1.메인
        function mainSlide(){
            $slideWrap.stop().animate({left:`${-50*cnt}%`},600,function(){
                if(cnt >= n){
                    cnt = 0;

                }
                if(cnt < 0){
                    cnt = n-1;
                }
                $slideWrap.stop().animate({left:`${-50*cnt}%`},0)
            })
        };
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
            setId = setInterval(nextCount,3000);
        }
        autoTimer();
        //5.a링크
        $slideA.on({
            click(e){
                e.preventDefault();
            }
        })
        //6.마우스 오버 리브
        $slideContainer.on({
            mouseenter(){
                clearInterval(setId);
            },
            mouseleave(){
                autoTimer();
            }
        });

        //7.arrow
        $nextArrowBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        });
        $prevArrowBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        })
        

    },[]);

    React.useEffect(()=>{
        const $slideContainerS5 = $('#section6 .slide-container-s5');
        const $slideWrapS5 = $('#section6 .slide-wrap-s5');
        const $slide = $('#section6 .slide');
        const $slideA = $('#section6 .slide a');
        const $nextArrowBtn = $('#section6 .next-arrow-btn');
        const $prevArrowBtn = $('#section6 .prev-arrow-btn');

        let cnt = 0;
        let setId = 0;
        let n = $slide.length-2;


        //1.메인함수
        function mainSlide(){
            $slideWrapS5.stop().animate({left:`${-100*cnt}%`},600,function(){
                if(cnt >=n){
                cnt = 0;
                }
                if(cnt<0){
                    cnt= n-1;
                }
                $slideWrapS5.stop().animate({left:`${-100*cnt}%`},0)
            })
          
        }
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

        //마우스 오버 리브

        $slideContainerS5.on({

            mouseenter(){
                clearInterval(setId);
            },
            mouseleave(){
                autoTimer();
            }
        });
        //a링크
        $slideA.on({
            click(e){
                e.preventDefault();
            }
        });
        //버튼클릭
        $nextArrowBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        });
        $prevArrowBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        })


    },[]);
    
    React.useEffect(()=>{
        const $slideContainer = $('#section8 .slide-container');
        const $slideWrap = $('#section8 .slide-container');
        const $slide = $('#section8 .slide');
        const $slideA = $('#section8 .slide a');

        const $pageBtn = $('#section8 .page-btn');


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
            $pageBtn.eq(cnt > 4 ? 0 :cnt).addClass('on');
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


    });


    return (
        <div id='wrap'>
            <NewComponent/>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide12"><a href="!#"><img src="./img/main/pc13_1920x600_20230509173811.jpg" alt="" /></a></li>
                                    <li className="slide slide0"><a href="!#"><img src="./img/main/pc01_1920x600_20230509122051.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/main/pc01_1920x600_20230509173446.jpg" alt="" /></a></li>
                                    <li className="slide slide2"><a href="!#"><img src="./img/main/pc02_1920x600_20230509173503.jpg" alt="" /></a></li>
                                    <li className="slide slide3"><a href="!#"><img src="./img/main/pc03_1920x600_20230509173517.jpg" alt="" /></a></li>
                                    <li className="slide slide4"><a href="!#"><img src="./img/main/pc04_1920x600_20230509173553.jpg" alt="" /></a></li>
                                    <li className="slide slide5"><a href="!#"><img src="./img/main/pc06_1920x600_20230509173613.jpg" alt="" /></a></li>
                                    <li className="slide slide6"><a href="!#"><img src="./img/main/pc07_1920x600_20230509173624.jpg" alt="" /></a></li>
                                    <li className="slide slide7"><a href="!#"><img src="./img/main/pc08_1920x600_20230509173637.jpg" alt="" /></a></li>
                                    <li className="slide slide8"><a href="!#"><img src="./img/main/pc09_1920x600_20230509173650.jpg" alt="" /></a></li>
                                    <li className="slide slide9"><a href="!#"><img src="./img/main/pc10_1920x600_20230509180046.jpg" alt="" /></a></li>
                                    <li className="slide slide10"><a href="!#"><img src="./img/main/pc11_1920x600_20230509173743.jpg" alt="" /></a></li>
                                    <li className="slide slide11"><a href="!#"><img src="./img/main/pc12_1920x600_20230509173756.jpg" alt="" /></a></li>
                                    <li className="slide slide12"><a href="!#"><img src="./img/main/pc13_1920x600_20230509173811.jpg" alt="" /></a></li>
                                    <li className="slide slide0"><a href="!#"><img src="./img/main/pc01_1920x600_20230509122051.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                            <a href="!#" className='left-arrow-btn'><img src="./img/main/arrow_left.svg" alt="" /></a>
                            <a href="!#" className='right-arrow-btn'><img src="./img/main/arr_right.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="title">
                        <h2>style story</h2>
                    </div>
                    <div className="content">
                        <ul className="box1234">
                            <li className="box box1">
                                <a href="!#">
                                    <img src="./img/main/pc_02_ONE DAY SALE_20230511092845.jpg" alt="" />
                                    <h3>BAG&SHOES&ACC</h3>
                                    <p>
                                    단, 하루동안만 진행되는 잡화 세일<br/>
                                    최대 60% 할인율로 특별하게 만나보세요!
                                    </p>
                                </a>
                            </li>
                            <li className="box box2">
                                <a href="!#">
                                    <img src="./img/main/드메리엘_pc_20230509181024.jpg" alt="" />
                                    <h3>DE'MERIEL 72H POP-UP</h3>
                                    <p>
                                    놓칠 수 없는 드메리엘 팝업 세일<br/>
                                    단 3일, 최대 50%할인 놓치지마세요!
                                    </p>
                                </a>
                            </li>
                            <li className="box box3">
                                <a href="!#">
                                    <img src="./img/main/456_20230503102934.jpg" alt="" />
                                    <h3> BEST BEAUTY BRANDS</h3>
                                    <p>
                                    한주동안 만나보는 뷰티 베스트 브랜드의 모든것! <br/>최대 59% 세일 가격은 물론 추가 20% 쿠폰 혜택까지 동시에 만나보자 
                                    </p>
                                </a>
                            </li>
                            <li className="box box4">
                                <a href="!#">
                                    <img src="./img/main/서재페_20230427171737.jpg" alt="" />
                                    <h3>서울재즈페스티벌 2023</h3>
                                    <p>
                                    3일권 티켓 0원 래플을 오직 W컨셉에서 <br/>
                                    더 특별한 서울재즈페스티벌을 만나보세요.
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="section3">
                <div className="container">
                    <div className="content">
                        <ul className="banner">
                            <li className="card1">
                                <a href="!#">
                                    <img src="./img/main/P3_620x150_20230428082411.jpg" alt="" />
                                </a>
                            </li>
                            <li className="card2">
                                <a href="!#">
                                    <img src="./img/main/pc_620x150(6)_20230428082259.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="section4">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>what's new</h2>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide0">
                                            <a href="!#">
                                                <img src="./img/main/302762227_GJ21227.png" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide1">
                                            <a href="!#">
                                                <img src="./img/main/302805426_LB92571.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide2">
                                            <a href="!#">
                                                <img src="./img/main/301007424_IO26571.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide3">
                                            <a href="!#">
                                                <img src="./img/main/301026273_RK51140.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide4">
                                            <a href="!#">
                                                <img src="./img/main/301410105_AC53109.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide5">
                                            <a href="!#">
                                                <img src="./img/main/302297085_LR19627.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide6">
                                            <a href="!#">
                                                <img src="./img/main/302791740_AF65527aa.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide7">
                                            <a href="!#">
                                                <img src="./img/main/302752785_HG13295.png" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide8">
                                            <a href="!#">
                                                <img src="./img/main/302806762_CS84118.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide9">
                                            <a href="!#">
                                                <img src="./img/main/302762786_GG77614.png" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide10">
                                            <a href="!#">
                                                <img src="./img/main/302760531_HG21191.png" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide11">
                                            <a href="!#">
                                                <img src="./img/main/302549233_YS67036.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide12">
                                            <a href="!#">
                                                <img src="./img/main/302761110_XR75161.jpg" alt="" />
                                                <h3>AVA MOLLI</h3>
                                                <p>[SUMMER WOOL] 3BUTTON DARTS HALF SLEEVE JK (BLACK)</p>
                                                <div className="price">
                                                    <span className='dis-price'>188,100</span>
                                                    <span className='base-price'>198,000</span>
                                                    <span className='discount'>5%</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="!#" className='next-arrow-btn'><img src="./img/main/btn-lookbook-next.png" alt="" /></a>
                                <a href="!#" className='prev-arrow-btn'><img src="./img/main/btn-lookbook-prev.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section5">
                <div className="container">
                    <div className="title">
                        <h2>exclusive<a href="!#"><img src="./img/main/800px-Plus_symbol.svg.png" alt="" /></a></h2>
                    </div>
                    <div className="content">
                        <div className="top-box">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide4">
                                            <a href="!#">
                                                <img src="./img/main/5.L’H.A_20230510164203.jpg" alt="" />
                                                <div className="center-text">
                                                    <p>L’H.A.S</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide0">
                                            <a href="!#">
                                                <img src="./img/main/1.EENK_20230510163853.jpg" alt="" />
                                                <div className="center-text">
                                                    <p>EENK</p>
                                                </div>
                                            </a>
                        
                                        </li>
                                        <li className="slide slide1">
                                            <a href="!#">
                                                <img src="./img/main/1.edition.B_20230509161103.jpg" alt="" />
                                                <div className="center-text">
                                                    <p>edition.B</p>
                                                </div>
                                            </a>
                        
                                        </li>
                                        <li className="slide slide2">
                                            <a href="!#">
                                                <img src="./img/main/3.셋업 탑브랜드 팝업_20230510164124.jpg" alt="" />
                                                <div className="center-text">
                                                    <p>BEST SET-UP 72H POP-UP</p>
                                                </div>
                                            </a>
                        
                                        </li>
                                        <li className="slide slide3">
                                            <a href="!#">
                                                <img src="./img/main/1.FRONTROW_20230504155220.jpg" alt="" />
                                                <div className="center-text">
                                                    <p>FRONTROW REAL REVIEW</p>
                                                </div>
                                            </a>
                        
                                        </li>
                                        <li className="slide slide4">
                                            <a href="!#">
                                                <img src="./img/main/5.L’H.A_20230510164203.jpg" alt="" />
                                                <div className="center-text">
                                                    <p>L’H.A.S</p>
                                                </div>
                                            </a>
                        
                                        </li>
                                        <li className="slide slide0">
                                            <a href="!#">
                                                <img src="./img/main/1.EENK_20230510163853.jpg" alt="" />
                                                <div className="center-text">
                                                    <p>EENK</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="!#" className='next-arrow-btn'><img src="./img/main/btn-lookbook-next.png" alt="" /></a>
                                <a href="!#" className='prev-arrow-btn'><img src="./img/main/btn-lookbook-prev.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="bottom-box">
                            <ul className="img-slide">
                                <li className="img img1">
                                    <a href="!#">
                                        <img src="./img/main/302791740_AF65527aaaaaaa.jpg" alt="" />
                                        <h3>BAU by Bride And You</h3>
                                        <p className='p1'>[프리쇼][23SUMMER][~5/15까지!]</p>
                                        <p className='p2'>semi mermaid long dress</p>
                                        <div className="price">
                                            <span className='dis-price'>313,200</span>
                                            <span className='base-price'>348,000</span>
                                            <span className='discount'>10%</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="img img2">
                                    <a href="!#">
                                        <img src="./img/main/302541848_GN15268.png" alt="" />
                                        <h3>EENK</h3>
                                        <p className='p1'>[23SS]</p>
                                        <p className='p2'>WILEY Bolero Denim Shirt - Denim Blue</p>
                                        <div className="price">
                                            <span className='dis-price'>368,000</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="img img3">
                                    <a href="!#">
                                        <img src="./img/main/302295424_LG26190.jpg" alt="" />
                                        <h3>ETHOS</h3>
                                        <p className='p1'>[단독오픈] | [06/01 예약배송]</p>
                                        <p className='p2'>[단독] VINTAGE CAP(3COLOR)</p>
                                        <div className="price">
                                            <span className='dis-price'>58,000</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="img img4">
                                    <a href="!#">
                                        <img src="./img/main/302284436_QL89466.jpg" alt="" />
                                        <h3>NILBY P</h3>
                                        <p className='p1'>[1차: 05/12, 2차: 05/24 예약배송]</p>
                                        <p className='p2'>23SN vintage lace shirts [IV]</p>
                                        <div className="price">
                                            <span className='dis-price'>119,000</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="img img5">
                                    <a href="!#">
                                        <img src="./img/main/302764866_NE99549.jpg" alt="" />
                                        <h3>Amour moier</h3>
                                        <p className='p1'>[12%쿠폰][단독오픈] | [23SUMMER]</p>
                                        <p className='p2'>셔링원피스 블랙 amr1583</p>
                                        <div className="price">
                                            <span className='dis-price'>125,100</span>
                                            <span className='base-price'>139,000</span>
                                            <span className='discount'>10%</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="img img6">
                                    <a href="!#">
                                        <img src="./img/main/301843220_LX52337.jpg" alt="" />
                                        <h3>JOORTI</h3>
                                        <p className='p1'>[72H POP-UP][~5/11까지]</p>
                                        <p className='p2'>j769 wrap onepiece (3color)</p>
                                        <div className="price">
                                            <span className='dis-price'>89,600</span>
                                            <span className='base-price'>128,000</span>
                                            <span className='discount'>30%</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="img img7">
                                    <a href="!#">
                                        <img src="./img/main/302720667_IG23612.png" alt="" />
                                        <h3>LOEUVRE</h3>
                                        <p className='p1'>[23SUMMER]</p>
                                        <p className='p2'>[단독] Fancy Knit Jacket SK3MD230-03</p>
                                        <div className="price">
                                            <span className='dis-price'>125,100</span>
                                            <span className='base-price'>139,000</span>
                                            <span className='discount'>10%</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="img img8">
                                    <a href="!#">
                                        <img src="./img/main/302709315_OR21775.jpg" alt="" />
                                        <h3>EN OR</h3>
                                        <p className='p1'>[프리쇼][12%쿠폰]</p>
                                        <p className='p2'>LINE CONTRAST CROP JACKET - IVORY</p>
                                        <div className="price">
                                            <span className='dis-price'>178,200</span>
                                            <span className='base-price'>198,000</span>
                                            <span className='discount'>10%</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section6">
                <div className="container">
                    <div className="title">
                        <h2>beauty pick<a href="!#"><img src="./img/main/800px-Plus_symbol.svg.png" alt="" /></a></h2>
                    </div>
                    <div className="content">
                        <div className="left-slide-box">
                            <div className="slide-container-s5">
                                <div className="slide-view-s5">
                                    <ul className="slide-wrap-s5"> 
                                        <li className="slide slide7">
                                                <a href="!#">
                                                    <img src="./img/main/752834_20230426105935.jpg" alt="" />
                                                    <div className="text-box">
                                                        <h3>SULWHASOO</h3>
                                                        <p>시간의 지혜로 빛나는 아름다움</p>
                                                        <button>20%쿠폰 + 증정이벤트</button>
                                                    </div>
                                                </a>
                                        </li>
                                        <li className="slide slide0">
                                            <a href="!#">
                                                <img src="./img/main/752_20230220102142.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>MENOKIN</h3>
                                                    <p>가장 효과적인 스킨케어 브랜드</p>
                                                    <button>최대 20%세일</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide1">
                                            <a href="!#">
                                                <img src="./img/main/752834_20230509101526.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>Lilybyred</h3>
                                                    <p>릴리바이레드 X W컨셉 론칭 </p>
                                                    <button>최대 55% 할인 + 증정이벤트</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide2">
                                            <a href="!#">
                                                <img src="./img/main/PC1_20230509100929.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>fwee</h3>
                                                    <p>NEW 블러쉬드하트 컬렉션 론칭</p>
                                                    <button>최대 25%세일 + 증정 이벤트</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide3">
                                            <a href="!#">
                                                <img src="./img/main/7528342_20230407103548.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>Biodance</h3>
                                                    <p>균형있는 세계로의 안내, 바이오던스 </p>
                                                    <button>최대 19% 세일 + 증정이벤트</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide4">
                                            <a href="!#">
                                                <img src="./img/main/mo2_20230508100943.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>Spring Fragrance</h3>
                                                    <p>향을 담은 뷰티아이템의 모든 것</p>
                                                    <button>최대 84% 세일</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide5">
                                            <a href="!#">
                                                <img src="./img/main/75283422_20230503101335.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>3CE</h3>
                                                    <p>블러 매트 립스틱 & 베어 커버 쿠션 론칭</p>
                                                    <button>최대 30% 할인</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide6">
                                            <a href="!#">
                                                <img src="./img/main/opc1_20230428114303.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>MUST BEAUTY ITEM</h3>
                                                    <p>빈틈없는 홈케어를 위한 디바이스 & 뷰티툴</p>
                                                    <button>최대 77% 세일</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide7">
                                            <a href="!#">
                                                <img src="./img/main/752834_20230426105935.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>SULWHASOO</h3>
                                                    <p>시간의 지혜로 빛나는 아름다움</p>
                                                    <button>20%쿠폰 + 증정이벤트</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide0">
                                            <a href="!#">
                                                <img src="./img/main/752_20230220102142.jpg" alt="" />
                                                <div className="text-box">
                                                    <h3>MENOKIN</h3>
                                                    <p>가장 효과적인 스킨케어 브랜드</p>
                                                    <button>최대 20%세일</button>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="!#" className='next-arrow-btn'><img src="./img/main/btn-lookbook-next.png" alt="" /></a>
                                <a href="!#" className='prev-arrow-btn'><img src="./img/main/btn-lookbook-prev.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="left-wrap">
                            <div className="right-top-box">
                                <div className="top-box">
                                    <ul className="img-slide">
                                        <li className="img img1">
                                            <a href="!#">
                                                <img src="./img/main/302766114_FO47322.jpg" alt="" />
                                                <h3>BAU by Bride And You</h3>
                                                <p className='p1'>[프리쇼][23SUMMER][~5/15까지!]</p>
                                                <p className='p2'>semi mermaid long dress</p>
                                                <div className="price">
                                                    <span className='dis-price'>313,200</span>
                                                    <span className='base-price'>348,000</span>
                                                    <span className='discount'>10%</span>
                                                </div>
                                                <span>
                                                    뉴시즌
                                                </span>
                                            </a>
                                        </li>
                                        <li className="img img2">
                                            <a href="!#">
                                                <img src="./img/main/302482692_NN99456 (1).jpg" alt="" />
                                                <h3>EENK</h3>
                                                <p className='p1'>[23SS]</p>
                                                <p className='p2'>WILEY Bolero Denim Shirt - Denim Blue</p>
                                                <div className="price">
                                                    <span className='dis-price'>368,000</span>
                                                </div>
                                                <span>
                                                    뉴시즌
                                                </span>
                                            </a>
                                        </li>
                                        <li className="img img3">
                                            <a href="!#">
                                                <img src="./img/main/302200954 (1).jpg" alt="" />
                                                <h3>ETHOS</h3>
                                                <p className='p1'>[단독오픈] | [06/01 예약배송]</p>
                                                <p className='p2'>[단독] VINTAGE CAP(3COLOR)</p>
                                                <div className="price">
                                                    <span className='dis-price'>58,000</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="img img4">
                                            <a href="!#">
                                                <img src="./img/main/302684328_FX91700 (1).jpg" alt="" />
                                                <h3>NILBY P</h3>
                                                <p className='p1'>[1차: 05/12, 2차: 05/24 예약배송]</p>
                                                <p className='p2'>23SN vintage lace shirts [IV]</p>
                                                <div className="price">
                                                    <span className='dis-price'>119,000</span>
                                                </div>
                                                <span>
                                                    뉴시즌
                                                </span>
                                            </a>
                                        </li>
                                        <li className="img img5">
                                            <a href="!#">
                                                <img src="./img/main/302199664_FF83647 (3).jpg" alt="" />
                                                <h3>Amour moier</h3>
                                                <p className='p1'>[12%쿠폰][단독오픈] | [23SUMMER]</p>
                                                <p className='p2'>셔링원피스 블랙 amr1583</p>
                                                <div className="price">
                                                    <span className='dis-price'>125,100</span>
                                                    <span className='base-price'>139,000</span>
                                                    <span className='discount'>10%</span>
                                                </div>
                                                <span>
                                                    뉴시즌
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right-bottom-box">
                                <div className="bottom-box">
                                    <ul className="img-slide">
                                        <li className="img img1">
                                            <a href="!#">
                                                <img src="./img/main/302677195_IC94228 (3).jpg" alt="" />
                                                <h3>BAU by Bride And You</h3>
                                                <p className='p1'>[프리쇼][23SUMMER][~5/15까지!]</p>
                                                <p className='p2'>semi mermaid long dress</p>
                                                <div className="price">
                                                    <span className='dis-price'>313,200</span>
                                                    <span className='base-price'>348,000</span>
                                                    <span className='discount'>10%</span>
                                                </div>
                                                <span>
                                                    뉴시즌
                                                </span>
                                            </a>
                                        </li>
                                        <li className="img img2">
                                            <a href="!#">
                                                <img src="./img/main/302482718_RX35151 (1).jpg" alt="" />
                                                <h3>EENK</h3>
                                                <p className='p1'>[23SS]</p>
                                                <p className='p2'>WILEY Bolero Denim Shirt - Denim Blue</p>
                                                <div className="price">
                                                    <span className='dis-price'>368,000</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="img img3">
                                            <a href="!#">
                                                <img src="./img/main/302327488_XP19868 (1).jpg" alt="" />
                                                <h3>ETHOS</h3>
                                                <p className='p1'>[단독오픈] | [06/01 예약배송]</p>
                                                <p className='p2'>[단독] VINTAGE CAP(3COLOR)</p>
                                                <div className="price">
                                                    <span className='dis-price'>58,000</span>
                                                </div>
                                                <span>
                                                    뉴시즌
                                                </span>
                                            </a>
                                        </li>
                                        <li className="img img4">
                                            <a href="!#">
                                                <img src="./img/main/301539133 (1).jpg" alt="" />
                                                <h3>NILBY P</h3>
                                                <p className='p1'>[1차: 05/12, 2차: 05/24 예약배송]</p>
                                                <p className='p2'>23SN vintage lace shirts [IV]</p>
                                                <div className="price">
                                                    <span className='dis-price'>119,000</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="img img5">
                                            <a href="!#">
                                                <img src="./img/main/301420006_IC43596 (1).jpg" alt="" />
                                                <h3>Amour moier</h3>
                                                <p className='p1'>[12%쿠폰][단독오픈] | [23SUMMER]</p>
                                                <p className='p2'>셔링원피스 블랙 amr1583</p>
                                                <div className="price">
                                                    <span className='dis-price'>125,100</span>
                                                    <span className='base-price'>139,000</span>
                                                    <span className='discount'>10%</span>
                                                </div>
                                                <span>
                                                    뉴시즌
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id="section7">
                <div className="container">
                    <div className="content">
                        <div className="box-wrap">
                            <div className="box1">
                                <a href="!#">
                                    <img src="./img/main/PC에디션 구좌 썸네일_20220921221521 (1).jpg" alt="" />
                                    <h4>GLOBAL CAMPAIGN with OLIVIA</h4>
                                    <p>
                                    글로벌 인플루언서 올리비아와 함께한 런던
                                    </p>
                                    <span className='arrow'>
                                        view detail
                                    </span>
                                </a>
                            </div>
                            <div className="box2">
                                <a href="!#">
                                    <img src="./img/main/에디션구좌_쏠_20220620112703 (1).jpg" alt="" />
                                    <h4>HI SEOUL SHOWROOM</h4>
                                    <p>
                                    SOLE's WONDERLAND
                                    </p>
                                    <span className='arrow'>
                                        view detail
                                    </span>
                                </a>
                            </div>
                            <div className="box3">
                                <a href="!#">
                                    <img src="./img/main/에디션구좌_잉크_20220620114508 (1).jpg" alt="" />
                                    <h4>EENK GLOBAL CAMPAIGN</h4>
                                    <p>
                                    잉크와 함께한 리앤드라 메딘의 유토피아
                                    </p>
                                    <span className='arrow'>
                                        view detail
                                    </span>
                                </a>
                            </div>
                            <div className="box4">
                                <a href="!#">
                                    <img src="./img/main/banner_resize_txt_20210716114949 (1).jpg" alt="" />
                                    <h4>HI SEOULSHOWROOM</h4>
                                    <p>
                                    유라X하이서울쇼룸 드림라이브    
                                    </p>
                                    <span className='arrow'>
                                        view detail
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section8">
                <div className="container">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide4"><a href="!#"><img src="./img/main/SDASD 복사_20230321181941 (1).jpg" alt=""/></a></li>
                                    <li className="slide slide0"><a href="!#"><img src="./img/main/1920x450_20230425100424 (1).jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/main/1920x450_20230413142011 (1).jpg" alt="" /></a></li>
                                    <li className="slide slide2"><a href="!#"><img src="./img/main/1920x450_20230403100548 (1).jpg" alt="" /></a></li>
                                    <li className="slide slide3"><a href="!#"><img src="./img/main/제목 없음-4_20230213154047 (1).jpg" alt="" /></a></li>
                                    <li className="slide slide4"><a href="!#"><img src="./img/main/SDASD 복사_20230321181941 (1).jpg" alt="" /></a></li>
                                    <li className="slide slide0"><a href="!#"><img src="./img/main/1920x450_20230425100424 (1).jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* 페이지네이션 */}
                        <div class="page-btn-box">
                            <span><a href="!#" class="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" class="page-btn blind">페이지2</a></span>
                            <span><a href="!#" class="page-btn blind">페이지3</a></span>
                            <span><a href="!#" class="page-btn blind">페이지4</a></span>
                            <span><a href="!#" class="page-btn blind">페이지5</a></span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section9">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>Designers</h2>
                            <ul className="nav-bar">
                                <li className='nav-bar-content'>
                                    <a href="!#">
                                        <span>LOOKAST</span>
                                    </a>
                                </li>
                                <li className='nav-bar-content'>
                                    <a href="!#">
                                        <span>SUECOMMA BONNIE</span>
                                    </a>
                                </li>
                                <li className='nav-bar-content'>
                                    <a href="!#">
                                        <span>lululemon</span>
                                    </a>
                                </li>
                                <li className='nav-bar-content'>
                                    <a href="!#">
                                        <span>CARLYN</span>
                                    </a>
                                </li>
                                <li className='nav-bar-content'>
                                    <a href="!#">
                                        <span>GETMEBLING</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <div className="top-box">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
                                            <li className="slide slide2">
                                                <a className='slide-pic slide-pic2' href="!#">
                                            
                                                </a>
                                                <div className="text">
                                                    <strong>lululemon</strong>
                                                    <p>룰루레몬 요가&데일리 COLLECTION UP TO 30% </p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>

                                            </li>
                                            <li className="slide slide3">
                                                <a className='slide-pic slide-pic3' href="!#">
                                                
                                                </a>
                                                <div className="text">
                                                    <strong>CARLYN  </strong>
                                                    <p>벨라우영 & 이지선 PICK 칼린 신상 최대15%</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>
                            
                                            </li>
                                            <li className="slide slide4">
                                                <a className='slide-pic slide-pic4' href="!#">
                                            
                                                </a>
                                                <div className="text">
                                                    <strong>GETMEBLING</strong>
                                                    <p>러블리함이 강조된 23SS PURE ICE라인</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>     
                                            </li>
                                            <li className="slide slide0">
                                                <a className='slide-pic slide-pic0' href="!#">
                                
                                                </a>
                                                <div className="text">
                                                    <strong>LOOKAST</strong>
                                                    <p>베스트아이템 소개!</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>
                            
                                            </li>
                                            <li className="slide slide1">
                                                <a className='slide-pic slide-pic1' href="!#">
                                            
                                                </a>
                                                <div className="text">
                                                    <strong>SUECOMMA BONNIE</strong>
                                                    <p>SUECOMMA BONNIE</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>
                            
                                            </li>
                                            <li className="slide slide2">
                                                <a className='slide-pic slide-pic2' href="!#">
                                            
                                                </a>
                                                <div className="text">
                                                    <strong>lululemon</strong>
                                                    <p>룰루레몬 요가&데일리 COLLECTION UP TO 30% </p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>

                                            </li>
                                            <li className="slide slide3">
                                                <a className='slide-pic slide-pic3' href="!#">
                                                
                                                </a>
                                                <div className="text">
                                                    <strong>CARLYN  </strong>
                                                    <p>벨라우영 & 이지선 PICK 칼린 신상 최대15%</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>
                            
                                            </li>
                                            <li className="slide slide4">
                                                <a className='slide-pic slide-pic4' href="!#">
                                            
                                                </a>
                                                <div className="text">
                                                    <strong>GETMEBLING</strong>
                                                    <p>러블리함이 강조된 23SS PURE ICE라인</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>     
                                            </li>
                                            <li className="slide slide0">
                                                <a className='slide-pic slide-pic0' href="!#">
                                
                                                </a>
                                                <div className="text">
                                                    <strong>LOOKAST</strong>
                                                    <p>베스트아이템 소개!</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>
                            
                                            </li>
                                            <li className="slide slide1">
                                                <a className='slide-pic slide-pic1' href="!#">
                                            
                                                </a>
                                                <div className="text">
                                                    <strong>SUECOMMA BONNIE</strong>
                                                    <p>SUECOMMA BONNIE</p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>
                            
                                            </li>
                                            <li className="slide slide2">
                                                <a className='slide-pic slide-pic2' href="!#">
                                            
                                                </a>
                                                <div className="text">
                                                    <strong>lululemon</strong>
                                                    <p>룰루레몬 요가&데일리 COLLECTION UP TO 30% </p>
                                                    <span className='view'>VIEW MORE</span>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>
                                    <a href="!#" className='next-arrow-btn'><img src="./img/main/btn-lookbook-next.png" alt="" /></a>
                                    <a href="!#" className='prev-arrow-btn'><img src="./img/main/btn-lookbook-prev.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

