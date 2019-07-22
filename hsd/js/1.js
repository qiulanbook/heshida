/* 
* @Author: Administrator
* @Date:   2019-06-24 12:56:21
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-24 17:02:55
*/
	'use strict';
	window.onload=function(){
	var oimg=document.getElementById('img')
	var oprev=document.getElementById('prev');
	var onext=document.getElementById('next');
	// 左右切换
	
	function cc(animate){
		var aa=parseInt(oimg.style.left)+animate;
		oimg.style.left=aa+'px';
		if (aa>0) {
			oimg.style.left=-1243+'px'
		};
		if (aa<-1243) {
			oimg.style.left=0+'px'
		};
	}
	oprev.onclick=function(){	
		cc(455)
	}
	onext.onclick=function(){	
		cc(-455)
	}

















	// 点击下边的点
	// 不会
	// for (var i = 0; i < ospan.length; i++) {
	// 	ospan[i].onclick=function(){
	// 		var dian=parseInt(this.getAttribute('index'));  //现在点击的点的位置
	// 		var animate=-700*(dian-index);
	// 		cc(animate);
	// 		index=dian;
	// 		point();



	// 	}
	// };
	// 
	// 
	



































}