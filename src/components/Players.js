import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, fetchPlayerStats } from '../actions';

class Players extends React.Component {
    componentDidMount(){
        this.props.fetchPlayers();
        //this.props.fetchPlayerStats();
    }

    renderList() {
        return this.props.players.map(player => {
            //this.props.fetchPlayerStats(player.personId)
            //player.stat = this.props.playerStats
            //return this.props.playerStats.map(playerStat => {
                return (
                    
                    <div className="col-mb-4">
                        <div className="card">
                        <img className="card-img-top" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`} alt="Player headshot"/>
                        <div className="card-body">
                            <div className="card-text" style={{fontSize:"14px", fontweight: "bold"}}>{player.firstName} {player.lastName}</div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card-text text-left" style={{fontSize:"12px", fontweight: "bold"}}>{player.dateOfBirthUTC}</div>
                                </div>
                                <div className="col-6">
                                    <div className="card-text text-right" style={{fontSize:"12px", fontweight: "bold"}}>Position: {player.pos}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card-text text-left" style={{fontSize:"12px", fontweight: "bold"}}>Height: {player.heightMeters}m</div>
                                </div>
                                <div className="col-6">
                                    <div className="card-text text-right" style={{fontSize:"12px", fontweight: "bold"}}>Weight: {player.weightKilograms}kg</div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-6 text-center" style={{fontSize:"12px"}}>PPG</div>
                                <div className="col-6 text-center" style={{fontSize:"12px"}}>RPG</div>
                                <div className="col-4 text-center" style={{fontSize:"12px"}}>APG</div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center" style={{fontSize:"14px", fontweight: "bold"}}>{player.stat.stats.latest.ppg}</div>
                                <div className="col-6 text-center" style={{fontSize:"14px", fontweight: "bold"}}>{player.stat.stats.latest.rpg}</div>
                                <div className="col-4 text-center" style={{fontSize:"14px", fontweight: "bold"}}>{player.stat.stats.latest.apg}</div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                )
            //})
        })
    }

    render() {
        return (
            <div className="container">
                <h2 style={{fontWeight:"bold"}}>21/22 Players</h2>
                <div className="row row-cols-1 row-cols-md-4">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { players: state.players, playerStats: state.playerStats };
}
export default connect(mapStateToProps, {fetchPlayers, fetchPlayerStats})(Players);