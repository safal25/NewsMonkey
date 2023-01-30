import React, { Component } from 'react'
import DefaultNews from './DefaultNews.jpg'

//let defaultImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Frandom-newspaper%3Fimage_type%3Dphoto&psig=AOvVaw0R22y08646AZCbvvFfR_Z8&ust=1674994572602000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIiE_Oee6vwCFQAAAAAdAAAAABAE";

export default class NewsItem extends Component {


  render() {
    let {title,source,imageUrl,newsUrl,Description,publishedAt}=this.props;
    return (
        <div className="container my-2">
            <div className="card" >
                <img src={(imageUrl!==null)?imageUrl:DefaultNews} className="card-img-top" alt="..." width={490} height={276}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{marginBottom : '0.3rem'}}>{Description}</p> 
                    <span className="badge text-bg-success">{source!==null?source:'Unknown'}</span>
                    <p className="card-text"><small className="text-muted">Published on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Full article</a>
                </div>
            </div>  
        </div>
    )
  }

}


