(function(argument) {

	uiHandler = {};

	$("#leftPanelToggleButton").click(function(ev){
		toggleLeftPanel();
	});



	function toggleLeftPanel(){
		if(global.leftPanelStatus==1){ // left panel open
	    	$("#leftPanel").animate({width:'toggle'},350);
				$("#slidingPanelIcon").removeClass('fa-caret-left');
				$("#slidingPanelIcon").addClass('fa-caret-right');
			global.leftPanelStatus = 0;
		}else{ // left panel closed
	    	$("#leftPanel").animate({width:'toggle'},350);
				$("#slidingPanelIcon").removeClass('fa-caret-right');
				$("#slidingPanelIcon").addClass('fa-caret-left');
			global.leftPanelStatus = 1;
		}
		resizeMainContainer();
	}


	function resizeMainContainer(){
		$("#mainContainer").removeClass();
		if(global.rightPanelStatus==1 && global.leftPanelStatus==1){
			$("#mainContainer").addClass('col-md-8');
		}else if(global.rightPanelStatus==0 && global.leftPanelStatus==0){
			$("#mainContainer").addClass('col-md-12');
		}else if(global.rightPanelStatus==0 && global.leftPanelStatus==1){
			$("#mainContainer").addClass('col-md-10');
		}else if(global.rightPanelStatus==1 && global.leftPanelStatus==0){
			$("#mainContainer").addClass('col-md-10');
		}
	}

})()
