//Comprueba si la "cookie" existe y redirecciona
$(document).ready(function() {

	$('#mess').hide();
	
	$.jStorage.remove('conectado');
	
	if($.jStorage.get("conectado"))
		alert('si entro el store')
		//window.location = "category.html?cat=titulares"//Redireccionamiento
	else
		$('html').removeClass('oculta');
});
//Respuesta json
function res(val){
	
	$('#mess').html(val.msg).fadeIn();
	
	if(val.status=="true"){
		//Diferencia de Fechas
		var d1 = val.msg.split("/");
		var dat1 = new Date(d1[2], parseFloat(d1[1])-1, parseFloat(d1[0]));
		var formattedDate = new Date();
		var act = formattedDate.getDate()+'/'+(formattedDate.getMonth()+1)+'/'+formattedDate.getFullYear();
		var d2 = act.split("/");
		var dat2 = new Date(d2[2], parseFloat(d2[1])-1, parseFloat(d2[0]));
		var fin = dat1.getTime() - dat2.getTime();
		var dias = Math.floor(fin / (1000 * 60 * 60 * 24))+1;
		//Creacion de "cookie"
		if(dias>0){
			if(dias==1)	alert('Su suscripción vence hoy, le recomendamos renovarla');
			var vence = dias*86400000;//Convertimos los dias a milisegundos
			var value = $.jStorage.get("conectado");
			if(!value){
				value = $('#user').val();
				$.jStorage.set("conectado",value);
				$.jStorage.setTTL("conectado", vence);
				window.location = "category.html?cat=titulares";//Redireccionamiento
			}
		}
		else alert('Lo siento tu suscripción venció el '+val.msg);
	}
}
function Envia(){
	$(document).ready(function() {
		$.ajax({
		  url : 'http://www.stratomedios.mx/ags/wp-content/themes/smktmedios/login.php',
		  dataType : 'jsonp',
		  data : {
			user: $('#user').val(),
			pass: $('#pass').val()
		  },
		}).done(function( html ) {
			console.log( html );
		  });
	});
}