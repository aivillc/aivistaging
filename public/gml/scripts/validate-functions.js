    $(document).ready(function(e){
        showpay(); 
		
        $('#step1').validator({
          
			custom: {

				'patt': function ($el) {
				
					$("#error_"+$el.attr('id')).html('');
					var elemid = $el.attr('id');
					var response ='';
					//console.log(elemid);
					
					// if no value inserted           
					if ($el.val() == ""){
	
                    switch (elemid){
                      case "first_name": $("#error_"+elemid).html('Please enter your first name');break;
                      case "sur_name": $("#error_"+elemid).html('Please enter your surname');break;
                      case "email": $("#error_"+elemid).html('Please enter your email');break; 
                      case "mobile_phone": $("#error_"+elemid).html('Please enter your mobile phone');break;
                      case "day": $("#error_"+elemid).html('Please enter the day');break;
                      case "month": $("#error_"+elemid).html('Please enter the month');break;
                      case "year": $("#error_"+elemid).html('Please enter the year');break;  
					  case "post_code": $("#error_"+elemid).html('Please enter a valid postcode.');break;  
					  case "work_phone": $("#error_"+elemid).css("display", "block"); $("#error_"+elemid).html('Please enter your work phone.');break;  
                    }  
					
                  // if value was inserted
                  } else {
                    
                    //check pattern
                    var regex = new RegExp($el.data('patt'),'g');
                    var result = regex.test($el.val());
                    
                    // if does not match the pattern
                    if (result == false)
                    {
                          switch (elemid) {
                            case "first_name": $("#error_"+elemid).html('Uppercase/Lowercase letters only');response = 'fail';break;
                            case "sur_name": $("#error_"+elemid).html('Uppercase/Lowercase letters only');response = 'fail';break;
                            case "old_house_number": $("#error_"+elemid).html('Numbers and letters only');response = 'fail';break;
                            case "old_post_code": $("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';break;
                            case "day": $("#error_"+elemid).html('Numeric between 01 and 31');response = 'fail';break;
                            case "month": $("#error_"+elemid).html('Numeric between 01 and 12');response = 'fail';break;
							case "year": $("#error_"+elemid).html('Please enter the year');response = 'fail';break;
                            case "mobile_phone": $("#error_"+elemid).html('Mobile phone format: 07XXXXXXXXX');response = 'fail';break;
							case "home_phone": $("#error_"+elemid).html('Please enter a valid phone number.');response = 'fail';break;
							case "work_phone": $("#error_"+elemid).css("display", "block"); $("#error_"+elemid).show; $("#error_"+elemid).html('Please enter a valid phone number.');response = 'fail';break;
							case "email": $("#error_"+elemid).html('Email format: xxxx@xxx.xxx');response = 'fail';break;                                     
							case "city_town": $("#error_"+elemid).html('Please enter your city');response = 'fail';break; 
                            case "address_line_1": $("#error_"+elemid).html('Please enter your address');response = 'fail';break;
							case "post_code": $("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';break;
							case "old_post_code": $("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';break;
                          }
                          
                    // if match the pattern
                    } else {
                        switch (elemid){
							case "month": daycheck(parseInt($('#day').val()),parseInt($('#month').val()));break;
							case "year": if(yearcheck(parseInt($('#day').val()),parseInt($('#month').val()),parseInt($('#year').val())) == false) {response = 'fail';};break;
							case "post_code": 
								if (isValidPostcode($el.val()) == false) {$("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';};
								break;
							case "old_post_code": 
								if (isValidPostcode($el.val()) == false) {$("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';};
								break;
							case "mobile_phone": 	
								if (isValidPhone($el.val()) == false) {$("#error_"+elemid).html('Please enter a valid phone number.');response = 'fail';};
								break;
							case "home_phone": 	
								if (isValidPhone($el.val()) == false) {$("#error_"+elemid).html('Please enter a valid phone number.');response = 'fail';};
								break;	
							case "work_phone": $("#error_"+elemid).css("display", "none");
                        }
                    }
                  
					//console.log(response);
					return response;
					
				}
              }
          },
          errors: {
              'patt': "invalid",                      
          }

        });
		
        $('#step2').validator({

          custom: {
				'patt': function ($el) {
					$("#error_"+$el.attr('id')).html('');
					var elemid = $el.attr('id');
					var response ='';
					//console.log(elemid);
				   
					// if no value inserted           
					if ($el.val() == ""){
                    
                    switch (elemid){
                      case "guarantor_first_name": $("#error_"+elemid).html('Please enter your guarantor first name');response = 'fail';break;
                      case "guarantor_sur_name": $("#error_"+elemid).html('Please enter your guarantor surname');response = 'fail';break;                
                      case "guarantor_mobile_phone": $("#error_"+elemid).html('Please enter your mobile phone');response = 'fail';break;                     
                      case "guarantor_email": $("#error_"+elemid).html('Please enter your email');response = 'fail';break; 
					  case "guarantor_post_code": $("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';break;
					  case "guarantor_residential_status": $("#error_"+elemid).html('Please select a response.');response = 'fail';break;
					  case "guarantor_relationship": $("#error_"+elemid).html('Please select a response.');response = 'fail';break; 
                    }  
					
                  // if value was inserted
                  } else {
                    
                    //check pattern
					var regex = new RegExp($el.data('patt'),'g');
                    var result = regex.test($el.val());
                    
                    // if does not match the pattern
                    if ( result == false)
                    {
                      
                          switch (elemid) {
								case "guarantor_mobile_phone": $("#error_"+elemid).html('Mobile phone format: 07XXXXXXXXX');response = 'fail';break;
								case "guarantor_first_name": $("#error_"+elemid).html('Uppercase/Lowercase letters only');response = 'fail';break;
								case "guarantor_sur_name": $("#error_"+elemid).html('Uppercase/Lowercase letters only');response = 'fail';break;          
								case "guarantor_mobile_phone": $("#error_"+elemid).html('Mobile phone format: 07XXXXXXXXX');response = 'fail';break;           
								case "guarantor_email": $("#error_"+elemid).html('Email format: aaa@bbb.cc');response = 'fail';break;   
								case "guarantor_home_phone": $("#error_"+elemid).html('Please enter a valid phone number.');response = 'fail';break;
								case "guarantor_post_code": $("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';break;
                          }
                          
                    // if match the pattern
                    } else {
                      
                        switch (elemid){
							case "guarantor_mobile_phone": 	
								if (isValidPhone($el.val()) == false) {$("#error_"+elemid).html('Please enter a valid phone number.');response = 'fail';};
								break;
							case "guarantor_first_name": 
								if (fnames_check($_POST["first_name"],$_POST["sur_name"],$('#guarantor_first_name').val(),$('#guarantor_sur_name').val()) == false) {response = 'fail';};
								break;
							case "guarantor_sur_name": 
								if (snames_check($_POST["first_name"],$_POST["sur_name"],$('#guarantor_first_name').val(),$('#guarantor_sur_name').val()) == false) {response = 'fail';};
								break;
							case "guarantor_home_phone": 	
								if (isValidPhone($el.val()) == false) {$("#error_"+elemid).html('Please enter a valid phone number.');response = 'fail';};
								break;	
							case "guarantor_post_code": 
								if (isValidPostcode($el.val()) == false) {$("#error_"+elemid).html('Please enter a valid postcode.');response = 'fail';};
								break;								
                         }                      

                    }
                  
					//console.log(response);
					return response;
              }
              }
          },
          errors: {
              'patt': "invalid"
                      
          }

        });
		
        $('#step3').validator({

			custom: {
				'patt': function ($el) {
					$("#error_"+$el.attr('id')).html('');
					var elemid = $el.attr('id');
					var response ='';
				   
					// if no value inserted           
					if ($el.val() == ""){
                        switch (elemid) {
                            case "earn_per_month": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;
                            case "household_income": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;
                            case "mortage_rent_payment": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;
                            case "existing_loan": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;
                            case "food_per_month": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;
                            case "water_gas_bills": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;
                            case "transport_per_month": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;
                            case "monthly_outgoings": $("#error_"+elemid).html('Please enter a valid amount.');response = 'fail';break;                            
                        }
                  } else {
                    
                    //check pattern
                    var regex = new RegExp($el.data('patt'),'g');
                    var result = regex.test($el.val());

                    // if does not match the pattern
                    if ( result == false)
                    {
						switch (elemid) {
                            case "earn_per_month": $("#error_"+elemid).html('Numbers only');response = 'fail';break;
                            case "household_income": $("#error_"+elemid).html('Numbers only');response = 'fail';break;  
                            case "mortage_rent_payment": $("#error_"+elemid).html('Numbers only');response = 'fail';break;  
                            case "existing_loan": $("#error_"+elemid).html('Numbers only');response = 'fail';break;  
                            case "food_per_month": $("#error_"+elemid).html('Numbers only');response = 'fail';break;  
                            case "water_gas_bills": $("#error_"+elemid).html('Numbers only');response = 'fail';break;  
                            case "transport_per_month": $("#error_"+elemid).html('Numbers only');response = 'fail';break;                                     
							case "monthly_outgoings": $("#error_"+elemid).html('Numbers only');response = 'fail';break;                     
                        }
                          
					// if match the pattern
                    } else {

                    }
                  
					//console.log(response);
					return response;
              }
              }
          },
          errors: {
              'patt': "invalid"
                      
          }

        });
		
		
		// Compare home phone current and last value. Required due to field not being mandatory bypassing validitor code
		var element =  document.getElementById('home_phone');
		if (typeof(element) != 'undefined' && element != null)
		{
			function watchHomePhone() {
				var txtInput = $('#home_phone');
				var lastValue = txtInput.data('lastValue');
				var currentValue = txtInput.val();
				var homeId = document.getElementById("home_phone");
				if (lastValue != currentValue) {
				//console.log('Value changed from ' + lastValue + ' to ' + currentValue);
				txtInput.data('lastValue', currentValue);
					if (currentValue.length > 0) {	
						$('#home_phone').prop('required',true);
					} else {
						$('#home_phone').prop('required',false);
					}				
				} 
			}

			// Record the initial value of the textbox.
			$('#home_phone').data('lastValue', $('#home_phone').val());

			// Bind to the keypress and user-defined set event.
			$('#home_phone').bind('keypress set', null, watchHomePhone);
			
			// start 200ms check timer
			setInterval(watchHomePhone, 200);
		}
		
		
		// Compare Guarantor home phone current and last value. Required due to field not being mandatory bypassing validitor code
		var element =  document.getElementById('guarantor_home_phone');
		if (typeof(element) != 'undefined' && element != null)
		{
			function watchGuarantorHomePhone() {
				var txtInput = $('#guarantor_home_phone');
				var lastValue = txtInput.data('lastValue');
				var currentValue = txtInput.val();
				var homeId = document.getElementById("guarantor_home_phone");
				if (lastValue != currentValue) {
				//console.log('Value changed from ' + lastValue + ' to ' + currentValue);
				txtInput.data('lastValue', currentValue);
					if (currentValue.length > 0) {	
						$('#guarantor_home_phone').prop('required',true);
					} else {
						$('#guarantor_home_phone').prop('required',false);
					}				
				} 
			}

			// Record the initial value of the textbox.
			$('#guarantor_home_phone').data('lastValue', $('#guarantor_home_phone').val());

			// Bind to the keypress and user-defined set event.
			$('#guarantor_home_phone').bind('keypress set', null, watchGuarantorHomePhone);
			
			// start 200ms check timer
			setInterval(watchGuarantorHomePhone, 200);
		}
		
		// Watch postcode lookup field, trigger events being overidden by PCanywhere scripts, change needs revalidation
		var element =  document.getElementById('post_code');
		if (typeof(element) != 'undefined' && element != null)
		{
			function watchpostcode() {
				var txtInput = $('#post_code');
				var lastValue = txtInput.data('lastValue');
				var currentValue = txtInput.val();
				var homeId = document.getElementById("post_code");
				if (lastValue != currentValue) {
				//console.log('Value changed from ' + lastValue + ' to ' + currentValue);
				$('#post_code').val(currentValue).trigger('input')
				txtInput.data('lastValue', currentValue);
				} 
			}

			// Record the initial value of the textbox.
			$('#post_code').data('lastValue', $('#post_code').val());

			// Bind to the keypress and user-defined set event.
			$('#post_code').bind('keypress set', null, watchpostcode);
			
			// start 200ms check timer
			setInterval(watchpostcode, 200);
		}
		
		// Watch Guarantor postcode lookup field, trigger events being overidden by PCanywhere scripts, change needs revalidation
		var element =  document.getElementById('guarantor_post_code');
		if (typeof(element) != 'undefined' && element != null)
		{
			function watchpostcode() {
				var txtInput = $('#guarantor_post_code');
				var lastValue = txtInput.data('lastValue');
				var currentValue = txtInput.val();
				var homeId = document.getElementById("guarantor_post_code");
				if (lastValue != currentValue) {
				//console.log('Value changed from ' + lastValue + ' to ' + currentValue);
				$('#guarantor_post_code').val(currentValue).trigger('input')
				txtInput.data('lastValue', currentValue);
				} 
			}

			// Record the initial value of the textbox.
			$('#post_code').data('lastValue', $('#post_code').val());

			// Bind to the keypress and user-defined set event.
			$('#post_code').bind('keypress set', null, watchpostcode);
			
			// start 200ms check timer
			setInterval(watchpostcode, 200);
		}
		
		var element =  document.getElementById('b1-Less-than-3-years');
		if (typeof(element) != 'undefined' && element != null)
		{
			document.getElementById("b1-Less-than-3-years").onclick = function () { 
				var id = document.getElementById("old_post_code");
				id.setAttribute('data-patt','([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})');
				$('#old_house_number').prop('required',true);
				$('#old_post_code').prop('required',true);
				$('#step1').validator('update');
			};
				
			document.getElementById("b1-More-than-3-years").onclick = function () { 
				var id = document.getElementById("old_post_code");
				id.removeAttribute('data-patt');
				$("#old_house_number").closest("div").removeClass("has-error");
				$("#old_post_code").closest("div").removeClass("has-error");
				$('#old_house_number').prop('required',false);
				$('#old_post_code').prop('required',false);
				$('#step1').validator('update');
			};
		}
		
		// gmlupdate.php
        $("#time_at_address").change(function(e){
            if($("#time_at_address").val() == "Less than 3 years"){
                $("#previous_address_box").show();
				$('#old_house_number').prop('required',true);
				$('#old_post_code').prop('required',true);
				$('#step1').validator('update');
            }else{
                $("#previous_address_box").hide();
				$('#old_house_number').prop('required',false);
				$('#old_post_code').prop('required',false);
				$('#step1').validator('update');
            }
        })
		
        $("#loan_amount, #loan_term").change(function(e){
            showpay();
        });
		
		// remove initial page load glyphicon
		$("#loan_amount").next("span").removeClass("glyphicon-ok");
		
		// scroll to error
	    $('form').on('submit', function (e) {
			window.setTimeout(function () {
				var errors = $('.has-error')
				if (errors.length) {
					$('html, body').animate({ scrollTop: errors.offset().top }, 500);
				}
			}, 0);
		});
    });
    
function isValidPostcode(p) { 
    var postcodeRegEx = /^\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/ig;
						// /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
    return postcodeRegEx.test(p); 
}

function isValidPhone(p) { 
    var phoneRegEx = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    return phoneRegEx.test(p); 
}

function daycheck(day, month){
     if ( month == 2){
       if ( day > 28){
         $("#day").closest("div").addClass("has-error");
         $("#day").next("span").addClass("glyphicon-remove");
         $("#error_day").html('Numeric between 01 and 28');
       }
     } else if ((month == 4) || (month == 6) || (month == 9) || (month == 11)){
         if ( day > 30){
         $("#day").closest("div").addClass("has-error");
         $("#day").next("span").addClass("glyphicon-remove");
         $("#error_day").html('Numeric between 01 and 30');
       }
     } else {
		 $("#day").closest("div").removeClass("has-error");
         $("#day").next("span").removeClass("glyphicon-remove");
         $("#error_day").html('');
	 }
    }

function success(id){
     $("#"+id).closest("div").addClass("has-success");
     $("#"+id).next("span").addClass("glyphicon-ok");
   }

function yearcheck(day, month,year){
	var start = new Date(year+"-"+month+"-"+day),
	end   = new Date(),
	diff  = new Date(end - start),
	years  = diff/1000/60/60/24/365; 
	
	if (years < 18 ){
	  
	   $("#year").closest("div").addClass("has-error");
	   $("#year").next("span").addClass("glyphicon-remove");
	   $("#error_year").html('Your age must be 18+'); 
	   var result = false;
	   
	}  else {
	  
	 var result = true;
	 
   }
   
   return result;
}
    
function fnames_check(fname,sname,gfname,gsname){
  //console.log(fname + " - "+gfname); 
  
  if( gsname == sname){
    if ( fname == gfname){

      $("#error_guarantor_first_name").html('Guarantor name must be different from your name'); 
      var result = false;
    } else {
      $("#error_guarantor_sur_name").closest("div").removeClass("has-error");
      $("#error_guarantor_sur_name").closest("div").addClass("has-success");
      $("#guarantor_sur_name").next("span").removeClass("glyphicon-remove");
      $("#guarantor_sur_name").next("span").addClass("glyphicon-ok");
      $("#step_two_next").removeClass("disabled");      
      $("#error_guarantor_sur_name").html('');       
      var result = true;
    }
  } else{
    var result = true;
  }
  
  return result;
}   
  
function snames_check(fname,sname,gfname,gsname){
  //console.log(fname + " - "+gfname);  
  //console.log(sname + " - "+gsname);

  if ( fname == gfname){
    if( sname == gsname){
      
      $("#error_guarantor_sur_name").html('Guarantor name must be different from your name'); 
      var result = false;
    } else {
      $("#error_guarantor_first_name").closest("div").removeClass("has-error");
      $("#error_guarantor_first_name").closest("div").addClass("has-success");
      $("#guarantor_first_name").next("span").removeClass("glyphicon-remove");
      $("#guarantor_first_name").next("span").addClass("glyphicon-ok");
      $("#step_two_next").removeClass("disabled");      
      $("#error_guarantor_first_name").html(''); 
      var result = true;
    }
  } else{
    var result = true;
  }
  
  return result;
}     