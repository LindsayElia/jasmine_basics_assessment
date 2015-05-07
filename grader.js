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
		// use the bubbleSort function we created previously
		else if (arr){
			
			for(var i = 0; i < arr.length; i++){
				for(var j = 0; j < arr.length; j++){
					if(arr[j] > arr[j+1]){
						var temp = arr[j];	
						arr[j] = arr[j+1];
						arr[j+1] = temp;
					}
				}
			} 
			
			// if arr.length is even? take the center two items in the array
			// and average them and return the result
			if (arr.length % 2 === 0){
			
			}
			// if arr.length is odd? take the center item in the array
			// and return that
		 	else {
				for (i = 0; i < arr.length; i++){
				
			}
			 return arr;	
		}		
		},

	
	modeScore : function(arr){
		if (!arr){
			return "You forgot the array, oopsie.";
		} 
		//
	},
}