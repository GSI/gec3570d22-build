(function(){$(function(){var t,r;return t=["pp-airplane.jpg","pp-field_of_dreams.jpg","pp-rise_up.jpg"],r=t[Math.floor(Math.random()*t.length)],$("#rotating div").css("background","url('/assets/images/headers/"+r+"') no-repeat"),$(".post .entry-content a").not(".nocb").colorbox({iframe:!0,width:"67%",height:"97%",opacity:1}),$("img").not(".nocb").on("click",function(){return $(this).colorbox({href:""+this.src,maxWidth:"67%",maxHeight:"97%"})}),$("img").not(".noanchor").wrap(function(){return"<a title='"+this.title+"' href='"+this.src+"' />"}),$("img.crop").parent().css("display","block"),$("img.crop").parent().css("height","200px"),$("img.crop").parent().css("overflow","hidden"),$("img.crop").css("margin","-33% 0")})}).call(this);