const makeChart = function(numBars) {

  for(let i = 0; i < numBars; i++) {
    let node = document.createElement("div");
    node.classList.add("t2");
    document.getElementById("chart").appendChild(node);
  }

};
