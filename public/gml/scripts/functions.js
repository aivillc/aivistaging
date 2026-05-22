// Global Variables
var transArray=[];

jQuery(document).ready(function() {
	
	//populateDOBYears();
	
	if (typeof getUrlParameter('utm_source') != 'undefined') {
		$utmsource = getUrlParameter('utm_source').toLowerCase();
	} else {
		$utmsource = 'not-set';
	}

	if (typeof getUrlParameter('utm_medium') != 'undefined') {
		$utm_medium = getUrlParameter('utm_medium').toLowerCase();
	} else {
		$utm_medium = 'not-set';
	}

	if (($utmsource == 'experian' && pageid == 'gml-new') || (gmlexperian == 1)) {
		//$(".apr-rate").html('45.0%');
		//$(".apr-rate-header").html('45.0%');
		$(".experian-loanamount").show();
		$(".gmlupdate-borrowamount").html('&pound;12,500');
		//$(".rate-example").html('*Representative Example: £3,000 over 36 months, representative 45.0% APR Fixed. Monthly Payment £140.40. The interest is 10% per annum fixed and service fee is 27.74% per annum fixed. Interest payable £544.36 and service fee payable is £1,510.06. Total repayable £5,054.40');
	} 

	if ($utmsource == 'experian') {
		$(".applycontainer").hide();
		$(".experian").show();
	} 
	
	if ($utmsource == 'money.co.uk') {
		$(".applycontainer").hide();
		$(".money").show();
	} 
	
	if ($utmsource == 'disabledknowyourmoney') {
		$(".applycontainer").hide();
		$(".knowyourmoney").show();
	} 

	if ($utmsource == 'gocompare' || $utm_medium == 'gocompare') {
		$(".applycontainer").hide();
		$(".gocompare").show();
	} 

	if ($utmsource == 'uswitch' || $utmsource == 'uswitch.com') {
		$(".applycontainer").hide();
		$(".uswitch").show();
	} 
	
	if ($utm_medium == 'comparethemarket') {
		$(".applycontainer").hide();
		$(".comparethemarket").show();
	} 
	
	var title = $(this).attr('title');
	
	if (typeof step == 'undefined') {
		step = "";
	}
	
	jQuery.ajax({
		url: 'https://tracking.synergysystems.co.uk/web-track.php',
		//url: 'https://secure.synergysystems.co.uk/emarketing/track/web-track.php',
		type: 'post',
		data: {"C": "1068", "T": jQuery(location).attr('href'), "R": document.referrer, "S": SynergyTracker, "F": step, "I": title},
        });
		
	 
	 $('.trackevent').on('change click', function() {
	  	
		Value = $(this).val();
		FieldID = $(this).attr('id');

		//console.log("DEBUG: ", FieldID);
	
		if (FieldID == "loan_term_container") {
				var values = [];
			$("select.loan-term-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "loan_term";
			});
		}

		if (FieldID == "loan_purpose_container") {
				var values = [];
			$("select.loan-purpose-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "loan_purpose";
			});
		}

		if (FieldID == "title_container") {
				var values = [];
			$("select.title-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "title";
			});
		}

		if (FieldID == "employment_status_container") {
				var values = [];
			$("select.employment-status-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "employment_status";
			});
		}

		if (FieldID == "residential_status_container") {
				var values = [];
			$("select.residential-status-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "residential_status";
			});
		}

		if (FieldID == "pay_frequency_container") {
				var values = [];
			$("select.pay-frequency-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "pay_frequency";
			});
		}

		if (FieldID == "time_at_address_container") {
				var values = [];
			$("select.time-at-address-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "time_at_address";
			});
		}		

		if (FieldID == "guarantor_title_container") {
				var values = [];
			$("select.guarantor-title-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "guarantor_title";
			});
		}	

		if (FieldID == "guarantor_residential_status_container") {
				var values = [];
			$("select.guarantor-residential-status-select").each(function(i, sel){
				var selectedVal = $(sel).val();
				Value = selectedVal;
				FieldID = "guarantor_residential_status";
			});
		}	

		
		if (Value) {
			$.ajax({
				url: 'https://tracking.synergysystems.co.uk/web-track.php',
				//url: 'https://secure.synergysystems.co.uk/emarketing/track/web-track.php',
				type: 'post',
				data: {"C": "1068", "T": jQuery(location).attr('href'), "R": document.referrer, "S": SynergyTracker, "F": FieldID, "V": Value, "I": title},
				success:function(data)
				{
				  //console.log("DEBUG = Success");
				}
			});   
		}
	 });
	 
	 
	 $( ".trackevent input" ).blur(function() {
	    
		Value = $(this).val();
		FieldID = $(this).attr('id');
		//console.log("DEBUG = ", $(this));
	  
		if (Value) {
			$.ajax({
				url: 'https://tracking.synergysystems.co.uk/web-track.php',
				//url: 'https://secure.synergysystems.co.uk/emarketing/track/web-track.php',
				type: 'post',
				data: {"C": "1068", "T": jQuery(location).attr('href'), "R": document.referrer, "S": SynergyTracker, "F": FieldID, "V": Value, "I": title},
				success:function(data)
				{
				  //console.log("DEBUG = Success");
				}
			}); 
		}
	});
	
	$(function () {
		$('[id*=account_sort_code]').on('keypress', function () {
			//console.log("DEBUG = Success");
			var number = $(this).val();
			if (number.length == 2) {
				$(this).val($(this).val() + '-');
			}
			else if (number.length == 5) {
				$(this).val($(this).val() + '-');
			}
		});
	});
	
	$(".trans-container").click(function() {
		transid = $(this).attr('id');
		if ($(this).hasClass("none")) {
			transArray = [];
			$(".trans-container").not('.none').removeClass("active")			
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else $(this).addClass("active");
		} else {
			if ($(this).hasClass("active")) {
				transArray.splice( $.inArray(transid, transArray), 1 );
				$(this).removeClass("active")
				$(".trans-container.none").removeClass("active")
			} else {
				if($.inArray(transid, transArray)) {
					transArray.push(transid);
				}
				$(this).addClass("active")
				$(".trans-container.none").removeClass("active")
			}
			$("[name='TransArray']").val(transArray);
		}
		//console.log("DEBUG = ", transArray);
	});	
	
	$("#incomeform").submit(function() {
		if (!$(".trans-container").hasClass("active")) {
			//console.log("DEBUG = 2");
			$("p.error-message").show();
			return false;
		}
	});	
	
	$("#expenseform").submit(function() {
		if (!$(".trans-container").hasClass("active")) {
			//console.log("DEBUG = 2");
			$("p.error-message").show();
			return false;
		}
	});	
	
	if ((window.location.href.indexOf("obupdate") > -1) && (window.location.href.indexOf("start") == -1)) {
		setTimeout(function(){
			url = window.location.href;    
			url = url.replace('#mobload', '');
			if (url.indexOf('?') > -1){
			   url += '&start=1'
			} else {
			   url += '?start=1'
			}
			window.location.href = url;
		}, 10000);
    }
	
 });		
 		
 function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1].toLowerCase();
        }
    }
};

