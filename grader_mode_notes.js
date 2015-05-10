////////////////////////////////////////////////////////////////
/*
class review for mode function below on 5/7/15
see https://students.gschool.it/cohorts/13/daily_plans/2015-05-07 for exact code
*/

function mode(arr){
	var list ={};
	
	//create frequency list
	for(var i = 0; i < arr.length; i++){
		var score = arr[i];
		if (!list[score]) {
			list[score] = 1;
		} else {
			list[score] += 1;
		}
	}
	
	// loop over list to find largest value

	// these are our key-value pairs, for example,
	// if you know the key, you can always get the value
	// not so the other way around - hard to get key if you only know the value
	// {
	// 5 : 4,
	// 2 : 1,
	// 4 : 2,
	// }
	
	
	// console.log(key); 	// print list to make sure we don't have any mistakes so far
	
	var mostTimes = 0;	// we know that the very least amount of times a number will occur in the array is zero
	var varMode;
	for (var key in list) {
		if(list[key] > mostTimes){		// if the value associated with key [0], is it larger than the value of mostTimes?
			varMode = key;
		}
	
		
	}
	
	console.log(varMode);
	
	return varMode;
}

mode([5,2,4,5,6,1,4,5,5])
//=> 5
