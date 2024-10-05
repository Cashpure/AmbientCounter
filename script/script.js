let body = document.getElementsByTagName('body')
let menu = document.getElementById('menu')
let crsr = document.getElementById('cursor')
let wrapper = document.getElementById('wrapper')
let soundEl1 = document.getElementById('equa__el-1')
let soundEl2 = document.getElementById('equa__el-2')
let soundEl3 = document.getElementById('equa__el-3')
let soundEl4 = document.getElementById('equa__el-4')
let soundEl5 = document.getElementById('equa__el-5')
let soundEl6 = document.getElementById('equa__el-6')
let soundEl7 = document.getElementById('equa__el-7')
let soundEl8 = document.getElementById('equa__el-8')
let soundEl9 = document.getElementById('equa__el-9')
let soundEl = document.querySelectorAll('equa__el')
let soundEls = [soundEl1, soundEl2, soundEl3, soundEl4, soundEl5, soundEl6, soundEl7, soundEl8, soundEl9]
let soundButton = document.getElementById('soundbutton'),
   audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
   soundButton.classList.toggle('paused')
   audio.paused ? audio.play() : audio.pause()
})



let button = document.getElementsByClassName('btn')
let txt = document.getElementById('text')


let btn = document.getElementById('btn')

// const abbreviateNumber = (value) => {
//    const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];
//    const tier = Math.floor(Math.log10(Math.abs(value)) / 3);
//    if (tier === 0) return value.toString();
//    const suffix = SI_SYMBOL[tier];
//    const scale = Math.pow(10, tier * 3);
//    const scaled = value / scale;
//    return scaled.toFixed(1) + suffix;
// }

let k = 0;
function func() {
   return function count() {
      return k++
   }
}
let res = func()

let square
let ii = 0
let squareSize = 5
let squareColor = ["white", "black"]
let squareColorValue = 0
btn.onclick = () => {
   res.value += m
   txt.innerText = res.value
   let iiId = ii + "-square"

   let posLeft = Math.floor(Math.random() * 95) + "%"
   let posTop = Math.floor(Math.random() * 95) + "%"
   square = document.createElement("custom-square");
   square.setAttribute("id", iiId);
   square.setAttribute("size", squareSize + "px");
   square.setAttribute("color", squareColor[squareColorValue]);
   square.setAttribute("border-radius", "50%");
   square.setAttribute("position", "absolute");
   square.setAttribute("transition", "all .9s");
   square.setAttribute("left", posLeft);
   square.setAttribute("top", posTop);
   square.setAttribute("z-index", "-1");
   wrapper.appendChild(square);
   ii++
   let squareNumber = document.getElementById(iiId)
   setTimeout(() => {
      if (squareNumber.hasAttributes("left", posLeft)) {
         squareNumber.setAttribute("left", "50%")
         squareNumber.setAttribute("top", "50%")
      }
   }, 0);
   setTimeout(() => {
      squareNumber.remove()
   }, 800);

   // update.disabled = false;
   // remove.disabled = false;
   // add.disabled = true;
}

function plus() {

}




// console.log(posLeft)


$(function () {
   $('.btn').on('click', function (e) {
      e.preventDefault()
      // let randomItem = circles[Math.floor(Math.random() * circles.length)]
      // let posLeft = Math.floor(Math.random() * 95) + "%"
      // let posTop = Math.floor(Math.random() * 95) + "%"
      // randomItem.style.top = posTop
      // randomItem.style.left = posLeft
      // if ($(randomItem).hasClass('circle--active')) {


      // }
      // $(randomItem).fadeIn()
      // $(randomItem).addClass('circle--active')
      // setTimeout(() => {

      //    $(randomItem).removeClass('circle--active')
      //    $(randomItem).fadeOut('slow')
      // }, 600)
      // randomItem.style.top = "50%"
      // randomItem.style.left = "50%"
      // randomItem.style.bottom = "50%"
      // randomItem.style.right = "50%"
   })

   $('.btn').hover(function () {
      $(this).toggleClass('btn--active')
      $('#text').fadeToggle('fast')
   })

   $('.menu').hover(function () {
      $(this).toggleClass('menu--active')
      if (($('#cursor').hasClass('cursor--switched')) == false) {
         $('#cursor').toggleClass('cursor--menu')
      }
      if ($('#cursor').hasClass('cursor--switched')) {
         $('#cursor').toggleClass('cursor--menu__switched')
      }
      $('.menu-list').toggleClass('menu-list--active')
      if ($('#up-3').hasClass('up-3__updated')) {
         $('#up-3').removeClass('up-3__updated')
         $('.menu-circle').removeClass('menu-circle__updated')
      }
   })

   $('.soundbutton').hover(function () {
      if (($('#cursor').hasClass('cursor--switched')) == false) {
         $('#cursor').toggleClass('cursor--sound')
      }
      if ($('#cursor').hasClass('cursor--switched')) {
         $('#cursor').toggleClass('cursor--sound__switched')
      }
   })

   $('#back').hover(function () {
      if (($('#cursor').hasClass('cursor--switched')) == false) {
         $('#cursor').toggleClass('cursor--back')
      }
      if ($('#cursor').hasClass('cursor--switched')) {
         $('#cursor').toggleClass('cursor--back__switched')
      }
   })
   $(document).bind('contextmenu', function (e) {
      e.preventDefault();
   })
})



