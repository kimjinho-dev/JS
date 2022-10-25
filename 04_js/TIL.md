# DOM(추가내용)

DOM은 모든 요소를 document 객체의 자식으로 만들어서 그 연결관계를 사용한다.  
자바스크립트는 이 DOM트리 내용을 즉각적으로 바꿀수있는 유일한 언어이기때문에, 실시간으로 수정되어보이는것이 가능하다.  

# this

```javascript
const func = function() {
  console.log(this)
}
const obj = {
  method: func,
}
func()  // window, 함수로 호출되었음
obj.method() // obj, 메서드로 호출되었음
```

함수로써 호출되는것이 window를 가르키는건 원하던 방법이 아니였다. 따라서 여러 방법이 순차적으로 제시되었다

5이전 `.bind(object) // 해당 object를 명시함`

### 화살표함수
상위scope의 this를 가르키게한다.


### 콜백함수
콜백함수는 간단하게 제어권이 코드작성자가아닌, 함수 자체에 넘겨주는것이다.  
이러한 콜백에서는 this가 다르게 표시된다.  
(1) 일반적인 콜백함수도 함수호출이므로 window  
(2) bind 처럼 명시적으로 지정가능  
(3) addEventListener은 this가 `이벤트가 발생하는 element`를 가르킨다.  
따라서, addEventListener에는 화살표함수를 사용하지않는다. 사용하면 원래 원하던 방식의 용도로 사용되기 어렵기때문이다.  