var list = '';
setTimeout(lv1, 10, 'lv1');
function lv1(name) {
    list += name + ',';
    setTimeout(lv2, 10, 'lv2');
}
function lv2(name) {
    list += name + ',';
    setTimeout(lv3, 10, 'lv3');
}
function lv3(name) {
    list += name + ',';
    setTimeout(lv4, 10, 'lv4');
}
function lv4(name) {
    list += name + ',';
    setTimeout(lv5, 10, 'lv5');
}
function lv5(name) {
    list += name;
    console.log(list);
}

