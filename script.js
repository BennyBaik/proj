let rnd = (l, u) => Math.random() * (u - l) + l;
let scene, camera, te, Text, cat, Test, ca;
let crossroad = [], corner = [];
let map = [
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------------------------------n----------------------------------------------------------------------",
  "----------------------------------------------------------------------------------------------------------c-r-r-r-r-r-c--------------------------------------------------------------------------------",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-x-x-x-x-x-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr-x-rrrrrrrrr-x-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr---rrrrrrrrr---rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr-x-rrrrrrrrr-x-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr---rrrrrrrrr---rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr-x-rrrrrrrrr-x-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr---rrrrrrrrr---rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr-x-rrrrrrrrr-x-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  "c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c",
  
];
window.onload = function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  te = document.getElementById("two");
  three = document.getElementById("3");
  Text = document.getElementById("text");
  Test = document.getElementById("test");
  Test.setAttribute("clickable", "");
  ca = document.getElementById("c");
  ca.setAttribute("clickable", "");
  cat = false;


  for (let x = 0; x < map.length; x++) {
    let row = map[x];
    let cols = row.split("");
    for (let z = 0; z < cols.length; z++) {
      if (cols[z] == "x") {
        new Cross(x - 100, -.48, z - 107)
      } else if (cols[z] == "c") {
        new Corner(x - 100, -.48, z - 107);
      } else if (cols[z] == "r") {
        new road(x - 100, -.48, z - 107);
      } else if (cols[z] == "w") {
        new wall(x - 99.5, 1, z - 107);
      } else if (cols[z] == "d") {
        new path(x - 100, -.48, z - 107);
      } else if (cols[z] == "t") {
        new Tree(x - 100, 0, z - 107);

      } else if (cols[z] == "n") {
        new Snowflake(x - 100, 3, z - 107);
      }

    }
  }




  window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    let angle = camera.obj.object3D.rotation.y + Math.PI;
    let theta = camera.obj.object3D.rotation.x;
    let x = 4 * Math.sin(angle) + camera.obj.object3D.position.x;
    let z = 4 * Math.cos(angle) + camera.obj.object3D.position.z;
    let y = 4 * Math.tan(theta) + 1.6;



  })



  setTimeout(loop, 100);//loop();
}
class Cross {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color", "white");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.obj.setAttribute("depth", 2);
    this.obj.setAttribute("width", 2);
    scene.append(this.obj);

  }
}
class Corner {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color", "grey");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.obj.setAttribute("depth", 2);
    this.obj.setAttribute("width", 2);
    scene.append(this.obj);

  }
}
class road {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color", "black");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.obj.setAttribute("depth", 2);
    this.obj.setAttribute("width", 2);

    scene.append(this.obj);
  }
}

class wall {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color", "red");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.obj.setAttribute("depth", 3);
    this.obj.setAttribute("width", 1);
    this.obj.setAttribute("height", 2);
    this.obj.setAttribute("static-body", "");
   
    scene.append(this.obj);
  }
}

class path {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color", "#6e4118");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.obj.setAttribute("depth", 2);
    this.obj.setAttribute("width", 2);
    scene.append(this.obj);
  }
}


class Tree {
  constructor(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.obj.setAttribute("static-body", "");
    this.obj.setAttribute("scale", "1 2 1");
    let pines = document.createElement("a-cone");
    pines.setAttribute("color", "green");
    pines.setAttribute("position", "0 1.5 0");
    pines.setAttribute("height", "2");
    this.obj.append(pines);

    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position", "0 0 0");
    stump.setAttribute("color", "brown");
    stump.setAttribute("radius", "0.25");
    this.obj.append(stump);
    scene.append(this.obj);
  }
}

function loop() {



  window.requestAnimationFrame(loop);
}
class Snowflake {
  constructor(x, y, z) {
    this.x = x;
    this.y = y-2;
    this.z = z;
    ca.addEventListener("click", () => {
      ca.setAttribute("opacity", 0);
      cat = true;
      console.log(this);
    })

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("width", 1);
    this.obj.setAttribute("depth", 1);
	 this.obj.setAttribute("height", 2);
    this.flag = 0;


    this.obj.setAttribute("clickable", "");

    this.obj.addEventListener("click", () => {
      this.flag += 1;
      if (cat == true && this.flag < 100) {
        te.setAttribute("opacity", 0);
        Text.setAttribute("opacity", 0);
        three.setAttribute("position", { x: this.x, y: this.y + 2, z: this.z });
        three.setAttribute('rotation', { x: 0, y: 270, z: 0 });
        three.setAttribute("opacity", 1);
        three.setAttribute("align", "center");
        this.flag += 200;
      } else if (this.flag == 1) {
        Text.setAttribute("position", { x: this.x, y: this.y + 2, z: this.z });
        Text.setAttribute('rotation', { x: 0, y: 270, z: 0 });
        Text.setAttribute("opacity", 1);
        Text.setAttribute("align", "center");
        te.setAttribute("opacity", 0);

      } else if (this.flag == 2) {
        Text.setAttribute("opacity", 0);
        te.setAttribute("position", { x: this.x, y: this.y + 2, z: this.z });
        te.setAttribute('rotation', { x: 0, y: 270, z: 0 });
        te.setAttribute("align", "center");
        te.setAttribute("opacity", 1);
        this.flag += -2;

      }
      console.log(this);

    })

    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);
  }


}
function move() {
  Test.setAttribute("clickable", "");
  Test.addEventListener("click", () => {
    {
      Test.setAttribute('animation', {
        'property': 'position',
        'to': { x: 1, y: 1, z: 1 },
      });
    }
  })
  console.log(this);
  window.requestAnimationFrame(move);
} 

