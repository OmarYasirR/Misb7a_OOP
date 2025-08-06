let misCont = document.querySelector('.mis-cont')
let form = document.querySelector('form')
let Habat = document.querySelector('#habat')
let Zikr = document.querySelector('#zikr')
let btn = document.querySelector('.btn')
let addBtn = document.querySelector('.adding')
let overLay = document.querySelector('.over-lay')
let zkrTooltip = document.querySelector('.zikr-tooltip')
let hbtTooltip = document.querySelector('.habat-tooltip')
let remvForm = document.querySelector('.remvForm')
let home = document.querySelector('.home')
let scren2 = document.querySelector('.scren2')


class ZIKR {
  constructor(habat, zikr){
    this.a = 0
    this.ejmali = 0
    this.h = habat,
    this.z = zikr
    this.dwrat = 0
  };
  increce(){
      if (this.a < this.h){
        this.a += 1
      }else{
        this.a = 0
        this.dwrat += 1
      }
      this.ejmali += 1
  }
}

let Azkar = []
let showModle = false

const zikrInit = () => {
  misCont.innerHTML = ''
  Azkar.forEach((zk, i) => {
    misCont.innerHTML += `
      <div class="zikrr" id='${i}'>
        <span>${Azkar[i].z}</span>
        <span class="zkr-action" id='${i}'>
          <span class='delet'>حذف</span>
          <span class='edit'>تعديل</span>
        </span>
      </div>
    `
})
}
const ScreenTow = (i) => {
  scren2.innerHTML = `
  <div class="zkr-cont">
    <div class="back">رجوع</div>
    <div class="zkr">${Azkar[i].z}</div>
    <div class='nums'>
      <span>${Azkar[i].h}</span>
      <span>${Azkar[i].ejmali}</span>
      <span>${Azkar[i].a}</span>
      <span>${Azkar[i].dwrat}</span>
    </div>
    <div class="btn" id=${i}></div>
  </div>
`
}

Zikr.addEventListener('blur', () => {
  zkrTooltip.style.display = Zikr.value == '' ?  'block' : 'none'
})
Habat.addEventListener('blur', () => {
  hbtTooltip.style.display = Habat.value == '' ?  'block' : 'none'
})

form.addEventListener('submit', (e) =>{
  e.preventDefault()
  
  Zikr.value == ''? zkrTooltip.style.display = 'block': 'none'
  Habat.value == ''? hbtTooltip.style.display = 'block': 'none'

  if (Zikr.value !== '' & Habat.value !== '') {
    let newZikr = new ZIKR(Habat.value, Zikr.value)
    Azkar.push(newZikr)
    zikrInit()
    form.reset()
    zkrTooltip.style.display = 'none'
    hbtTooltip.style.display = 'none'
  }
  addBtn.style.bottom = Azkar.length ? '45px' : '50%' 
  addBtn.style.right = Azkar.length ?'42px' :  '50%'
  addBtn.style.transform = Azkar.length ? 'translate(0, 0)' : 'translate(50%, 50%)' 
})

addBtn.onclick = () => {
  form.style.display = 'flex'
  overLay.style.display = 'block'
  zkrTooltip.style.display = 'none'
  hbtTooltip.style.display = 'none'
}
remvForm.onclick = () => {
  form.reset()
  overLay.style.display = 'none'
  form.style.display = 'none'
}
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn')){
    
    Azkar[e.target.id].increce()
    ScreenTow(parseInt(e.target.id))
  }
})

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('delet')){
    console.log(e.target.parentElement.id)
    AA = Azkar.filter((z,i) => {
      return i != e.target.parentElement.id
    })
    Azkar = AA
    addBtn.style.bottom = Azkar.length ? '45px' : '50%' 
    addBtn.style.right = Azkar.length ?'42px' :  '50%'
    addBtn.style.transform = Azkar.length ? 'translate(0, 0)' : 'translate(50%, 50%)' 
    zikrInit()
  }
})

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('edit')){
    let z = Azkar[e.target.parentElement.id]
    Zikr.value = z.z
    Habat.value = z.h
    form.style.display = 'flex'
    AA = Azkar.filter((_,i) => {
      return i != e.target.parentElement.id
    })
    Azkar = AA
    zikrInit()
  }
})
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('zikrr')){
    let i = parseInt(e.target.id)
    scren2.innerHTML = `
  <div class="zkr-cont">
    <div class="back">رجوع</div>
    <div class="zkr">${Azkar[i].z}</div>
    <div class='nums'>
      <span>${Azkar[i].h}</span>
      <span>${Azkar[i].ejmali}</span>
      <span>${Azkar[i].a}</span>
      <span>${Azkar[i].dwrat}</span>
    </div>
    <div class="btn" id=${i}></div>
  </div>
`
  }
})
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('back')){
      e.target.parentElement.style.display = 'none'
    
  }
})

{/* <div class="zkr-cont">
<div class="back">رجوع</div>
<div class="zkr">${Azkar[i].z}</div>
<div>
  <span>${zk.h}</span>
  <span>${zk.ejmali}</span>
  <span>${zk.a}</span>
  <span>${zk.dwrat}</span>
</div>
<div class="btn" id=${i}></div>
</div> */}