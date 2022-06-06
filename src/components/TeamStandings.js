import React from 'react';
import { connect } from 'react-redux';
import { fetchTeamStandingsEast, fetchTeamStandingsWest } from '../actions';

class TeamStandings extends React.Component {
    componentDidMount(){
        this.props.fetchTeamStandingsEast();
        this.props.fetchTeamStandingsWest();
    }

    renderList(teams) {
        return teams.map(team => {
            return (
                // <div className="col-mb-3">
                    <div className="card"  key={team.teamId}>
                        <div className="row">
                            <div className="col-4">
                                <img className="card-img center" src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`} style={{width:"168px",height:"168px", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto"}} alt="Team Logo"/>
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="card-text text-left" style={{fontSize:"16px", fontweight: "bold"}}>{team.teamSitesOnly.teamName} {team.teamSitesOnly.teamNickname}</div>
                                        </div>
                                        <div className="col-4 text-right">
                                            <div className="card-text text-right" style={{fontSize:"12px", fontweight: "bold"}}>({team.teamSitesOnly.teamTricode})</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="card-text text-left" style={{fontSize:"12px"}}>Conference Rank: {team.confRank}</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="card-text text-right" style={{fontSize:"12px"}}>Division Rank: {team.divRank}</div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="text-center" style={{fontSize:"12px"}}>W/L</div>
                                    <div className="text-center" style={{fontSize:"24px", fontweight: "bold"}}>{team.win} - {team.loss}</div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>WIN%</div>
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>LAST10</div>
                                        {/* <div className="col-4 text-center" style={{fontSize:"12px"}}>STREAK</div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"14px", fontweight: "bold"}}>{team.winPct}</div>
                                        <div className="col-6 text-center" style={{fontSize:"14px", fontweight: "bold"}}>{team.lastTenWin} - {team.lastTenLoss}</div>
                                        {/* <div className="col-4 text-center" style={{fontSize:"14px", fontweight: "bold"}}>{team.streak}</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                // </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h2 style={{fontWeight:"bold"}}>21/22 Standings</h2>
                {/* <div className="row row-cols-1 row-cols-md-4">
                    {this.renderList(this.props.teamsEast)}
                    {this.renderList(this.props.teamsWest)}
                </div> */}
                <div className="row row-cols-2">
                    <div className="col-6">
                        <h4 className="text-center" style={{fontWeight:"bold"}}>Western Conference</h4>
                        {this.renderList(this.props.teamsWest)}
                    </div>
                    <div className="col-6">
                        <h4 className="text-center" style={{fontWeight:"bold"}}>Eastern Conference</h4>
                        {this.renderList(this.props.teamsEast)}
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return { teamsEast: state.teamsEast, teamsWest: state.teamsWest };
}
export default connect(mapStateToProps, {fetchTeamStandingsEast, fetchTeamStandingsWest})(TeamStandings);