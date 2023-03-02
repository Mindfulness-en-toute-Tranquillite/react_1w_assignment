React에서 useState는 함수 컴포넌트에서 상태(state)를 관리하기 위해 제공되는 Hook 중 하나입니다.

함수 컴포넌트는 기본적으로 상태를 갖지 않으며, useState를 사용하여 함수 컴포넌트 내에서 상태를 생성하고 관리할 수 있습니다.

useState는 배열을 반환하며, 첫 번째 요소는 현재 상태 값을, 두 번째 요소는 상태 값을 변경하는 함수를 반환합니다.

예를 들어, 다음과 같이 useState를 사용하여 숫자를 표시하고 버튼 클릭으로 해당 숫자를 증가시키는 예제를 작성할 수 있습니다.



// 예를 들어, 다음과 같이 useState를 사용하여 숫자를 표시하고 버튼 클릭으로 해당 숫자를 증가시키는 예제를 작성할 수 있습니다.
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

위 예제에서 count는 현재 숫자 상태 값을 나타내며, setCount는 상태 값을 변경하는 함수입니다. 버튼 클릭 시 setCount 함수를 호출하여 count 값을 증가시키고, 변경된 값을 화면에 렌더링합니다.

문자열 상태 값 변경하기
다음 예제는 문자열 상태 값을 변경하는 방법을 보여줍니다.

import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Hello, {name}!</p>
    </div>
  );
}
위 예제에서 Greeting 컴포넌트는 name 상태 값을 가지며, setName 함수를 사용하여 해당 상태 값을 변경합니다. 사용자가 입력한 값을 input 요소의 value 속성에 바인딩하고, onChange 이벤트 핸들러를 통해 handleChange 함수를 호출하여 name 상태 값을 변경합니다. 변경된 상태 값은 화면에 렌더링됩니다.


객체 상태 값 변경하기
다음 예제는 객체 상태 값을 변경하는 방법을 보여줍니다.

import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

위 예제에서 Form 컴포넌트는 formData 상태 값을 가지며, setFormData 함수를 사용하여 해당 상태 값을 변경합니다. handleChange 함수는 input 요소의 name 속성과 value 속성을 이용하여 formData 객체를 업데이트합니다. handleSubmit 함수는 formData 상태 값을 콘솔에 출력합니다.

배열 상태 값 변경하기
다음 예제는 배열 상태 값을 변경하는 방법을 보여줍니다.

import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState(['apple', 'banana', 'orange']);

  function handleAdd() {
    const newItem = prompt('Enter a new item:');
    setItems(prevState => [...prevState, newItem]);
  }

  return (
    <div>
      <ul>
        {items.map((item, index))}
        </ul>
    </div>
  );








  React에서 props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하기 위한 방법입니다. props는 "properties"의 줄임말로, 부모 컴포넌트에서 자식 컴포넌트로 전달하려는 데이터를 객체 형태로 props로 전달할 수 있습니다.

자식 컴포넌트에서 props를 받아와서 사용하면, 부모 컴포넌트에서 전달한 데이터를 화면에 렌더링하거나 상태를 변경하는 등의 작업을 수행할 수 있습니다. props는 읽기 전용으로, 자식 컴포넌트에서 직접 수정할 수 없습니다. 부모 컴포넌트에서 전달한 데이터를 자식 컴포넌트에서 수정하고자 할 때에는, 부모 컴포넌트에서 전달한 함수를 호출하여 수정할 수 있습니다.



export와 export default는 모듈 시스템에서 사용되는 키워드입니다.

export는 모듈 내에서 여러 개의 변수, 함수, 클래스 등을 내보낼 때 사용됩니다. 예를 들어, 다음과 같이 사용할 수 있습니다.

// 모듈 내에서 여러 개의 변수, 함수, 클래스 등을 내보냅니다.
export const name = "John";
export function sayHello() {
  console.log("Hello!");
}
export class Person {
  constructor(name) {
    this.name = name;
  }
}

반면에 export default는 모듈 내에서 단 하나의 변수, 함수, 클래스 등을 내보낼 때 사용됩니다. 예를 들어, 다음과 같이 사용할 수 있습니다.
// 모듈 내에서 단 하나의 변수, 함수, 클래스 등을 내보냅니다.
const name = "John";
function sayHello() {
  console.log("Hello!");
}
class Person {
  constructor(name) {
    this.name = name;
  }
}

export default Person;

'export default'는 모듈을 가져오는 쪽에서 이름을 바꿀 수 있습니다. 즉, 아래와 같이 다른 이름으로 가져올 수 있습니다.

import MyPerson from "./Person.js";

export와 export default는 함께 사용할 수 있습니다. 예를 들어, 다음과 같이 사용할 수 있습니다.

const name = "John";
function sayHello() {
  console.log("Hello!");
}
class Person {
  constructor(name) {
    this.name = name;
  }
}

export { name, sayHello };
export default Person;

이렇게 export와 export default를 함께 사용하면, name과 sayHello를 개별적으로 가져올 수도 있고, Person을 default로 가져올 수도 있습니다.


