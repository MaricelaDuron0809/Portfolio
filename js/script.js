console.log('Its working')



let themeDots = document.getElementsByClassName('theme-dot')


for (let i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href ='css/style.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href ='css/dark.css'
	}
	
	if(mode == 'colors'){
		document.getElementById('theme-style').href ='css/colors.css'
	}
	

	localStorage.setItem('theme', mode)
}

