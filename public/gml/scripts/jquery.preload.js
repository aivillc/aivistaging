 function populateDOBYears() {
 	// populate years in dropdowns dynamically
	var minOffset = 0, maxOffset = 100;
	var thisYear = (new Date()).getFullYear() - 18;
	for (var i = minOffset; i <= maxOffset; i++) { 
			var year = thisYear - i; 
			$('<option>', {value: year, text: year}).appendTo(".year.form-control");
		}
 };	