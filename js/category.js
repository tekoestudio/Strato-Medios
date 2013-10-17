$(document).ready(function() {
	
	//Llamadas de JSON para la APP
	var cat = GetURLParameter('cat');
	
	$.ajax({
    
    	
    	url: 'http://www.stratomedios.mx/ags/api/korkmaz/get_taxonomy_posts/?taxonomy=temas&slug='+cat,
    	type: 'GET',
    	dataType: 'jsonp',
    	success: function(data){
    		console.log(data);
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
		
			console.log(template(context));
    		$('#datos').html(template(context));
    		
    		setTimeout( function(){
        		scrollNav.refresh() ;
        		scrollContent.refresh();
        	} , 100 ) ;
    				
    	},
    	
    	error: function(data){
      		console.log(data);
    	}
  	
  	});
  	
  	//Helpers Handlebar
  	
});