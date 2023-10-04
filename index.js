const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
    //...
  ];

  
function superbowlWin(arr) {
    let win = arr.find((element) => element.result === "W");
    return win ? win.year : undefined;
    
}