var list = '';
new Promise(function (resolve, reject) {
    setTimeout(resolve, 10, 'lv1');
}).then(function(name) {
    list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv2');
    })
}).then(function(name) {
    list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv3');
    })
}).then(function(name) {
    list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv4');
    })
}).then(function(name) {
    list += name + ',';
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'lv5');
    })
}).then(function(name){
    list += name;
    console.log(list);
});


