const makeChart = function(data) {
  let maxVal = Math.max(...data);


  for(let i = 0; i < data.length; i++) {
    let node = document.createElement("div");
    node.classList.add("t2");
    let heightPercentage = data[i] / maxVal * 100;
    console.log(heightPercentage);
    node.style.height =  String(heightPercentage) + '%';
    document.getElementById("chart").appendChild(node);
  }

};
