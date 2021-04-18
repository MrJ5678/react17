import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>部落格</h1>
        <div className="links">
          <Link to="/">home</Link>
          <Link
            to="/create"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            new blog
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
