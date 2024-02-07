import './index.css'

const PasswordItem = props => {
  const {eachItem, isChecked, onDelete} = props
  const {id, website, username, password} = eachItem
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="eachPassword-container">
      <button className="initial" type="button">
        {website[0].toUpperCase()}
      </button>
      <div className="content">
        <p className="style-website">{website}</p>
        <p className="style-website">{username}</p>
        <p className="style-website">
          {isChecked && password}
          {!isChecked && (
            <img
              className="stars-style"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
/*
          {(
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          ).repeat(password.length)}

*/
