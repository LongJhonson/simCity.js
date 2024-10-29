import { createScene } from "./src/scene";
console.log("SimCity");

window.onload = () => {
  window.scene = createScene();
  window.scene.start();

  document.addEventListener("mousedown", window.scene.onMouseDown);
  document.addEventListener("mouseup", window.scene.onMouseUp);
  document.addEventListener("mousemove", window.scene.onMouseMove);
  document.addEventListener(
    "contextmenu",
    (event) => event.preventDefault(),
    false
  );
};
