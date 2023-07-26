
import {Link} from 'react-router-dom'
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Custom Form Builder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
               <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Build Form
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Customer">Customer Form</Link></li>
            <li><Link class="dropdown-item" to="/">Purchase Form</Link></li>
            <li><Link class="dropdown-item" to="/">Feedback Form</Link></li>
            <li><Link class="dropdown-item" to="/">Buisiness Evaluation Form</Link></li>
          
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
       );
}

export default Navbar;
