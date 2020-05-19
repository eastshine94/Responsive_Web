# Styled Components를 활용하여 반응형 웹 사이트 만들기

## [Responsive Web](https://eastshine94.github.io/Responsive_Web/)

## 1. 개요

- [https://wtss.tistory.com/](https://wtss.tistory.com/)의 강의를 따라하며 반응형 웹 사이트를 제작하였습니다.
  
- 강의의 내용을 React와 styled-components로 구현하였습니다.

## 2. 목적

- 다양한 미디어 환경(데스크탑, 테블릿, 모바일 등)을 고려한 웹 사이트를 제작해본다.

- styled-components를 활용하여 CSS 코드를 재사용한다.

- CSS3를 활용하여 다양한 이펙트를 만들어본다.

- 시멘틱 태그를 이용하여 웹페이지의 구조를 쉽게 이해할 수 있도록 만들어본다.
  
## 3. 화면 구성

화면은 다음과 같이 구성되어 있습니다.

<img src="https://user-images.githubusercontent.com/41350459/82223641-dd2ddc80-995d-11ea-806b-2ee6f1d5b200.png" alt="top"/>

- 저의 블로그, github로 이동할 수 있습니다.
  
- 페이스북, 트위터에 이 사이트를 공유할 수 있습니다.
  
- 버튼 클릭하여 nav 영역을 컨트롤할 수 있습니다.

------------

<img src="https://user-images.githubusercontent.com/41350459/82226120-1156cc80-9961-11ea-9189-72e172cbd20a.png" alt="mid1"/>

- 왼쪽 컨텐츠는 box-shadow를 이용하여 hover 효과를 주었습니다.

- 가운데 컨텐츠는 slick를 이용하여 이미지 슬라이드 효과를 주었습니다.

- 오른쪽 컨텐츠는 transform을 이용하여 hover 효과를 주었습니다.

------------

<img src="https://user-images.githubusercontent.com/41350459/82291337-c336dd00-99e3-11ea-8384-86d645b2b1fa.png" alt="mid2"/>

- 왼쪽 컨텐츠는 한 줄효과와 두 줄 효과가 적용된 게시판 영역입니다.

- 가운데 컨텐츠는 마우스를 오버 시, 각기 다른 filter 효과를 볼 수 있습니다. 또한, 그림 클릭 시 LightBox가 등장합니다.

- 오른쪽 컨텐츠는 transform을 이용하여 hover 효과를 주었습니다.

------------

<img src="https://user-images.githubusercontent.com/41350459/82227930-672c7400-9963-11ea-830b-b46e4eeb6503.png" alt="mid2"/>

- 왼쪽 컨텐츠는 디바이스가 지원하는 해상도에 맞는 이미지를 제공합니다.

- 가운데 컨텐츠는 Youtube 동영상 영역입니다.

- 오른쪽 컨텐츠는 transform을 이용하여 hover 효과를 주었습니다.


## 4. 해상도에 따른 구조 변화

미디어 해상도에 따라 다음과 같이 웹 구조가 변경됩니다.

### 1. 960px ~

<img src="https://user-images.githubusercontent.com/41350459/82219679-94275980-9958-11ea-893d-6ea0475fa993.png" alt="structure1" width="50%" height="500px"/>


### 2. 768px ~ 960px

<img src="https://user-images.githubusercontent.com/41350459/82219692-98537700-9958-11ea-902c-2847116dd973.png" alt="structure2" width="50%" height="500px"/>

### 3. 600px ~ 768px

<img src="https://user-images.githubusercontent.com/41350459/82219709-9db0c180-9958-11ea-9eae-e9b0ef5d6471.png" alt="structure3" width="50%" height="500px"/>

### 4. 0px ~ 600px

<img src="https://user-images.githubusercontent.com/41350459/82219715-9f7a8500-9958-11ea-8508-766957b423a6.png" alt="structure4" width="50%" height="500px"/>
