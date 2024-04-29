function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200, 240, 255); // Light blue sky background

  // Draw tree 1
  fill(139, 69, 19); // Brown for tree trunk
  rect(400, 200, 20, 150); // Tree trunk
  fill(34, 139, 34); // Green for tree leaves
  ellipse(410, 150, 80, 80); // Upper part of tree
  ellipse(380, 180, 80, 80);
  ellipse(440, 180, 80, 80);
  ellipse(410, 220, 80, 80);
  
  // Draw house
  fill(255, 192, 203); // Pink for house body
  rect(150, 200, 200, 150); // House body
  fill(255, 255, 102); // Yellow for roof
  triangle(150, 200, 250, 100, 350, 200); // Roof
  fill(139, 69, 19); // Brown for door
  rect(220, 285, 60, 65); // Door
  fill(255); // White for windows
  rect(180, 220, 40, 40); // Left window
  rect(280, 220, 40, 40); // Right window
  
  // Draw tree 2
  fill(139, 69, 19); // Brown for tree trunk
  rect(80, 200, 20, 150); // Tree trunk
  fill(34, 139, 34); 
  ellipse(110, 150, 80, 80); // Top part of tree
  fill(34, 119, 34)
  ellipse(80, 180, 75, 75); // Middle part of tree
  fill(14, 119, 84)
  ellipse(140, 180, 80, 80); // Right part of tree
  fill(10, 150, 7)
  ellipse(45, 180, 70, 70); // Left part of tree
  fill(14, 119, 84)
  ellipse(90, 220, 90, 90); // Bottom part of tree
  
}
