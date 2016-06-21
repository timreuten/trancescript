(function(window){
	function define_library(){
        var Trance = {};
        var artistList = [
			"Armin van Buuren",
			"Rank 1",
			"C-Quence",
			"Jorn van Deynhoven",
			"Ben Gold",
			"Gaia",
			"System F"
		];
		
		var armin = [
			["Shivers", "https://www.beatport.com/release/shivers/588"],
			["Intense", "https://www.beatport.com/release/intense-extended-versions/1078202"],
			["Embrace", "https://www.beatport.com/release/embrace-extended-versions/1638477"]
		];
		
		Trance.artist = function(artist){
			var query = artist.toLowerCase();
			var indexArtist = -1;
			var requestedArtist;
			artistList.some(function(element, i) {
			    if (query === element.toLowerCase()) {
			        indexArtist = i;
			        return true;
			    }
			});
			console.log(indexArtist);
			if (indexArtist >= 0){
				requestedArtist = artistList[indexArtist];
				alert(requestedArtist);
			} else {
				console.log('nope, zit er nie in');
			}
			
			switch(requestedArtist){
				case "Armin van Buuren":
					var newElement = document.createElement('div');
					newElement.id = 'armin-van-buuren';
					document.body.appendChild(newElement);
					newElement.innerHTML += '<h1>'+requestedArtist+'</h1>';
					for (i = 0; i < armin.length; i++){
						
						newElement.innerHTML += '<p><a href="'+armin[i][1]+'">'+armin[i][0]+'</a></p>';
						
					}
					document.getElementById(newElement.id).innerHTML = newElement.innerHTML;
					break;
				default:
					console.log("Not implemented");
			}	
			
		}
		
        return Trance;
    }
    
    if(typeof(Trance) === 'undefined'){
        window.Trance = define_library();
    } else {
	    console.log("Trance already defined.");
    }
})(window);
