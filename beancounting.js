/*Bean Counting*/

function countBs(string) {
	var B = 0; 
  for(var count=0; count < string.length; count++)
  if (string.charAt(count) == "B")
  		B = (B + 1);

  	  	return B;
};
console.log(countBs("BBC"));

function countChar(string, N) {
	var B = 0; 
  for(var count=0; count < string.length; count++)
  if (string.charAt(count) == N)
  		B = (B + 1);

  	  	return B;
};
console.log(countChar("kakkerlak, "k"));