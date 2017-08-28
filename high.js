/*
	NOTE:
	Parts of code in the functions below could be optimized, but due to simplicity and
	demonstration purpose, it is kept as it is.
*/



function ForEACH()
{
	var results = document.getElementById('results_one');
	var data = document.getElementById('data').value;
	var List = [];

	//Takes the string from user input and fills the separated characters into a list
	for(var i  = 0; i < data.length; i++)
	{
		List.push(data[i]);
	}
	

	//Showing "List" and its elements and the relevant index in browser
	List.forEach
	(

		function(element, idx, List)
		{
			if(idx === 0)
			{
				results.innerHTML = "List:<strong> " + List + "</strong><br><br>";
			}
			results.innerHTML += "Element:<strong> " + element + "</strong> ";
			results.innerHTML += "&nbsp;&nbsp;&nbsp;"
			results.innerHTML += "Index:<strong> " + idx + " </strong><br> ";
		}

	);
	
}//ForEACH





function MAP()
{
	var results = document.getElementById('results_one');
	var data = document.getElementById('data').value;
	var List = [];

	//Takes the string from user input and fills the separated characters into a list
	for(var i  = 0; i < data.length; i++)
	{
		//"charCodeAt" returns the Unicode value for the specific character
		List.push(data[i].charCodeAt());
	}

	
	function Square(element)
	{
		return (element*element);
	}
	
	

	var newList = List.map(Square);

	
	//Shows results in browser
	results.innerHTML = "Old-List:<strong> " + List + "</strong><br>";
	results.innerHTML += "New-List:<strong> " + newList + "</strong>";
	
}//MAP





function FILTER()
{
	var results = document.getElementById('results_one');
	var data = document.getElementById('data').value;
	var List = [];
	var filtered_Array = [];
	var converted_Array = [];

	//Takes the string from user input and fills the separated characters into a list
	for(var i  = 0; i < data.length; i++)
	{
		//"charCodeAt" returns the Unicode value for the specific character
		List.push(data[i].charCodeAt());
	}

	
	//Calculates the difference between the actual element and the next element
	function Delta(element, index, anyArray)
	{
		if(anyArray.length > (index+1))
		{
			
			var delta = element - anyArray[index+1];
			
			
			if( 0 < delta)
			{
				return true;//"Filter()" accepts (only) boolean as return value
			}
		}

	}


	filtered_Array = List.filter(Delta);

	
	//"String.fromCharCode" converts Unicode values into characters
	for(var j = 0; j < filtered_Array.length; j++)
	{
		converted_Array.push(String.fromCharCode(filtered_Array[j]));
	}	
	
	//Shows results in browser
	results.innerHTML = "Filtered:<strong> " + filtered_Array + "</strong><br>";
	results.innerHTML += "Converted:<strong> " + converted_Array + "</strong>";
	
	
}//FILTER





function REDUCE()
{
	
	var results = document.getElementById('results_two');
	var data = document.getElementById('data').value;
	var List = [];
	
	
	//Takes the string from user input and fills the separated characters into a list
	for(var i  = 0; i < data.length; i++)
	{
		//"charCodeAt" returns the Unicode value for the specific character
		List.push(data[i].charCodeAt());
	}
	
	
	
	var productOutcome = List.reduce
	(
		function(accumulator,currentValue)
		{
			return accumulator * currentValue;
		}, 
		1
	);


	//Shows results in browser
	results.innerHTML = "Product outcome:<strong> " + productOutcome + "</strong>";
	
}//REDUCE





function ReduceRIGHT()
{
	
	var results = document.getElementById('results_two');
	var data = document.getElementById('data').value;
	var List = [];
	
	//Takes the string from user input and fills the separated characters into a list
	for(var i  = 0; i < data.length; i++)
	{
		List.push(data[i]);
	}
	
	
	var reversed = List.reduceRight
	(
		function(previousValue, currentValue)
		{
			return previousValue+currentValue;
		}
	)
	
	
	//Shows results in browser
	results.innerHTML = "Reversed:<strong> " + reversed + "</strong>";
	
}//ReduceRIGHT





function SORT()
{
	var results = document.getElementById('results_two');
	var data = document.getElementById('data').value;
	var List = [];
	
	
	//Takes the string from user input and fills the separated characters into a list
	for(var i  = 0; i < data.length; i++)
	{
		//"charCodeAt" returns the Unicode value for the specific character
		List.push(data[i].charCodeAt());
	}
	

	//Sorting by number
	//Check:https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
	function Compare(x,y)
	{	
		
		return x-y;
	}


	var sorted = List.sort(Compare);

	
	//Shows results in browser
	results.innerHTML = "Sorted by number:<strong> " + sorted + "</strong>";
	
}//SORT