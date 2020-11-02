	// Parse the URL parameter
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	// Give the parameter a variable name
	var dynamicContent = getParameterByName('dn');
 
	 $(document).ready(function() {
 
		// Check if the URL parameter matches
		if (dynamicContent == 'acumen') {
			$('#acumen').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'snuff') {
			$('#snuff').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'anoint') {
			$('#anoint').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'touches') {
			$('#touches').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'treads') {
			$('#treads').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'irks') {
			$('#irks').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'homeward') {
			$('#homeward').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'well-being') {
			$('#well-being').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'g-o') {
			$('#g-o').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tinsel') {
			$('#tinsel').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hiatus') {
			$('#hiatus').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'radical') {
			$('#radical').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'epk') {
			$('#epk').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'redivider') {
			$('#redivider').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'chose') {
			$('#chose').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'somme') {
			$('#somme').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'primum') {
			$('#primum').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'wayfarer') {
			$('#wayfarer').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cinder') {
			$('#cinder').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'huron') {
			$('#huron').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'kinship') {
			$('#kinship').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pwrx') {
			$('#pwrx').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'virtua') {
			$('#virtua').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sexe') {
			$('#sexe').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'ods') {
			$('#ods').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hits') {
			$('#hits').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'wwb') {
			$('#wwb').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'ruckus') {
			$('#ruckus').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pes') {
			$('#pes').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'quiero') {
			$('#quiero').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cleric') {
			$('#cleric').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'akka') {
			$('#akka').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'oze') {
			$('#oze').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'shp') {
			$('#shp').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hoho') {
			$('#hoho').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == '9x') {
			$('#9x').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('#default-content').show();
		}
	});
