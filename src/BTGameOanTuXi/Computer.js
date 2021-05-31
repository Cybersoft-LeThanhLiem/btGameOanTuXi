import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className="player">
                <div className="option">
                    <img style={{ transform: 'rotate(180deg)' }} src="./img/keo.png" alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/playerComputer.png" alt="player" />
            </div>
        )
    }
}
