const conf = document.querySelector('#confirmed')
const recovered = document.querySelector('#recovered')
const deaths = document.querySelector('#deaths')



function shortNum(str){
	// ribuan
	if (str.length >= 3 && str.length <= 6) {
		return str.replace( /\d{3}$/ , ' ribu')
	}
	// jutaan
	else if (str.length >= 7 && str.length <= 9) {
		return str.replace( /\d{6}$/ ,`,${str[1]} juta`)
	}
}

function showText(element, text){
	return element.innerText = text
}

async function getVictims(){
	const response = await fetch('https://covid19.mathdro.id/api/countries/Indonesia/deaths')
	if (response.status == 200) {
		return await response.json()
	}else{
		alert("Terjadi kesalahan saat load data")
	}
}

getVictims()
.then(victim => {
	showText(conf, shortNum(victim[0].confirmed.toString()))
	if ( victim[0].recovered == null || recovered.innerText == 0) {
		recovered.parentElement.style.display = 'none'
	}else{
		showText(recovered, victim[0].confirmed.toString())
		recovered.setAttribute('data-tooltip-text',victim[0].confirmed.toLocaleString())
	}
	showText(deaths, shortNum(victim[0].deaths.toString()))

	// set pop up text attributes
	conf.setAttribute('data-tooltip-text',victim[0].confirmed.toLocaleString())
	deaths.setAttribute('data-tooltip-text',victim[0].deaths.toLocaleString())
})
