let myImage = document.querySelector('img')

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/面包.png'){
		myImage.setAttribute('src','images/棒冰.png')
	} else{
		myImage.setAttribute('src','images/面包.png')
	}
}

let myHeading = document.querySelector('h1')
let myButton = document.querySelector('button')

function setUsername(){
	let myName = prompt('请输入你的名字')
	if(!myName || myName === null){
		setUsername()
	}else{
		localStorage.setItem('name',myName)
		myHeading.textContent = "世界奇妙食物," + myName
	}
}
if(!localStorage.getItem('name')) {
	console.log(1)
	setUsername()
} else{
	let storageName = localStorage.getItem('name')
	myHeading.textContent = "世界奇妙食物," + storageName
}

myButton.onclick = function(){
	setUsername()
}