const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1074
canvas.height = 576

context.fillRect(0,0,canvas.width, canvas.height)

const gravity = 0.2
class Sprite {
  constructor({position, velocity}){
    this.position = position
    this.velocity = velocity
    this.height = 150
  }

  render(){
    context.fillStyle ='red'
    context.fillRect(this.position.x, this.position.y, 50, this.height)
  }

  update(){
    this.render()
    
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    }
    else this.velocity.y += gravity
  }
}

const player = new Sprite({
  position:{
  x: 0,
  y: 0
},
velocity : {
  x: 0,
  y: 10
}
})

const enemy = new Sprite({
  position:{
  x: 400,
  y: 100
},
velocity : {
  x: 0,
  y: 0
}
})


console.log(player)


function animate(){
  window.requestAnimationFrame(animate)
  context.fillStyle ='black'
  context.fillRect(0,0,canvas.width,canvas.height)
  player.update()
  enemy.update()
  console.log("go")
}
animate()

window.addEventListener('keydown', (Event))