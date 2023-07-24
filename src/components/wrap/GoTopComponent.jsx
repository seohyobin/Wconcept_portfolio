import React from 'react';
import go_top from './img/gotop/icon_go_top.svg'
import $ from 'jquery';
import './scss/go_top.scss'

export default  function GoTopComponent(){

    React.useEffect(()=>{
        let header = $(`#header`).offset().top;
        let goTop = $(`#Go-Top`);
        let gotopBtn = $(`.gotop-btn`);

        $(window).scroll(function(){
            if($(window).scrollTop()>=header){
                goTop.stop().css({opecitiy:1},{bottom:`25px`});
            }
            else{
                goTop.stop().css({opecitiy:0});
            }
        })

        gotopBtn.on({
            click(e){
                e.preventDefault();
                $('html, body').stop().animate({scrollTop:0},600);
            }
        });
       
    })


    return (
        <div id='Go-Top'>
            <a href="!#" className='gotop-btn'>
                <img src={go_top} alt="" />
            </a>
        </div>
    );
};
