



$(function(){
  $('.mCustomScrollbar').mCustomScrollbar();

  $('.btnClosePopup').on('click',function(){
    var checked = $('#check_day').is(':checked');
    if(checked) {
      $.cookie('hide_main_popup_yn','Y');
    }
    $('#popip_3').remove();
  });
});