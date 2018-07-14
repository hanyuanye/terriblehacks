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

newpath = document.createElementNS(svgNS,"path");
newpath.setAttribute("id","hover-circle");
newpath.setAttributeNS(null, "d", "M0,0 " + width + ",0 " + width + "," + height + " 0," + height + "M-50,0a50,50 0 1,0 100,0a50,50 0 1,0 -100,0 z"); 
newpath.setAttributeNS(null, "fill-rule", "evenodd");
svg.appendChild(newpath);
document.body.prepend(svg);

onmousemove = function(e) {
    path= document.getElementById("hover-circle");
    x = e.clientX;
    y = e.clientY;
    path.setAttribute("d", "M0,0 " + width + ",0 " + width + "," + height + " 0," + height + " M"+(x-50)+","+y+"a50,50 0 1,0 100,0a50,50 0 1,0 -100,0 z");
}