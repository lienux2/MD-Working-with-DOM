const btn1 = document.getElementById('button1');
const box1 = document.getElementById('box1');

btn1.addEventListener('click', function onClick() {
    box1.style.backgroundColor = '#FFFF00';
    box1.style.color = 'black';
});

const btn2 = document.getElementById('button2');
const box2 = document.getElementById('box2');

btn2.addEventListener('click', function onClick() {
    box2.textContent = 'SUCCESS';
});

const btn3 = document.getElementById('button3');
const box3 = document.getElementById('box3');

btn3.addEventListener('click', function onClick() {
    box3.style.backgroundColor = 'transparent';
    box3.style.boxShadow = 'none';
});

const btn4 = document.getElementById('button4');
const box4 = document.getElementById('box4');
let isTransparent = false;

btn4.addEventListener('click', function onClick() {
    if (isTransparent) {
        box4.style.backgroundColor = '#1FC2AE';
        box4.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.10)';
    } else {
        box4.style.backgroundColor = 'transparent';
        box4.style.boxShadow = 'none';
    }
    isTransparent = !isTransparent;
});

const btn5 = document.getElementById('button5');
const box5 = document.getElementById('box5');

const colors = ['#D0A2F7', '#29ADB2', '#FF6C22', '#D2DE32', '#B931FC']

btn5.addEventListener('click', function onClick() {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];
    box5.style.backgroundColor = randomColor;
});

const btn6 = document.getElementById('button6');
const box6 = document.getElementById('box6');
let currentNumber = 0;
let counter = 0;
let intervalId: NodeJS.Timeout | null = null;

if (btn6 && box6) {
    btn6.addEventListener('click', function onClick() {
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(function () {
            if (counter < 10) {
                box6.textContent = String(++currentNumber);
                counter++;
            } else {
                clearInterval(intervalId);
            }
        }, 3000);
    });
}

const btn7 = document.getElementById('button7');

btn7.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = '#000';
    box1.style.backgroundColor = '#18D5E1';
    box2.style.backgroundColor = '#18D5E1';
    box3.style.backgroundColor = '#18D5E1';
    box4.style.backgroundColor = '#18D5E1';
    box5.style.backgroundColor = '#18D5E1';
    box6.style.backgroundColor = '#18D5E1';
    value.style.color = '#fff';
});

box1.addEventListener('mouseover', () => {
    box1.style.backgroundColor = 'red';
});
box1.addEventListener('mouseout', () => {
    box1.style.backgroundColor = '';
});

let currentNumber2 = 0;
let counter2 = 0;
let intervalId2: NodeJS.Timeout | null = null;

box5.addEventListener('mouseover', () => {
    intervalId2 = setInterval(function () {
        if (counter2 < 10) {
            box5.textContent = String(++currentNumber2);
            counter2++;
        } else {
            clearInterval(intervalId2);
        }
    }, 1000);
});
box5.addEventListener('mouseout', () => {
    clearInterval(intervalId2);
    counter2 = 0;
    currentNumber2 = 0;
    box5.textContent = String(currentNumber2);
});

const input = document.getElementById('input') as HTMLInputElement;
const value = document.getElementById('value');

input.addEventListener('input', function updateValue(e) {
    value.textContent = (e.target as HTMLInputElement).value;
});