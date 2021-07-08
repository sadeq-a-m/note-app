let input=document.getElementById('input-field')
let btnSave=document.getElementById('btn-save')
let listed=document.getElementById('listed')
let bgcolor=document.querySelectorAll('.color-box')
let btnDelete=document.getElementById('btn-delete')


btnSave.onclick=()=>{
	let txt=input.value
	if(txt==''){
		alert('لطفا در داخل کادر متنی اضافه کنید')
		return false
	}else{
		let color=input.style.backgroundColor
		
		let createEl=document.createElement('div')
		createEl.setAttribute('class','card shadow-sm rounded')
		createEl.style.backgroundColor=color
		
		let textEl=document.createElement('p')
		textEl.setAttribute('class','card-text p-3')
		textEl.setAttribute('onclick','removeElement(event)')
		textEl.innerHTML=txt
		
		createEl.appendChild(textEl)
		listed.appendChild(createEl)
		btnDelete.onclick()
	}
}

bgcolor.forEach(item =>{
	item.addEventListener('click',()=>{
		input.style.backgroundColor=item.style.backgroundColor
	})
})

btnDelete.onclick = ()=>{
	input.value=''
	input.style.backgroundColor='#fff'
}

input.addEventListener('keyup',(event)=>{
	if(event.keyCode==13){
		btnSave.onclick()
	}
})

function removeElement(event){
	let main=event.target.parentNode
	main.remove()
}

