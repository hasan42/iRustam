$(document).ready(function() {

	//������ ��� ��������
	var countSlide = $('.sliderWrap > .slide').size();
	var sliderWrapWidth = countSlide * 500;
	$("div.sliderWrap").css("width",sliderWrapWidth);
	
	//��������� �������� � ��������� prev
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
	
	setInterval( function() {
		$("div#handR").stop(true,true).animate({width: "-=10px"},500, function() {
			$(this).animate({width: "+=10px"},500);
		})
	} , 1000);
	
	setInterval( function() {
		$("div#armR").stop(true,true).animate({left: "-=10px"},500, function() {
			$(this).animate({left: "+=10px"},500);
		})
	} , 1000);
	
	
		
	
	//������ ��������� ������
	function toggleButton() {
		var countSlide = $('.sliderWrap > .slide').size();
		var sliderRightPos = $("div.sliderWrap").css("right");
		//������ ����� ���� ������
		if( sliderRightPos != "0px" ){
			$("button.sliderPrev").show();
		}else{
			$("button.sliderPrev").hide();
		}
		
		//������ ������ ���� �����
		var sliderRightPosMax = (countSlide - 1) * 459;
		if( sliderRightPos != sliderRightPosMax + "px" ){
			$("button.sliderNext").show();
		}else{
			$("button.sliderNext").hide();
		}	
	}
	
});








