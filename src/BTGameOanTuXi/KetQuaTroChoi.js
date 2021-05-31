import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="ketQua">
                <div className="text-warning">Bạn thua !!!</div>
                <div className="text-success">Số bàn thắng: 0</div>
                <div className="text-info">Tổng số bàn chơi: 0</div>
            </div>
        )
    }
}
