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
		else if (dynamicContent == 'ampa') {
			$('#ampa').show();
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
		else if (dynamicContent == 'boundless') {
			$('#boundless').show();
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
		else if (dynamicContent == 'entertain') {
			$('#entertain').show();
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
		else if (dynamicContent == 'served') {
			$('#served').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hoho') {
			$('#hoho').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'emergence') {
			$('#emergence').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'explosive') {
			$('#explosive').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'moderna') {
			$('#moderna').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'piai') {
			$('#piai').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mati') {
			$('#mati').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'otter') {
			$('#otter').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'yadu') {
			$('#yadu').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'warden') {
			$('#warden').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'skit') {
			$('#skit').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'flout') {
			$('#flout').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fess') {
			$('#fess').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'magnitude') {
			$('#magnitude').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'imperative') {
			$('#imperative').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'minion') {
			$('#minion').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'premise') {
			$('#premise').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'heres') {
			$('#heres').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'immense') {
			$('#immense').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'because') {
			$('#because').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'slew') {
			$('#slew').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'stab') {
			$('#stab').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'waft') {
			$('#waft').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bosses') {
			$('#bosses').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'accordion') {
			$('#accordion').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'stallion') {
			$('#stallion').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'arti') {
			$('#arti').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'dire') {
			$('#dire').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'liable') {
			$('#liable').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'shovel') {
			$('#shovel').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'levitate') {
			$('#levitate').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'canny') {
			$('#canny').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sleeve') {
			$('#sleeve').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fists') {
			$('#fists').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'todays') {
			$('#todays').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'rhyme') {
			$('#rhyme').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'prey') {
			$('#prey').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'flaming') {
			$('#flaming').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'dede') {
			$('#dede').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mire') {
			$('#mire').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'jawa') {
			$('#jawa').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bubu') {
			$('#bubu').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bout') {
			$('#bout').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'amulet') {
			$('#amulet').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'prig') {
			$('#prig').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'joos') {
			$('#joos').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mink') {
			$('#mink').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'collar') {
			$('#collar').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'momentous') {
			$('#momentous').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tenne') {
			$('#tenne').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'opaque') {
			$('#opaque').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'inni') {
			$('#inni').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sash') {
			$('#sash').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'igne') {
			$('#igne').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'adjective') {
			$('#adjective').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'trai') {
			$('#trai').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'gravitate') {
			$('#gravitate').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'politic') {
			$('#politic').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'whitestar') {
			$('#whitestar').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'dinghy') {
			$('#dinghy').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'personage') {
			$('#personage').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'g-spot') {
			$('#g-spot').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pyramid') {
			$('#pyramid').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'vale') {
			$('#vale').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'lynx') {
			$('#lynx').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bibliotheca') {
			$('#bibliotheca').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'between') {
			$('#between').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sulphur') {
			$('#sulphur').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'punto') {
			$('#punto').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'crzy') {
			$('#crzy').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('#default-content').show();
		}
	});
