function theBeatlesPlay(musicians, instruments) {
var array = new Array();
  for (let i = 0; i < musicians.length; i++)
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  return array;
}

function johnLennonFacts(array) {
  while (array > 0) {
  console.log(--array + "!!!");
  }
  return array;
}
