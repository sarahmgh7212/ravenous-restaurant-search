import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      term:'', // the term searched in search bar
      location:'', // location of business
      sortBy:'best_match'
    }
    this.sortByOptions={
      'Best Match':'best_match',
      'Highest Rated':'rating',
      'Most Reviewed':'review_count'
  };
  this.handleTermChange = this.handleTermChange.bind(this);
  this.handleLocationChange = this.handleLocationChange.bind(this);
  this.handleSearch=this.handleSearch.bind(this)
  }

  sortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active'
    }
    else{
      return ''
    }

  }
  handleSortByChange(sortByOption){
    this.setState({
      sortBy: sortByOption
    })
  }
  handleTermChange(event){
    this.setState({term:event.target.value})
  }
  handleLocationChange(event){
    this.setState({location:event.target.value})
  }
   renderSortByOptions(){
       //store values of the sortByOptions 
        return Object.keys(this.sortByOptions).map(element=>{
            let sortByOptionValue=this.sortByOptions[element]
            return <li 
            className={this.sortByClass(sortByOptionValue)} 
            key={sortByOptionValue}
            onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{element}</li>
        })

    }
  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault()
  }
    render(){
      return(
        <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()} 
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
    <input placeholder="Where?" onChange={this.handleLocationChange}/>
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Let's Go</a>
  </div>
</div>
      )
    }
}
export default SearchBar;

