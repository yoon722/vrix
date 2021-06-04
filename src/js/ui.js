
// 하위 브라우저 호환
document.createElement("article");
document.createElement("section");
document.createElement("aside");
document.createElement("nav");
document.createElement("header");
document.createElement("footer");
document.createElement("main");

$(function () {

});

function fnTab(obj,tabName){
  var _this = obj;
  $(_this).addClass('on').siblings('button').removeClass('on');
  $('.tab_cont[data-tab="'+tabName+'"]').addClass('active').siblings('.tab_cont').removeClass('active');
}
