import React from 'react';
import { connect } from 'react-redux';
import { fetchTeamStatsRankings } from '../actions';

class TeamStats extends React.Component {
    componentDidMount(){
        this.props.fetchTeamStatsRankings();
    }

    renderList(value) {
        return this.props.teamStats.sort(value).map(team => {
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
                                            <div className="card-text text-left" style={{fontSize:"16px", fontweight: "bold"}}>{team.name} {team.nickname}</div>
                                        </div>
                                        <div className="col-4 text-right">
                                            <div className="card-text text-right" style={{fontSize:"12px", fontweight: "bold"}}>({team.abbreviation})</div>
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* <div className="row">
                                        <div className="col-6">
                                            <div className="card-text text-left" style={{fontSize:"12px"}}>Offense Rank: {team.ppg.rank}</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="card-text text-right" style={{fontSize:"12px"}}>Defense Rank: {team.oppg.rank}</div>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>PPG</div>
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>OPPG</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"20px", fontweight: "bold"}}>{team.ppg.avg}</div>
                                        <div className="col-6 text-center" style={{fontSize:"20px", fontweight: "bold"}}>{team.oppg.avg}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>Rank: {team.ppg.rank}</div>
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>Rank: {team.oppg.rank}</div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>APG</div>
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>RPG</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"20px", fontweight: "bold"}}>{team.apg.avg}</div>
                                        <div className="col-6 text-center" style={{fontSize:"20px", fontweight: "bold"}}>{team.trpg.avg}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>Rank: {team.apg.rank}</div>
                                        <div className="col-6 text-center" style={{fontSize:"12px"}}>Rank: {team.trpg.rank}</div>
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
                        <h4 className="text-center" style={{fontWeight:"bold"}}>Offense Leaders</h4>
                        {this.renderList((a, b) => a.ppg.rank - b.ppg.rank)}
                    </div>
                    <div className="col-6">
                        <h4 className="text-center" style={{fontWeight:"bold"}}>Defense Leaders</h4>
                        {this.renderList((a, b) => b.oppg.rank - a.oppg.rank)}
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return { teamStats: state.teamStats};
}
export default connect(mapStateToProps, {fetchTeamStatsRankings})(TeamStats);