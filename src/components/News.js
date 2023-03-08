import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
static defaultProps = {
  coutry:'in',
  pageSize:8,
  category:'general',
}
static propTypes = {
  country : PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
  constructor(props){
    super(props);
    
      this.state={
        articles: [],
        loading:false,
        page:1,
        

      }
      document.title = `${this.capitalize(this.props.category)}-Samachar`
    
  }

  async updateNews(){
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be81f9b486354f13bceb91120be2f053&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})


  }
  async componentDidMount(){

    
  this.updateNews()

  }
  handleNextClick = async() => {
    
    this.setState({
      page:this.state.page+1
    
    })
    this.updateNews()
  }

  
   handlePrevClick = async() => {
   
    this.setState({page:this.state.page-1})
    this.updateNews()

   }
   capitalize = (s) =>
{
    return s[0].toUpperCase() + s.slice(1);
}
  render() {
    return (
      <div className='container'>
        <h2 style={{marginTop:"110px",marginBottom:"50px"}}>Samachar - Top headlines on {this.capitalize(this.props.category)} </h2>
     { this.state.loading &&<Spinner/>}
        <div className="row " >
          {!this.state.loading &&
            this.state.articles.map((e)=>{
           return   <div className="col-md-4" >
              <NewsItem title={e.title} mydesc={e.description} url={
                e.urlToImage} newsurl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
            </div>
            })
          }
        
        </div>
        <div className="container d-flex justify-content-between my-5">
        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-success">&larr;Prev</button>
        <button type="button" disabled={this.state.page +1 >Math.ceil(this.state.totalResults/20)} onClick={this.handleNextClick} className="btn btn-success">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News