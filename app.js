'use strict';

(function(exports) {
	var Account = function() {
		
  };
	Account.prototype = {
			start(){
					
							$("#btnViewCost").click(function(){
								
								$.mobile.changePage ($("#view-cost"));
			
								$("#Cost-list").html("");
								for (var i=0; i<=localStorage.length-1; i++)  
								{  
									var key=localStorage.key(i);  
									var val = localStorage.getItem(key);
									var costElement = $("<div data-role='collapsible' data-mini='true'/>");
									var h3CostTitle = $("<h3/>").text(key);
									var pCostDetails = $("<p/>").text(val);
									costElement.append(h3CostTitle);
									costElement.append(pCostDetails);
									$("#Cost-list").append(costElement);
								} 
								$('div[data-role=collapsible]').collapsible({refresh:true});
							});


							//$("#btnSaveCost").click(function(){
							document.getElementById('btnSaveCost').addEventListener('click',(function(){
									var costTitle = $("#costTitle").val();
									var costDetails = $("#costDetails").val();
									localStorage.setItem(costTitle,costDetails);
									alert("Your cost has been saved");	
								  this.clean();
							}).bind(Account.prototype));
							$("#clearAllCostsBtn").click((function(){
								 localStorage.clear();
									this.cleanall();
								 alert("All Costs have got cleared");
							}).bind(Account.prototype));		
			},
			clean(){
				$("#costTitle").val("");
				$("#costDetails").val("");
				$("#costTitle").focus();
			},
			cleanall(){
				$("#Cost-list").html("");
			}
	};
	exports.Account = Account;
}) (window);

/*$(document).ready(function(){
	
		$("#btnViewCost").click(function(){

          $.mobile.changePage ($("#view-cost"));

		  $("#Cost-list").html("");
			for (i=0; i<=localStorage.length-1; i++)  
			{  
				key=localStorage.key(i);  
				val = localStorage.getItem(key);
				var costElement = $("<div data-role='collapsible' data-mini='true'/>");
				var h3CostTitle = $("<h3/>").text(key);
				var pCostDetails = $("<p/>").text(val);
				costElement.append(h3CostTitle);
				costElement.append(pCostDetails);
				$("#Cost-list").append(costElement);
			} 
			$('div[data-role=collapsible]').collapsible({refresh:true});
		});
		

		$("#btnSaveCost").click(function(){
		  costTitle = $("#costTitle").val();
		  costDetails = $("#costDetails").val();

		  if (window.localStorage) {
		      localStorage.setItem(costTitle,costDetails);
			  alert("Your cost has been saved");
		  }
			$("#costTitle").val("");
		  $("#costDetails").val("");
		  $("#costTitle").focus();

	    });
		$("#clearAllCostsBtn").click(function(){
		   localStorage.clear();
 		   $("#Cost-list").html("");
		   alert("All Costs have got cleared");
		});
		
});*/




