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
$(function(){
	var categroup=$('.categroup');
	var adl=categroup.children('dl');
	$.each(adl, function() {    
		$(this).hover(function(){
			$(this).find('dd').stop(true).animate({'left':200,'opacity':1}).show();
		},function(){
			$(this).find('dd').stop(true).animate({'left':160,'opacity':0}).hide();
		})
	});
})
