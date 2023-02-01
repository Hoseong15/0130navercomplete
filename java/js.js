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

//비밀번호
//
$("#userpw input").focusout(function() {
  let len = $(this).val().length;
  pwveri = false;
  if(len == 0) {
    $("#userpw .warn").html('<span class="text-red">필수 정보 입니다.</span>');
    $("#userpw .inputbox img").attr("src", "images/m_icon_pw_step_01.png");
    $("#userpw .inputbox span").empty();

  } else if(len < 8 || len > 16) {
    $("#userpw .warn").html('<span class="text-red">8~16자 영문 대 소문자,숫자,특수문자를 사용하세요.</span>');
    $("#userpw .inputbox p").html('<span class="text-red">사용불가</span>');
    $("#userpw .inputbox img").attr("src", "images/m_icon_pw_step_10.png");


  } else{
    pwveri = true;
    $("#userpw .warn").empty();
    $("#userpw .inputbox p").html('<span class="text-green">안전</span>');
    $("#userpw .inputbox img").attr("src", "images/m_icon_pw_step_04.png");
  }
})





//비밀번호 재확인
//userpwchk input에서 focusout 됐을 때  value 값이

$("#userpw-chk input").focusout(function() {
  let userpwchk = $(this).val();
  pwchkveri = false;
  if(userpwchk.length == 0) {
    $("#userpw-chk .warn").html('<span class="text-red">필수 정보 입니다.</span>');
    $("#userpw-chk .inpubox img").attr("src", "images/m_icon_pw_step_02.png");
  }else if(userpwchk == $("#userpw input").val()) {
    pwchkveri = true;
    //remove / empty
    // remove 요소 자체를 지우고 empty 요소 안 내용을 지운다.
    $("#userpw-chk .warn").empty();
    $("#userpw-chk .inputbox img").attr("src", "images/m_icon_pw_step_07.png");
  } else{
    $("#userpw-chk .warn").html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>');
    $("#userpw-chk .inputbox img").attr("src", "images/m_icon_pw_step_02.png");
  }
})


// 이름
// #usename input에서 focusout될 때
$("#username input").focusout(function() {
  let username = $("#username input").val();
  nameveri: false;
  // Js 정규 표현식 입력값을 체크
  // 형식 : /정규식/
  // 문자와 숙자가 아닌 것
  let reg = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/g;
  if (username.length == 0) {
   $("#username .warn").html('<span class=text-red>필수 정보입니다.</span>')
 } else if(reg.test(username)) {
  //정규식을 만족하면 true 만족하지 않으면 false 반환
  $("#username .warn").html('<span class=text-red>한글과 영문 대 소문자를 사용하세요(특수기호 사용불가).</span>')
 } else {
  nameveri: true;
  $("#username .warn").empty()
 }
})


//생년월일
//#year , month, #date에서 focusout됐을 때 (실행할 함수)
// #birth .warn 빨간 글씨로 "태어난 년도 4자리를 정확하게 입력하세요"를 입력

// #month 값이 비어있으면 (조건2)
// #month .warn 빨간 글씨로 "태어난 월을 선택하세요"를 입력

// #date 값이 비어있으면 (조건3)
// #date .warn 빨간 글씨로 "태어난 일(날짜) 2자리를 정확하게 입력하세요."를 입력

// 만약 연,월,일의 값이 숫자가 아니라면(조건4) isNaN
// #birth .warn 빨간 글씨로 "생년월일을 다시 확인해주세요."(실행문3)

// 올 해 기준으로 나이가 100 초과라면(조건5)
// #birth .warn 빨간 글씨로 "정말이세요?"(실행문3)

//매개변수(파라미터)사용
//코드의 중복을 줄일 수 있다.

function para(text) {
  $("#birth .warn").html('<span class=text-red>'+ text +'</span>')
}


$('#year , month, #date').focusout(function() {
  let year = $("#year , month, #date").val();
  let month = $("#month").val();
  let date = $("#date").val();
  // 현재 날짜 및 시간
  let now = new Date();
  console.log(now);
  // Date 객체의 getTime() 메서드 1970년 1월 1일 00시 00분 00초 UTC(세계표준시)를 기준으로 경과한 밀리초를 반환
  let nowstamp = now.getTime(); 
  // 현재 날짜 및 시간에서 현재 연도의 네 자리값을 변수에 할당
  now = now.getFullYear();
  console.log(now);

  let birth = new Date(year, month, date);
  birth = birth.getTime();
  birthveri = false;

  if(year.length != 4) {
    para("태어난 년도 4자리를 정확하게 입력하세요.");
    // $("#birth .warn").html('<span class=text-red>태어난 년도 4자리를 정확하게 입력하세요.</span>')
  } else if(month.length == 0) {
    para("태어난 월을 선택하세요.");
    // $("#birth .warn").html('<span class=text-red>태어난 월을 선택하세요.</span>')
  } else if(date.length == 0 || date > 31 || date == 0) {
    para("태어난 일(날짜) 2자리를 정확하게 입력하세요.");
    // $("#birth .warn").html('<span class=text-red>태어난 일(날짜) 2자리를 정확하게 입력하세요.</span>')
  } else if (isNaN(year * month * date)) {
    para("생년월일을 다시 확인해주세요.");
    // $("#birth .warn").html('<span class=text-red>생년월일을 다시 확인해주세요.</span>')
  } else if (now - year > 100) {
    para("정말이세요");
    // $("#birth .warn").html('<span class=text-red>정말이세요?</span>')
  } else if(nowstamp < birth) {
    para("미래에서 오셨군요^^");
    // $("#birth .warn").html('<span class=text-red>미래에서 오셨군요^^</span>')
  } else {
    birthveri = true;
    para('');
    // $("#birth .warn").empty()
  }
})

