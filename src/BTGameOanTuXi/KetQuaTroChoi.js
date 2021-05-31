import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="ketQua">
                <div className="text-warning">{this.props.ketQua}</div>
                <div className="text-success">Số bàn thắng: {this.props.soBanThang}</div>
                <div className="text-info">Tổng số bàn chơi: {this.props.soBanChoi}</div>
            </div>
        )
    }
}

const mapStateToProps = rootReducer => {
    return {
        ketQua: rootReducer.BTGameOanTuXiReducer.ketQua,
        soBanThang: rootReducer.BTGameOanTuXiReducer.soBanThang,
        soBanChoi: rootReducer.BTGameOanTuXiReducer.soBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)