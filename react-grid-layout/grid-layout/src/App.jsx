import { React, useState } from 'react'
import './App.css'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import RGLayout from './grid-layout.jsx';
import RGLayoutChildren from './grid-layout-children.jsx';
import RGResponsiveLayout from './grid-width.jsx';

function App() {
  return (
    <>
      <div className="card">
        <div className="grid-container">
          <RGLayout />
          <RGLayoutChildren />
          <RGResponsiveLayout />
        </div>
      </div>
    </>
  )
}

export default App
