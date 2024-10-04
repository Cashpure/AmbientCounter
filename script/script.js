let c1 = document.getElementById('circle-1')
let c2 = document.getElementById('circle-2')
let c3 = document.getElementById('circle-3')
let c4 = document.getElementById('circle-4')
let c5 = document.getElementById('circle-5')
let c6 = document.getElementById('circle-6')
let c7 = document.getElementById('circle-7')
let c8 = document.getElementById('circle-8')
let c9 = document.getElementById('circle-9')
let c10 = document.getElementById('circle-10')
let c11 = document.getElementById('circle-11')
let c12 = document.getElementById('circle-12')
let c13 = document.getElementById('circle-13')
let c14 = document.getElementById('circle-14')
let c15 = document.getElementById('circle-15')
let c16 = document.getElementById('circle-16')
let c17 = document.getElementById('circle-17')
let c18 = document.getElementById('circle-18')
let c19 = document.getElementById('circle-19')
let c20 = document.getElementById('circle-20')
let c21 = document.getElementById('circle-21')
let c22 = document.getElementById('circle-22')
let c23 = document.getElementById('circle-23')
let c24 = document.getElementById('circle-24')
let c25 = document.getElementById('circle-25')
let c26 = document.getElementById('circle-26')
let c27 = document.getElementById('circle-27')
let c28 = document.getElementById('circle-28')
let c29 = document.getElementById('circle-29')
let c30 = document.getElementById('circle-30')
let c31 = document.getElementById('circle-31')
let c32 = document.getElementById('circle-32')
let c33 = document.getElementById('circle-33')
let c34 = document.getElementById('circle-34')
let c35 = document.getElementById('circle-35')
let c36 = document.getElementById('circle-36')
let c37 = document.getElementById('circle-37')
let c38 = document.getElementById('circle-38')
let c39 = document.getElementById('circle-39')
let c40 = document.getElementById('circle-40')
let c41 = document.getElementById('circle-41')
let c42 = document.getElementById('circle-42')
let c43 = document.getElementById('circle-43')
let c44 = document.getElementById('circle-44')
let c45 = document.getElementById('circle-45')
let c46 = document.getElementById('circle-46')
let allCircles = document.getElementsByClassName('circle')
let cAuto1 = document.getElementById('circle__auto-1')
let cAuto2 = document.getElementById('circle__auto-2')
let cAuto3 = document.getElementById('circle__auto-3')
let cAuto4 = document.getElementById('circle__auto-4')
let cAuto5 = document.getElementById('circle__auto-5')
let cAuto6 = document.getElementById('circle__auto-6')
let cAuto7 = document.getElementById('circle__auto-7')
let cAuto8 = document.getElementById('circle__auto-8')
let body = document.getElementsByTagName('body')
let menu = document.getElementById('menu')
let crsr = document.getElementById('cursor')

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

let circles = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46]
let circlesAuto = [cAuto1, cAuto2, cAuto3, cAuto4, cAuto5, cAuto6, cAuto7, cAuto8]

let button = document.getElementsByClassName('btn')
let txt = document.getElementById('text')


let btn = document.getElementById('btn')

const abbreviateNumber = (value) => {
   const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];
   const tier = Math.floor(Math.log10(Math.abs(value)) / 3);
   if (tier === 0) return value.toString();
   const suffix = SI_SYMBOL[tier];
   const scale = Math.pow(10, tier * 3);
   const scaled = value / scale;
   return scaled.toFixed(1) + suffix;
}

let k = 0;
function func() {
   return function count() {
      return k++
   }
}
let res = func()
btn.onclick = () => {
   res.value += 1
   txt.innerText = res.value
}

function plus() {

}




// console.log(posLeft)


