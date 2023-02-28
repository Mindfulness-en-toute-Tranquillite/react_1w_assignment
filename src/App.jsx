import React, { useState } from 'react';
import Layout from './components/Layout'
// import TypingLine from './components/TypingLine'
import WorkingLine from './components/WorkingLine'
// import WorkingContents from './components/WorkingContents'
import DoneLine from './components/DoneLine';
import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  console.log("title", title)
  console.log("content", content)
  
  const titleChangeHandler = (event) => {
      setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
      setContent(event.target.value);
  };
  //  추가 버튼 클릭
  const clickButtonHandler = () => {
      const newSqures = {
          id: squres.length + 1,
          title,
          content,
      }
      setSqures([...squres, newSqures])
  };

  //  삭제 버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newSqures = squres.filter(squre => squre.id !== id)
    setSqures(newSqures);
  };

  const [squres, setSqures] = useState(
    [{ id:1, title: "제목", content: "내용"}]
  );

  

  return (
    <div>
      <Layout />
      
      <div>
        <div>
            제목:
            <input type="text"
            value={title}
            onChange={titleChangeHandler}
            />

            내용:
            <input 
            type="text"
            value={content}
            onChange={contentChangeHandler}
            />

            <button
            onClick={clickButtonHandler}
            >
                추가하기
            </button>
        </div>
      </div>

      <WorkingLine/>

      <div className='app.style'>
        {
        squres.map(item => {
            return (
                <div key={item.id} className='components-style'>
                {item.title}<br />{item.content}
                <br />
                <button onClick=
                {()=>clickRemoveButtonHandler(item.id)}
                >삭제하기</button>
                </div>
            );    
        })}
      </div>

    <DoneLine />

    <div className='app.style'>
        {
        squres.map(item => {
            return (
                <div key={item.id} className='components-style'>
                {item.title}<br />{item.content}
                <br />
                <button onClick=
                {()=>clickRemoveButtonHandler(item.id)}
                >삭제하기</button>
                </div>
            );    
        })}
      </div>
    
    </div>
  )
}

export default App