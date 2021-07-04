const conf = document.querySelector('#confirmed')
const recovered = document.querySelector('#recovered')
const deaths = document.querySelector('#deaths')



function shortNum(str){
	// ribuan
	if (str.length >= 3 && str.length <= 5) return str.replace( /\d{3}$/ , ' ribu')
	// jutaan
	else if(str.length >= 6 && str.length <= 9) return str.replace( /\d{6}$/ ,`,${str[1]} juta`)
}

function showText(element, text){
	return element.innerText = text
}


// Using fetch API
fetch('https://covid19.mathdro.id/api/countries/Indonesia/deaths')
.then(res => res.json())
.then(response => {
			showText(conf, shortNum(response[0].confirmed.toString()))
			showText(recovered, shortNum(response[0].recovered.toString()))
			showText(deaths, shortNum(response[0].deaths.toString()))

			confirmed.setAttribute('data-tooltip-text', `${response[0].confirmed.toLocaleString()}`)
			recovered.setAttribute('data-tooltip-text', `${response[0].recovered.toLocaleString()}`)
			deaths.setAttribute('data-tooltip-text', `${response[0].deaths.toLocaleString()}`)
})
.catch(error => alert("Terjadi kesalahan silahkan refresh kembali"))


// Using XHR
 
// window.addEventListener('load', () => {
// const ajax = new XMLHttpRequest();
// ajax.onreadystatechange = function() {
// 	if (ajax.readyState == 4 && ajax.status == 200) {
// 		let response = JSON.parse(ajax.responseText);
// 		showText(conf, shortNum(response[0].confirmed.toString()))
// 		showText(recovered, shortNum(response[0].recovered.toString()))
// 		showText(deaths, shortNum(response[0].deaths.toString()))
// 		confirmed.setAttribute('data-tooltip-text', `${response[0].confirmed.toLocaleString()}`)
// 		recovered.setAttribute('data-tooltip-text', `${response[0].recovered.toLocaleString()}`)
// 		deaths.setAttribute('data-tooltip-text', `${response[0].deaths.toLocaleString()}`)
// 	}
// };
// ajax.open('get', `https://covid19.mathdro.id/api/countries/Indonesia/deaths`, true);
// ajax.send();
// }) 

