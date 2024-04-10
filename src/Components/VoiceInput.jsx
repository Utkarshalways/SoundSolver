import React from 'react'
import { useState } from 'react';

const VoiceInput = () => {
    const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setExpression(speechResult);
      try {
        const evaluatedResult = math.evaluate(speechResult);
        setResult(evaluatedResult);
      } catch (error) {
        setResult('Invalid expression');
      }
  return (
    <div>
      <h1>Voice Calculator</h1>
      <div>
        <input type="text" value={expression} readOnly />
        <button onClick={handleVoiceInput}>Start Voice Input</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  )
}

export default VoiceInput