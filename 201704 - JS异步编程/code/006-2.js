var co = require('co');
function lv1() { return new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, 'lv1');
})}
function lv2() { return new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, 'lv2');
})}
function lv3() { return new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, 'lv3');
})}
function lv4() { return new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, 'lv4');
})}
function lv5() { return new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, 'lv5');
})}
co(function*(){
    var list = yield [lv1(), lv2(), lv3(), lv4(), lv5()];
    console.log(list.join(','));
});

