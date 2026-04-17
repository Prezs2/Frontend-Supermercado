import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100 shadow-lg">
      <div className="container-fluid px-4 py-2">
        <Link
          className="navbar-brand fw-bold fs-2 text-uppercase"
          to="/"> Supermarket
        </Link>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5" to="/suppliers">
                Providers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5" to="/sales">
                Sales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
