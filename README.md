<p align=center><img src=https://i.imgur.com/4zDHU20.png width=600></p>

## 프로젝트 소개

사용자가 필요한 수식을 쉽고 편하게 작성할 수 있는 반응형 웹 편집기

자동 완성과 커스텀 명령어 등을 통해 사용자에게 최적화된 수식 편집기를 제공합니다.

- [배포 주소](https://fecode.netlify.app)  
- 기간 2020.11.16 ~ 2020.12.18

## 실행방법 및 테스트 방법

- 개발환경 실행
```bash
$ npm install
$ npm start
```
- 빌드
```bash
$ npm run build
```
- 테스트
```bash
$ npm test
$ npm test -- --coverage
```
- 린트
```bash
$ npm run lint
```

## 팀원 소개 (with 팀원들이 서로에게 써 준 키워드)

<table>
  <tr>
    <td width=200 align=center><b>J041 김석중</b></td>
    <td width=70 align=center><img height=30 src=https://i.imgur.com/DAHT9tL.png></td>
    <td width=800 rowspan=2>
      <a href=https://github.com/seokju2ng>@seokju2ng 난 풀스택왕이 될거야!</a><br><br>
    
  - PPT만 있으면 뭐든지 만들 수 있다! 디자인의 왕자⭐
  - 톡톡튀는 아이디어를 뱉는 그는 **라마**
  - 모든 디자인은 나를 통해 접수된다.
  - 깔끔한 코드가 제일 좋아
  - 작은 성능 이슈도 나를 피해 갈 수 없다.
  - n초 안에 보여드리겠습니다! n초 컷!
    </td>
  </tr>
  <tr>
    <td colspan=2 align=center>
      <a href="https://github.com/seokju2ng"><img width="150px" src="https://i.imgur.com/LRLMzb8.png"/></a>
    </td>
  </tr>
  <tr>
    <td width=200 align=center><b>J112 안치현</b></td>
    <td width=70 align=center><img height=30 src=https://i.imgur.com/y6Qpnoo.png></td>
    <td width=800 rowspan=2>
<a href=https://github.com/enhakkore>@enhakkore 결국 가장 중요한 것은 내 옆의 동료</a><br><br>
    
  - 의미가 드러나지 않는 커밋은 가라! 커밋의 왕자⭐
  - 관심있는 건 모두 파헤치는 그는 **두더지**
  - 커뮤니케이션의 달인
  - 세상에 나쁜 아이디어는 없다. 긍정의 신
  - 맡겨라, 밤을 새서라도 끝낼테니
    </td>
  </tr>
  <tr>
    <td colspan=2 align=center>
      <a href="https://github.com/enhakkore"><img width="150px" src="https://i.imgur.com/5LCwXPE.png"></a>
    </td>
  </tr>
  <tr>
    <td width=200 align=center><b>J179 전병재</b></td>
    <td width=70 align=center><img height=30 src=https://i.imgur.com/2PKtnRt.png></td>
    <td width=800 rowspan=2>
<a href=https://github.com/ByeongjaeJeon>@ByeongjaeJeon 항상 많이 배워갑니다~</a><br><br>

  - 에러? 나에게 맡겨. 디버깅의 왕자⭐
  - 주어진 일이 무엇이든 물면 다 해오는 그는 **악어**
  - 의견 충돌의 재판관
  - 보이지 않는 곳에서 다이아몬드를 발굴해온다.
  - 마우스 이벤트는 이제 내 손안에
  - 팀원들의 사기를 북돋아주는 프로칭찬러
    </td>
  </tr>
  <tr>
    <td colspan=2 align=center>
      <a href="https://github.com/ByeongjaeJeon"><img width="150px" src="https://i.imgur.com/No9XTiV.png"></a>
    </td>
  </tr>
  <tr>
    <td width=200 align=center><b>J181 전우민</b></td>
    <td width=70 align=center><img height=30 src=https://i.imgur.com/SRuzOci.png></td>
    <td width=800 rowspan=2>
<a href=https://github.com/Woomin-Jeon>@Woomin-Jeon 아름다운 코드를 작성하고 싶은 소설가</a><br><br>

- 우리들의 마이크가 비워질 일은 없다! TMI 왕자⭐
- 님들 이거 아시나요? 설명이 고픈 그는 위 동물들의 **사육사**
- 투표로 완성하는 민주주의 팀플
- 그 기능 구현? 저에게 n시간만 주세요.
- 의견이 나오는 순간 이미 구현하고 있다...
- 여러분... 저 됐습니다! 요구사항 킬러
    </td>
  </tr>
  <tr>
    <td colspan=2 align=center>
      <a href="https://github.com/Woomin-Jeon"><img width="150px" src="https://i.imgur.com/Qg7OxKb.png"></a>
    </td>
  </tr>
</table>
 
## 사용기술
![](https://i.imgur.com/7543DKF.png)

## 기술 특장점
<details>
<summary><b>TypeScript 말고 JavaScript</b></summary>
<div markdown="1">

이번 프로젝트를 시작할 때 도전해볼 만한 부분으로 TypeScript 이야기가 나와서 TypeScript를 써서 프로젝트를 진행할 것인지에 대해 고민했습니다. 
하지만 TypeScript 가 제공하는 형식 통일성이나 오류 사전 방지와 같은 장점보다 사전 형 정의에 어려움이 있을 수 있다는 멘토님의 말씀이나 아무도 써보지 않은 언어로 생소한 수식 편집기를 만들 때 완성도에 대한 이슈로 모두가 익숙한 JavaScript를 메인 개발 언어로 선정했습니다.

</div>
</details>
<details>
<summary><b>수식편집 코어 라이브러리로 MathQuill 사용</b></summary>
<div markdown="1">

수식 편집을 위한 코어 라이브러리입니다. 처음에는 수식 편집 라이브러리를 직접 만들어 써야 하는지에 대해 많은 고민과 회의를 거쳤는데요. 일단 양이 너무 많아 그렇게 되면 라이브러리 구현만 5주를 해도 완성을 못 할 것 같았고, 멘토 분들께서 라이브러리는 가져다 쓰고 그걸 이용해서 좋은 수식 편집기를 만들어보자 하셔서 MathQuill을 사용하는 것으로 결정했습니다.

</div>
</details>
<details>
<summary><b>Redux를 이용한 상태 관리</b></summary>
<div markdown="1">

Redux라는 전역 상태관리 라이브러리를 통해 컴포넌트 간에 상태를 공유하거나 자유롭게 상태를 변경시킬 수 있었습니다.
예를 들어, LaTeX 명령어를 입력하는 두 영역이 같은 상태를 공유하고, 동시에 각자 그 상태를 변경할 필요가 있었는데 Redux를 사용해 간편하게 처리할 수 있었습니다.
또한, Undo/Redo 기능을 적용하면서 이전의 상태들을 관리하는 것이 필요했었는데 이 역시 Redux를 사용해서 쉽게 상태를 처리할 수 있었습니다.
저희는 Redux-toolkit을 사용하여 쉽게 Redux 환경을 설정하고 toolkit에 내장된 immer 라이브러리와 thunk 역시 활용하였습니다.
immer 라이브러리를 사용하니 비대해진 actionCreator 함수들을 간결하고 직관적으로 표현할 수 있었고, thunk를 사용하니 Debounce와 같은 복잡한 로직들을 간편하게 처리할 수 있었습니다.

</div>
</details>
<details>
<summary><b>Container/Presentational 패턴의 도입</b></summary>
<div markdown="1">

저희는 이번 프로젝트의 상태관리 라이브러리로 Redux를 도입하기로 한 뒤, Redux 공식 문서에 소개되어있는 Container/Presentational 패턴을 도입하기로 하였습니다. 
이 패턴에서 Container는 presentational 컴포넌트들을 감싸고 있는 껍데기 컴포넌트로, 상태와 상태를 변경하는 로직을 품고 presentational 컴포넌트에 주입해주는 역할을 합니다. Presentational 컴포넌트는 말 그대로 props로 주입받은 상태들을 토대로 표현(렌더링) 해주는 역할을 합니다.
이 패턴을 통해 저희가 얻었던 이점은 다음과 같습니다.
첫 번째로, 상태를 가지는 컴포넌트와 이를 받아서 렌더링만 해주는 컴포넌트의 역할을 구분해줌으로써 **관심사의 분리를 통해 유지 보수를 용이**하게 할 수 있었습니다. 특히 저희 같은 경우는 중간에 대대적인 프로젝트의 UI 변경이 있었는데, UI 외적인 로직을 담당하는 container가 분리되어있어서 비교적 빨리 변경을 이룰 수 있었습니다.
두 번째로, 이렇게 container와 presentational을 구분함으로써 presentational 컴포넌트들을 **쉽게 재사용할 수 있었고 개발 시간을 단축**할 수 있었습니다.
마지막으로, 지저분한 상태관리 로직들을 분리하다 보니 **UI 테스트를 쉽고 직관적으로 작성**할 수 있었습니다.
하지만 저희가 느낀 단점도 있었는데, presentational 컴포넌트의 깊이가 깊어질수록 계속 최상위에 있는 container로부터 받은 props를 전달해주어야 하는 점 때문에 컴포넌트가 받아야 하는 props가 많아져서 지저분해진다는 것과 로직이 복잡해지다 보니 container가 점점 비대해진다는 것입니다.

</div>
</details>
<details>
<summary><b>UI 라이브러리를 사용하지 않고 전부 직접 구현</b></summary>
<div markdown="1">

UI 라이브러리를 도입하게 될 경우, 개발 시간은 단축할 수 있지만, 저희 프로젝트 테마에 딱 맞는 UI를 제공하면서 제약이 따를 것으로 판단하여 이를 직접 구현하기로 하였습니다.
아울러 항상 동일한 UI/UX를 제공하기 위해 \<input\>이나 \<select\> 같이 브라우저나 OS에 구속받을 수 있는 부분들 역시 모두 직접 구현해주었습니다.
또한, 사용자에게 딱딱하지 않고 부드러운 UI를 제공하기 위해 CSS animation과 transition을 적극적으로 사용하였으며, 화면 크기에 따라 깨지지 않고 정상적으로 보일 수 있도록 반응형 웹을 구현하였습니다.

</div>
</details>
<details>
<summary><b>컴포넌트 Resize 기능을 마우스 이벤트로 처리(feat. throttling)</b></summary>
<div markdown="1">

메인화면에서 두 영역을 나누면서 크기를 조절 할 수 있는 **Bar**를 만들고자 했습니다.  처음엔 drag&drop API로 드래그해서 resize하는 기능을 구현하려고 했습니다. Bar를 드래그해서 드랍할 때 마우스 위치를 계산하여 두 영역의 높이를 계산해주는 것까지는 잘 진행되었으나, 드래그할 때 마우스를 따라다니는 Bar를 수직으로만 이동하게 하고 싶었습니다.
그러나 drag&drop API로는 이 문제를 해결할 수 없어 mouse 이벤트로 변경하게 되었습니다. Bar에 **onMouseDown**으로 Bar를 클릭한 시점에 Bar가 이제 움직일 것이라는 상태로 변경하고, Bar가 움직이는 상태가 되면 **onMouseMove**로 하얀 점선이 움직이는 마우스를 따라다니며  높이를 미리 볼 수 있게 했습니다. Bar가 움직일 수 있는 영역에 **onMouseUp** 이벤트를 주어 마우스 드래그가 끝날 때 Bar의 상태를 바꾸고 마우스가 움직일 때 점선이 따라다니지 않고 두 영역의 높이가 resize 되도록 구현했습니다.
더불어 mouseMove 이벤트가 너무 빈번하게 발생하여 이를 최적화하기 위해 **쓰로틀링(throttling)**을 적용하여 100ms 마다 이벤트가 처리되도록 했습니다.

</div>
</details>
<details>
<summary><b>자동완성 기능을 위한 키보드 이벤트 분기 처리</b></summary>
<div markdown="1">

Backslash(\)를 입력했을 때 입력 가능한 명령어들이 포함된 레이아웃을 미리보기로 제공하여 LaTeX 명령어를 직접 다 입력하지 않고 선택한 명령어가 바로 입력되도록 하여 자동완성 기능을 구현했습니다.
keyup 이벤트 함수에서는 Backslash, Backspace, Delete 키에 대한 이벤트를 처리했습니다. backslash를 입력하면 자동완성 레이아웃이 나타나도록 했습니다. 그리고 backslash를 입력한 이후 입력되는 Alphabet들을 buffer에 저장 되도록 했습니다. Backspace와 Delete가 입력되면 buffer에 있는 값 중에서 가장 최신 값을 삭제하도록 했습니다.  
keydown 이벤트 함수에서는 Down(↓), Up(↑), Enter, Space, Tab 키에 대한 이벤트를 처리했습니다.  Down(↓), Up(↑)이 입력되면 자동완성 레이아웃에 포함된 아이템 중에서 특정 아이템을 가리키도록 했습니다. Enter, Space, Tab이 입력되면 현재까지 입력된 LaTeX 명령어를 수식 기호로 바꿔줍니다. 자동완성 레이아웃에 포함된 특정 아이템을 선택한 상태에서 Enter, Space, Tab이 입력되면 선택한 아이템이 입력 영역에 입력되어 수식 기호로 바뀌도록 했습니다.
keypress 이벤트 함수에서는 Alphabet 키에 대한 이벤트를 처리했습니다. Backslash가 입력된 이후 Alphabet이 입력되면 buffer에 저장되도록 했습니다. Alphabet 키를 keypress 이벤트 함수에서 처리한 이유는 keydown 이벤트 함수에서는 소문자를 입력해도 대문자에 해당하는 ASCII 코드로 해석해서 대소문자를 구분해서 ASCII 코드로 해석하는 keypress 이벤트 함수에서 처리하였습니다.

</div>
</details>
<details>
<summary><b>서버 대신 LocalStorage 사용</b></summary>
<div markdown="1">

저희는 부스트캠프 웹 풀스택 과정에 있지만, 이번 프로젝트에서 필요하지 않다면 굳이 서버를 두지 않고 좀 더 프론트엔드에 집중해도 좋을 것 같다는 멘토님의 의견에 서버를 둘 것인지에 대해 팀원들끼리 고민을 하였습니다.
그 결과 "클라이언트 기반 수식편집기"라는 저희 프로젝트 주제에 맞게 서버에 종속되지 않는 수식편집기를 제공하고자 서버 대신 **LocalStorage**를 사용하기로 하였습니다.

</div>
</details>