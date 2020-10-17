function validasiForm(input) {
	// jika inputan belum diisi
	if(input.value == ''){
		input.classList.add('invalid')
		input.setAttribute('placeholder', 'Inputan ini wajib diisi')
	
	}else{
		input.classList.remove('invalid')
	}

	if(input.getAttribute('type') == 'email'){

		const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
		// jika email tidak sesuai
		if(!input.value.match(emailCheck)){
			input.classList.add('invalid')
			input.setAttribute('placeholder', 'Masukkan email anda dengan benar')
		}
		else{
			input.classList.remove('invalid')
		}

	}

}

// form di page konsultasi
const nama = document.querySelector('#nama')
const email = document.querySelector('#email')
const noHp = document.querySelector('#no-hp')
const umur = document.querySelector('#umur')
const pertanyaan = document.querySelector('#pertanyaan')

const inputs = document.querySelectorAll('main#konsultasi .container form input, main#konsultasi .container form textarea')



inputs.forEach( function(el) {
	el.addEventListener('input', () => {	
		validasiForm(el)

	

	})
});




const formKonsultasi = document.querySelector('#form-konsultasi')

formKonsultasi.addEventListener('submit', (e) => {
	e.preventDefault()
	

	if (nama.value == '' || email.value == '' || noHp.value == '' || umur.value == '' || pertanyaan.value == '' ) {
		alert('Harap isi semua inputan yang tersedia')
		return false
	}else{
		alert('Terimakasih, kami akan segera membalas pesan anda')
	}



})