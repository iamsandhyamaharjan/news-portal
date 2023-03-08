import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, mydesc,url,newsurl,author,date,source} = this.props;
    return (
      <div className="my-3">
      <div className="card">
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>
        <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
      <img className="card-img-top" src={!url?"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930":url} alt="Card image cap"/>
      <div className="card-body">
        
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{mydesc}</p>
        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {date}</small></p>
        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-success">Read more</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem