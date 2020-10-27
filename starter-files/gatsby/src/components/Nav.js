import React from 'react';
import {Link} from 'gatsby';

const Nav = () => {
  return ( <nav>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/pizzas/">Menu</Link></li>
  <li><Link to="/">LOGO</Link></li>
  <li><Link to="/slicemasters">Slicemasters</Link></li>
  <li><Link to="/orders">Order</Link></li>
</ul>
  </nav> );
}
 
export default Nav;