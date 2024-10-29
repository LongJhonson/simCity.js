import { createScene } from "./scene";
import { createCity } from "./city";

export function createGame() {
  const scene = createScene();
  const city = createCity(16);

  scene.initialize(city);

  document.addEventListener("mousedown", scene.onMouseDown);
  document.addEventListener("mouseup", scene.onMouseUp);
  document.addEventListener("mousemove", scene.onMouseMove);
  document.addEventListener(
    "contextmenu",
    (event) => event.preventDefault(),
    false
  );

  const game = {
    update(){
        city.update();
        scene.update(city);
    }
  }

  setInterval(()=>{
    game.update()
  }, 1000);

  scene.start();
  return game;
}
