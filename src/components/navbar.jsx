import React  from 'react';

const Navbar = ({totalCounter}) => {
    console.log("Navbar - Rendred")
;    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Navbar
                        <span className="badge badge-pill badge-secondary">
                            {totalCounter}
                        </span>
                </a>
            </div>
        </nav>
     );
};
 
export default Navbar;