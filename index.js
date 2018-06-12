const bodyWidth = $("body").width();
const bodyHeight = $("body").height();
const circleWidth = 40;
const circleRadius = circleWidth/2;

for (var x=0; x<bodyWidth; x+=60) {
  for (var y=0; y<bodyHeight; y+=60) {
    $("body").append("<div class='circle-shadow' data-x='"+x+"' data-y='"+y+"' style='top:"+y+"px;left:"+x+"px'></div>");
    $("body").append("<div class='circle' data-x='"+x+"' data-y='"+y+"' style='top:"+y+"px;left:"+x+"px'></div>");
  }
}

const circles = $(".circle");

try {
  $(window).on("mousemove",function(document){
    circles.each(function(i){
      const oneCircle = circles.eq(i),
          x0=+oneCircle.data("x")+circleRadius,
          y0=+oneCircle.data("y")+circleRadius,
          dx=document.clientX-x0,
          dy=document.clientY-y0;
      
          
      return Math.sqrt(dx*dx+dy*dy)<circleWidth?(function(){
        oneCircle.removeClass("transition");
        oneCircle.css({
          left:x0-dx-circleRadius+"px",
          top:y0-dy-circleRadius+"px"
        });
      })():(function(){
        oneCircle.addClass("transition");
        oneCircle.css({
          left:x0-circleRadius+"px",
          top:y0-circleRadius+"px"
        });
      })();
    });
  });
} catch(window) {
  if (window) {
    alert(window);
  }
}