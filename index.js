const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
]

function superbowlWin(record){
    let win = record.find(array => array.result === "W")
    if(win)
    return win.year
}