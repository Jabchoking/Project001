/* login 1page */
let login =document.querySelector(' #LogIn .leftLogIn .login_id')
let background= document.querySelector(' #LogIn .memberLogin')
let background2=document.querySelector('.non-memberLogin')
let nonlogin_name=document.querySelector('.rightLogIn  #name')
let nonlogin=document.querySelector('.rightLogIn .nonlogin')
let login_Subscription=document.querySelector(' .Subscription_button_image .login_Subscription_image')
let nonlogin_Subscription=document.querySelector(' .Subscription_button_image .nonlogin_Subscription_image')
let login_area=document.querySelector('#LogIn .leftLogIn')
let nonlogin_area=document.querySelector('#LogIn .rightLogIn')
let Subscription_button_image=document.querySelector('.inner .Subscription_button_image')
let login_icon=document.querySelector('.memberLogin i')
let nonlogin_icon=document.querySelector('.non-memberLogin i')
let Consent_To_use=document.querySelector('#Consent_To_use')
let naverLogin=document.querySelector('#LogIn .leftLogIn .naverLogIn')
let login_button=document.querySelector('#LogIn .login')
let login_password=document.querySelector('#LogIn .login_password')



if (nonlogin) {
  nonlogin.addEventListener('click', e => {
    let edical_examination_ticket = document.querySelector('.rightLogIn #edical_examination_ticket').value
    let Authentication_Number = document.querySelector('.rightLogIn #Authentication_Number').value
    let callNumber = document.querySelector('.rightLogIn #callNumber').value
    let non_loginname = nonlogin_name.value
    let numberPattern = /^[0-9]+$/
    let koreanPattern = /^[ㄱ-ㅎ가-힣]+$/

    if (!numberPattern.test(edical_examination_ticket) || !numberPattern.test(Authentication_Number) || !numberPattern.test(callNumber)) {
      alert('진찰권 번호, 휴대폰 번호 및 승인번호에는 숫자만 입력해주세요')
    } else if (!koreanPattern.test(non_loginname)) {
      alert('잘못 입력하셨습니다. 이름을 다시 입력해주세요')
    } else if (!Consent_To_use.checked) {
      alert('개인정보 수집에 동의하지 않으셨습니다. 다시 확인해주세요')
    } else {
    }
  })
}

if(login_Subscription){
    login_Subscription.addEventListener('click', e=>{
        Subscription_button_image.style.display='none'
        login_area.style.left="25%"
        login_area.style.transition='0.5s'
        
    })
}
if(nonlogin_Subscription){
    nonlogin_Subscription.addEventListener('click', e=>{
        Subscription_button_image.style.display='none'
        nonlogin_area.style.left="25%"
        nonlogin_area.style.transition='0.5s'
    })
}
if(login){
login.addEventListener('click', e=>{
  let text_login_icon=document.querySelector('.memberLogin h2')
  background.style.background="#B8A982"
  login_icon.style.color="#fff"
  text_login_icon.style.color="#fff"
})
}
if(nonlogin_name){
nonlogin_name.addEventListener('click', e=>{
  let text_nonlogin_icon=document.querySelector('.non-memberLogin h2')
  background2.style.background="#B8A982"
  nonlogin_icon.style.color="#fff"
  text_nonlogin_icon.style.color="#fff"

})
}
if(naverLogin){
naverLogin.addEventListener('click',e=>{
  window.open("https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com","_blank","width=500,height=700")
})
}
if(login_button){
login_button.addEventListener('click',e=>{
  if(login.value ==="" || login_password.value === ""){
    alert('아이디와 비밀번호를 다시 입력해주세요')
  }
})
}
/* login 2page  */
let Agree_to_join_checkbox =document.querySelector('#Agree_to_join_checkbox')
let Acceptance_of_Terms_and_Conditions_checkbox =document.querySelector('#Acceptance_of_Terms_and_Conditions_checkbox')
let Consent_to_personal_information_checkbox =document.querySelector('#Consent_to_personal_information_checkbox')
let Agree_all_to_join_checkbox =document.querySelector('#Agree_all_to_join_checkbox')
let nextpage =document.querySelector('.move_page .nextpage')
let the_right_to_refuse_consent_h3=document.querySelector('.the_right_to_refuse_consent h3')
let the_right_to_refuse_consent_p=document.querySelector('.the_right_to_refuse_consent p')
let the_registration_process=document.querySelector('.the_registration_process')
let the_registration_process_li=document.querySelectorAll('.the_registration_process li')
let the_registration_process_li_button=document.querySelectorAll('.the_registration_process li button')
let the_registration_process_li_i=document.querySelectorAll('.the_registration_process li button i')
let num=0;
if(nextpage){
nextpage.addEventListener('click',e=>{
  if(!Agree_to_join_checkbox.checked || ! Acceptance_of_Terms_and_Conditions_checkbox.checked || !Consent_to_personal_information_checkbox|| !Agree_all_to_join_checkbox ){
    alert('약관 동의를 눌러주세요')
  }
})
}
if(Consent_to_personal_information_checkbox){
  Consent_to_personal_information_checkbox.addEventListener('change',e=>{
  the_right_to_refuse_consent_h3.style.color="#4067F2"
  the_right_to_refuse_consent_p.style.color="#4067F2"
the_right_to_refuse_consent_p.addEventListener('click',e=>{
  window.open('login2_popup.html',"_blank",'width=400 height=200')
})}) }

