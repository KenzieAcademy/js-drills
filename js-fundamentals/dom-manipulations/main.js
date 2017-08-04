
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don\'t click me so hard!");
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var number = Number(document.getElementById('compoundInvestment').innerHTML);
  document.getElementById('compoundInvestment').innerHTML = number * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var color = document.getElementById("circle-bw").style.backgroundColor

  if (color !== "black") {
    document.getElementById("circle-bw").style.backgroundColor = "black";
  }
  if (color === "black") {
    document.getElementById("circle-bw").style.backgroundColor = "white";
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
 var circle = document.querySelector('.circle-red')
 console.log(circle)
 if (circle.clientWidth <= 320) {
   circle.style.width = (circle.clientWidth * 2) + 'px'
   circle.style.height = (circle.clientHeight * 2) + 'px'
 }
 else {
   circle.style.width = '40px'
   circle.style.height = '40px'
 }
})

var inactiveShowing = true
document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userListEl = document.querySelector('#userList')
  var listItems = userListEl.querySelectorAll('li.inactive')
  for (var i = 0; i < listItems.length; i ++) {
    // userListEl.removeChild(listItems[i])
    if (inactiveShowing) {
        listItems[i].style.display = 'none'
      }
    else {
      listItems[i].style.display = 'list-item'
    }
  }
  if (inactiveShowing) inactiveShowing = false
  else inactiveShowing = true
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
 var squaresNodeList = document.querySelectorAll('.square')
 var squares = []
 var answerBox = document.querySelector('#reverse-squares .answer-box')

 squaresNodeList.forEach(function(squareNodeItem) {
   squares.push(squareNodeItem)
 })

 squares.reverse()

 answerBox.innerHTML = ''

 squares.forEach(function(square) {
   answerBox.appendChild(square)
 })
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  // var taskList = document.getElementById("tasks").getElementsByTag('li');
  var tasks = document.querySelectorAll("#tasks li")

  tasks.forEach(function(task) {
      task.innerHTML = task.innerHTML.split('').reverse().join('')
  })
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var image = document.getElementById("city-img")
  var newSrc = image.getAttribute('src')
  var newSrcNumber
  newSrc = newSrc.split('/')
  newSrcNumber = Number(newSrc[6])

  if (newSrcNumber >= 9) {
    newSrcNumber = 1
  }
  else {
    newSrcNumber += 1
  }
  newSrc[6] = newSrcNumber
  newSrc = newSrc.join('/')

  image.setAttribute('src', newSrc)
})
