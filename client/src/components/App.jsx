import React from 'react';
import Header from './header_footer/Header.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <Header />
      </div>
    )
  }
}


export default App;