the_registration_process_li_button.forEach(item => {
  item.addEventListener('click', e => {
    the_registration_process_li_button.forEach(litem => {
        litem.classList.remove('on');
      });
      e.currentTarget.classList.add('on');
      the_registration_process_li_i.forEach(li_i=>{
        li_i.classList.remove('on')
      })
      e.currentTarget.firstElementChild.classList.add('on')
    });
  });
  
  let timeid=setInterval(() => {
    the_registration_process_li_button.forEach((litem, index) => {
      litem.classList.remove('on');
    });
    the_registration_process_li_i.forEach((li_i, index) => {
      li_i.classList.remove('on');
    });
    num++
    if(num>=4){
      num=0;
    }
    the_registration_process_li_button[num].classList.add('on')
    the_registration_process_li_i[num].classList.add('on')
  }, 3000);

/* login 3page  */
let Medical_membership_certification = document.querySelectorAll('.Medical_membership_certification ul li');
let Identification_check = document.querySelectorAll('.Identification_check');
let Authenticating=document.querySelector('.inner .Authenticating')
let username2=document.querySelector('.join_membership .username')
let phone_Number_Input1=document.querySelector('.join_membership #phone_Number_Input1')
let phone_Number_Input2=document.querySelector('.join_membership #phone_Number_Input2')
let phone_Number_Input3=document.querySelector('.join_membership #phone_Number_Input3')
let naver_button=document.querySelector('.join_membership .naver_button')
let Find_Address_button=document.querySelector('.join_membership .Find_Address_button')
let naver_ID=document.querySelector('.join_membership #Naver_ID')
let E_mail=document.querySelector('.join_membership #E_mail')
let Registration_ID=document.querySelector('.join_membership .Registration_ID')
let ID_Duplicate_check=document.querySelector('.join_membership .ID_Duplicate_check')
let Resident_registration_number=document.querySelector('.Identification_check.on #Resident_registration_number')
let Patient_number=document.querySelector('.Identification_check.on #Patient_number')
let registration_number_tr=document.querySelector('.Identification_check.on .registration_number_tr')
let consultation_number_tr=document.querySelector('.Identification_check.on .consultation_number_tr')
let litable = null;

if(Authenticating){
  Authenticating.addEventListener('click', e => {
    let username=document.querySelector('.Identification_check.on .username')
    let phone_number_authentication1=document.querySelector('.Identification_check.on #phone_number_authentication1')
    let phone_number_authentication2=document.querySelector('.Identification_check.on #phone_number_authentication2')
    let phone_number_authentication3=document.querySelector('.Identification_check.on #phone_number_authentication3')
    
    if(username.value.length < 3) {
      alert('이름이 너무 짧습니다. 다시 입력해주세요.');
    } else {
      username2.value = username.value;
    }
    if(phone_number_authentication1.value.length < 2 || phone_number_authentication2.value.length < 3 || phone_number_authentication3.value.length < 4 ) {
      alert('휴대폰 번호가 너무 짧습니다. 다시 입력해주세요.');
    } else {
      phone_Number_Input1.value= phone_number_authentication1.value 
      phone_Number_Input2.value= phone_number_authentication2.value 
      phone_Number_Input3.value= phone_number_authentication3.value 
    } 
  })
}
if(Resident_registration_number){
  Resident_registration_number.addEventListener('change',e=>{
    if(Resident_registration_number.checked){
      registration_number_tr.style.display='contents'
      consultation_number_tr.style.display='none'
    }
    
  })
}
if(Patient_number){
  Patient_number.addEventListener('change',e=>{

    if(Patient_number.checked){
      registration_number_tr.style.display='none'
      consultation_number_tr.style.display='contents'
    }
  })
}



Medical_membership_certification.forEach(item => {
  item.addEventListener('click', e => {
    litable = item.dataset.id;
    Medical_membership_certification.forEach(litem => {
      litem.classList.remove('on');
    });
    e.currentTarget.classList.add('on');
    Identification_check.forEach(tableList => {
      tableList.classList.remove('on');
    });
    document.getElementById(litable).classList.add('on');
  });
});

if(naver_button){
  naver_button.addEventListener('click',e=>{
    window.open("https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com","_blank","width=500,height=700")
  })
  }
  if(Find_Address_button){
    Find_Address_button.addEventListener('click',e=>{
      window.open("https://www.juso.go.kr/info/RoadNameDataList.do?type=search&roadCd=&keyword=&city1=11&county1=680&town1=&searchType=0&extend=true","_blank","width=700,height=900")
})
}

if(ID_Duplicate_check){
  ID_Duplicate_check.addEventListener('click',e=>{
    if( Registration_ID.value.length<13 && Registration_ID.value.length>=6  ){
      alert('인증이 완료되었습니다.')
    }else{
      alert('잘못 입력하셨습니다. 다시 입력해 주세요.')
    }
  })
}

if(naver_ID){
  naver_ID.addEventListener('change',e=>{
    E_mail.value='naver.com';
  })
}