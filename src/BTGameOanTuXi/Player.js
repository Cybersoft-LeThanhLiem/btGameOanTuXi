import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="player">
                <div className="option">
                    <img src="./img/keo.png" alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player" />

                <div className="row">
                    <div className="col-4">
                        <button className="btnOption">
                            <img src="./img/bao.png" alt="bao" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnOption">
                            <img src="./img/bua.png" alt="bua" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnOption">
                            <img src="./img/keo.png" alt="keo" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
