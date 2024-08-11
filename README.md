# HanjaHanja

**HanjaHanja**는 한문, 국문, 사학 등 한문 서적이나 국한문혼용 서적을 공부하는 학생들을 위한 간단한 웹 애플리케이션입니다. 이 애플리케이션은 Node.js와 Express를 기반으로 하며, 사용자가 입력한 한자에 대한 뜻을 즉시 제공하여 학습을 지원합니다.

이 프로그램은 기존 한자 사전들보다 더 많은 한자의 뜻을 한 번에 출력할 수 있으며, 한자가 아닌 문자(한글, 숫자 등)는 자동으로 제외하여 결과를 제공합니다.

## 목차
- 실행화면
- 설치
- 사용법

## 실행화면
![image](https://github.com/user-attachments/assets/05583947-3076-4ffb-89a7-7600881f3748)

## 설치

이 프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

1. **리포지토리 클론:**

``` bash
git clone https://github.com/your-username/hanjahanja.git  
cd hanjahanja
```
  
2. **의존성 설치:**

   프로젝트의 루트 디렉토리에서 다음 명령어를 실행하여 필요한 Node.js 패키지를 설치합니다.
``` bash
npm install
```

3. **서버 실행:**

   다음 명령어를 사용하여 로컬 서버를 시작합니다.
```bash
node app.js
```

4. **웹 애플리케이션 접근:**

   브라우저를 열고 `http://localhost:3000`에 접속하여 HanjaHanja 애플리케이션을 사용합니다.

## 사용법

1. 한자 입력: 웹 페이지에 접속한 후, 텍스트 입력창에 한자를 입력합니다.
2. 검색: '검색' 버튼을 클릭하면 해당 한자의 뜻이 아래 표에 표시됩니다.
3. 복사: '복사' 버튼을 클릭하여 결과를 클립보드에 복사할 수 있습니다.
4. 파일 저장: '파일로 저장' 버튼을 클릭하여 검색 결과를 TXT 파일로 다운로드할 수 있습니다.
