
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
                <Route path="/" element={<News key="general" setProgress={this.setProgress} pageSize={pageSize} category="general"/>} />
                <Route path="/business" element={<News key="business" setProgress={this.setProgress} pageSize={pageSize} category="business"/>} />
                <Route path="/entertainment" element={<News key="entertainment" setProgress={this.setProgress} pageSize={pageSize} category="entertainment"/>} />
                <Route path="/sports" element={<News key="sports" setProgress={this.setProgress} pageSize={pageSize} category="sports"/>} />
                <Route path="/technology" element={<News key="technology" setProgress={this.setProgress} pageSize={pageSize} category="technology"/>} />
                <Route path="/health" element={<News key="health" setProgress={this.setProgress} pageSize={pageSize} category="health"/>} />
            </Routes>
         </BrowserRouter>
      </div>
    )
  }
}

