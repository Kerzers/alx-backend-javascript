function calculateNumber(type, a, b) {
    const ar = Math.round(a);
    const br = Math.round(b);
    let c = 0;
    if (type === 'SUM') {
        c = ar + br;
    } else if (type === 'SUBTRACT') {
        c = ar - br;
    } else if (type === 'DIVIDE') {
        if (br === 0) {
            c = 'Error';
        } else {
            c = ar / br;
        }
    }
    return c;
}

module.exports = calculateNumber;
