module.exports = (x) => {
    const even = () => {
        return x % 2 === 0 ? true : false;
    };

    return {
        msg: 'The value is ',
        value: even()
    };
};
