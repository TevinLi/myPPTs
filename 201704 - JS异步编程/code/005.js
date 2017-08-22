var list = '';
var lv0 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, 'lv1');
});
function lv1(name) { list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv2');
    });
}
function lv2(name) { list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv3');
    });
}
function lv3(name) { list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv4');
    });
}
function lv4(name) { list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv5');
    });
}
function lv5(name) { list += name; console.log(list); }

lv0.then(lv1).then(lv2).then(lv3).then(lv4).then(lv5);