class Square extends HTMLElement {
   static get observedAttributes() {
      return ["color", "size", "border-radius", "position", "transition", "left", "top", "z-index", "id", "border"];
   }

   constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      const div = document.createElement("div");
      const style = document.createElement("style");
      shadow.appendChild(style);
      shadow.appendChild(div);
   }

   connectedCallback() {
      updateStyle(this);
   }
   attributeChangedCallback(name, oldValue, newValue) {
      updateStyle(this);
   }
}

customElements.define("custom-square", Square);

function updateStyle(elem) {
   const shadow = elem.shadowRoot;
   shadow.querySelector("style").textContent = `
      div {
         width: ${elem.getAttribute("size")};
         height: ${elem.getAttribute("size")};
         background-color: ${elem.getAttribute("color")};
         border-radius: ${elem.getAttribute("border-radius")};
         position: ${elem.getAttribute("position")};
         transition: ${elem.getAttribute("transition")};
         left: ${elem.getAttribute("left")};
         top: ${elem.getAttribute("top")};
         z-index: ${elem.getAttribute("z-index")};
         id: ${elem.getAttribute("id")};
         border: ${elem.getAttribute("border")};
      }
   `;
}



const lerp = (a, b, n) => (1 - n) * a + n * b;

class Cursor {
   constructor() {
      // config
      this.target = { x: 0.5, y: 0.5 }; // mouse position
      this.cursor = { x: 0.5, y: 0.5 }; // cursor position
      this.speed = 0.6;
      this.init();
   }
   bindAll() {
      ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
   }
   onMouseMove(e) {
      //get normalized mouse coordinates [0, 1]
      this.target.x = e.clientX / window.innerWidth;
      this.target.y = e.clientY / window.innerHeight;
      // trigger loop if no loop is active
      if (!this.raf) this.raf = requestAnimationFrame(this.render);
   }
   render() {
      //calculate lerped values
      this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
      this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
      document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
      document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
      //cancel loop if mouse stops moving
      const delta = Math.sqrt(
         Math.pow(this.target.x - this.cursor.x, 2) +
         Math.pow(this.target.y - this.cursor.y, 2)
      );
      if (delta < 0.001) {
         cancelAnimationFrame(this.raf);
         this.raf = null;
         return;
      }
      //or continue looping if mouse is moving
      this.raf = requestAnimationFrame(this.render);
   }
   init() {
      this.bindAll();
      window.addEventListener("mousemove", this.onMouseMove);
      this.raf = requestAnimationFrame(this.render);
   }
}

new Cursor();








let upBtn1 = document.getElementById('up-1')
let upBtn2 = document.getElementById('up-2')
let upBtn3 = document.getElementById('up-3')
let backBtn = document.getElementById('back')
let value1 = document.getElementById('value-1')
let value2 = document.getElementById('value-2')
let value3 = document.getElementById('value-3')
let value = document.getElementsByClassName('value')
let menuCircle = document.getElementById('menu-circle')

// value1.innerText = abbreviateNumber(value1.innerText)
// value2.innerText = abbreviateNumber(value2.innerText)
// value3.innerText = abbreviateNumber(value3.innerText)

const pages = [
   {
      name: "mainPage",
      "button text": ["Upgrade", "", "Switch",],
      "button functions": [goUp, color, switchTheme],
   },
   {
      name: "secondPage",
      "button text": ["Cursor", "Circle", "Auto"],
      "button functions": [gradeCursor, gradeCirle, gradeAuto, goBack],
   }
]

// upBtn1.onclick = goUp
// upBtn2.onclick = goUp
// upBtn3.onclick = goUp


function update(page) {
   upBtn1.innerText = page["button text"][0];
   upBtn2.innerText = page["button text"][1];
   // upBtn3.innerText = page["button text"][2];
   upBtn1.onclick = page["button functions"][0];
   upBtn2.onclick = page["button functions"][1];
   upBtn3.onclick = page["button functions"][2];
   backBtn.onclick = page["button functions"][3];
}



