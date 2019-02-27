window.onload = function(){
	var title = document.getElementById("title");
	var title_text = document.getElementById("title_text");
	title_text.onclick = function(){
		location.href = "/"
	}
	if (window.screen.width<=600){
		setInterval(()=>{ 
			var r = Math.floor(Math.random()*255);
			var b = Math.floor(Math.random()*255);
			var g = Math.floor(Math.random()*255);
			console.log(r.toString(16)+b.toString(16)+g.toString(16));
			title_text.setAttribute("style","color:#"+r.toString(16)+b.toString(16)+g.toString(16));
		}, 2000);
	}else{
		title.onmouseover = function(e){
			console.log("hello")
			var r = Math.floor(Math.random()*255);
			var b = Math.floor(Math.random()*255);
			var g = Math.floor(Math.random()*255);
			console.log(r.toString(16)+b.toString(16)+g.toString(16));
			title_text.setAttribute("style","color:#"+r.toString(16)+b.toString(16)+g.toString(16));
		}
		title.onmouseout = function(e){
			title_text.setAttribute("style","color:#606060");
		}
	}
}


