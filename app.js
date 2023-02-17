const chart = document.querySelector('.chart');
const currentDay = new Date().getDay();

function createElement() {
    const column = document.createElement('div');
    const price = document.createElement('div');
    const bar = document.createElement('div');
    const day = document.createElement('span');
    
    column.classList.add('column-area');
    price.classList.add('price');
    bar.classList.add('bar');
    day.classList.add('day');
    
    column.append(price,bar,day);
    return column;
}

function addChart(data) {
    for (let index = 0; index < 7; index++) {   
        const col = createElement();
        const amount = data[index].amount;
        const day = data[index].day;
        col.children[0].innerText = `$${amount}`;
        col.children[1].style.height = `${amount * 2.5}px`;
        col.children[2].innerText = `${day}`;
        chart.append(col);
    }

    chart.children[currentDay-1].children[1].classList.add('current');
}

async function getData(){
    const response = await fetch('./data.json');
    const data = await response.json();
    addChart(data);
}

window.addEventListener('DOMContentLoaded', () => { 
    getData(); 
});












