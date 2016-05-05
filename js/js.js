$( document ).ready(function() {

var open_close = true;
$('#collapse_display').click(function(){
	if(open_close) {
		$('#navbarCollapse').css({
			'width':'280px'
		});
		open_close = false;
		return;
	}
	if(!open_close) {
		$('#navbarCollapse').css({
			'width':'100%'
		});
		open_close = true;
		return;
	}
});

$('#navbarCollapse_2 > ul').addClass('navigation_2_ul');
$('#navbarCollapse_2 > ul > li').addClass('navigation_2_li');
var open_close_2 = true;
$('#collapse_display_2').click(function(){
	if(open_close_2) {
		$('#navbarCollapse_2 > ul').removeClass('navigation_2_ul');
		$('#navbarCollapse_2 > ul > li').removeClass('navigation_2_li');
		open_close_2 = false;
		return;
	}
	if(!open_close_2) {
		$('#navbarCollapse_2 > ul').addClass('navigation_2_ul');
		$('#navbarCollapse_2 > ul > li').addClass('navigation_2_li');
		open_close_2 = true;
		return;
	}
});


function f1() {
	$("div.place_for_logo").css({
		'background':'transparent url(img/little_logo.png) 0 0 no-repeat',
		'height':'42px',
		'marginTop':'16px'
	})
	$("input.search_place").css({
		'marginRight':'0px'
	})
}

if ($(window).width() <= '745'){
	f1();
}

var check = false;
$(window).resize(function() {
	if ($(window).width() <= '745') {
		if(!check) {
			f1();
			check = true;
		}
	}
	if ($(window).width() > '745') {
		if(check) {
			$("div.place_for_logo").css({
				'background':'transparent url(img/logo.png) 0 0 no-repeat',
				'height':'72px',
				'marginTop':'0px'
			})
			$("input.search_place").css({
				'marginRight':'6px'
			})
			check = false;	
		}
	}
});

$(function(){
    $("#container_for_popup_1").load("include/popup1.html"); 
    $("#container_for_popup_2").load("include/popup2.html"); 
    $("#container_for_popup_3").load("include/popup3.html"); 
    $("#container_for_popup_4").load("include/popup4.html"); 
});

function f2() {
	setInterval(function () {
	if ($(window).width() <= '530') {
		$('.first_cont').css({
			'display':'none'
		});
		$('.appear_sub').css({
			'display':'block'
		});
	}
	if ($(window).width() > '530') {
		$('.first_cont').css({
			'display':'block'
		});
		$('.appear_sub').css({
			'display':'none'
		});
	}
	}, 500)
}

f2();

$(window).resize(function() {
	f2();
});


});