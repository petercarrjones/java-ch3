/*Bean Counting*/

function countBs(string) {
	var bean = 0;
  for(var count = 0; count < string.length; count++)
  if (string.charAt(count) == "B")
  		bean = bean + 1; 

  	return bean;
};
console.log(countBs("BBC"));

function countChar(string, N) {
	var bean = 0; 
  for(var count=0; count < string.length; count++)
  if (string.charAt(count) == N)
  		bean = bean + 1; 

  	return bean;
};
console.log(countChar("kakkerlak", "k"));