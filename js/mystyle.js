
a=["accueil","seo","applicationWeb","automatisation","contact"]
let b=document.getElementById("menu")



for //(let aa in a)
(i=1;i<a.length;i++)	
{
	 w2=document.createElement('li');
	 w3=document.createElement('a')
	 w3.className="nav-link text-dark h6"
	 url=a[i]+".html"
	 w3.setAttribute('href',url);
	
	 w2.className="nav-item   px-3"
	 b.appendChild(w2)
	 w4=document.createTextNode(a[i]);//a[aa]
	 w4.className="textUpperCase"

	 w2.appendChild(w3)
	 w3.append(w4)
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
for (i=1;i<a.length-1;i++){
	    w7=document.getElementById(a[i])
		text=["","<h2>Réferencement naturelle</h2><br><p>Vous cherchez à améliorer votre visibilité sur Google?En tant que consultant SEO à Madagascar ,j'aide les entreprises locales et internationales à atteindre une bonne position sur les moteurs de recherche grâce à un référencement naturel efficace et une strategie SEO sur mesure.</p>","<h2>Application et devellopement web</h2><p></p>","<h2>Automatisation avec python</h2><p></p>"
		w7.className="col-12 col-lg-3 mx-3 "

		


	}
