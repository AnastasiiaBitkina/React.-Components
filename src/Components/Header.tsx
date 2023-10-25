import Input from './Input';
import '../Styles/header.css';

function Header() {
  return (
    <div className="header">
      <div className="input-container">
        <Input />
        <button className="search-button">Search!</button>
      </div>
    </div>
  )
}

export default Header;