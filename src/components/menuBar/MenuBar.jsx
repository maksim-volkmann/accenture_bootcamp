import './menuBar.css'

const MenuBar = () => {
  return (
    <div className="menuBar">
      <div className="menuBarWrapper">
        <nav>
          <ul>
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="/">
              <li>RECIPES</li>
            </a>
            <a href="/">
              <li>LOGIN</li>
            </a>
            <a href="/">
              <li>REGISTER</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MenuBar
