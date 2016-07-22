// JavaScript Document
$(function(){
	var minus=$('.promotionMiddleKeyD .left');
	var puls=$('.promotionMiddleKeyD .right');
	var push=minus.next();
	var max=$('.promotionMiddleKeyD .num em').eq(0).text();
	console.log(max);
	var img=$('.jqzoom img');
	var name=$('.pro-name h1').text();
	var mn=$('.myPrice em').text();
	var btn=$('.btn-sta-rob');
	console.log(img.attr('src'));
	minus.on('click',function(){
		if(push.val()<=1){
			push.val(1);
		}else{
			push.val(Math.floor(push.val()-1));
		}
	});
	puls.on('click',function(){
		if(push.val()>=max){
			push.val(max);
		}else{
			push.val(Math.floor(push.val())+1);
		}
	});
	var num=0;
	btn.on('click',function(){
		num++;
		var shopname='shop' + num;
		var value={};
		value.name=name;
		value.src=img.attr('src');
		value.num=push.val();
		value.mn=mn;
		var the_cookie=shopname+'=' + JSON.stringify(value);
		console.log(the_cookie);
		document.cookie = the_cookie+';path=/;';
	});
})