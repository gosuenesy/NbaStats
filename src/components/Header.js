import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img src="https://cdn.nba.com/logos/nba/nba-logoman-75-word_white.svg" style={{width:"10%"}} alt="Logo"></img>
          <br></br>
          <Link to='/' ><button className="center btn btn-lg btn-secondary" style={{margin:2}}>Players</button></Link>
          <Link to='/TeamStandings' ><button className="center btn btn-lg btn-secondary" style={{margin:2}}>Standings</button></Link>
          <Link to='/TeamStats' ><button className="center btn btn-lg btn-secondary" style={{margin:2}}>Team Stats</button></Link>
        </div>   
      </div>
    );
  }
}

export default Header;