// 성별
//#gender .inputbox를 클릭 했을 때

$("#gender .inputbox").click(function(e) {
  // radio의 기본 클릭동작 해제
  e.preventDefault();
  $("#gender .inputbox").removeClass('btn-primary');
  $("#gender .inputbox input").removeAttr('checked');
  //내가 클릭하는 inputbox한테 클래스, 속성 추가
  $(this).addClass('btn-primary')
  $(this).children('input[type="radio"]').attr('checked', true);
  genderveri = true;
})


//본인 확인 이메일(선택)
//#user-mail .input에서 focusout 됐을 때
$("#usermail input").focusout(function() {
  let mail = $(this).val();
  let redExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  mailveri = true;
  if(mail.length == 0) {
    $("#usermail .warn").empty();
  } else if(!redExp.test(mail)) {
    $("#usermail .warn").html('<span class="text-red">이메일 주소를 다시 확인해주세요.</span>')
    mailveri = false;
  } else {
    $("#usermail .warn").empty();
  }
})

//휴대전화
// #phonenum input에서 focusout 됐을 때 
// 그것의 value.length가 0이라면 (조건1)
// #phone .warn "필수정보입니다."(실행문1) 
$("#phonenum input").focusout(function() {
  if($(this).val().length == 0) {
    $("#phone .warn").html('<span class="text-red">필수정보입니다.</span>');
  }else {
    $("#phone .warn").empty();
  }
})


// #veribtn을 클릭 했을 때 
$("#veribtn").click(function() {
  let verifi = $("#phonenum input").val();
  // 숫자를 제외한 모든 문자제거
  // 문자열 치환 replace
  verifi = verifi.replace(/[^0-9]/g, '');
  $("#phonenum input").val(verifi);

  let veri1;
  //#phonenum input value length가 10~11자리 아니라면(조건1)
  if(verifi.length < 10 || verifi.length > 11) {
    veri1 = false;
  } else {
    veri1 = true;
  }

  let veri2;
  if(!isNaN(verifi)) {
    veri2 = true;
  } else {
    veri2 = false;
  }

  // 1. 전화번호를 형식에 맞게 입력하면 인증번호를 발급
  // 2. 인증번호를 발급 받으면 인증번호를 입력칸을 활성화
  // 3. 전화번호를 형식에 맞지 않게 입력했을 경우 인증번호 입력칸 비활성화
  
  // veri1 && veri2 모두 true일 경우(조건1)
  // 인증번호를 보내고 .warn "인증번호가 발송되었습니다"(실행문1)
  // 인증번호 입력칸을 활성화 (실행문2) css: .disput / attr : disabled
  // $("")부터 disinput이라는 클래스 remove
  // $("")부터 disabled라는 속성 remove
  if(veri1 && veri2) {
    $("#phone .warn").html('<span class="text-green">휴대전화 인증번호 발송 인증번호를 발송했습니다.(유효시간 30분)<br> 인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br> 이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.</span>')
    $(".disinput").removeClass('disinput');
    $("#veritext").removeAttr('disabled'); 
  }else {
    //#phone .warn "형식에 맞지 않는 번호입니다."
    // 인증번호 입력칸 비활성화
    $("#phone .warn").html('<span class="text-red">형식에 맞지 않는 번호입니다.</span>')
    $("#veritext").parent('.inputbox').addClass('disinput')
    $("#veritext").attr('disabled', 'disabled'); 
  }
})

// #veritext에서 focusout됐을 때 / 
// 그 값이 "1234"와 같다면(조건1)

$("#veritext").focusout(function() {
  phoneveri = false;
  if($(this).val() == "1234") {
    phoneveri = true;
    $("#phone .warn").html('<span class="text-green">인증되었습니다.</span>')
    $(this).next('div').empty();
    $(this).parent('.inputbox').removeClass('red')
  } else {
    // 불일치, x아이콘
    // $("#veritext").next('div').html('<span class="text-red">불일치</span>').addClass('disagree')
    $(this).next('div').html('<span class="text-red">불일치</span> <span class="disagree"></span>')
    $("#phone .warn").html('<span class="text-red">인증번호를 다시 확인해주세요.</span>')
    $(this).parent('.inputbox').addClass('red')
  }
})

