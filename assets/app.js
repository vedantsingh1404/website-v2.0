//jshint esversion: 6

var rellax = new Rellax('.rellax');

var particles2 = Particles.init({
  selector: '.pro-back',
  color: '#ffffff',
  connectParticles: true,
  maxParticles: 70,
  responsive: [{
    breakpoint: 1200,
    options: {
      maxParticles: 60
    }
  }, {
    breakpoint: 1000,
    options: {
      maxParticles: 50
    }
  }, {
    breakpoint: 800,
    options: {
      maxParticles: 80,
      connectParticles: false
    }
  }, {
    breakpoint: 600,
    options: {
      maxParticles: 70,
      connectParticles: false
    }
  }, {
    breakpoint: 400,
    options: {
      maxParticles: 60,
      connectParticles: false
    }
  }, {
    breakpoint: 200,
    options: {
      maxParticles: 50,
      connectParticles: false
    }
  }]

});

var particles3 = Particles.init({
  selector: '.note-back',
  color: '#7f7f7f',
  connectParticles: true,
  maxParticles: 100,
  responsive: [{
    breakpoint: 1200,
    options: {
      maxParticles: 80
    }
  }, {
    breakpoint: 1000,
    options: {
      maxParticles: 60
    }
  }, {
    breakpoint: 800,
    options: {
      maxParticles: 70,
      connectParticles: false
    }
  }, {
    breakpoint: 600,
    options: {
      maxParticles: 60,
      connectParticles: false
    }
  }, {
    breakpoint: 400,
    options: {
      maxParticles: 50,
      connectParticles: false
    }
  }, {
    breakpoint: 200,
    options: {
      maxParticles: 40,
      connectParticles: false
    }
  }]
});




var particles1 = Particles.init({
  selector: '.main-back',
  color: '#000000',
  maxParticles: 130,
  speed: 0.3,
  connectParticles: true,
  responsive: [{
    breakpoint: 1200,
    options: {
      maxParticles: 100
    }
  }, {
    breakpoint: 1000,
    options: {
      maxParticles: 80
    }
  }, {
    breakpoint: 800,
    options: {
      maxParticles: 60
    }
  }, {
    breakpoint: 600,
    options: {
      maxParticles: 80,
      connectParticles: false
    }
  }, {
    breakpoint: 400,
    options: {
      maxParticles: 60,
      connectParticles: false
    }
  }, {
    breakpoint: 200,
    options: {
      maxParticles: 50,
      connectParticles: false
    }
  }]

});

document.addEventListener('DOMContentLoaded', function(event) {
  var dataText = ["gamer.", "programmer.", "innovator."];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(".desc").innerHTML = text.substring(0, i + 1) + '<span></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 90);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function typeWriterDel(text, i, fnCallback) {
    if (i > 0) {
      document.querySelector(".desc").innerHTML = text.substring(0, i - 1) + '<span></span>';

      setTimeout(function() {
        typeWriterDel(text, i - 1, fnCallback);
      }, 90);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function() {
        StartTextAnimation(0);
      }, 0);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function() {
        typeWriterDel(dataText[i], dataText[i].length, function() {
          StartTextAnimation(i + 1);
        });
      });
    }
  }
  
  StartTextAnimation(0);
});
