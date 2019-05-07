function takeANumber(array,name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array) {
  var deliLine = "The line is currently:";
  var lineList = [];
  if  (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      lineList.push(` ${i + 1}. ${array[i]}`);
    }
    return deliLine + lineList;
  }
  else { 
    return "The line is currently empty.";
  }
}