$(function () {
   $('.btn').on('click', function (e) {
      e.preventDefault()
      let randomItem = circles[Math.floor(Math.random() * circles.length)]
      let posLeft = Math.floor(Math.random() * 95) + "%"
      let posTop = Math.floor(Math.random() * 95) + "%"
      randomItem.style.top = posTop
      randomItem.style.left = posLeft
      if ($(randomItem).hasClass('circle--active')) {


      }
      $(randomItem).fadeIn()
      $(randomItem).addClass('circle--active')
      setTimeout(() => {

         $(randomItem).removeClass('circle--active')
         $(randomItem).fadeOut('slow')
      }, 600)
      randomItem.style.top = "50%"
      randomItem.style.left = "50%"
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









const lerp = (a, b, n) => (1 - n) * a + n * b;

class Cursor {
   constructor() {
      // config
      this.target = { x: 0.5, y: 0.5 }; // mouse position
      this.cursor = { x: 0.5, y: 0.5 }; // cursor position
      this.speed = 0.2;
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
   circles.forEach((el) => {
      el.classList.toggle("circle--switched")
   })
   circlesAuto.forEach((el) => {
      el.classList.toggle("circle__auto--switched")
   })
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





let sizeNumber = 0

let c = 30
let m = 1
res.value = res()
function gradeCursor() {
   if (txt.innerText >= c) {
      for (let i = 0; i < circles.length; i++) {
         let sizesArr = ["10px", "20px", "30px", "40px", "50px", "60px", "70px", "80px", "90px", "100px"]
         let size = sizesArr[(sizeNumber)]
         circles[i].style.width = size
         circles[i].style.height = size
      }
      sizeNumber++
      txt.innerText -= c
      res.value -= c
      c *= 3
      m += 1
      value1.innerText *= 3
      btn.onclick = () => {
         res.value += m
         k += m
         txt.innerText = res.value
      }
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





let f = 7000
let ab = 8
function gradeAuto() {
   if (txt.innerText >= f) {
      txt.innerText -= f
      res.value -= f
      f *= 4
      value3.innerText *= 4
      if (i <= 7) {

         circlesAuto[i].style.display = "block"
      }
      console.log(i)


      setInterval(() => {
         res.value += ab
         txt.innerText = res.value
         // let randomItemAuto = circlesAuto[Math.floor(Math.random() * circlesAuto.length)]
         // if (i < randomItemAutoPosLeft.length) {
         //    i = i + 1
         // } else {
         //    i = 0
         // }
         // randomItemAuto.style.left = randomItemAutoPosLeft[i]
         // randomItemAuto.style.top = randomItemAutoPosTop[i]
         // circlesAuto[i].style.top = randomItemAutoPosTop[i]
         // circlesAuto[i].style.left = randomItemAutoPosLeft[i]
         cAuto1.style.top = randomItemAutoPosTop[0]
         cAuto1.style.left = randomItemAutoPosLeft[0]
         cAuto2.style.top = randomItemAutoPosTop[1]
         cAuto2.style.left = randomItemAutoPosLeft[1]
         cAuto3.style.top = randomItemAutoPosTop[2]
         cAuto3.style.left = randomItemAutoPosLeft[2]
         cAuto4.style.top = randomItemAutoPosTop[3]
         cAuto4.style.left = randomItemAutoPosLeft[3]
         cAuto5.style.top = randomItemAutoPosTop[4]
         cAuto5.style.left = randomItemAutoPosLeft[4]
         cAuto6.style.top = randomItemAutoPosTop[5]
         cAuto6.style.left = randomItemAutoPosLeft[5]
         cAuto7.style.top = randomItemAutoPosTop[6]
         cAuto7.style.left = randomItemAutoPosLeft[6]
         cAuto8.style.top = randomItemAutoPosTop[7]
         cAuto8.style.left = randomItemAutoPosLeft[7]
         setTimeout(() => {
            circlesAuto.forEach((el) => {
               el.style.top = "50%"
               el.style.left = "50%"
            })
         }, 500);
      }, 1000);
      ab += 4
      if (i < circlesAuto.length) {
         i++
      }

   }
}

let randomItemAutoPosLeft = ["50%", "70%", "90%", "70%", "50%", "30%", "10%", "30%"]
let randomItemAutoPosTop = ["10%", "30%", "50%", "70%", "90%", "70%", "50%", "30%"]

let i = 0 