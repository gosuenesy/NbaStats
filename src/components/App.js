import React, { Component } from 'react';
import Players from './Players';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import TeamStandings from './TeamStandings';
import TeamStats from './TeamStats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
            <Route exact path='/' component={Players}/>
            <Route path='/TeamStandings' component={TeamStandings}/>
            <Route path='/TeamStats' component={TeamStats}/>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
