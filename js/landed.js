// JavaScript Document
$(function(){
	var user=$('.txt-user')
	var pass=$('.txt-pass')
	var btn=$('.btn-login');
	var sReg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])[0-9]{8}$/;
	var eReg = /^[0-9a-zA-Z]+[@][0-9a-zA-Z]+[.][a-zA-Z]{2,4}$/;
	var _cookie = document.cookie.split('; ');

	console.log('切分后的cookie：'+_cookie);
	user.on('focus',function(){
		$(this).removeClass('txt-user');
	}).on('blur',function(){
		if($(this).val().length==0){
			$(this).addClass('txt-user');
		}else if(!sReg.test($(this).val()) && !eReg.test($(this).val())){
			$(this).val('');
			$(this).addClass('txt-user');
			alert('用户名输入错误');
		}
	})
	pass.on('focus',function(){
		$(this).removeClass('txt-pass');
	}).on('blur',function(){
		if($(this).val().length==0){
			$(this).addClass('txt-pass');
		}else if($(this).val().length<6){
			$(this).val('');
			$(this).addClass('txt-pass');
			alert('密码不可以少于6位');
		}else{
			$(this).removeClass('txt-pass');
		}
	})
	var arr=[];
	var arrs=[];
	$.each(_cookie,function(idx,val){
			var str=JSON.parse(val.split('=')[1]);
			var ww=str.user;
			var zz=str.pass;
			console.log(ww);
			arr.push(ww);
			console.log(arr)
			arrs.push(zz)
		})

	btn.on('click',function(){
		var username=user.val();
		var password=pass.val();
		var on='';
			$.each(arr,function(idx,val){
				if(username==val){
					$.each(arrs,function(idx,val){
						if(password==val){
							alert('登陆成功');
							on=true;
							return false;
						}
					})
				}
			})
		if(on){
			return false;
		}else{
			alert('用户名或密码错误');
			return false;
		}
		
	})
})