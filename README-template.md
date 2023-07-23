# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [solution URL](https://your-solution-url.com)
- Live Site URL: [live site URL](https://indranjanachatterjee.github.io/Advice-Generator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow
- API

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<picture>
  <source
    media="(min-width: 400px)"
    srcset="./images/pattern-divider-desktop.svg"
  />
  <source
    media="(max-width: 400px)"
    srcset="./images/pattern-divider-mobile.svg"
  />
  <img src="./images/pattern-divider-desktop.svg" alt="divider" id="divider" />
</picture>
```

```css
@media (max-width: 400px) {
  .container {
    width: 20rem;
  }
}
```

```js
let url = fetch(`https://api.adviceslip.com/advice`);
```







## Author

- Website - [Indranjana Chatterjee](https://www.your-site.com)
- Frontend Mentor - [@IndranjanaChatterjee](https://www.frontendmentor.io/profile/IndranjanaChatterjee)



