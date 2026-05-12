

b=["seo","applicationWeb","automatisation"]
	
for (i=0;i<b.length;i++){
	let c=document.getElementById(b[i]);
	c.style.opacity="0";
   
}

for (i=0;i<b.length;i++){
 let c=document.getElementById(b[i]);
window.addEventListener('scroll',()=>{

	const{scrollTop,clientHeight}=document.documentElement;
let d=c.getBoundingClientRect().top;
 if (scrollTop>(scrollTop+d).toFixed()-(clientHeight*0.70)){
c.classList.add('active');

}
})
}