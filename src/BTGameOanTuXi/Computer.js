import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        return (
            <div className="player">
                <div className="option">
                    <img style={{ transform: 'rotate(180deg)' }} src={this.props.computer.hinhAnh} alt={this.props.computer.ma} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/playerComputer.png" alt="player" />
            </div>
        )
    }
}

const mapStateToProps = rootReducer => {
    return {
        computer: rootReducer.BTGameOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)