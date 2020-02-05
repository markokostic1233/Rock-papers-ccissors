

let tibiras
let racunarbira
var rezultat = results()

const displej = document.getElementById('results')
const komp = document.getElementById('computer-choice')
const random = Math.round(Math.random() * (3))
const user = document.getElementById('user-choice')
const moguciizbor = document.querySelectorAll('.choices')

moguciizbor.forEach(moguciizbor => moguciizbor.addEventListener('click', (e) => {

  tibiras = e.target.id
  generated()
  results()
  user.innerHTML = tibiras
  komp.innerHTML = racunarbira
  displej.innerHTML = rezultat

}))


function generated(){
   if (random === 1){
      return racunarbira = 'kamen'
   }else if(random === 2){
      return racunarbira = 'papir'
   }else if(random === 3){
      return racunarbira = 'makaze'
   }
}


function results(){
   if(racunarbira === tibiras){
      return rezultat = 'Ovo je nereseno'
   }else if (racunarbira === 'kamen' && tibiras === 'papir'){
      return rezultat = ' Ti si pobedio'
   }else if (racunarbira === 'kamen' && tibiras === 'makaze'){
      return rezultat = ' Ti si pobedio'
   }else if (racunarbira === 'makaze' && tibiras === 'papir'){
      return rezultat = ' Ti si izgubio'
   }else if (racunarbira === 'makaze' && tibiras === 'kamen'){
      return rezultat = ' Ti si pobedio'
   }else if (racunarbira === 'papir' && tibiras === 'makaze'){
      return rezultat = ' Ti si pobedio'
   }else if (racunarbira === 'papir' && tibiras === 'kamen'){
      return rezultat = ' Ti si izgubio'
   }
}

