let mouseCursor = document.querySelector(".cursor")
let lis = document.querySelectorAll("li")

window.addEventListener("mousemove", cursor)

window.addEventListener("mousedown", () => {
	mouseCursor.classList.add("mouse-down")
})

window.addEventListener("mouseup", () => {
	mouseCursor.classList.remove("mouse-down")
})



function cursor(e) {
	mouseCursor.style.top = e.pageY + "px"
	mouseCursor.style.left = e.pageX + "px"
}

$('background').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});

$( function() {
  $( "#draggable" ).draggable();
} );

