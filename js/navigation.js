$(document).ready(function(){

	$("#nav_uc1a").click(function() {
		// Navigation states
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(0) a").addClass('here');
		// Change DisplaydisplayUC
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc1a');
	});
	$("#nav_uc1b").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(1) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc1b');
	});
	$("#nav_uc1c").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(2) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc1c');
	});
	$("#nav_uc1d").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(3) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc1d');
	});
	$("#nav_uc2a").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(6) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc2a');
	});
	$("#nav_uc2b").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(7) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc2b');
	});
	$("#nav_uc2c").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(8) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc2c');
	});
	$("#nav_uc2d").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(9) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc2d');
	});
	$("#nav_uc0").click(function() {
		$(".useCaseList li a").removeClass();
		$(".useCaseList li:eq(16) a").addClass('here');
		$("#displayUC").removeClass();
		$("#displayUC").addClass('uc0');
	});
});