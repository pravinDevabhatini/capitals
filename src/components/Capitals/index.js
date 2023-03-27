import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  getId = () => {
    const {activeId} = this.state
    const activeCapital = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return activeCapital.country
  }

  onChangeActiveId = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  render() {
    const {activeId} = this.state
    const filteredId = this.getId(activeId)

    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Capitals and States</h1>
          <select
            id="capitals"
            onChange={this.onChangeActiveId}
            value={activeId}
          >
            {countryAndCapitalsList.map(eachCapital => (
              <option
                key={eachCapital.id}
                value={eachCapital.id}
                className="option"
              >
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals">is capital of which country ?</label>
          <p>{filteredId}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
