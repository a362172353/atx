// JavaScript Document
$(function(){
	var user=$('.hint-user');
	var pass=$('.hint-pass');
	var pass2=$('.hint-pass2');
	var btn=$('.btn-register');
	var sReg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])[0-9]{8}$/;
	var eReg = /^[0-9a-zA-Z]+[@][0-9a-zA-Z]+[.][a-zA-Z]{2,4}$/
	user.on('focus',function(){
		$(this).removeClass('hint-user');
	}).on('blur',function(){
		if($(this).val().length==0){
			$(this).addClass('hint-user');
		}else if(!sReg.test($(this).val()) && !eReg.test($(this).val())){
			$(this).val('');
			$(this).addClass('hint-user');
			alert('用户名输入错误');
		}
	})
	pass.on('focus',function(){
		$(this).removeClass('hint-pass');
	}).on('blur',function(){
		if($(this).val().length==0){
			$(this).addClass('hint-pass');
		}else if($(this).val().length<6){
			$(this).val('');
			$(this).addClass('hint-pass');
			alert('密码不可以少于6位');
		}else{
			$(this).removeClass('hint-pass');
		}
	})
	pass2.on('focus',function(){
		$(this).removeClass('hint-pass2');
	}).on('blur',function(){
		if($(this).val().length==0){
			$(this).addClass('hint-pass2');
		}else if($(this).val()!=pass.val()){
			$(this).val('');
			$(this).addClass('hint-pass2');
			alert('2次密码不相同');
		}
	})
	var num=0;
	btn.on('click',function(){
		if(user.val().length==0 || pass.val().length==0){
			alert('输入信息不全');
		}else{
			num++;
			var goodName = 'goods' + num;
			var value = {};
			value.user=user.val();
			console.log(value.user)
			value.pass=pass.val();
			console.log(value.pass)
			// JSON.parse():把json字符串转换成json对象
			// JSON.stringify():把json对象转换成json字符串（JSON.parse的逆向操作）
			var _cookie = goodName + '=' + JSON.stringify(value);
			console.log(_cookie)
			//写入cookie
			//$.cookie(goodName, _cookie); 
			document.cookie = _cookie+';path=/;';
			console.log(document.cookie)
			//获取cookie
			var printCookie = document.cookie;
			console.log('切分前的cookie：'+printCookie);
			var _cookie = document.cookie.split('; ')[0];
			console.log('切分后的cookie：'+_cookie);
		}
	})
})