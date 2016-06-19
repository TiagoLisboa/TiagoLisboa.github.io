//<cursor blinking>
	var timer = setInterval("t()", 500);
	function t(){
		if ($('#terminal span.terminal-white:last-child').text().substring($('#terminal span.terminal-white:last-child').text().length-1, $('#terminal span.terminal-white:last-child').text().length)!="_") {
			$('#terminal span.terminal-white:last-child').append('_');
		}else{
			$('#terminal span.terminal-white:last-child').text($('#terminal span.terminal-white:last-child').text().slice(0, -1));
		}
	}
//</cursor blinking>

	$("body").keypress(function(event) {
		var key = String.fromCharCode(event.keyCode);
		var text = $('#terminal span.terminal-white:last-child').text();
		text += key;
		$('#terminal span.terminal-white:last-child').html(text);
	});

	$("body").keydown(function(event) {
		if ($('#terminal span.terminal-white:last-child').text().substring($('#terminal span.terminal-white:last-child').text().length-1, $('#terminal span.terminal-white:last-child').text().length)=="_") {
			$('#terminal span.terminal-white:last-child').text($('#terminal span.terminal-white:last-child').text().slice(0, -1));
		}
		if (event.keyCode == 8){													//checar backspace
			event.preventDefault();
			var text = $('#terminal span.terminal-white:last-child').text();
			text = text.slice(0, -1)
			$('#terminal span.terminal-white:last-child').html(text);
		}else if (event.keyCode == 13) { 											//checar enter
			var text = $('#terminal span.terminal-white:last-child').text();
			
			if (text.indexOf("help")<2 && text.indexOf("help")>-1) { 				//checar comando "help"
				$("#terminal").append("<br><span class='terminal-blue'>about - </span><span class='terminal-white'>for info about me</span><br>");
				$("#terminal").append("<span class='terminal-blue'>projects - </span><span class='terminal-white'>for info about my projects</span><br>");
				$("#terminal").append("<span class='terminal-blue'>homepage - </span><span class='terminal-white'>exit this terminal and go to my homepage</span>");	
			}else{
				$("#terminal").append("<br><span class='terminal-red'>command not found</span>");	
			}

			$("#terminal").append('<br><span class="terminal-green">viewer@outsider:~$ </span> <span class="terminal-white"></span>');
		}
	});