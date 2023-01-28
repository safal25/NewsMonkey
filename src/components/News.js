import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';



export default class News extends Component {
 
  constructor(){
    super();
    this.state ={
        articles : [],
        loading  : false,
        page : 1,
    }
  }
  
  getNews = async (funcPage)=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ab0df6f53e684567a39530f4229a5bc6&page=${funcPage}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data=await fetch(url);
    let parsedData= await data.json();
    this.setState({articles : parsedData.articles,
    loading : false,
    page : funcPage});
  }
  
  handlePrevClick =()=>{
    this.getNews(this.state.page-1);
  }

  handleNextClick = ()=>{
    this.getNews(this.state.page+1);
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ab0df6f53e684567a39530f4229a5bc6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data=await fetch(url);
    let parsedData= await data.json();
    this.setState({articles : parsedData.articles,
    loading : false,
    totalResults : parsedData.totalResults});
  }

  render() {
    
    return (
      <div className="container my-3">
         <h2 className="text-center" style={{margin : '30px 0px'}}>News Monkey - Get Latest News Here</h2>
         {this.state.loading && <Spinner />}
         <div className="row">
         {!this.state.loading && this.state.articles.map((element) => {
                return <div key={element.title} className="col-md-4">
                    <NewsItem title={element.title} Description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} />
                </div>
            })}
          </div>
          <div className="container d-flex justify-content-between my-1">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
          
      </div>
    )
  }
}

