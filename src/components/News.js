import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
 
  constructor(){
    super();
    this.state ={
        articles : [],
        loading  : true,
        page : 1,
        totalResults : 0
    }
  }
  
  getNews = async (funcPage)=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${funcPage}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parsedData= await data.json();
    this.setState({articles : this.state.articles.concat(parsedData.articles),
    loading : false,
    page : funcPage});
  }
  
  handlePrevClick =()=>{
    this.getNews(this.state.page-1);
  }

  handleNextClick = ()=>{
    this.getNews(this.state.page+1);
  }

  componentDidUpdate(){
    document.title=`News Monkey${this.props.category==='general'?'':'-'+this.capitalize(this.props.category)}`
  }

  async componentDidMount(){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    this.props.setProgress(10);
    let data=await fetch(url);
    this.props.setProgress(30);
    let parsedData= await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles : parsedData.articles,
    loading : false,
    totalResults : parsedData.totalResults});
    this.props.setProgress(100);
  }

  capitalize(str){
      str=str[0].toUpperCase()+str.substring(1);
      return str;
  }

  fetchMoreData = ()=>{
      this.getNews(this.state.page+1);
  }

  render() {
    
    return (
      <>
         <h2 className="text-center" style={{margin : '30px 0px',marginTop : '5.625rem'}}>News Monkey - Top {this.props.category==='general'?
         '':this.capitalize(this.props.category)} Headlines</h2>
         {this.state.loading && <Spinner />}
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<Spinner/>}
        >
         <div className="row">
         {this.state.articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                    <NewsItem title={element.title} Description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
                </div>
            })}
          </div>
          </InfiniteScroll>
      </>
    )
  }
}

