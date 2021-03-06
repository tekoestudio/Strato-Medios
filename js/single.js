$(document).ready(function() {

	var id = GetURLParameter('id');
	
	$.ajax({
    
    	url: 'http://www.stratomedios.mx/ags/api/get_post/?post_type=sm_medios&post_id='+id,
    	type: 'GET',
    	dataType: 'jsonp',
    	success: function(data){
    		//console.log(data.post);
    		var source = $("#datobox").html();
    		var template = Handlebars.compile(source);
    		var context = data;
    		
    		//spinner
    		$('#spincen').hide();
    		
    		
    		
			Handlebars.registerHelper('category', function(context, options) {
  				
  				switch(this.slug)
					{
					case 'alcalde':
  						return "blue";
 					break;
 					case 'cabildo':
  						return "aqua";
 					break;
 					case 'gobernador':
  						return "pink";
 					break;
					case 'camaras-empresariales':
  						return "green";
 					break;
 					case 'columnas-editoriales':
  						return "yellow";
 					break;
 					case 'delegaciones':
  						return "red";
 					break;
					default:
  						return "blue";
					}
			});
		
			//console.log(template(context));
    		$('#datos').html(template(context));
    		
    		setTimeout( function(){
        		scrollNav.refresh() ;
        		scrollContent.refresh();
        	} , 100 ) ;
        	
        var catti = $('.cattit').attr('rel');
				$('#titcatsin').html(catti);
				$('#header').addClass(catti);
    				
    	},
    	
    	error: function(data){
      		//console.log(data);
    	}
  	
  	});
  	
  	//Helpers Handlebar
  	
});