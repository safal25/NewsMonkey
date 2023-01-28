import React, { Component } from 'react'

//let defaultImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Frandom-newspaper%3Fimage_type%3Dphoto&psig=AOvVaw0R22y08646AZCbvvFfR_Z8&ust=1674994572602000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIiE_Oee6vwCFQAAAAAdAAAAABAE";

export default class NewsItem extends Component {

  constructor(){
    super();
    this.state ={
      defaultImage : "https://www.deccanherald.com/sites/dh/files/articleimages/2023/01/28/istock-626995158-1-1185446-1674899213.jpg"
    }
  }

  render() {
    let {title,imageUrl,newsUrl,Description}=this.props;
    return (
        <div className="container my-2">
            <div className="card" >
                <img src={(imageUrl!==null)?imageUrl:this.state.defaultImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{Description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Full article</a>
                </div>
            </div>
                
        </div>
    )
  }

}


