import React , { useState } from 'react';
import './App.css';
import { Textarea } from './component/forms/textarea';
import { TalkButton } from './component/forms/talkButton';

function App() {
  const [textarea , setTExtarea] = useState('')
  const textareaValue = (event) =>{
    setTExtarea(event.target.value);
  }
  
  const handleClick = () =>{
    let speech = new SpeechSynthesisUtterance();
    speech.text = textarea;
    window.speechSynthesis.speak(speech);
  }
  return (
    <div className="App">
      <div className="container p-5 mx-auto">
        <div className="lg:w-3/6 mx-auto py-5">
         <h2 className="text-xl font-semibold">What would you like type below and hit speaker button and listen...</h2>
        </div>
        <div className="bg-white shadow-md rounded-md lg:w-3/6 mx-auto p-5">
            <Textarea handleChange={textareaValue} placeholder="Type here..."/>            
            <TalkButton handleClick={handleClick} className={textarea ? 'text-gray-600 pointer-events-auto' : 'text-gray-400 pointer-events-none'} />
        </div>
      </div>
    </div>
  );
}

export default App;
