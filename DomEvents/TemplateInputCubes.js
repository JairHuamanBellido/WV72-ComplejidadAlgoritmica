import { ContainerCube } from "../Figuras/Container.js";
import { Cube } from "../Figuras/Cube.js";
import escena from "../Figuras/Scene.js"
let inputCategory = document.getElementById("numberCategoryCubes");
let templateInput = document.getElementById("template-input");
let submitButton = document.getElementById("btn-create");
let countCategory = 0;
window.onload = () => {
    console.log("asd")
}


let wFather = document.getElementById("father-w");
let hFather = document.getElementById("father-h");
let dFather = document.getElementById("father-d");

let x = 0;

function templateFormInputCubes(category) {
    let cc = document.createElement('div');
    cc.innerHTML = `
        <div class="field-container">
            <h2>Cubo ${category} </h2>
            
            <input type="number" id="${category}count" placeholder="Ingrese la cantidad de cubos"/>
            
            <div class="parameters">

            <input type="number" id="${category}-w" />
            <input type="number" id="${category}-h" />
            <input type="number" id="${category}-d" />

            </div>

            <div class="color-picker-wrapper">
				<input type="color" value="#ff0000" id="color-${category}">
			</div>
        </div>
    `;
    templateInput.appendChild(cc);
}

function createTemplate(id) {
    for (let i = 0; i < id; ++i) {
        templateFormInputCubes(i);
    }
}
inputCategory.addEventListener("focusout", (e) => {

    countCategory = parseInt(e.target.value);
    createTemplate(parseInt(e.target.value));
})

submitButton.addEventListener("click", () => {

    let wc = parseInt(wFather.value);
    let hc = parseInt(hFather.value);
    let dc = parseInt(dFather.value);
    console.log(wc);
    let containerCube =  new ContainerCube(wc,hc,dc,'#000000');
    containerCube.setPosition(0,hc/2,0);
    escena.add(containerCube.getModel());

    
	
    for (let i = 0; i < countCategory; i++) {

        let parameters = {
            numberCubes: parseInt(document.getElementById(`${i}count`).value),
            color: document.getElementById(`color-${i}`).value,
            w: parseInt(document.getElementById(`${i}-w`).value),
            h: parseInt(document.getElementById(`${i}-h`).value),
            d: parseInt(document.getElementById(`${i}-d`).value)
        }
        x+=parameters.w;
        for (let j = 0; j < parseInt(parameters.numberCubes); ++j) {
            let newCube = new Cube(parameters.w,parameters.h,parameters.d,parameters.color);
            newCube.setPosition(x,parameters.h/2,0);
            escena.add(newCube.getModel());

            x+=(parameters.w + 2);


        }

    }
    console.log("click!")
    document.getElementById("modal-rules").style.display="none";
})