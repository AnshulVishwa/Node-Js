const addFun = ( a ) => {
    return ( b ) => {
        return a + b
    }
} 
const subFun = ( a ) => {
    return ( b ) => {
        return a - b
    }
} 

exports.add = ( a , b ) => a + b;
exports.sub = ( a , b ) => a - b;

module.exports = {
    addFun,
    subFun
};