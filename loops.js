function forLoop(array){
for (let i = 0; i < 25; i++){
  if (typeOf(i) === number){
    array.push("I am " + i + " strange loop.");
  } else {
    array.push(`I am ${i} strange loop.`);
  }
  return array;
}
