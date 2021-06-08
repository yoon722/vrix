
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

});

function fnTab(obj,tabName){ //beNX 참고 (by 정연과장님)
  var _this = obj;
  $(_this).addClass('on').siblings('button').removeClass('on');
  $('.tab_cont[data-tab="'+tabName+'"]').addClass('active').siblings('.tab_cont').removeClass('active');
}

function closePopup() {
	var popup = document.querySelector('.popup');
  popup.classList.add('hide');
}
