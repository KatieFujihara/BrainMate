import React from 'react'
import { Active, Link } from "@curi/react-dom";
import 'font-awesome/css/font-awesome.min.css';

const ActiveLink = ({ to, params, partial, ...rest }) => (
  <Active name={to} params={params} partial={partial}>
    {active => (
      <Link
        to={to}
        params={params}
        {...rest}
        className={active ? "active" : ""}
      />
    )}
  </Active>
);


const Navbar = () => {
    return (
    <div>
        <div className="navbar">
            <ul className="menu">
                <li className="nav-left">Community</li>
                <li className="nav-right"><i className="fa fa-cogs"></i></li>
                <li className="nav-right"><i className="fa fa-envelope"></i></li>
                <li className="nav-right">Username</li>
            </ul>
        </div>
    </div>    
    )
}

export default Navbar