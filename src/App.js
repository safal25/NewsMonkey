
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      progress : 0
    }
  }
  
  setProgress=(value)=>{
    this.setState({progress :value});
  }
  render() {
    const pageSize=6;
    const apikey=process.env.REACT_APP_API_KEY;
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
          color='#48C9B0 '
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
          height={3}/>
         <Navbar />
            <Routes>
                <Route path="/" element={<News key="general" apiKey={apikey} setProgress={this.setProgress} pageSize={pageSize} category="general"/>} />
                <Route path="/business" element={<News key="business" apiKey={apikey} setProgress={this.setProgress} pageSize={pageSize} category="business"/>} />
                <Route path="/entertainment" element={<News key="entertainment" apiKey={apikey} setProgress={this.setProgress} pageSize={pageSize} category="entertainment"/>} />
                <Route path="/sports" element={<News key="sports" apiKey={apikey} setProgress={this.setProgress} pageSize={pageSize} category="sports"/>} />
                <Route path="/technology" element={<News key="technology" apiKey={apikey} setProgress={this.setProgress} pageSize={pageSize} category="technology"/>} />
                <Route path="/health" element={<News key="health" apiKey={apikey} setProgress={this.setProgress} pageSize={pageSize} category="health"/>} />
            </Routes>
         </BrowserRouter>
      </div>
    )
  }
}

