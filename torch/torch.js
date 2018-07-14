function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svgNS = svg.namespaceURI;
var height = window.innerHeight;
var width = window.innerWidth;
svg.style.position="fixed";
svg.style.zIndex="999";
svg.style.height=height*2;
svg.style.width = width*2;
svg.style.left="-0%";
svg.style.top="-0%";
svg.style.opacity = "0.95";

newpath = document.createElementNS(svgNS,"path");
newpath.setAttribute("id","hover-circle");
newpath.setAttributeNS(null, "d", "M0,0 " + width + ",0 " + width + "," + height + " 0," + height + "M-50,0a50,50 0 1,0 100,0a50,50 0 1,0 -100,0 z"); 
newpath.setAttributeNS(null, "fill-rule", "evenodd");
svg.appendChild(newpath);
document.body.prepend(svg);

curx = 0;
cury = 0;

window.setInterval(function(){
    path= document.getElementById("hover-circle");
    x = curx + getRandomInt(-30,30);
    y = cury + getRandomInt(-30,30);
    path.setAttribute("d", "M0,0 " + width + ",0 " + width + "," + height + " 0," + height + " M"+(x-50)+","+y+"a50,50 0 1,0 100,0a50,50 0 1,0 -100,0 z");
  }, 20);

onmousemove = function(e) {
    curx = e.clientX;
    cury = e.clientY;
}

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

addStyleString('body { cursor: url("./torch.png") 2 2, pointer; }');