/*const contentWheel = document.querySelector('.contentwheel');
const contents = document.querySelectorAll('.content li');
let images = ['images/logo.jpg', 'images/quality.jpg', 'images/money.jpg', 'images/invest.jpg', 'images/scorches.jpg', 'images/deals.jpg']

for (let i = 0; i < contents.length; i++){
    contents[i].addEventListener('mouseover', function () {
        contents[i].setAttribute('src', 'images/' + i.toString + '.png')
    })
    contents[i].addEventListener('mouseout', function () {
        contents[i].setAttribute('src', 'images/logo.png')
    })
}*/


const whyusli = document.querySelectorAll('.whyus li');

whyusli.forEach(function (li) {
    li.addEventListener('mouseover', function () { 
        li.style.color = 'white';
       })
})

