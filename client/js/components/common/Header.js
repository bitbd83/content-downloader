import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component{
    render() {
        return (
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                {' | '}
                <NavLink
                    exact to="/contents"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>Contents</NavLink>
            </nav>
        );
    }
}

Header.propTypes = {};

export default Header;
