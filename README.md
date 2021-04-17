## 인스타그램 클론코딩 프로젝트 레포지토리 입니다.

서버와 클라이언트를 직접 만들어서 회원가입, 로그인, 로그인 성공 화면을 만들고 있습니다.

1일차

- 로그인화면, 회원가입 화면 구현
- 회원가입 했을 때 입력정보 서버로 보내기
- 서버에서 정보를 요청했을 때 정보 가져오기

2일차

- 로그인 성공 시 화면 구현
- 유효성 검사 구현
  **Advanced** 유저가 로그인 창에 정보를 입력했을 시, 서버의 데이터들과 비교하여 로그인 성공 창을 보여준다.

- facebook이나 naver open api 넣기. --페이스북에서 로그인, 네이버에서 로그인 링크 가져오기


-------------------------------------------------------------

DATABASE 이용하여 로그인 인증 구현

1일차 세션 구현 -> 

각자 미리 공부할 것들
1. 쿠키 개념 정리
2. 세션 개념 정리

쿠키를 클라이언트에 저장하는 방법
세션에 데이터를 저장하는 방법



----------------------------------------------------------------

1일차

목표: 서버에 데이터를 저장하는 방식에서, 데이터베이스에 데이터를 저장하는 방식으로 바꾸는 것

해야할 것들
1. server

  1. http 방식으로 되어있는 서버를 https로 바꾼다.
  2. 데이터베이스 설정
  3. session 쿠키 옵션 설정
  4. 클라이언트 요청에 따른 각각의 응답 구현(MVC 디자인 패턴에 따라 구현)

  - signup(회원가입)
  - signin(로그인)
    목표: 클라이언트에서 유저가 입력한 id와 password를 데이터베이스의 데이터와 비교하여 조건에 따라 응답한다.
    req에 들어오는 것들 : userId, password
    1. req에 들어오는 것들을 이용하여 findOne 메소드 사용 -> userInfo
    2. userInfo가 있다면, '로그인 시켜주자'를 응답
    3. userInfo가 없다면, '로그인 안됨'을 응답
  - signout(로그아웃)
  - user(정보 가져오기)

2. client

  1. 각 기능에 맞는 AJAX 요청 구현 
  axios.fetch구현. js를 사용해서 서버에 요청하는 것이다.




//
  - https 프로토콜을 사용해야 합니다.
 인증서 발급은 mkcert 프로그램을 이용합니다.
 - 회원가입 되어있는 사용자만 로그인을 할 수 있어야 합니다.
 - 쿠키 및 세션 객체는 인증을 판단하는 근거가 됩니다.
  express-session을 이용합니다.
  - 사용자 정보 조회 api는 권한을 판단하는 근거가 됩니다.
  - 회원가입 시 사용자 정보는 데이터베이스에 기록되어야 합니다.
  - 사용자 정보 조회시 데이터베이스에서 정보를 읽어서 응답해야 합니다.
  
  **데이터베이스는 다음과 같은 조건을 충족 하여야 합니다.** 
  모델을 생성하지 않으면, 테스트를 실행할 수 없음에 주의하세요.
  
  1. ha_advanced 라는 이름의 MySQL 데이터베이스를 생성해야 합니다.
  2. 유저정보를 데이터베이스에 저장할 user 모델을 생성해야 합니다. (모델 생성은 공식 문서를 활용해서 직접 작성해도 좋고 sequelize CLI를 활용해도 좋습니다.
  3. user 모델에는 email, password, username, mobile 필드들이 포함되어야 합니다.
  

  기억할 것들

  1. npx sequelize-cli db:migrate:undo
  db:migrate:undo,이 명령은 가장 최근 마이그레이션을 되돌립니다..
  
  2. seeders
  - seeder 만드는 명령어 -> npx sequelize-cli seed:generate --name demo-user
  - 데이터베이스에 seeders를 넣어주는 명령어 -> npx sequelize-cli db:seed:all
  - 마이그레이트 명령어를 실행해서 테이블을 먼저 생성한 후, seeders를 넣어줘야 됨

 의문점 - 1. create model 할때 primary key 수기로 작성해야 하는것인가? createAt updateAt mirgartion 폴더에 명령어 쓰지도 않았는데 왜생기지? 
        2. seeder 파일에 id를 써줘야하는 이유??
        3. cors에 h 빼면 되는 이유 뭐지?

 3. models의 user.js 파일에 id의 primaryKey를 따로 설정해주었다.








sequelize model:create --name tasks --force --attributes "task_id:{type:integer, primaryKey: true,autoIncrement:
true}, title:string,description:text, data_type:text, shift:string, date:date, start_time:time, end_time:time, type:string, location:string, visible_to_helpe
rs:date, reminders_to_helpers:integer, created_date:time, modified_date:time"
