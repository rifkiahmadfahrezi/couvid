const pilihNominal = document.querySelectorAll('.item-nominal')
const cardNominal = document.querySelectorAll('.pilih-nominal .card')
const inputNominal = document.querySelectorAll('.item-nominal input[type=radio]')
const nextButton = document.querySelector('#next')




function getPilihan(target,index){
	for(let i = 0; i < target.length; i++){
		if (index == i) {
			target[i].classList.add('terpilih')

		}
		
		else if(!target[i].classList.contains('terpilih')){
			target[i].style.display = 'none'
		}
	}
}

let nominalValue = ''
// mengambil nominal
pilihNominal.forEach((pilihan,index) => {
	pilihan.addEventListener('click', function(){
		// set attribute berdasrkan yg diklik
		this.setAttribute('data-pilihan', 'true')


		// jika nominal yang dipilih sudah ada, maka berikan tanda dan hilangkan elemen lainnya
		if (this.getAttribute('data-pilihan') == 'true') {
			getPilihan(cardNominal,index)

			nominalValue = this.value
		} 
	})
})

// pilih metode bayar 
const pilihMetode = document.querySelectorAll('.item-bayar')
const cardMetode = document.querySelectorAll('.metode-bayar .card')


let metodeBayar = ''

pilihMetode.forEach((pilihan,index) =>  {
	pilihan.addEventListener('click', function () {
		// set attribute berdasrkan yg diklik
		this.setAttribute('data-pilihan', 'true')


		// jika Metode pembayaran yang dipilih sudah ada, maka berikan tanda dan hilangkan elemen lainnya
		if (this.getAttribute('data-pilihan') == 'true') {
			getPilihan(cardMetode,index)

			metodeBayar = this.value
			console.log(metodeBayar)
		} 
	})
})

const checkbox = document.querySelector('#check')
const nama = document.querySelector('#nama')
const pesan = document.querySelector('#pesan')

const formDonasi = document.querySelector('#form-donasi')

function random(panjang) {
	let hasil =''

	const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

	for (let i = 0; i < panjang; i++){
		hasil += karakter.charAt(Math.ceil(Math.random() * karakter.length))
	}

	return hasil
}


formDonasi.addEventListener('submit', (e) => {
	e.preventDefault()


	const data = {
		nominal: nominalValue,
		metode: metodeBayar,
	 	nama: nama.value,
	 	pesan: pesan.value
	}


	if (data.nominal == '') {
		alert('Harap pilih nominal yang disediakan')

	}else if (data.metode == '') {
		alert('Harap pilih metode pembayaran yang disediakan')

	}else if(data.nama == ''){
		data.nama = 'anonim'

	}else if(data.pesan == ''){
		data.pesan = 'tidak ada pesan'

	}	
 

	if (data.nominal != '' && data.metode != '') {
	document.body.innerHTML += `
		<div class="modal-container">
			<div class="modal-box">
				<div class="text">
					<p>Nama</p>
	 				<h4>${data.nama}</h4>
				</div>

				<div class="text">
					<p>Pesan</p>
	 				<h4>${data.pesan}</h4>
				</div>

				<div class="info">
					<div class="text">
						<p>ID-donasi</p>
						<h4>${random(10)}</h4>
					</div>

				<img src="assets/images/logo-${data.metode}.png" alt="${data.metode}">
				</div>

				<div class="text">
					<p>Kode pembayaran</p>
					<h1 align="center">${random(14)}</h1>
				</div>
 				<div class="text">
 					<p align="center">Berikan kode ini kepada kasir ${data.metode} sebelum kodenya kadaluarsa</p>
 				</div>
			</div>
		</div>`

	}
})

