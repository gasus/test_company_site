window.onload = function(){

	let timer;
	let scrolled = 0;

	menu.onclick = function menuOn(){
		let x = document.getElementById('myTopNav');

		if(x.className === "topnav"){
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

	let a = document.getElementById('showMenu').getElementsByTagName('a');
	for (let i = 0; i < a.length; i++) {
		let elem = a[i];

		elem.onclick = function(){
			let x = document.getElementById('myTopNav');
			x.className = "topnav";

			let scrollElem = document.getElementById(this.dataset.toscroll);
			let PosY = scrollElem.offsetTop;

			scrollToBlock();

			function scrollToBlock(){
				if (scrolled < PosY) {
					scrolled += 100;
					window.scrollTo(0,scrolled);
					timer = setTimeout(scrollToBlock,25);
				} else {
					clearTimeout(timer);
					scrolled = 0;
					window.scrollTo(0,PosY);
				}
			}
		}	
	}
}
