{/* HTML code
<div id='hero' data-powers='flight superSpeed'>
    Superman
</div> */}

const superman = document.getElementById('hero');
const powers = superman.dataset.powers;
// << 'flight superSpeed'

const maxLength = Number(element.dataset.maxLength);

localStorage.setItem('name', 'Walter White');

localStorage.getItem('name'); 
// << "Walter White"

localStorage.name = 'Heisenberg'; 

console.log(localStorage.name); 
// << "Heisenberg";

localStorage.removeItem('name');

delete localStorage.name;

localStorage.clear();

addEventListener('storage', (event) => {
    console.log(`The ${event.key} was updated from ${event.oldValue} to ${event.newValue} and saved in 
    ${event.storageArea}`) }, false);


localStorage.setItem('superman', JSON.stringify(hero));

superman = JSON.parse(localStorage.getItem('superman'));


function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`); 
}

worker.postMessage('Hello');

self.postMessage('Finished');

worker.addEventListener('message', (event) => {
    console.log(event.data);
}, false);

worker.terminate();

self.close();

if(window.Notification) {
    Notification.requestPermission();
}

if(window.Notification) {
    Notification.requestPermission()
    .then((permission) => {
        if(Notification.permission === 'granted') {
        new Notification('Hello JavaScript!');
        }
    });
}

const notification = new Notification('JavaScript: Novice to Ninja',{
    body: 'The new book from SitePoint',
    icon: 'sitepointlogo.png'
});


{/* HTML code
<video src='http://movie.mp4' controls>
    Your browser does not support the video element.
</video> */}

const video = document.getElementsByTagName('video')[0];

video.addEventListener('pause', () => {
    console.log('The video has been paused'); }, false);