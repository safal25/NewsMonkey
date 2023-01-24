import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
 
  constructor(){
    super();
    this.state ={
        articles : [],
        loading  : false
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ab0df6f53e684567a39530f4229a5bc6";
    let data=await fetch(url);
    let parsedData= await data.json();
    this.setState({articles : parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
         <h2>News Monkey - Get Latest News Here</h2>
         <div className="row">
         {this.state.articles.map((element) => {
                return <div className="col-md-4">
                    <NewsItem title={element.title} Description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} />
                </div>
            })}
          </div>

      </div>
    )
  }
}

