x = 6;  // global variable created

window.x // same variable can be accessed as a property of the window object

// both variables are exactly the same
window.x === x;

if (x) { 
    // do something
    }

if (window.x) {
    // do something
    }

window.parseInt(4.2);
// << 4
window.isNaN(4.2);
// << false

window.alert('Hello');
// << undefined

window.confirm('Do you wish to continue?');
//<< undefined

window.prompt('Please enter your name:');

window.history.go(1); // goes forward 1 page
window.history.go(0); // reloads the current page
window.history.go(-1); // goes back 1 page

const popup = window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes');

popup.close();

window.moveTo(0,0); // will move the window to the top-left corner of the screen

window.resizeTo(600,400);

document.write('Hello, world!');

document.write('<h1>Hello, world!</h1>');

{/* inside an HTML DOC
<h1>
    <script>document.write("Hello, world!")</script>
</h1> */}

document.cookie = 'name=Superman';
// << "name=Superman"

const cookies = document.cookie.split("; ");
for (crumb of cookies){
    const [key,value] = crumb.split("=");
    console.log(`The value of ${key} is ${value}`);
}
// << The value of name is Batman
// The value of hero is true
// The value of city is Gotham

const expiryDate = new Date(); 
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);

document.cookie = `name=Batman; expires=${ expiryDate.toUTCString()}`;


window.setTimeout( () => alert("Time's Up!"), 3000);
// << 4


function chant(){ console.log('Beetlejuice'); }


const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);