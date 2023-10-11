import './App.css';
import './components/Style.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Headers from './components/Header';
import WhatWeDo from './components/WhatWeDo';
import CaseStudies from './components/CaseStudies';
import TrustedBy from './components/TrustedBy';

function App() {
  return (
    <div className="App">
      <Headers />

      <Body />

      <WhatWeDo />

      < CaseStudies />

      <TrustedBy />
      
      < Footer />
    </div>
  );
}

export default App;
