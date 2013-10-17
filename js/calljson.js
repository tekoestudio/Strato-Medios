$(document).ready(function() {
	
	//Llamadas de JSON para la APP
	
	$.ajax({
    
    	url: 'http://www.stratomedios.mx/ags/api/get_posts/?post_type=sm_medios',
    	type: 'GET',
    	dataType: 'jsonp',
    	success: function(data){
    		//console.log(data.posts);
    		var source = $("#datobox").html();
    		var template = Handlebars.compile(source);
    		var context = data;
    		
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
    		
    		
    				
    	},
    	
    	error: function(data){
      		//console.log(data);
    	}
  	
  	});
  	
  	//Helpers Handlebar
  	
});