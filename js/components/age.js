function age(year) {
    let msg = '';
    if (year < 2000) {
        msg = 'come in';
    } else {
        msg = 'wait';
    }
    return msg;
}
export { age };
