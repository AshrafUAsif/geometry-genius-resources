// Triangle Button
document.getElementById('triangle-card').addEventListener('click', function() {
  calculateAndDisplay('triangle', 'first-geometry', 'result', 'base', 'height', function(base, height) {
    return 0.5 * base * height;
  });
});

// Rectangle Button
document.getElementById('rectangle-card').addEventListener('click', function() {
  calculateAndDisplay('rectangle', 'second-geometry', 'rectangle-result', 'width-rectangle', 'length-rectangle', function(width, length) {
    return width * length;
  });
});

// Parallelogram Button
document.getElementById('parallelogram-card').addEventListener('click', function() {
  calculateAndDisplay('parallelogram', 'third-geometry', 'parallelogram-result', 'parallelogram-base', 'parallelogram-height', function(base, height) {
    return base * height;
  });
});

// Rhombus Button
document.getElementById('rhombus-card').addEventListener('click', function() {
  calculateAndDisplay('rhombus', 'fourth-geometry', 'rhombus-result', 'diagonal1', 'diagonal2', function(diagonal1, diagonal2) {
    return 0.5 * diagonal1 * diagonal2;
  });
});

// Pentagon Button
document.getElementById('pentagon-card').addEventListener('click', function() {
  calculateAndDisplay('pentagon', 'fifth-geometry', 'pentagon-result', 'pentagon-p', 'pentagon-b', function(p, b) {
    return 0.5 * p * b;
  });
});

// Ellipse Button
document.getElementById('ellipse-card').addEventListener('click', function() {
  calculateAndDisplay('ellipse', 'sixth-geometry', 'ellipse-result', 'ellipse-a', 'ellipse-b', function(a, b) {
    return 3.1416 * a * b;
  });
});


//blog button 

document.getElementById('blog').addEventListener('click', function(){
  window.open('blog.html', '_blank');
});







