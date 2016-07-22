$(function(){
	var ul=$('.skide-items');
	var ali=$(ul.children('li'));
	var aimg=$(ali.children('a').children('img'));
	var slideindex=ul.next();
	var num=0;
	var index=0;
	var timer='';
	$.each(ali, function() {  
	    num++;
		var span=$('<span/>').text(num);
		slideindex.append(span);
	});
	var aspan=$(slideindex.children('span'));
	aspan.eq(0).addClass('active');
	timer=setInterval(next,3000)
	ul.hover(function(){
		clearInterval(timer);
	},function(){
		
		timer=setInterval(next,3000)
	})
	$.each(aimg, function(){    
		$(this).hover(function(){
			$(this).stop(true).animate({'width':1040,'height':416,'margin-top':-8,'margin-left':-20},600)
		},function(){
			$(this).stop(true).animate({'width':1000,'height':400,'margin-top':0,'margin-left':0},600)
		})
	});
	$.each(aspan,function(){
		$(this).on('mouseenter',function(){
			clearInterval(timer);
			index=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			ali.eq(index).stop(true).fadeIn().siblings().fadeOut();
		})
	})
	function active(){
		aspan.eq(index).addClass('active').siblings().removeClass('active');
	}
	function next(){
		if(index>=ali.length) index=0;
		ali.eq(index).stop(true).fadeIn().siblings().fadeOut();
		active();
		index++;
	}
})
//fbanner
;(function($){
	$.fn.farSlide = function(){
		this.each(function(){
			var $focus = $(this);
			var $big = $('.slide-items',$focus);
			var num=0;
			var index = 0;
	        var len = $big.children('li').length;
	        var slideindex=$big.next();
	        var timer='';
	        var change=animation;
	        slideindex.text('');
	        for(var i=0;i<len;i++){
	        	num++;
	        	var span=$('<span>').text(num);
	        	slideindex.append(span);
	        };
	        var aspan=slideindex.children('span');
	        aspan.first().addClass('active');
	        timer=setInterval(change,1500);
	        $.each(aspan,function(){
	        	$(this).on('mouseenter',function(){
	        		//clearInterval(timer);
	        		index=$(this).index();
	        		gb();
	        	})
	        })
	        $focus.hover(function(){
	        	clearInterval(timer);
	        },function(){
        	 	timer=setInterval(change,1500);
	        });
	        function gb(){
	        	$big.stop(true).animate({marginLeft:-760*index});
     	 		aspan.eq(index).addClass('active').siblings().removeClass('active');
	        }
	        function animation(){
	            index++;
	            show();
	            gb();
	        };
	        function goback(){
        	 	index--;
	            show();
	            gb();
	        };
	        function show(){
	            if(index==len-1){
	            	clearInterval(timer);
	            	change=goback;
	                timer=setInterval(change,1500);
	            }else if(index == 0){
	                clearInterval(timer);
	                change=animation;
	                timer=setInterval(change,1500);
	            }
	        };
		});
        return this;
	};
})(jQuery);