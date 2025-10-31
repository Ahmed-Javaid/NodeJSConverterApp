function CtoF(a) {
    b = (a * (9/5)) + 32;
    return b;
}

function FtoC(a) {
    b = (a - 32) * (5/9);
    return b;
}

module.exports = {
    CtoF,
    FtoC
};