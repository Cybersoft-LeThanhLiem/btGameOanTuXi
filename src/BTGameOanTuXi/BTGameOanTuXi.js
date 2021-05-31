import React, { Component } from 'react'
import './BTGameOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

export default class btGameOanTuXi extends Component {
    render() {
        return (
            <div className="game">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button className="btn btn-lg btn-success p-3 mt-4">Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
