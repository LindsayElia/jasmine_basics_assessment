var app = require("../grader.js")

describe("Letter Grader functions", function(){
	
	it("should return correct letter grade when given test score", function(){
		expect(app.letterGrader(100)).toEqual("A");
		expect(app.letterGrader(95)).toEqual("A");
		expect(app.letterGrader(90)).toEqual("A");
		expect(app.letterGrader(89)).toEqual("B");
		expect(app.letterGrader(85)).toEqual("B");
		expect(app.letterGrader(80)).toEqual("B");
		expect(app.letterGrader(79)).toEqual("C");
		expect(app.letterGrader(75)).toEqual("C");
		expect(app.letterGrader(70)).toEqual("C");
		expect(app.letterGrader(69)).toEqual("D");
		expect(app.letterGrader(65)).toEqual("D");
		expect(app.letterGrader(60)).toEqual("D");
		expect(app.letterGrader(59)).toEqual("F");
		expect(app.letterGrader(50)).toEqual("F");
		expect(app.letterGrader(0)).toEqual("F");
		
		expect(app.letterGrader(101)).toEqual("Sorry that is not a valid test score.");
		expect(app.letterGrader(-1)).toEqual("Sorry that is not a valid test score.");
	});
	
	it("should return the average when given an array of numbers", function(){
		expect(app.averageScore([90, 95, 87, 60])).toEqual(83);

		expect(app.averageScore()).toEqual("You forgot the array, oopsie.");
	});
	
	it("should return the median when given an array of numbers", function(){
		expect(app.medianScore([52,8,80,66,94])).toEqual(66);
		expect(app.medianScore([52,8,80,66,94,77])).toEqual(71.5);  // want to return 71.5 from the average of 66 and 77

		expect(app.medianScore()).toEqual("You forgot the array, oopsie.");
	});
	
	it("should return the mode when given an array of numbers", function(){
		expect(app.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86, 92])).toEqual(92);

		expect(app.modeScore()).toEqual("You forgot the array, oopsie.");
	});

});
