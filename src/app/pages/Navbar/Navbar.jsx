 
import styles from './Navbar.module.css'; 

const Navbar = () => {
  


  return (
    
    <nav className="navbar navbar-expand-lg ">


      <div className="container-xxl bd-gutter flex-wrap flex-lg-nowrap pt-2">
        <div className="d-flex me-auto">
          <a className="navbar-brand p-0 me-0 me-lg-2" href="/" aria-label="FSD9">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
              width="130"
              height="22"
              alt="Flipkart Logo"
            />
          </a>
          <form className="d-flex me-auto" role="search">
            <input className="form-control" style={{ width: '40vw', marginLeft: '10px' }} type="search" placeholder="Search" aria-label="Search" />



          </form>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className={`${styles.a_nav_link} nav-link`} aria-current="page" href="/seller">
                <img className={styles.padding_5} src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg' />
                Become a Seller</a>
            </li>

            <li className="nav-item dropdown">

              <a className={`${styles.a_nav_link} nav-link dropdown-toggle`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className={styles.padding_5} src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg' />
                Sign In
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">My Profile</a></li>
                <li><a className="dropdown-item" href="#">Orders</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Wishlist</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={`${styles.a_nav_link} nav-link`}>
                <img className={styles.padding_5} src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg' />
                Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
