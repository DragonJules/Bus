window.addEventListener('load', function () {
	hoverColor("line-1","#ffe901","#fff481")
	hoverColor("line-2","#00aaeb","#57c2ec")
	hoverColor("line-3","#ef3d24","#db695a")
	hoverColor("line-4","#664d98","#8d73c0")
	hoverColor("line-5","#00a555","#58b487")
	hoverColor("line-6","#f47a21","#cc936a")
	hoverColor("line-arc-express","#005590","#2570a5")
	hoverColor("line-hm-navette","#a68253","#bea077")


});
window.addEventListener("resize", resizeMap)



function resizeMap (){
	map = document.getElementsByClassName("svg-content");
	map = map[0];
	var screen_w = window.innerWidth;
	var screen_h = window.innerHeight;
	if(screen_w>screen_h){
		// Horizontal screen
		map_w = screen_w
		map_h = map_w * (3290.42/3531.88)

		map.style.width = screen_w - 20
		map.style.heigth = screen_h - 20
		console.log("computer")
		console.log("width",map_w)
		console.log("height",map_h)
	}else 

	if (screen_w<screen_h){
		// Vertical screen
		map_h = screen_h
		map_w = map_h * (3531.88/3290.42)

		map.style.width = screen_w - 20
		map.style.heigth = screen_h - 20

		console.log("phone")
		console.log("width",map_w)
		console.log("height",map_h)

	}
}

function hoverColor(lineName,colorout,colorover){
	line = document.getElementById(lineName)

	line.addEventListener("mouseover", () => {
		elms = document.getElementsByClassName(lineName);
		for(var i=0;i<elms.length;i++){
			elms[i].style.fill = colorover 
		}
	})

	line.addEventListener("mouseout", () => {
		elms = document.getElementsByClassName(lineName);
		for(var i=0;i<elms.length;i++){
			elms[i].style.fill = colorout
		}
	})	
}