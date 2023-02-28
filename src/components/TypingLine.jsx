// import React, { useState } from 'react'
// import WorkingContents from './WorkingContents';

// function TypingLine() {

// const [title, setTitle] = useState('');
// const [content, setContent] = useState('');

// console.log("title", title)
// console.log("content", content)

// const titleChangeHandler = (event) => {
//     setTitle(event.target.value);
// };
// const contentChangeHandler = (event) => {
//     setContent(event.target.value);
// };
// const clickButtonHandler = () => {
//     const newSqures = {
//         id: squres.length + 1,
//         title,
//         content,
//     }
//     setSqures([...squres, newSqures])
// }


//   return (
//     <div>
//         <div>
//             제목:
//             <input type="text"
//             value={title}
//             onChange={titleChangeHandler}
//             />

//             내용:
//             <input 
//             type="text"
//             value={content}
//             onChange={contentChangeHandler}
//             />

//             <button
//             onClick={clickButtonHandler}
//             >
//                 추가하기
//             </button>
//         </div>
//     </div>
//   )
// }

// export default TypingLine