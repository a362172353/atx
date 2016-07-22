//顶部选项
$(function(){
	var dropdown=$('.dropdown')
	$.each(dropdown, function() {    
     	$(this).hover(function(){
			$(this).children('.show').show();
			$(this).children('.arrow-top').show();
		},function(){
			$(this).children('.show').hide();
			$(this).children('.arrow-top').hide();
		})                                                 
	});
})
//banner侧边
;$(function(){
	var dl=$('.categroup dl');
	var adt=dl.children('dt');
	var add=adt.next();
	add.eq(1).css('top',-75);
	add.eq(2).css('top',-175);
	add.eq(3).css('top',-227);
	add.eq(4).css('top',-279);
	add.eq(5).css('top',-331);
	$.each(adt, function() {    
		$(this).hover(function(){
			$(this).next().stop(true).animate({'left':200,'opacity':1}).show();
		},function(){
			$(this).next().stop(true).animate({'left':160,'opacity':0}).hide();
		})
	});
})
//倒计时商品左侧
//+-切换
;$(function(){
	var slider=$('.notice-slider')
	var change=$('.notice-change');
	var Link=$('.notice-link');
	var title=$('.notice-title');
	var img=title.prev();
	change.on('click',function(){
		if(slider.height()==50){
			Link.css('display','none');
			img.css('display','block');
			slider.height('203');
			change.css('background-position','-61px -120px');
		}else{
			Link.css('display','block');
			img.css('display','none');
			slider.height('50');
			change.css('background-position','-40px -120px');
		}
	})
})
//切换下部选项卡
;$(function(){
	var aspan=$('.notice-lists h3 span');
	var aul=$('.notice-lists ul');
	$.each(aspan,function(idx){
		$(this).on('mouseenter',function(){
			$(this).addClass('on').siblings().removeClass('on');
			aul.eq(idx).addClass('on').siblings().removeClass('on');
		})
	})
})
//限时商品切换
;$(function(){
	var ali=$('.hottabs').children('li');
	var ul=$('.hotlist').children('.active');
	var th=$('.tcd-h');
	var tm=$('.tcd-m');
	var ts=$('.tcd-s');
	setInterval(clock,0)
	function clock(){
		var nowtime=new Date();
		var EndTime= new Date("2016/07/13 00:00:00");
		var end=EndTime.getTime()-nowtime.getTime();
		var h=Math.floor(end/1000/3600);
		var m=Math.floor(end/1000/60%60);
		var s=Math.floor(end/1000%60);
		th.text(h);tm.text(m);ts.text(s);
	}
	$.each(ali,function(idx){
		$(this).on('mouseenter',function(){
			$(this).addClass('active').siblings().removeClass('active');
			ul.stop(true).animate({'margin-top':-320*idx});
		})
	})
})
//百叶窗
;$(function(){
	var ali=$('.accordion ul li');
	$.each(ali, function(idx) {
		$(this).on('mouseenter',function(){
			if(idx==0){
				ali.eq(1).stop(true,true).animate({'left':450},200);
				ali.eq(2).stop(true,true).animate({'left':600},200);
				ali.eq(3).stop(true,true).animate({'left':750},200);
				ali.eq(4).stop(true,true).animate({'left':900},200);
				ali.eq(5).stop(true,true).animate({'left':1050},200);
			}else if(idx==1){
				ali.eq(1).stop(true,true).animate({'left':150},200);
				ali.eq(2).stop(true,true).animate({'left':600},200);
				ali.eq(3).stop(true,true).animate({'left':750},200);
				ali.eq(4).stop(true,true).animate({'left':900},200);
				ali.eq(5).stop(true,true).animate({'left':1050},200);
			}else if(idx==2){
				ali.eq(1).stop(true,true).animate({'left':150},200);
				ali.eq(2).stop(true,true).animate({'left':300},200);
				ali.eq(3).stop(true,true).animate({'left':750},200);
				ali.eq(4).stop(true,true).animate({'left':900},200);
				ali.eq(5).stop(true,true).animate({'left':1050},200);
			}else if(idx==3){
				ali.eq(1).stop(true,true).animate({'left':150},200);
				ali.eq(2).stop(true,true).animate({'left':300},200);
				ali.eq(3).stop(true,true).animate({'left':450},200);
				ali.eq(4).stop(true,true).animate({'left':900},200);
				ali.eq(5).stop(true,true).animate({'left':1050},200);
			}else if(idx==4){
				ali.eq(1).stop(true,true).animate({'left':150},200);
				ali.eq(2).stop(true,true).animate({'left':300},200);
				ali.eq(3).stop(true,true).animate({'left':450},200);
				ali.eq(4).stop(true,true).animate({'left':600},200);
				ali.eq(5).stop(true,true).animate({'left':1050},200);
			}else if(idx==5){
				ali.eq(1).stop(true,true).animate({'left':150},200);
				ali.eq(2).stop(true,true).animate({'left':300},200);
				ali.eq(3).stop(true,true).animate({'left':450},200);
				ali.eq(4).stop(true,true).animate({'left':600},200);
				ali.eq(5).stop(true,true).animate({'left':750},200);
			}
		})
	});
})
//brandlogo
;$(function(){
	var ali=$('.brandLogo ul li')
	$.each(ali, function() {
		$(this).hover(function(){
			$(this).find('img').stop(true).animate({'margin-left':-100});
		},function(){
			$(this).find('img').stop(true).animate({'margin-left':0});
		})
	});
})
//评价列表切换
;$(function(){
	var ul=$('.mod-winetasting .bd ul');
	var prev=$('.mod-winetasting .minipage .btn-prev');
	var next=$('.mod-winetasting .minipage .btn-next');
	var text=$('.mod-winetasting .minipage .txt-page');
	prev.hover(function(){
		prev.css('backgroundPosition','-193px -65px');
	},function(){
		prev.css('backgroundPosition','-130px -76px');
	})
	next.hover(function(){
		next.css('backgroundPosition','-193px -48px');
	},function(){
		next.css('backgroundPosition','-154px -76px');
	})
	prev.on('click',function(){
		if(text.text()=='2/3'){
			ul.animate({'marginLeft':0});
			text.text('1/3');
		}else if(text.text()=='3/3'){
			ul.animate({'marginLeft':-951});
			text.text('2/3');
		}
			pd();
	})
	next.on('click',function(){
		if(text.text()=='1/3'){
			ul.animate({'marginLeft':-951});
			text.text('2/3');
		}else if(text.text()=='2/3'){
			ul.animate({'marginLeft':-1902});
			text.text('3/3');
		}
		pd();
	})
	function pd(){
		if(text.text()=='1/3') prev.addClass('disabled');
		else prev.removeClass('disabled');
		if(text.text()=='3/3') next.addClass('disabled');
		else next.removeClass('disabled');
	}
})
//fbanner下部right百叶窗
;$(function(){
	var topboard=$('.channel-topboard');
	var ul=topboard.children('ul');
	var items=ul.children('.item');
	$.each(items,function(){
		$(this).on('mouseenter',function(){
			$(this).addClass('on').siblings().not('.hot').removeClass('on');
		})
	})
})
//底部列表切换
;$(function(){
	var target=$('.mod-theysay .bd .saylists');
	var prev=$('.mod-theysay .minipage .btn-prev');
	var next=$('.mod-theysay .minipage .btn-next');
	var text=$('.mod-theysay .minipage .txt-page');
	prev.hover(function(){
		prev.css('backgroundPosition','-193px -65px');
	},function(){
		prev.css('backgroundPosition','-130px -76px');
	})
	next.hover(function(){
		next.css('backgroundPosition','-193px -48px');
	},function(){
		next.css('backgroundPosition','-154px -76px');
	})
	prev.on('click',function(){
		if(text.text()=='2/3'){
			target.animate({'marginTop':0});
			text.text('1/3');
		}else if(text.text()=='3/3'){
			target.animate({'marginTop':-300});
			text.text('2/3');
		}
			pd();
	})
	next.on('click',function(){
		if(text.text()=='1/3'){
			target.animate({'marginTop':-300});
			text.text('2/3');
		}else if(text.text()=='2/3'){
			target.animate({'marginTop':-450});
			text.text('3/3');
		}
		pd();
	})
	function pd(){
		if(text.text()=='1/3') prev.addClass('disabled');
		else prev.removeClass('disabled');
		if(text.text()=='3/3') next.addClass('disabled');
		else next.removeClass('disabled');
	}
})
//醉美人效果
;$(function(){
	var ul=$('.mod-women .bd .pg-4');
	var items=$('.mod-women .bd .pg-4 li');
	$.each(items,function(){
		$(this).on('mouseenter',function(){
			$(this).removeClass('on').siblings().addClass('on');
			ul.css('background','#000');
		}).on('mouseleave',function(){
			items.removeClass('on');
			ul.css('background','');
		})
	})
})
//购物车滚动定位
;$(function(){
	var sp=$('.head-shopcart');
	var fixbox=$('#util-floattop');
	var hr=$('.head-right');
	var list=$('.shopcart-list');
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=100){
			fixbox.append(sp);
			var ubtn=$('#util-floattop .btn-shopcart');
			ubtn.css('backgroundPosition','0 -335px');
			ubtn.hover(function(){
				list.css('display','block');
				ubtn.css('backgroundPosition','0 -363px');
			},function(){
				list.css('display','none');
				ubtn.css('backgroundPosition','0 -335px');
			})
		}else{
			hr.append(sp);
			var hbtn=$('.head-right .btn-shopcart');
			hbtn.css('backgroundPosition','0 -160px');
			hbtn.hover(function(){
				list.css('display','block');
				hbtn.css('backgroundPosition','0 -195px');
			},function(){
				list.css('display','none');
				hbtn.css('backgroundPosition','0 -160px');
			})
		}
	})
})
// goods放大镜
;$(function(){
	var item=$('.jqzoom');
	var big=$('.jqzoomup');
	var bimg=big.find('img');
	item.on('mousemove',function(e){
		big.show();
		var nleft = item.offset().left;
	  	var ntop = item.offset().top;
	  	var e=window.event || e;
	  	var nx=e.clientX-nleft+$(window).scrollLeft()-135;//模拟选中区域宽度一半,不让模拟选中区域超出边界
	  	var ny= e.clientY-ntop+$(window).scrollTop()-175;//模拟选中区域高度一半
		//不出边框处理
		   if(nx>item.width()-370){//模拟选中区域的宽度
			   nx=item.width()-370;
			 }
		   if(ny>item.height()-350){//模拟选中区域的高度
			   ny=item.height()-350;
			   }
		   if(nx<0){
			   nx=0;
			   }
		   if(ny<0){
			   ny=0;
			   }
		   //$fan.css({left:nx,top:ny});
		 //放大框图片处理
		  bimg.css({left:-nx*2,top:-ny*2});//镜面所以为相反数值加负号
		 
		 }).on('mouseout',function(){
			big.hide();
		});
})