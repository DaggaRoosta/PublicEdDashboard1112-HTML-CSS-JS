// Load splash image
    
		function loadImage()
		{
			var splash = [
				"http://www.lmci.state.tx.us/images/Montage.gif",
				"http://www.lmci.state.tx.us/images/Montage2.gif",
				"http://www.lmci.state.tx.us/images/Montage3.gif",
				"http://www.lmci.state.tx.us/images/Montage4.gif"		
			];
			
			var size = splash.length;
			var x = Math.floor(size*Math.random());
			document.getElementById('splashImg').src=splash[x];
			
		}