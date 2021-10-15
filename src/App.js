import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./i18n";
import React, { Component, Suspense } from "react";
import './App.css';
import HealthCard from './components/HealthCard';
import Language from './components/Language';
import InputForm from './components/InputForm';


function App() {

  return (
    <div className="App">
      <header>
        <Suspense fallback={null}>
        <Language />
        <HealthCard />
        <InputForm />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
