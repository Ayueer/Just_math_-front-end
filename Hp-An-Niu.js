<!--按钮动画-->
    $(document).ready(function(){
        $("div.jing").mouseenter(function(){
           $("div.jing").css({"width":"300px","height":"300px","top":"210px","left":"125px","line-height":"300px","opacity":"1"});
            $("div.jing-menu").fadeIn();
        });
    });
    $(document).ready(function(){
        $("div.jing").mouseleave(function(){
            $("div.jing-menu").fadeOut();
            $("div.jing").css({"width":"250px","height":"250px","top":"235px","left":"150px","line-height":"250px","opacity":"0.9"});
        });
    });
    $(document).ready(function(){
        $("div.hu").mouseenter(function(){
            $("div.hu-menu").fadeIn();
        });
    });
    $(document).ready(function(){
        $("div.hu").mouseleave(function(){
            $("div.hu-menu").fadeOut();
        });
    });
    $(document).ready(function(){
        $("div.tong").mouseenter(function(){
            $("div.tong-menu").fadeIn();
        });
    });
    $(document).ready(function(){
        $("div.tong").mouseleave(function(){
            $("div.tong-menu").fadeOut();
        });
    });
