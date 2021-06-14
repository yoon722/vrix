
// 하위 브라우저 호환
document.createElement("article");
document.createElement("section");
document.createElement("aside");
document.createElement("nav");
document.createElement("header");
document.createElement("footer");
document.createElement("main");

$(function () {
  
  //gnb
  var _gnb = $('.gnb');
  _gnb.find('>li>a').on('mouseenter focus',function(){
    _gnb.find('li.on').removeClass('on').children('.sub_gnb').hide();
    $(this).next().show().parent().addClass('on');
  });
  _gnb.find('.sub_gnb').on('mouseleave',function(){
    $(this).parent('li.on').removeClass('on');
    $(this).hide();
  });

  openTab();

});

//탭메뉴
function openTab() {
  var tabBtn = $('.tab_btns button'); 
  var tabCont = $('.tab_cont');  

  tabCont.removeClass('active').eq(0).addClass('active');

  tabBtn.click(function(){
    var target = $(this);        
    var index = target.index();  
    tabBtn.removeClass('active');  
    target.addClass('active');  
    tabCont.removeClass('active')
    tabCont.eq(index).addClass('active');
  });
}

//팝업 닫기
function closePopup() {
	var popup = document.querySelector('.popup');
  popup.classList.add('hide');
}
