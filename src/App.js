import React from 'react';
import RightSection from './components/main/RightSection';
import LeftSection from './components/main/LeftSection';
import Header from './components/header/Header';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <main>
          <LeftSection />
          <RightSection />
        </main>
      </div>
    );
  }
}
export default App;
