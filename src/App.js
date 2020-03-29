import React from 'react';
import './App.css';

import Translate from './components/Translate/translate.component';
import TextRekognition from './components/TextRekognition/textrekognition.component';

class App extends React.Component {
  state = {
    loading: true,
    question: null,
    questionS: [],
  };

  fetchData = async () => {
    const response = await fetch("https://13.58.100.188:443/flask");
    const data = await response.text();
    this.setState({question: data});
    console.log(data);
  }

render() {
  return (
    <div className="App">
      <h1>Assignment 3 Cloud Computing AWS</h1>
      <h2 className="headers">Getting Data from my RDS MySQL Database in json format</h2>
      <p>Click to fetch RDS Data</p>
  <button onClick={() => {this.fetchData(); this.setState({loading: false})}}>Fetch RDS Data
  {console.log("Clicked")}</button> 
      <div onChange={this.loading}>
        {this.state.loading || !this.state.question
        ? ( <div>loading...</div> )
        : (
        <div>
          <div>{this.state.question}</div>
        </div>
        )}
      </div>
      <div>
      <h2 className="headers">My AWS S3 Bucket</h2>
          <a className='App-link' href="https://assignment3cloudbucket.s3.us-east-2.amazonaws.com/IMG_0928.JPG" 
      target="_blank" rel="noopener noreferrer">Click to see my best friend</a>
      </div>
          <Translate></Translate>
          <TextRekognition></TextRekognition>
    </div>
  );
}
}

export default App;
