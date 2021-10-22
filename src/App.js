import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./i18n";
import React, { Component, Suspense, useState } from "react";
import './App.css';
import HealthCard from './components/HealthCard';
import Language from './components/Language';
import InputForm from './components/InputForm';
import UserInput from './components/UserInput';

function App() {


  const [previousName, setPreviousName] = useState("");
  const [previousId, setPreviousId] = useState("");
  const [entryRecorded, setEntryRecorded] = useState("False")

  console.log(previousName)
  console.log(previousId)

  return (
    <div className="App">
      <header>
        <Suspense fallback={null}>
        <Language />
          <UserInput previousName={previousName} setPreviousName={setPreviousName} previousId={previousId} setPreviousId={setPreviousId} 
            entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded}/>
        {previousName != ""?
            (<HealthCard previousName={previousName} previousId={previousId} entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded}/>)
            : (<InputForm entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded}/>)}

        </Suspense>
      </header>
    </div>
  );
}

export default App;
