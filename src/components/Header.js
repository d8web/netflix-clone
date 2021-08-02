import React from 'react'
import './Header.css'

const Header = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://secure.gravatar.com/avatar/8d1b81b9312cdb7633be1a9fc0766439.jpg?s=100" alt="" />
                </a>
            </div>
        </header>
    )
}

export default Header