import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.onChange} />
        <i className="search icon" />
      </div>
        <select className="prompt" value={props.filter} onChange={props.changeFilter}>
          <option value="Name">Name</option>
          <option value="Type">Type</option>
        </select>
    </div>
  )
}

export default Search
