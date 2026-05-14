


a=["accueil","seo","applicationWeb","automatisation","contact"]
aa=["index","seo","applicationWeb","automatisation","contact"]
let b=document.getElementById("menu")



for //(let aa in a)
(i=0;i<a.length;i++)	
{
	 w2=document.createElement('li');
	 w3=document.createElement('a')
	 w3.className="nav-link text-dark "
	 url=aa[i]+".html"
	 w3.setAttribute('href',url);
	
	 w2.className="nav-item   px-3"
	 b.appendChild(w2)
	 w4=document.createTextNode(a[i]);//a[aa]
	 w4.className="textUpperCase"

	 w2.appendChild(w3)
	 w3.appendChild(w4)
///////////////////////////////

	
	}
for (i=1;i<a.length-1;i++){
		w5=document.createElement('div')
		nomId=a[i]
		w5.setAttribute('id',nomId)

		w6=document.getElementById("contenir")
		w6.appendChild(w5)
		w6.className="row justify-content-between mx-3"
		
		


}