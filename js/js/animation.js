let myvar=document.getElementById('integration');
let myint=document.getElementById('img-integrateurweb');
let graph=document.getElementById('graphisme');
let post1=document.getElementById('post1');
let post2=document.getElementById('post2');
let post3=document.getElementById('post3');

let post4=document.getElementById('post4');
let post5=document.getElementById('post5');
let post6=document.getElementById('post6');
let bootstrap=document.getElementById('Bootstrap');
let siteannonce=document.getElementById('siteannonce');
let siteresto=document.getElementById('site-restaurant');
let sitetourisme=document.getElementById('site-tourisme');
let rage=document.getElementById('rage');
let carte=document.getElementById('carte-2');
let btnaction=document.getElementById('btnaction2');

let carte3=document.getElementById('carte-3');
let carte4=document.getElementById('dev-back-end');
let carte5=document.getElementById('seo');
let carte6=document.getElementById('cms');
let nous=document.getElementById('nous');

window.addEventListener('scroll',()=>{

	const{scrollTop,clientHeight}=document.documentElement;
	//console.log(scrollTop,clientHeight);

 mytop= myvar.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop).toFixed()-(clientHeight*0.70)){
myvar.classList.add('active');

 }
 mytop2= myint.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop2).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
myint.classList.add('active');
 }

mytop3= graph.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop3).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
graph.classList.add('active');
 }

 mytop4= post1.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop4).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
post1.classList.add('active');
 }

 mytop5= post2.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop5).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
post2.classList.add('active');
 }

  mytop6= post3.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop6).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
post3.classList.add('active');
 }


  mytop7= post4.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop7).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
post4.classList.add('active');
 }

 mytop8= post5.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop8).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
post5.classList.add('active');
 }

  mytop9= post6.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mytop9).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
post6.classList.add('active');
 }

 mybootstrap= bootstrap.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mybootstrap).toFixed()-(clientHeight*0.70)){
//myvar.classList.add('active');
bootstrap.classList.add('active');
 }

 mysite= siteannonce.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mysite).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
siteannonce.classList.add('active');
 }

  mysiteresto= siteresto.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mysiteresto).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
siteresto.classList.add('active');
 }

  mysitetourisme= sitetourisme.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mysitetourisme).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
sitetourisme.classList.add('active');
 }

boutonaction= btnaction.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+boutonaction).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
btnaction.classList.add('active');
 }

  myrage= rage.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+myrage).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
 rage.classList.add('active');
 }
  mycarte= carte.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mycarte).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
 carte.classList.add('active');
 }

   mycarte3= carte3.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mycarte3).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
 carte3.classList.add('active');
 }

  mycarte4= carte4.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mycarte4).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
 carte4.classList.add('active');
 }


  mycarte5= carte5.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mycarte5).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
 carte5.classList.add('active');
 }

  mycarte6= carte6.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+mycarte6).toFixed()-(clientHeight*0.90)){
//myvar.classList.add('active');
 carte6.classList.add('active');
 }

  noussommes= nous.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+noussommes).toFixed()-(clientHeight*0.50)){
//myvar.classList.add('active');
 nous.classList.add('active');
 }

 

 
})

