import { useState } from 'react'
import FullScreenCard from '../FullScreenCard';
import LogoFooter from '../LogoFooter';


// const App = () => <PortfolioContainer />;

// export default App;
function AboutMe() {

  return (
    <div>
      <div style={{ paddingTop: "80px", backgroundColor: "#8BCBF1"}}>
        <FullScreenCard/>
        <LogoFooter/>
      </div>        
    </div>
  )
}

export default AboutMe
