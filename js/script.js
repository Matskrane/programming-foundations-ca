
var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: 28.3,
	},
	{
		name: "Barbie",
		price: 0,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

document.querySelector(".total")

Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

console.log(toys.sum("price"))



// question 6

var buttonTitle = document.querySelector(".page");
var h1 = document.querySelector('h1')
var anchor = document.createElement('a')


function changeTitle() {
    document.title = "Updated title";
    document.body.style.backgroundColor = "yellow";
    document.querySelector('h1').style.color = "green";
    document.querySelector('h1').style.fontFamily = "Impact";
    h1.innerHTML = anchor;
    anchor.innerHTML = "Programming Foundations Course Assignment";
    anchor.href="www.google.com";
    h1.appendChild(anchor);
    document.querySelector('a').style.textDecoration = "none";
    document.querySelector('a').style.padding = "0";
   
    
    document.querySelector('.games').style.textDecoration = "none";
    document.querySelector('.games').style.padding = "0";
}

buttonTitle.onclick = changeTitle;