import React from 'react';
import Header from './header_footer/Header.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App" style={{
        height:'1500px', background:'lightblue'
      }}>
        <Header />
      </div>
    )
  }
}


export default App;
