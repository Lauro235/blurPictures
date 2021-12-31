# Learn In Public Series

## Grid 3

### Things I learnt

#### Arrow Functions and forEach

In building my first arrow functions I noticed that I couldn't apply the .classList.toggle until I had explicitly selected each element. I tried using the variable on it's own and this didn't work. Then I thought that it would perhaps work as a function within a function and it did!

Another thing that caught me out was that I initially included a . before the class name, but the string was transferred verbatim and so the dot actually caused a bug. These both work, however I found that my button was blurring to and so I repositioned the button absolutely outside of the container.

`buttons.forEach(e => {e.addEventListener('click', blurImages)});`

`function blurImages() {
    bgPics.forEach(e => {e.classList.toggle('bg-pic__blur')})
}`

#### Button filter after absolute positioning

After positioning the buttons to absolute

### Resources

#### Trigger an Event

- triggering events <https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events>
- dispatch events <https://stackoverflow.com/questions/21099716/javascript-dispatchevent-why-is-it-needed/21099873#:~:text=dispatchEvent%20is%20what%20you%20call,to%20do%20so%20for%20testing>

#### Using querySelectorAll and forEach

- querySelectorAll <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll>
- for each <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
- callbackFn <https://www.youtube.com/watch?v=qtfi4-8dj9c&ab_channel=CemEygiMedia>
- forEach (Ania) <https://www.youtube.com/watch?v=6Hb0qZ3PVWI&ab_channel=CodewithAniaKub%C3%B3w>

#### thisArg

- Webucator <https://www.youtube.com/watch?v=QJiN7HeVSq0&ab_channel=Webucator>
- Stack Overflow <https://stackoverflow.com/questions/34556558/what-is-the-purpose-of-thisarg-in-foreach>

#### blur effect for background images

- w3 <https://www.w3schools.com/howto/howto_css_blurred_background.asp>
- MDN transitions (seperate with comma) <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions>