function showpay()
    {
        var x = parseInt($("#loan_amount").val(), 10),
            y = parseInt($("#loan_term").val(), 10),
		    source = getUrlParameter('utm_source');
	
        var theint = 41.17032;
		$(".apr-rate").html('49.9%');
				
		//console.log(theint);
		
		var princ = x;
        var term = y;
        var intr = theint / 1200;
        z = princ * intr / (1 - (Math.pow(1 / (1 + intr), term)));
        $("#repaying_per_month").html("" + (parseFloat(Math.round(z * 100) / 100).toFixed(2)));
        w = ((Math.round(z * 100) / 100) * (y));
        $("#total_amount_repayable").html("" + (parseFloat(Math.round(w * 100) / 100).toFixed(2)));
        $("#you_want_borrow").html("" + $("#loan_amount").val());
        $("#over_repayment_period").html($("#loan_term").val()+" months");
    }
    
function CountdownTimerConnectBank(delay) {
	var counter = delay;
	var interval = setInterval(function() {
		counter--;
		if (counter <= 0) {
			clearInterval(interval);
			connectBank();
			return;
		}else{
			$('#count').text(counter);
			//console.log("Timer --> " + counter);
		}
	}, 1000);
};

function CountdownTimerPlaid(id, delay) {
	var counter = delay;
	var interval = setInterval(function() {
		counter--;
		if (counter <= 0) {
			clearInterval(interval);
			window.location.href = "plaid/link.php?id=" + id;
			return;
		}else{
			$('#count').text(counter);
			//console.log("Timer --> " + counter);
		}
	}, 1000);
};

function declineLoader() {
	$('.throbber-eligibility').delay(4000).hide(0);
	$('.loader').delay(4000).hide(0);
	
	$('.loader2').delay(2000).show(0);
	$('.declineTextContainer').delay(4000).show(0);
}	

function copyLink() {
	var textToCopy = $('#shorturl').text();
	var tempTextarea = $('<textarea>');
	$('body').append(tempTextarea);
	tempTextarea.val(textToCopy).select();
	document.execCommand('copy');
	tempTextarea.remove();
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied to clipboard";
}

function copyLinkOutFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
