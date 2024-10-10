
function parallaxFunction(movement) {
  //Selects every element to be parallaxed
  this.querySelectorAll(".parallaxElement").forEach((element) => {
    //Calculates new position based on mouse position, current position
    const XAdjustment = movement.pageX / -10;
    const YAdjustment = movement.pageY / -10;

    //Moves x and y positions based on calculated values
    element.style.transform = `translateX(${XAdjustment}px) translateY(${YAdjustment}px)`;
  });
}

export { parallaxFunction as parallax };