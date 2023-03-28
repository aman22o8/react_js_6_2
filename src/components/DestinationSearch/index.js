// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {change: ''}

  onChangingInput = event => {
    this.setState({change: event.target.value})
  }

  render() {
    const {change} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(change),
    )

    console.log(destinationsList)
    console.log(change)
    return (
      <div className="main_container">
        <h1 className="dest_heading">Destination Search</h1>
        <div className="side_by_side">
          <input
            placeholder="    Search"
            onChange={this.onChangingInput}
            className="input_box"
            type="search"
            value={change}
            alt="search icon"
          />
          <img
            className="icon_"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png
            "
            alt="Search icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItem
              userDetails={eachUser}
              key={eachUser.id}
              //   deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
