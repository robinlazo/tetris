let canvas;
let ctx,
    pieza;

const FPS = 50,
      altoTablero = 20,
      anchoTablero = 10,
      altoF = 40,
      anchoF = 40,
      anchoCanvas = 400,
      altoCanvas = 640,
      margenSuperior = 4;

const rojo = "#f00";
const amarillo = "#ff0";
const verde = "#0f0";
const blue = "#00f";
const magenta = "#0f0";
const gris = "#fff";
const anaranjado = "#ff8";

const tablero = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


]

const tableroCopia = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


]

const fichaGrafico = [
  [
    [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
    ]
  ],
  
  [
    [
    [0,0,0,0],
    [2,2,2,2],
    [0,0,0,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,2,0],
    [0,0,2,0],
    [0,0,2,0],
    [0,0,2,0]
    ],
  
    [
    [0,0,0,0],
    [2,2,2,2],
    [0,0,0,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,2,0],
    [0,0,2,0],
    [0,0,2,0],
    [0,0,2,0]
    ]
  
  ],
  
  [
    [
    [0,0,0,0],
    [0,0,3,3],
    [0,3,3,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,3,0],
    [0,0,3,3],
    [0,0,0,3],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,0],
    [0,0,3,3],
    [0,3,3,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,3,0],
    [0,0,3,3],
    [0,0,0,3],
    [0,0,0,0]
    ]
  
  ],
  
  [
    [
    [0,0,0,0],
    [0,4,4,0],
    [0,0,4,4],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,4],
    [0,0,4,4],
    [0,0,4,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,0],
    [0,4,4,0],
    [0,0,4,4],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,4],
    [0,0,4,4],
    [0,0,4,0],
    [0,0,0,0]
    ]
  
  ],
  
  [
    [
    [0,0,0,0],
    [0,5,5,5],
    [0,5,0,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,5,0],
    [0,0,5,0],
    [0,0,5,5],
    [0,0,0,0]
    ],
  
    [
    [0,0,0,5],
    [0,5,5,5],
    [0,0,0,0],
    [0,0,0,0]
    ],
  
    [
    [0,5,5,0],
    [0,0,5,0],
    [0,0,5,0],
    [0,0,0,0]
    ]
  
  ],
  
  [
    [
    [0,0,0,0],
    [0,6,6,6],
    [0,0,0,6],
    [0,0,0,0]
    ],
  
    [
    [0,0,6,6],
    [0,0,6,0],
    [0,0,6,0],
    [0,0,0,0]
    ],
  
    [
    [0,6,0,0],
    [0,6,6,6],
    [0,0,0,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,6,0],
    [0,0,6,0],
    [0,6,6,0],
    [0,0,0,0]
    ]
  ],
  
  
  [
    [
    [0,0,0,0],
    [0,7,7,7],
    [0,0,7,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,7,0],
    [0,0,7,7],
    [0,0,7,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,7,0],
    [0,7,7,7],
    [0,0,0,0],
    [0,0,0,0]
    ],
  
    [
    [0,0,7,0],
    [0,7,7,0],
    [0,0,7,0],
    [0,0,0,0]
    ]
  ]
  ];


  class obPieza {
    x = 4;
    y = 0;
    angulo = 0;
    tipo = 0;
    retraso = 50;
    fotograma = 0;

    nueva() {
      this.tipo = Math.floor(Math.random()*7);
      this.x = 4;
      this.y = 0;
      this.fotograma = 0;
    }

    rotar() {
      let anguloNuevo = this.angulo;
         if(anguloNuevo < 3) {
           anguloNuevo++;
         }else {
           anguloNuevo = 0;
         }

         if(this.colision(anguloNuevo, this.y, this.x) == false) {
          this.angulo = anguloNuevo;
        }
    }

    colision(anguloNuevo, yNueva, xNueva) {
      let resultado = false;
      for(let py = 0; py < 4; py++) {
           for(let px = 0; px < 4; px++) {
                if(fichaGrafico[this.tipo][anguloNuevo][py][px] > 0) {
                     if(tablero[yNueva + py][xNueva + px] > 0) {
                         resultado = true;
                    } 
                }
           }
      }
            return resultado;
    }

    limpiar() {
          let completado;
          for(let py = margenSuperior; py < altoTablero; py++) {
            completado = true;
            for(let px = 1; px < anchoTablero+1; px++) {
              if(tablero[py][px] == 0) {
                completado = false;
              }
            }

            if(completado == true) {
              for(let px = 1; px < anchoTablero+1; px++) {
                    tablero[py][px] = 0;
              }
            }
          }
    }

    dibuja() {
      for(let py = 0; py < 4; py++) {
        for(let px = 0; px < 4; px++) {
             if(fichaGrafico[this.tipo][this.angulo][py][px] != 0) {
                 switch(fichaGrafico[this.tipo][this.angulo][py][px]) {
                   case 1:
                     ctx.fillStyle = rojo;
                      break;
                   case 2:
                      ctx.fillStyle = amarillo;
                      break;
                   case 3: 
                      ctx.fillStyle = verde;
                      break;
                   case 4:
                      ctx.fillStyle = blue;
                      break;
                   case 5:
                      ctx.fillStyle = magenta;
                      break;
                   case 6: 
                      ctx.fillStyle = gris;
                      break;
                   case 7:
                      ctx.fillStyle = anaranjado;
                      break;
                 }

                 ctx.fillRect((this.x + px - 1)*anchoF, (this.y + py - margenSuperior)*altoF, anchoF, altoF);

             }
        }
      }
    }

    compruebaSiPierde() {
        let pierde = false;
        for(let px = 1; px < anchoTablero+1; px++) {
             if(tablero[2][px] > 0) {
               pierde = true;
             }

        }
        return pierde;
    }
  
    fijar() {
       for(let py = 0; py < 4; py++) {
           for(let px = 0; px < 4; px++) {
              if(fichaGrafico[this.tipo][this.angulo][py][px] > 0) {
                  tablero[this.y + py][this.x + px] = fichaGrafico[this.tipo][this.angulo][py][px];
              }
           }
        }
    }

    caer() {
        if(this.fotograma >= this.retraso) {
          this.fotograma = 0;
        
             if(this.colision(this.angulo, this.y+1, this.x) == false) {
                 this.y++;
              }else {
               this.fijar();
               this.nueva();
               this.limpiar();
               if(this.compruebaSiPierde()) reseteaTablero();
            }
        }else {
          this.fotograma++;
        }

    } 

    abajo() {
      if(this.colision(this.angulo, this.y+1, this.x) == false) {
        this.y++;
      }
    }

    derecha() {
      if(this.colision(this.angulo, this.y, this.x+1) == false) {
        this.x++;
      }
    }

    izquierda() {
      if(this.colision(this.angulo, this.y, this.x-1) == false) {
        this.x--;
      }
    }
    
}
 
  function reseteaTablero() {
    for(let py = 0; py < tablero.length; py++) {
      for(let px = 0; px < tablero[0].length; px++) {
        tablero[py][px] = tableroCopia[py][px];
      }
    }
  }


