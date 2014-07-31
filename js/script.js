$(document).ready(function() {

	//ширина для слайдера
	var countSlide = $('.sliderWrap > .slide').size();
	var sliderWrapWidth = countSlide * 500;
	$("div.sliderWrap").css("width",sliderWrapWidth);
	
	$("div.sliderWrap").css("right", "0");
	$("button.sliderPrev").hide();	
	
	$("button.sliderPrev").click(function() {
		//event.preventDefault();
		$(".sliderWrap").animate({right: "-=499"},100).animate({right: "+=40"},70);
		setTimeout(function() { toggleButton(); }, 200);
	});

	$("button.sliderNext").click(function() {
		//event.preventDefault();
		$(".sliderWrap").animate({right: "+=499"},100).animate({right: "-=40"},70);
		setTimeout(function() { toggleButton(); }, 200);
	});
	
	function toggleButton() {
		var countSlide = $('.sliderWrap > .slide').size();
		console.log(countSlide);
		var sliderRightPos = $("div.sliderWrap").css("right");
		console.log(sliderRightPos);
		//скрыть левую если начало	
		if( sliderRightPos != "0px" ){
			console.log("T Prev");
			$("button.sliderPrev").show();
		}else{
			console.log("F Prev");
			$("button.sliderPrev").hide();
		}
		
		//скрыть правую если конец
		var countSlideMax = countSlide - 1;
		console.log(countSlideMax);
		var sliderRightPosMax = countSlideMax * 459;
		console.log(sliderRightPosMax);
		if( sliderRightPos != sliderRightPosMax + "px" ){
			console.log("T Next");
			$("button.sliderNext").show();
		}else{
			console.log("F Next");
			$("button.sliderNext").hide();
		}	
	}
	
});








