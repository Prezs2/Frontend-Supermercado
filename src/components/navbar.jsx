import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
      <div className="container-fluid px-4">
        <Link className="nav-link" href="/supermarket">
          SuperMarket
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/providers">
                Providers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/sales">
                Sales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
