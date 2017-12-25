var 난수, 명령, 번호=0, 점수=20, 클릭=true;
//난수, 명령, 점수(기본점수는 20), 클릭(사용자가 버튼을 클릭안했을 시 점수를 감소하기 위해 있는 변수)

var playorder = setInterval(명령변경,1500);  //명령변경함수를 1.5초마다 실행

//난수를 구하고, 난수에 따른 명령을 주는 함수 실행하고 명령을 html페이지에 출력
function 명령변경() {
  var 끝=new Date();//함수가 시작될 때마다 시간체크
  if(점수<=0) location.replace("게임종료.html"); //점수가 0점 이하일때 게임 종료페이지로 이동
  난수=Math.ceil(Math.random()*12); //1부터 12까지의 실수구하고 소수점 버림 >> 정수
  번호++; //한번 돌아갈때 마다 번호+1
  명령=짜잔형말(); //'명령'변수에 명령대입
  document.getElementById("order").innerHTML=번호+"번째"+"<br>"+명령; //"order"에 명령 대입
  if(클릭==true) 클릭=false;
  //클릭이 true면 다시 false로 바꿈 >> 실행할때 마다 클릭을 false로 정의
  //만약 정의 안할 시, 클릭안해도 점수 감소X
  else 점수-=2;
  //클릭이 false일시 점수는 2점 감소
  document.getElementById("score").innerHTML=점수+"점";//"score"에 점수 대입
  documnet.getElementById("problem").innerHTML=번호;//"problem"에 번호 대임
  }


//난수에 따른 짜잔형의 말(명령)
//난수에 따른 명령을 return값으로 지정해서 명령에 대입
function 짜잔형말() {
  switch (난수) {
    case 1:
      return "청기올려";
      break;
    case 2:
      return "백기올리지말고 청기올려";
      break;
    case 3:
      return "청기내리지말고 청기올려";
      break;
    //1~3까지는 청기올려 명령
    case 4:
      return "청기내려";
      break;
    case 5:
     return "백기내리지말고 청기내려";
      break;
    case 6:
      return "청기올리지말고 청기내려";
      break;
    //4~6까지는 청기내려 명령
    case 7:
      return "백기올려";
      break;
    case 8:
      return "청기올리지말고 백기올려";
      break;
    case 9:
      return "백기내리지말고 백기올려";
      break;
      //7~9까지는 백기올려 명령
    case 10:
      return "백기내려";
      break;
    case 11:
     return "청기내리지말고 백기내려";
      break;
    case 12:
      return "백기올리지말고 백기내려";
      break;
      //10~12까지는 백기내려 명령
  }
}


//사용자의 답에 따른 이미지와 점수 변화
function button1() {
  document.getElementById("청기").innerHTML="<img src='./image/청기올려.png'>";
  //button1을 눌렀을 때 원래의 "청기"에 있던 청기기본 이미지(또는 그 전의 이미지)를 청기올려 이미지로 바꿈
  if(난수==1 || 난수==2|| 난수==3) 점수++;
  //난수 1,2,3은 청기올려 명령이므로, 사용자가 선택한 것이 청기올려 명령일 시 점수+1
  else 점수-=2;
  //다른 것들은 청기올려 명령이 아니므로 점수 2점 감소
  클릭=true;
  //클릭이 false면 자동으로 점수가 2점이 감소되니까 true로 해서 감소안되게 함
}
function button2() {
  document.getElementById("청기").innerHTML="<img src='./image/청기내려.png'>";
  //button2을 눌렀을 때 원래의 "청기"에 있던 청기기본 이미지(또는 그 전의 이미지)를 청기내려 이미지로 바꿈
  if(난수==4 || 난수==5|| 난수==6) 점수++;
  //난수 1,2,3은 청기내려 명령이므로, 사용자가 선택한 것이 청기내려 명령일 시 점수+1
  else 점수-=2;
  //다른 것들은 청기내려 명령이 아니므로 점수 2점 감소
  클릭=true;
  //클릭이 false면 자동으로 점수가 2점이 감소되니까 true로 해서 감소안되게 함
}
function button3() {
  document.getElementById("백기").innerHTML="<img src='./image/백기올려.png' align='right'>";
  //button3을 눌렀을 때 원래의 "백기"에 있던 백기기본 이미지(또는 그 전의 이미지)를 백기올려 이미지로 바꿈
  if(난수==7 || 난수==8|| 난수==9) 점수++;
  //난수 1,2,3은 백기올려 명령이므로, 사용자가 선택한 것이 백기올려 명령일 시 점수+1
  else 점수-=2;
  //다른 것들은 백기올려 명령이 아니므로 점수 2점 감소
  클릭=true;
  //클릭이 false면 자동으로 점수가 2점이 감소되니까 true로 해서 감소안되게 함
}
function button4() {
  document.getElementById("백기").innerHTML="<img src='./image/백기내려.png' align='right'>";
  //button4을 눌렀을 때 원래의 "백기"에 있던 백기기본 이미지(또는 그 전의 이미지)를 백기내려 이미지로 바꿈
  if(난수==10 || 난수==11|| 난수==12) 점수++;
  //난수 1,2,3은 백기내려 명령이므로, 사용자가 선택한 것이 백기내려 명령일 시 점수+1
  else 점수-=2;
  //다른 것들은 백기내려 명령이 아니므로 점수 2점 감소
  클릭=true;
  //클릭이 false면 자동으로 점수가 2점이 감소되니까 true로 해서 감소안되게 함
}
