document.querySelector("#items")
  .addEventListener("wheel", Event => {
    if(Event.deltaY > 0) {
      console.log('scroll up');
    } else {
      console.log('scrool down')
    }
  });