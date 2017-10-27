'use strict';
var header = document.getElementById('theCanvas2');
var tHead = document.getElementById('headerTable');
//var footer = document.getElementById('theCanvas');

var disable = true;

header.addEventListener('mousedown', () => {
  disable = !disable;  
}, false);

tHead.addEventListener('mousedown', () => {
  var canvas = document.getElementById('theCanvas2');
  var canvas2 = document.getElementById('theCanvas');
  
  if (canvas.getContext && canvas2.getContext) {
    var context = canvas.getContext('2d');
    var context2 = canvas2.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
  }
});

document.addEventListener('mousemove', (event) => {
  if(disable) return;
  
        var size = 5;//Math.floor(Math.random() * 10);
      var size2 = 10;//Math.floor(Math.random() * 10);
  
        var rainbow = function(numOfSteps, step) {
          var r, g, b;
          var h = step / numOfSteps;
          var i = ~~(h * 6);
          var f = h * 6 - i;
          var q = 1 - f;
          switch(i % 6){
              case 0: r = 1; g = f; b = 0; break;
              case 1: r = q; g = 1; b = 0; break;
              case 2: r = 0; g = 1; b = f; break;
              case 3: r = 0; g = q; b = 1; break;
              case 4: r = f; g = 0; b = 1; break;
              case 5: r = 1; g = 0; b = q; break;
          }
          var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
          return (c);
      }
        
        
    var header = document.getElementById('theCanvas2');

    var hTop = header.style.top;
  
    var hLeft = header.style.left;
  
      var color = rainbow(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
      var stroke = rainbow(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));

      
      var canvas = document.getElementById('theCanvas2');
        if (canvas.getContext) {
          var context = canvas.getContext('2d');
          
          context.globalAlpha=0.8;
          
          context.strokeStyle = stroke;
          context.fillStyle = color;

          var top = Math.floor((event.pageY - hTop) / 1.5) - 8,
              left = Math.floor((event.pageX - hLeft) / 5) - 5;

          context.fillRect(left, top, size, size2);
          //context.strokeRect(left, top, size, size);
        }
}, false);

(setInterval(
    function() {
      
      if(disable) return;
      
      var rainbow = function(numOfSteps, step) {
          var r, g, b;
          var h = step / numOfSteps;
          var i = ~~(h * 6);
          var f = h * 6 - i;
          var q = 1 - f;
          switch(i % 6){
              case 0: r = 1; g = f; b = 0; break;
              case 1: r = q; g = 1; b = 0; break;
              case 2: r = 0; g = 1; b = f; break;
              case 3: r = 0; g = q; b = 1; break;
              case 4: r = f; g = 0; b = 1; break;
              case 5: r = 1; g = 0; b = q; break;
          }
          var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
          return (c);
      }
      
      var size = Math.floor(Math.random() * 50);
      var size2 = Math.floor(Math.random() * 50);
      
      
      var color = rainbow(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
      var stroke = rainbow(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));

      
      var canvas = document.getElementById('theCanvas');
        if (canvas.getContext) {
          var context = canvas.getContext('2d');
          
          context.globalAlpha=0.05;
          
          context.strokeStyle = stroke;
          context.fillStyle = color;

          var top = Math.floor(Math.random() * 100),
              left = Math.floor(Math.random() * 500);

          context.fillRect(left-25, top, size, size2);
          //context.strokeRect(left, top, size, size);
        }

//        color = rainbow(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
//        stroke = rainbow(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50));
//
//
//      var canvas2 = document.getElementById('theCanvas2');
//        if (canvas2.getContext) {
//          var context = canvas2.getContext('2d');
//          
//          context.globalAlpha=0.01;
//          
//          context.strokeStyle = stroke;
//          context.fillStyle = color;
//
//          var top = Math.floor(Math.random() * 100),
//              left = Math.floor(Math.random() * 500);
//
//          context.fillRect(left-25, top-25, size, size2);
//          //context.strokeRect(left, top, size, size * 2);
//        }
    }, 1)
);




