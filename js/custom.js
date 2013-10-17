var scrollContent,
	scrollNav;

function loaded() {
	//scrollContent = new iScroll('contentWrapper', { scrollbarClass: 'myScrollbar' });
	scrollNav = new iScroll('navWrapper', { scrollbarClass: 'myScrollbar' });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
};


$(document).ready(function() {
	
	$('#inout').click(function() {
		$('#menu').toggleClass('onm');		
		$('#content').toggleClass('onp');
	});
	  	
	$(document).ready(function(){
    	$('#back').click(function(){
        	parent.history.back();
        	return false;
    	});
	});
  	//Helpers Handlebar
  	
});