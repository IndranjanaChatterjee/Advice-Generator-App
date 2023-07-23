const id = document.getElementById("id");
const advice = document.getElementById("advice");
const click = document.getElementById("click");
let url = fetch(`https://api.adviceslip.com/advice`);
click.addEventListener("click",() => {
  url
    .then((v) => {
      return(v.json());
    })
    .then((val) => {
      console.log(val.slip.advice);
      id.innerHTML=val.slip.id;
      advice.innerHTML=val.slip.advice;
    });
});
