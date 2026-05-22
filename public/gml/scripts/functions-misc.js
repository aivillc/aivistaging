
function synergyTrack(value, field, title) {
      
	$.ajax({
		url: 'https://tracking.synergysystems.co.uk/web-track.php',
		type: 'post',
		data: {"C": "1068", "T": jQuery(location).attr('href'), "R": document.referrer, "S": SynergyTracker, "F": field, "V": value, "I": title},
		success:function(data)
		{
		  // console.log("DEBUG = Success");
		}
	});  
}

