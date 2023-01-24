import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,imageUrl,newsUrl,Description}=this.props;
    return (
        <div class="container my-1">
            <div class="card" style={{width: "18rem"}}>
                <img src={imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{Description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" class="btn btn-primary">Full article</a>
                </div>
            </div>
                
        </div>
    )
  }

}


