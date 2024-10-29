import { createGame } from "./src/game";

let selectedControl = document.getElementById('button-bulldoze')
window.onload = () => {
  window.game = createGame();
} 

window.setActiveTool = (event, toolId)=>{
  if(selectedControl){
    selectedControl.classList.remove("selected");
  }
  selectedControl = event.target;
  selectedControl.classList.add("selected");

  window.game.setActiveToolId(toolId);
}