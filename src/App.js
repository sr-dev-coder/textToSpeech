import React , { useState } from 'react';
import './App.css';
import { Textarea } from './component/forms/textarea';
import { TalkButton } from './component/forms/talkButton';

function App() {
  const [textarea , setTextarea] = useState('')
  const textareaValue = (event) =>{
    setTextarea(event.target.value);
  }
  
  const handleClick = () =>{
    let speech = new SpeechSynthesisUtterance();
    speech.text = textarea;
    window.speechSynthesis.speak(speech);
  }
  
  return (
    <div className="App">
      <div className="lg:w-3/6 p-5 mx-auto relative min-h-screen items-center flex justify-center">

        <div className="mix-blend-multiply filter blur-xl opacity-30 absolute top-64 -left-24 w-4/6 h-4/6 rounded-full bg-purple-300"></div>
        <div className="mix-blend-multiply filter blur-xl opacity-30 absolute bottom-64 -right-24 w-4/6 h-4/6 rounded-full bg-yellow-300"></div>
 
        <div className="w-full mx-auto z-10">
          <div className="mx-auto py-5">
          <h2 className="text-xl md:text-2xl font-semibold">What would you like type below and hit speaker button and listen...</h2>
          </div>
          <div className="bg-white shadow-md rounded-md mx-auto p-5">
              <Textarea handleChange={textareaValue} placeholder="Type here..."/>            
              <TalkButton handleClick={handleClick} className={textarea ? 'text-gray-600 pointer-events-auto' : 'text-gray-400 pointer-events-none'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
