import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'
import PasswordItem from '../passwordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordItemsList: [],
    isChecked: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newItem = {
      id: v4uuid(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordItemsList: [...prevState.passwordItemsList, newItem],
      website: '',
      username: '',
      password: '',
      searchInput: '',
    }))
  }

  getStars = () => {
    const {password} = this.state
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    ).repeat(password.length)
  }

  onChangeShowPassword = event => {
    const {checked} = event.target
    this.setState({isChecked: checked})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = givenId => {
    this.setState(prevState => ({
      passwordItemsList: prevState.passwordItemsList.filter(
        eachItem => eachItem.id !== givenId,
      ),
    }))
  }

  render() {
    const {
      website,
      username,
      passwordItemsList,
      password,
      isChecked,
      searchInput,
    } = this.state
    const filteredList = passwordItemsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="content-container">
          <div className="password-heading-container">
            <img
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>

          <div className="starting-input-container">
            <img
              className="password-manager-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <form className="input-container" onSubmit={this.onAddPassword}>
              <h1 className="style-input-heading">Add New Password</h1>
              <div className="style-each-input-container">
                <div className="img-container">
                  <img
                    className="style-wup-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  className="style-input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>
              <div className="style-each-input-container">
                <div className="img-container">
                  <img
                    className="style-wup-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  className="style-input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="style-each-input-container">
                <div className="img-container">
                  <img
                    className="style-wup-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </div>
                <input
                  type="password"
                  className="style-input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>

          <div className="password-container">
            <div className="password-header-container">
              <h1 className="your-passwords-heading">Your Passwords</h1>
              <button className="count-bottom" type="button">
                <p className="style-count-para">{filteredList.length}</p>
              </button>
              <div className="search-input-container">
                <div className="search-container">
                  <img
                    className="search-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </div>
                <input
                  type="search"
                  className="style-search-input"
                  placeholder="Search"
                  onChange={this.onSearchInput}
                  value={searchInput}
                />
              </div>
            </div>
            <hr className="style-line" />
            <div className="check-box-container">
              <input
                type="checkbox"
                onChange={this.onChangeShowPassword}
                value="Show Passwords"
                id="showPasswordsInput"
              />
              <label
                htmlFor="showPasswordsInput"
                className="style-show-passwords"
              >
                Show Passwords
              </label>
            </div>

            {filteredList.length === 0 && (
              <div className="no-passwords-container">
                <img
                  className="style-no-passwords-bg"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p className="no-passwords-heading">No Passwords</p>
              </div>
            )}
            {passwordItemsList.length !== 0 && (
              <ul className="passwords-list-container">
                {filteredList.map(eachItem => (
                  <PasswordItem
                    eachItem={eachItem}
                    key={eachItem.id}
                    isChecked={isChecked}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
