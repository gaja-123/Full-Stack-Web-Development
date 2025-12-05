let sports : string[] =['cricket','tennis','pickle ball']

for ( let i =0; i< sports.length;i++){
    console.log(sports[i])
}

// simplified for loop

for (let sport of sports){

if (sport=='cricket'){
    console.log(sport+"<<favourite")
}
else{
    console.log(sport)
}
}

// growable array

sports.push('baseball')
sports.push('hockey')

console.log('new thing')

for (let sport of sports){

if (sport=='cricket'){
    console.log(sport+"<<favourite")
}
else{
    console.log(sport)
}
}