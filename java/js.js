$("input").focusin(function() {
  $(this).parent('.inputbox').addClass('inputboxact');
})

let idveri, pwveri, pwchkveri, nameveri, birthveri, genderveri, phoneveri, addressveri = false;
let mailveri = true;

$("input").focusout(function() {
  $(this).parent('.inputbox').removeClass('inputboxact');
})

//아이디
//#userid input에서 focusout 됐을 때 그것의 글자수가 0이라면 (조건)
$("#userid input").focusout(function() {
  let len = $(this).val().length;
  idveri = false;
  if(len == 0) {
    $("#userid .warn").html('<span class="text-red">필수 정보 입니다.</span>');
  } else if(len < 5 || len > 20){
    $("#userid .warn").html('<span class="text-red">5~20영문소문자만 사용가능합니다.</span>');
  } else {
    $("#userid .warn").html('<span class="text-green">멋진 아이디네요</span>')
    idveri = true;
  }
})
