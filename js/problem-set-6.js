/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
var div = document.getElementById('canvas1').getContext('2d');
div.font = '48px sans-serif';
div.strokeText('Hello world',10,50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let height;
  let width;
  let x;
  let y;
 height = Number(prompt("enter a Height"));
 if( height < 1){
   height = Number(prompt("enter a Height above 0"))
 }
 width = Number(prompt("enter a width"));
 if( width < 1 ){
   height = Number(prompt("enter a width above 0"))
 }
x = Number(prompt("enter X position"));
if( x < 5 ){
  height = Number(prompt("enter a X above 4"))
}
 y = Number(prompt("enter Y position"));
 if( y < 5 ){
   height = Number(prompt("enter a y above 4"))
 }
var div = document.getElementById('canvas2').getContext('2d');
div.strokeRect( x, y, height, width);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
var div = document.getElementById('canvas3').getContext('2d');
let color;
color = prompt("what color do you want?");
if (color === 'blue' || color ===  'black' || color ==='green' ||color === 'orange' ||color === 'purple' || color === 'red' || color === 'yellow' ){
  div.fillStyle = color
  div.fillRect( 10, 10, 100, 50);
}
else {
  alert(`${color} isnt supported`)
  color = null;
}
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  var div = document.getElementById('canvas4').getContext("2d");
div.clearRect(0, 0, div.width, div.height);
 let s1 = Number(prompt("how long should side 1 be?"));
 let s2 = Number(prompt("how long should side 2 be?"));
 let s3 = Number(prompt("how long should side 3 be?"));
if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
  alert("one of your imputs isnt a number.");
} else if ((s1 * s1) + (s2 * s2) != (s3*s3)){//pythagrean therom
  alert("this isnt a valid triangle.");
}else if (s1 > div.width || s2 > div.width){
  alert("this triangle will not fit on the canvas.");
}else {
  div.beginPath();
  div.moveTo(10, 10);
  div.lineTo(10, 10+s1);
  div.lineTo(10+s2, 10+s1);
  div.closePath();
  div.stroke();
}
}
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace(){
  var div = document. getElementById("canvas5").getContext("2d");


  let radius = Number(prompt("what do you want the radius to be?"));
  div.clearRect(0, 0, div.width, div.height);
  if((radius * 2) + 10 > div.width || (radius * 2) + 10 > div.height){
    alert("the smiley face wont fit on canvas");
  }
   if (radius < 1){
     alert("this radius is too small ");
   }
   else{
     div.beginPath();
     div.arc(radius+10, radius+10, radius, 0, 2 * Math.PI);
     div.moveTo((radius*.3)+10+(.1*radius), (radius *.6)+30);
     div.arc(radius*.3+10, radius*.6+30, radius*.1, 0, 2*Math.PI);//left eye
     div.moveTo((radius*1.6)+10+(.1*radius), (radius*.6)+30);
     div.arc(radius*1.6+10, radius*.6 + 30, radius*.1, 0, 2*Math.PI);//right eye
     div.moveTo(radius+10+radius*.7, radius+20);
     div.arc(radius+10, radius+20, radius*.7, 0, 1*Math.PI);
     div.stroke();
   }
 }


/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let outradius = Number(prompt("what should the outer radius be?"));//outer radius
  let inradius  = Number(prompt("what should the inner radius be?"));//inner radius
  var div = document. getElementById("canvas6").getContext("2d");
   div.clearRect(0, 0, div.width, div.height);

   if (isNaN(outradius) || isNaN(inradius)){
     alert("one of your imputs is not a number");
   }else if(outradius < 2){
     alert("your outer radius is too small");
   }else if (inradius < 1){
     alert("your inner radius is too small");
   }else if (outradius <= inradius){
     alert("your outer radius must be larger than you inner radius");
   }else{
     div.beginPath();
    div.moveTo(125, 125 - outradius);
   let x = 0;
    let angle = 0 * Math.PI;
    while (x < 5) {
      div.lineTo(Math.cos(1.3 * Math.PI - angle) * inradius + 125, Math.sin(1.3 * Math.PI - angle) * inradius + 125);
      div.lineTo(Math.cos(1.1 * Math.PI - angle) * outradius + 125, Math.sin(1.1 * Math.PI - angle) * outradius + 125);
      angle = angle + 0.4 * Math.PI;
      x = x + 1;
     }
     div.closePath();
     div.stroke();
     lineWidth = 1;
   }
}
/*


*/
/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
}
