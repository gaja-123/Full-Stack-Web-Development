var sports = ['cricket', 'tennis', 'pickle ball'];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
// simplified for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == 'cricket') {
        console.log(sport + "<<favourite");
    }
    else {
        console.log(sport);
    }
}
// growable array
sports.push('baseball');
sports.push('hockey');
console.log('new thing');
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    if (sport == 'cricket') {
        console.log(sport + "<<favourite");
    }
    else {
        console.log(sport);
    }
}
