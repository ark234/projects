var modalWin = document.getElementById("modal-win");
var modalLose = document.getElementById("modal-lose");
var explosion = document.getElementById("explosion");
var fireworks = document.getElementById("fireworks");
var container = document.getElementsByClassName("platform-container")[0];
var live = false; // This ensures game is active only after the player has hovered over the start platform.

/************************************************************
                        HOVER LOGIC
************************************************************/

/* Game starts when you hover over the start platform  */
$(".platform-start").mouseenter(function(event) {
  live = true;
  container.style.cursor = "crosshair";
});

/* If you hover off of start platform not onto another platform, you lose  */
$(".platform-start").mouseleave(function(event) {
  if(!$(event.relatedTarget).hasClass("platform")) {
    explosion.style.display = "block";
    modalLose.style.display = "block";
    container.style.cursor = "default";
  }
});

/* Checks the elements player hovers onto after hovering off of .platform.
Any unspecified classes will result in a loss */
$(".platform").mouseleave(function(event) {
  if($(event.relatedTarget).hasClass("platform") ||
     $(event.relatedTarget).hasClass("platform-start") ||
     $(event.relatedTarget).hasClass("friend") ||
     $(event.relatedTarget).hasClass("platform-win") ||
     $(event.relatedTarget).hasClass("power-up")) {
       // do nothing
  }
  else {
    if (live) {
      modalLose.style.display = "block";
      explosion.style.display = "block";
      container.style.cursor = "default";
    }
  live = false;
  }
});

/* Show winning modal upon reaching .platform-win  */
$(".platform-win").mouseenter(function() {
  if(live) {
      modalWin.style.display = "block";
      fireworks.style.display = "block";
      container.style.cursor = "default";
}
});
