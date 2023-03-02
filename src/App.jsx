import React, { useState } from 'react';
import Layout from './components/Layout'
// import TypingLine from './components/TypingLine'
import WorkingLine from './components/WorkingLine'
// import WorkingContents from './components/WorkingContents'
import DoneLine from './components/DoneLine';
import './App.css';
import 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
    //  Working Squres
    const [squres, setSqures] = useState(
      [{ id:0, title: "꼭 끝내보아요.", content: "힘냅시다.", isDone: false}]
    );
    //  Done Squres
    const [doneSqures, setDoneSqures] = useState(
      [{ id:0, title: "", content: "", isDone: true}]
    );
    // //  Cancel 
    // const [cancelBack, setCancelBack] = useState(
    //   [{ id:1, title: "", content: "", isDone: false}]
    // );

  // console.log("title", title)
  // console.log("content", content)
  
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
          isDone: false,
      };
      setSqures([...squres, newSqures])
      setTitle('');
      setContent('');
  };

  //  삭제 버튼 클릭 (Working list)
  const clickRemoveButtonHandler = (id) => {
    const newSqures = squres.filter(squre => squre.id !== id)
    setSqures(newSqures);
  };

  //  삭제 버튼 클릭 2 (Done list)
  const clickDoneRemoveButtonHandler = (id) => {
    const newDoneSqures = doneSqures.filter(doneSqure => doneSqure.id !== id)
    setDoneSqures(newDoneSqures);
  }
  //  완료 버튼 클릭
  // const clickIsdoneButtonHandler = (id) => {
  //   const newDoneSqures = {
  //       id: doneSqures.length + 1,
  //       title,
  //       content,
  //       isDone: true,
  //   };
  //   const newSqures = squres.filter(squre => squre.id !== id) //완료버튼 누르면 자기것 삭제.
  //   setSqures(newSqures);
  //   setDoneSqures([...doneSqures, newDoneSqures])
  // };

  //  완료 버튼 클릭 2
  const clickIsdoneButtonHandler  = (id) => {
    const workingSqures = squres.map((squres) => {
      if (squres.id === id) {
        if(squres.isDone === false) {
          squres.isDone = true
        } else {
          squres.isDone = false
        }
      }
      return squres
    })
    setDoneSqures([...workingSqures])
  }

//  취소 버튼 클릭
  const clickCancelButtonHandler = (id) => {
    const newCancel = doneSqures.map((doneSqures) => {
      if (doneSqures.id === id) {
        if (doneSqures.isDone === true) {
          doneSqures.isDone = false
        } else {
          doneSqures.isDone = true
        }
      }
      return doneSqures
    })
    setSqures([...newCancel])
    };


    
  return (
    <div className='entire_style'>
      <Layout />  
              
      <div>
        <div className='typingline_style'>
            제목:
            <input type="text"
            placeholder='제목을 입력해주세요.'
            value={title}
            onChange={titleChangeHandler}
            />

            내용:
            <input 
            type="text"
            placeholder='내용을 입력해주세요.'
            value={content}
            onChange={contentChangeHandler}
            />

            <span style={{padding: '235pt'}}></span>

            <button 
            type="button" 
            class="btn btn-warning"
            onClick={clickButtonHandler}
            >
                추가하기
            </button>
        </div>
      </div>

      <WorkingLine/>

      <div className='addingline-style'>
        
        {
        squres.map((item) => {
          if (item.isDone === false) {
            return (
              <div key={item.id} className='squre-style'>
                <div>
                  <div><span><b>{item.title}</b></span></div>
                  <br />{item.content}
                  <br />
                </div>
                <div className='squrebutton-style'>
                  <button onClick=
                  {()=>clickRemoveButtonHandler(item.id)}
                  >삭제하기</button> &nbsp;

                  <button onClick={()=>clickIsdoneButtonHandler(item.id)}>
                    완료
                  </button>
                </div>
              </div>
            );
          }    
        })}
      </div>

    <DoneLine />

    <div className='addingline-style'>
        {
        doneSqures.map((item) => {
          if (item.isDone === true) {
            return (
              <div key={item.id} className='squre-style'>
                <div>
                  <div><span><b>{item.title}</b></span></div>
                  <br />{item.content}
                  <br />
                </div>
                <div className='squrebutton-style'>
                  <button onClick={()=>clickDoneRemoveButtonHandler(item.id)}>
                    삭제하기 
                  </button>&nbsp;

                  <button onClick={()=>clickCancelButtonHandler(item.id)}>
                    취소
                  </button>
                </div>
              </div> 
            );  
          }
        })}
      </div>
    
    </div>
  )
}

export default App