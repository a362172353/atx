// JavaScript Document
$(function(){
	var the_cookie = document.cookie.split('; ');
	console.log(the_cookie);
	var arr=[];
	var arrs=[];
	$.each(the_cookie,function(idex,val){
		var str=JSON.parse(val.split('=')[1]);
		console.log(str);
		var namex=str.name;
		var srcx=str.src;
		var numx=str.num;
		var mnx=str.mn;
		var ss=numx*mnx;
		$('.prod-img img').attr('src',srcx);
		$('.title').text(namex);
		$('.dj_price b').text(mnx);
		$('.cartEditAmount').val(numx);
		$('.sum').text(ss);
	})
})