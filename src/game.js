import { createScene } from "./scene";
import { createCity } from "./city";
import buildingFactory from './buildings';

export function createGame() {
    let activeToolId = '';
  const scene = createScene();
  const city = createCity(16);

  scene.initialize(city);

  scene.onObjectSelected = (selectedObject) => {
    let {x, y} = selectedObject.userData;
    const tile = city.data[x][y];
    if(activeToolId === 'bulldoze'){
        //remove existing building
        tile.building = undefined;
        scene.update(city);
    }else if(!tile.building){
        //place building at that location
        tile.building = buildingFactory[activeToolId]();
        scene.update(city);
    }
  }

  document.addEventListener("mousedown", scene.onMouseDown.bind(scene));
  document.addEventListener("mouseup", scene.onMouseUp.bind(scene));
  document.addEventListener("mousemove", scene.onMouseMove.bind(scene));
  document.addEventListener(
    "contextmenu",
    (event) => event.preventDefault(),
    false
  );

  const game = {
    update(){
        city.update();
        scene.update(city);
    },
    setActiveToolId(toolId){
        activeToolId = toolId;
    }
  }

  setInterval(()=>{
    game.update()
  }, 1000);

  scene.start();
  return game;
}
