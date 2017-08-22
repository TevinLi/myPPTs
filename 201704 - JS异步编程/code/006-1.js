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
    var list = (yield lv1()) + ',';
    list += (yield lv2()) + ',';
    list += (yield lv3()) + ',';
    list += (yield lv4()) + ',';
    list += yield lv5();
    console.log(list);
});


