const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false }
    ],

    ketQua: "I'm Iron Man, I love you 3000!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false }
}

const BTGameOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {

        default: return {...state}
    }
}

export default BTGameOanTuXiReducer;