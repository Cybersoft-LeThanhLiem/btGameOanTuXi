import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="player">
                <div className="option">
                    <img src={this.props.mangDatCuoc.find(item => item.datCuoc).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc).ma} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player" />

                <div className="row">
                    {
                        this.props.mangDatCuoc.map((item, index) => {
                            let border = {};
                            if (item.datCuoc) {
                                border = { border: '3px solid orange' };
                            }
                            return <div className="col-4" key={index}>
                                <button style={border} className="btnOption">
                                    <img src={item.hinhAnh} alt={item.ma} />
                                </button>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = rootReducer => {
    return {
        mangDatCuoc: rootReducer.BTGameOanTuXiReducer.mangDatCuoc
    }
}

export default connect(mapStateToProps)(Player)