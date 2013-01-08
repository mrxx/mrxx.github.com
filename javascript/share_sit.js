var sites = [
//  { name : "体感游戏", url : "http://mrxx.github.com", img : "http://mrxx.github.com/images/motion_game.png" },
];

hostRegexp = new RegExp(location.host);
for(var i = 0; i < sites.length; i++){
  if(hostRegexp.test(sites[i].url)){
    sites.splice(i,1);
  }
}
idx = parseInt(Math.random() * 10,10) % sites.length;
site = sites[idx];
//document.write("<h3>"+site.name+"</h3><div class='rq_relation'> <div class='img'><a href='"+ site.url +"' target='_blank'><img src='"+ site.img +"' /></a></div></div>");
