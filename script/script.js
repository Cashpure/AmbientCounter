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
let menuItem = document.getElementsByClassName('menu-item')
let congrats = document.getElementById('congrats')
let ach = document.getElementsByClassName('ach')
let ach1 = document.getElementById('ach-1')
let achBack = document.getElementById('ach-back')
let question = document.getElementsByClassName('question')


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

function abbreviateNumber(value) {
   let newValue = value;
   if (value >= 1000) {
      let suffixes = ["", "k", "m", "b", "t"];
      let suffixNum = Math.floor(("" + value).length / 3);
      let shortValue = '';
      for (let precision = 2; precision >= 1; precision--) {
         shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
         let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
         if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
   }
   return newValue;
}

let k = 0;
function func() {
   return function count() {
      return k++
   }
}
let res = func()

let cup
let cupGoal
let square
let ii = 0
let squareSize = 5
let squareBorderSize = 2
let squareColor = ["white", "black"]
let squareColorValue = 0
let congratsStep = 1000000
let congratsArr = ["1m", "10m", "100m", "1b", "10b", "100b", "1t", "10t", "100t"]
let ca = 0
btn.onclick = () => {
   res.value += m
   txt.innerText = abbreviateNumber(res.value)
   let iiId = ii + "-square"

   let posLeft = Math.floor(Math.random() * 95) + "%"
   let posTop = Math.floor(Math.random() * 95) + "%"
   square = document.createElement("custom-square");
   square.setAttribute("id", iiId);
   square.setAttribute("size", squareSize + "px");
   square.setAttribute("color", "white");
   square.setAttribute("border-radius", "50%");
   square.setAttribute("border", "solid " + squareBorderSize + "px " + squareColor[squareColorValue])
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
   console.log(res.value)
   console.log(value1.value)

   if (res.value >= congratsStep) {
      cup = document.createElement("img")
      cupGoal = document.createElement("p")
      cup.setAttribute("id", "cup")
      cup.setAttribute("src", "../pics/golden-cup-7825.svg")
      cupGoal.setAttribute("id", "cup-goal")
      cupGoal.innerText = congratsArr[ca]
      question[ca].style.display = "none"
      ach[ca].appendChild(cup);
      ach[ca].appendChild(cupGoal);

      congratsStep *= 10
      congrats.innerText = "Congrats with " + congratsArr[ca] + "!"
      ca++
      congrats.style.display = "block"
      setTimeout(() => {
         $(function () {
            $('#congrats').fadeOut()
         })
      }, 3000);
   }

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
   // $(document).bind('contextmenu', function (e) {
   //    e.preventDefault();
   // })
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
      "button text": ["Upgrade", "Achievements", "Switch",],
      "button functions": [goUp, achievements, switchTheme],
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


function achievements() {
   container.style.transform = "translateX(0)"
   crsr.style.zIndex = "101"
   if (body[0].classList.contains('body--switched')) {
      crsr.classList.toggle('cursor--switched')
      crsr.classList.toggle('cursor--menu')
      crsr.classList.toggle('cursor--menu__switched')
      for (let i = 0; i < soundEls.length; i++) {
         soundEls[i].classList.toggle('equa__el--switched')
      }
      if (squareColorValue < 1) {
         squareColorValue++
      } else {
         squareColorValue--
      }
   }

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

let c = 30
let m = 1
res.value = res()
value1.value = c
value1.innerText = abbreviateNumber(value1.value)

function gradeCursor() {
   if (res.value >= c) {
      // for (let i = 0; i < circles.length; i++) {
      //    let sizesArr = ["10px", "20px", "30px", "40px", "50px", "60px", "70px", "80px", "90px", "100px"]
      //    let size = sizesArr[(sizeNumber)]
      //    circles[i].style.width = size
      //    circles[i].style.height = size
      // }
      // sizeNumber++
      res.value -= c
      txt.innerText = abbreviateNumber(res.value)
      c *= 2
      m += 4
      value1.value *= 2
      value1.innerText = abbreviateNumber(value1.value)

      squareSize += 4
      // btn.onclick = () => {
      //    res.value += m
      //    k += m
      //    txt.innerText = res.value
      // }
   } else {
      value1.style.color = "red"
      value1.style.transition = "all .3s"
      setTimeout(() => {
         value1.style.color = body[0].style.color
      }, 300);
   }
}


let b = 250
value2.value = b
value2.innerText = abbreviateNumber(value2.value)
let aa = 1
function gradeCirle() {
   if (res.value >= b) {
      res.value -= b
      txt.innerText = abbreviateNumber(res.value)
      aa *= 2
      b *= aa
      m *= 3
      value2.value *= aa
      value2.innerText = abbreviateNumber(value2.value)
      squareBorderSize += 3


   } else {
      value2.style.color = "red"
      value2.style.transition = "all .3s"
      setTimeout(() => {
         value2.style.color = body[0].style.color
      }, 300);
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
let f = 300000
value3.value = f
value3.innerText = abbreviateNumber(value3.value)

let ab = 100000
function gradeAuto() {
   if (res.value >= f) {
      res.value -= f
      txt.innerText = abbreviateNumber(res.value)
      f *= 3
      value3.value *= 3
      value3.innerText = abbreviateNumber(value3.value)

      setInterval(() => {
         res.value += ab        
         txt.innerText = abbreviateNumber(res.value)
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
         if (res.value >= congratsStep) {
            cup = document.createElement("img")
            cupGoal = document.createElement("p")
            cup.setAttribute("id", "cup")
            cup.setAttribute("src", "../pics/golden-cup-7825.svg")
            cupGoal.setAttribute("id", "cup-goal")
            cupGoal.innerText = congratsArr[ca]
            question[ca].style.display = "none"
            ach[ca].appendChild(cup);
            ach[ca].appendChild(cupGoal);

            congratsStep *= 10
            congrats.innerText = "Congrats with " + congratsArr[ca] + "!"
            ca++
            congrats.style.display = "block"
            setTimeout(() => {
               $(function () {
                  $('#congrats').fadeOut()
               })
            }, 3000);
         }
      }, 1000);
      ab *= 2


   } else {
      value3.style.color = "red"
      value3.style.transition = "all .3s"
      setTimeout(() => {
         value3.style.color = body[0].style.color
      }, 300);
   }
}

let randomItemAutoPosLeft = ["50%", "70%", "90%", "70%", "50%", "30%", "10%", "30%"]
let randomItemAutoPosTop = ["10%", "30%", "50%", "70%", "90%", "70%", "50%", "30%"]

let container = document.getElementById('container')
achBack.onclick = () => {
   container.style.transform = "translateX(100%)"
   crsr.style.zIndex = "-1"
   if (body[0].classList.contains('body--switched')) {
      crsr.classList.toggle('cursor--switched')
      // crsr.classList.toggle('cursor--menu')
      // crsr.classList.toggle('cursor--menu__switched')
      for (let i = 0; i < soundEls.length; i++) {
         soundEls[i].classList.toggle('equa__el--switched')
      }
      if (squareColorValue < 1) {
         squareColorValue++
      } else {
         squareColorValue--
      }
   }
   
}