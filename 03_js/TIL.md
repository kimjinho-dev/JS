# DOM

문서 객체 모델로, 프로그래밍 언어가 dom구조에 접근할수있게 된다.  
html 문서를 구조화해서 각 요소를 객체로 취급.  
이를 위해 dom은 문서를 '논리 트리'로 표현한다.  

(1) window  
dom을 표현하는 창  
가장 최상위 객체로, 생략가능  
 
(2) document  
브라우저가 불러온 웹페이지  
직접적으로 웹페이지에 접근할수있다

(+) 파싱(parsing)  
구문을 분석, 해석하는것  
즉 브라우저가 문자열을 해석하여 DOM을 만드는것  

`DOM은 선택 -> 조작` 순서로 진행된다.

### 선택 관련 메서드
(1) .querySelector(selector)  
선택자와 일치하는 첫번째 element를 반환  

(2) .querySelectorAll(selector)  
선택자와 일치하는 여러 element가 담긴 NodeList를 반환한다. 

(+)  
All로 조회한 값은 NodeList로 반환되는데, index로만 접근이 가능하며 foreach등 메서드를 사용할수있다.  
몇몇 NodeList(All로 조회한 정적콜렉션의경우)는 반드시 실시간으로 최신화를 하지는 않는다.

### 조작 관련 메서드
(1) .createElement(tagName)[생성]  
태그를 생성하고 반환  

(2) .innerText[입력]  
내부의 raw text  

(3) 부모노드.appendChild(자식노드(추가가될노드))[추가]  
한 node를 특정 부모노드의 마지막 자식으로 삽입.  
추가된 node객체를 반환한다. 

(4) .removeChild()[삭제]  
제거 후 제거된 node 반환  

(5) .getAttribute(arrtibuteName)[속성조회]  
해당 요소의 지정값 반환  

(6) .setAttribute(name,value)[속성추가]  
지정된 요소의 값 설정.  
이미 있다면 갱신, 없다면 추가 

(+) .classList  
해당 클래스 속성 조회

(++) h1Tag.classList.toggle('blue')  
toggle은 속성이 있다면 맨뒤에 삽입, 없다면 생성
https://developer.mozilla.org/ko/docs/Web/API/Element/classList

# Event
```
프로그래밍하고있는 시스템에서 일어나는 사건 혹은 발생.  
각 이벤트에 대해 특정시점을 지정하는것.
DOM 요소가 event를 수신하고,
받은 이벤트를 주로 addEventListener()라는 이벤트 처리기를 다양한 html요소에 부착해서 처리한다.
```
예시) EventTarget.addEventListener(type,listerner[콜백함수])  

(1) type  
반응할 event유형을 나타내는 대소문자 구문 문자열  
ex) input,click,submit...  

(2) listerner  
지정된 타입의 Event를 수신할 객체, 콜백함수여야한다.  

```js
inputTag.addEventListener('input', function (event) {
      console.log(event.target.value)
      // event.target은 event 매개변수의 타겟인 inputTag를 가르킨다.
      // 그리고 그 타겟의 .value는 여기서 원하는 입력값이 반환된다.
      pTag = document.querySelector('p')
      pTag.innerText = event.target.value
    })
```

<event.preventDefault()>  
복사금지  

<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>  
각종 기능이 있는 lodash 메서드.  

# this
어떠한 object를 가리키는것으로, self처럼 암묵적으로 받는것이다.
단, 다른 프로그래밍 언어와 다르게 작동한다.  
'함수 호출 방식'에 따라 this에 바인딩되는 객체가 달라지는데, 즉 함수를 선언할때 this의 객체가 결정되지않고 '어떻게' 호출되냐에 따라 '동적으로' 결정된다.  

(1) 전역문맥 this  
=== window. 최상위 객체  
(2) 함수문맥 this  
- 단순호출
=== 전역객체, 브라우저에서는 window
- Method(객체의 메서드로)
=== this는 메서드를 부른 자기 자신 객체를 가르킨다.
- Nested(화살표함수)
콜백함수일때  
메서드로 호출된것이 아니기때문에, 단순호출과 같이 window를 가르킨다. 이를 해결하기위해 나온것이 '화살표함수'. 한 단계 상위의 scope를 가르킨다.  

(+)   
이는 Lexical scope로, 어디서 '호출'했는지가 중요하지않고 어디서 '선언'했는지에 따라 결정된다.

(++)   
[addEventListener]  
여기서 콜백 this는 특별하게 호출한 대상을 가르킨다(마치 화살표함수처럼) 그렇기때문에 오히려 화살표함수를 사용하면 전역을 가르키게되어 화살표함수를 사용하지는 않는다.  

(+++)  
이러한 this의 특성은 여러객체에서 재사용측면으로는 장점이지만  
이러한 측면이 단점이 되는 경우는 존재할수있다.