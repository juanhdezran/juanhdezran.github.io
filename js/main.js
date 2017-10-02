$(init);

function init(){
	$.ajax({
		url: "https://bit.ly/2frt01N",
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Basi");
		},
		type: 'GET'
	});
}