function goUp() {
   update(pages[1])
   backBtn.style.display = 'block'
   value1.style.display = 'inline'
   value2.style.display = 'inline'
   value3.style.display = 'inline'
   menuCircle.classList.add('menu-circle__updated')
   upBtn3.classList.add('up-3__updated')
}

function goBack() {
   update(pages[0])
   backBtn.style.display = 'none'
   value1.style.display = 'none'
   value2.style.display = 'none'
   value3.style.display = 'none'
   menuCircle.classList.remove('menu-circle__updated')
   upBtn3.classList.remove('up-3__updated')
}

function color() {

}

function switchTheme() {
   btn.classList.toggle('btn--switched')
   body[0].classList.toggle('body--switched')
   menu.classList.toggle('menu--switched')
   backBtn.classList.toggle('back--switched')
   crsr.classList.toggle('cursor--switched')
   crsr.classList.toggle('cursor--menu')
   crsr.classList.toggle('cursor--menu__switched')
   upBtn3.classList.toggle('up-3__switched')
   menuCircle.classList.toggle('menu-circle__switched')
   for (let i = 0; i < soundEls.length; i++) {
      soundEls[i].classList.toggle('equa__el--switched')
   }
   if (squareColorValue < 1) {
      squareColorValue++
   } else {
      squareColorValue--
   }
}




function upd() {

   if (!menu.classList.contains('menu--active')) {
      update(pages[0])
      backBtn.style.display = 'none'
      value1.style.display = 'none'
      value2.style.display = 'none'
      value3.style.display = 'none'
   }
}
setInterval(upd, 0);




// let sizesArr = ["10px", "20px", "30px", "40px"]
// let size = sizesArr[0]

// console.log(size)





// let sizeNumber = 0

let c = 3
let m = 1
res.value = res()
function gradeCursor() {
   if (txt.innerText >= c) {
      // for (let i = 0; i < circles.length; i++) {
      //    let sizesArr = ["10px", "20px", "30px", "40px", "50px", "60px", "70px", "80px", "90px", "100px"]
      //    let size = sizesArr[(sizeNumber)]
      //    circles[i].style.width = size
      //    circles[i].style.height = size
      // }
      // sizeNumber++
      txt.innerText -= c
      res.value -= c
      c *= 3
      m += 1
      value1.innerText *= 3

      squareSize += 10
      // btn.onclick = () => {
      //    res.value += m
      //    k += m
      //    txt.innerText = res.value
      // }
   }
}


let b = 400
let aa = 1
function gradeCirle() {
   if (txt.innerText >= b) {
      txt.innerText -= b
      res.value -= b
      aa *= 2
      b *= aa
      m *= 3
      value2.innerText *= aa
   }
}

// let f = 7000
// let aa = 1
// function gradeAuto() {
//    if (txt.innerText >= f) {
//       txt.innerText-=f
//       res.value-=f
//       aa*=2
//       f*=aa
//       m*=2
//       value3.innerText*=aa
//    }
// }




// let squareBorderValue =  0
let f = 0
let ab = 8
function gradeAuto() {
   if (txt.innerText >= f) {
      txt.innerText -= f
      res.value -= f
      f *= 4
      value3.innerText *= 4

      setInterval(() => {
         res.value += ab
         txt.innerText = res.value
         let iiId = ii + "-square"

         let posLeft = Math.floor(Math.random() * 95) + "%"
         let posTop = Math.floor(Math.random() * 95) + "%"
         square = document.createElement("custom-square");
         square.setAttribute("id", iiId);
         square.setAttribute("size", "25px");
         square.setAttribute("color", "black");
         square.setAttribute("border-radius", "50%");
         square.setAttribute("position", "absolute");
         square.setAttribute("transition", "all .9s");
         square.setAttribute("left", posLeft);
         square.setAttribute("top", posTop);
         square.setAttribute("z-index", "-1");
         square.setAttribute("border", "solid " + squareColor[squareColorValue] + " 5px");
         wrapper.appendChild(square);
         ii++
         let squareNumber = document.getElementById(iiId)
         setTimeout(() => {
            if (squareNumber.hasAttributes("left", posLeft)) {
               squareNumber.setAttribute("left", "50%")
               squareNumber.setAttribute("top", "50%")
            }
         }, 50);
         setTimeout(() => {
            squareNumber.remove()
         }, 800);
      }, 1000);
      ab += 4


   }
}

let randomItemAutoPosLeft = ["50%", "70%", "90%", "70%", "50%", "30%", "10%", "30%"]
let randomItemAutoPosTop = ["10%", "30%", "50%", "70%", "90%", "70%", "50%", "30%"]