function dibujaTablero() {
  for(let py = margenSuperior; py < altoTablero; py++) {
    for(let px = 1; px < anchoTablero+1; px++) {
         if(tablero[py][px] != 0) {
             switch(tablero[py][px]) {
               case 1:
                 ctx.fillStyle = rojo;
                  break;
               case 2:
                  ctx.fillStyle = amarillo;
                  break;
               case 3: 
                  ctx.fillStyle = verde;
                  break;
               case 4:
                  ctx.fillStyle = blue;
                  break;
               case 5:
                  ctx.fillStyle = magenta;
                  break;
               case 6: 
                  ctx.fillStyle = gris;
                  break;
               case 7:
                  ctx.fillStyle = anaranjado;
                  break;
             }

             ctx.fillRect((px-1)*anchoF, (py-margenSuperior)*altoF, anchoF, altoF);

           }
      }
  }
}

function keyPress() {
    window.addEventListener("keydown", (e) => {
          if(e.key == "ArrowUp") {
              pieza.rotar();
          }

          if(e.key == "ArrowDown") {
            pieza.abajo();
          }

          if(e.key == "ArrowRight") {
            pieza.derecha();
          }

          if(e.key == "ArrowLeft") {
            pieza.izquierda();
          }

    })
}

function inicializa() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext('2d');
  keyPress();
  canvas.width = anchoCanvas;
  canvas.height = altoCanvas;
  pieza = new obPieza();
  setInterval(principal, 1000/FPS);

}

function borraCanvas() {
    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;
}

function principal() {
       borraCanvas();
       dibujaTablero();
       pieza.caer();
       pieza.dibuja();
}