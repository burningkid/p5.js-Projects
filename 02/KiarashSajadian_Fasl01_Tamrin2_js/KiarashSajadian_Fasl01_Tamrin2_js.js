function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200, 240, 255); // Light blue sky background

  // Draw chimney
  fill(139, 69, 19); // Brown for chimney
  rect(300, 100, 20, 150); //Chimney
  
  // Draw chimney smoke
  line(303, 100, mouseX, 50);
  line(305, 100, mouseX, 25);
  line(307, 100, mouseX, 5);
  line(309, 100, mouseX, 30);
  line(311, 100, mouseX, 35);
  line(313, 100, mouseX, 50);
  line(315, 100, mouseX, 15);
  line(317, 100, mouseX, 25);
    
  // Draw house
  fill(255, 192, mouseY); // Pink for house body
  rect(150, 200, 200, 150); // House body
  fill(255, 255, 102); // Yellow for roof
  triangle(150, 200, 250, 100, 350, 200); // Roof
  fill(139, 69, 19); // Brown for door
  rect(220, 285, 60, 65); // Door
  fill(255); // White for windows
  rect(180, 220, 40, 40); // Left window
  rect(280, 220, 40, 40); // Right window
  
}
