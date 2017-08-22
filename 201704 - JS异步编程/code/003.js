var team = [];
var list = '';
function buildList(name) {
    team.shift()(name);
}
setTimeout(buildList, 10, 'lv1');
team.push(function(name) {
    list += name + ',';
    setTimeout(buildList, 10, 'lv2');
});
team.push(function(name) {
    list += name + ',';
    setTimeout(buildList, 10, 'lv3');
});
team.push(function(name) {
    list += name + ',';
    setTimeout(buildList, 10, 'lv4');
});
team.push(function(name) {
    list += name + ',';
    setTimeout(buildList, 10, 'lv5');
});
team.push(function(name) {
    list += name;
    console.log(list);
});

