import React from 'react';
import Header from './header_footer/Header.jsx'
import Featured from './featured/featured.jsx'
import VenueInfo from './venue_info/index.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App" style={{
        height:'1500px', background:'#2f2f2f'
      }}>
        <Header />
        <Featured />

        <VenueInfo />
      </div>
    )
  }
}


export default App;
