


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
a=["accueil","seo","applicationWeb","automatisation","contact"]

for (i=1;i<a.length-1;i++){
	    
		text=["","<h2>Réferencement naturelle</h2><br><p>Vous cherchez à améliorer votre <strong>visibilité sur Google</strong>?<br>En tant que <strong>consultant SEO à Madagascar</strong> ,j'aide les entreprises locales et internationales à atteindre <strong>une bonne position sur les moteurs de recherche</strong> grâce à <strong>un référencement naturel efficace</strong> et <strong>une strategie SEO sur mesure</strong>.</p>","<h2>Application et devellopement web</h2><p>Nous concevons des <strong>sites internet</strong> et <strong> applications web  modernes et responsives </strong>, parfaits pour présenter votre entreprise, locale ou international.<br><ul><li>Site moderne et designer avec<strong> html/css/javascript</strong></li><li><strong>Site wordpress</strong></li><li>Site avec <strong> base de données </strong> et <strong>back-end</strong></li><li><strong>Application web </strong>ou strong>integration front-end</strong></li><li> Dev web utilisant framework symphony</li><li><strong>Dev web </strong>avec un <strong>framework</strong> ou <strong>bibliotheque python</strong></li></p>","<h2>Automatisation avec <strong>python</strong></h2><p>Python est un outil éfficace et simple pour automatiser des tâches ou faire des extraction de données.</p><ul><li>Automatiser des tâches administratives</li><li>Gestion des fichiers</li><li><strong>Automatiser de nombreuses manipulations répétitives> </strong> </li><li>Automatisation de <strong>traitement CSV</strong> </li><li><strong>Web scraping </strong>  ou <strong>extraction de données web </strong> </li></ul>"]
		w7=document.getElementById(a[i])
		w7.className="col-12 col-lg-3 mx-3 text-justify"
		w7.innerHTML=text[i] // pas w7.innerHTML(text[i])
		text[i].className="text-jystify"
		


	}
