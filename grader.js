module.exports = {	
	
	letterGrader : function(num){
		if (num >= 101 || num <= -1) {
			return "Sorry that is not a valid test score.";
		} else if (num >= 90 || num >= 100){
			return "A";
		} else if (num >= 80 || num >= 89){
			return "B";
		} else if (num >= 70 || num >= 79){
			return "C";
		} else if (num >= 60 || num >= 69){
			return "D";
		} else if (num >= 0 || num >= 59){
			return "F";
		}
	},
	
	averageScore : function(arr){
		if (!arr){
			return "You forgot the array, oopsie.";
		} else if (arr){
			total = 0;
			// add all the items in the array together
			for (i = 0; i < arr.length; i++){
				total = arr[i] + total;
			}				
			// divide the total by arr.length
			// Question: why not arr.length minus 1 ??
			return (total/(arr.length));	
		}
	},
	
	medianScore : function(arr){
		if (!arr){
			return "You forgot the array, oopsie.";
		} 
		// rank items in array from lowest to highest
		// if arr.length is odd? take the center item in the array
		// and return that
		// if arr.length is even? take the center two items in the array
		// and average them and return the result
		
		else if (arr){

			// order the items from smallest to largest
			// look for largest and push it to the end
			for (i = 0; i < arr.length; i++){

			}
			// 
		
		}
	},
	
	modeScore : function(arr){
		if (!arr){
			return "You forgot the array, oopsie.";
		} 
		//
	},
}