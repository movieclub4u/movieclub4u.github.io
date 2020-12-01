$(document).ready(function () {
	$win = $(window);
	$bars = $('.fa-bars');
	$times = $('.fa-times');
	$sidebar = $('#sidebar-slider .col-md-2');

	$bars.click(function (){
		$times.show();
        $sidebar.show();
		$bars.hide();
	})
	$times.click(function () {
		$times.hide();
		$sidebar.hide();
		$bars.show();
	})
	$win.resize(function (){
		if($win.width() <= 768){
			$times.hide();
			$sidebar.hide();
			$bars.show();
		}else{
			$times.hide();
			$sidebar.show();
	        $bars.hide();
		}
	})
	
})
