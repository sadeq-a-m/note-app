let input=document.getElementById('input-field')
let btnSave=document.getElementById('btn-save')
let listed=document.getElementById('listed')
let bgcolor=document.querySelectorAll('.color-box')
let btnDelete=document.getElementById('btn-delete')

bgcolor.forEach(item =>{
	item.addEventListener('click',()=>{
		input.style.backgroundColor=item.style.backgroundColor
	})
})

btnSave.addEventListener('click',()=>{
	let txt=input.value
	if(txt==""){
		alert('لطفا در داخل باکس متنی قرار دهید');
		return false;
	}else{
		let color=input.style.backgroundColor
		
		let createEl=document.createElement('div')
		createEl.setAttribute('class', 'card shadow-sm rounded')
		createEl.style.backgroundColor=color
		
		let txtEl=document.createElement('p')
		txtEl.setAttribute('class', 'card-text p-3')
		txtEl.innerHTML = txt
		createEl.appendChild(txtEl)
		
		listed.appendChild(createEl)
	}
})
