
c1=document.getElementById("textappel")
c1.replaceChildren()
	c2=document.createElement('h1')
	c2.className="mt-3 text-warning"

c2.innerHTML="AGENCE WEB<br>expert<br>en SEO"
c1.appendChild(c2)



c=["seo-mada","nous-choisir","nos-services","seo-efficace"]
d=["Le référencement naturel pour votre site","Pourquoi nous-choisir en tant que consultant SEO ?","Nos services en référencement naturel","Un référencement SEO efficace"]
w7=document.getElementById("contenir")
w7.replaceChildren()
for (i=0;i<d.length;i++){
	    
		w9=document.createElement('div')
		
		w9.className="col-12  col-md-3 content-justify-arround text-justify mx-3"
		w9.setAttribute('id',c[i])
		
	
console.log(w9)

		w7.appendChild(w9)
	}
e=document.getElementById(c[0])	
e1="<h2>"+ d[0] +"</h2>"
e2="<h3>" + "Améliorer votre positionnement sur Google" + "</h3>"
e3="<p>"+"Un bon référencement naturel vous permet de bien vous placer dens les résultats de recherche, augmentant votre visibilité en ligne" +"</p>"
e5="<h3>" + "Générer plus de trafic qualifié" + "</h3>"
e6="<p>"+"Attirez des visiteurs réellement intéressés par vos produits ou services." +"</p>"
e7="<h3>" + "Attirer plus de clients" + "</h3>"
e8="<p>"+"Le SEO permet de toucher un public global tout en optimisant votre retour sur investissement.." +"</p>"
e9="<h2>"+ d[3] +"</h2>"
e10="<h3>"+"Un Analyse initiale et définition des objectifs"+"</h3>"
e11="<p>"+" Nous commençons par définir vos objectifs et votre cible de marché."+"</p>"

e.innerHTML=e1 + e2 + e3 +e5 + e6 +e7 +e8+e9+e10+e11



d=document.getElementById(c[1])	
d0="<h2>Pourquoi nous-choisir en tant que consultant SEO ?</h2><p>Vous cherchez à améliorer votre visibilité sur Google?En tant que consultant SEO à Madagascar ,j'aide les entreprises locales et internationales à atteindre une bonne position sur les moteurs de recherche grâce à un référencement naturel efficace et une strategie SEO sur mesure.</p>"

d1="<h3 >Expertise locale et internationale</h3><p>Notre expertise nous permet d'appliquer les meilleures pratiques SEO Nous développons une stratégie qui maximise la portée de votre siteweb.</p>"
d2="<h3>Optimisation adaptée à votre secteur d'activité</h3><p>Chaque secteur est unique : tourisme,commerce,services..., pour une approche personnalisée garantissant un SEO pertinent et performant</p>"
d.innerHTML=d0 + d1 + d2

h=document.getElementById(c[2])	
h1="<h2>Nos services en référencement naturel</h2>"
h0="<h3>Audit SEO: analyse complète de votre site</h3><p>J'effectue un audit SEO détaillé pour identifier les opportunités d'optimisation</p>"
h2="<h3>Référencement Google pour e-commerce et sites vitrines</h3>"
h3="<p>Optimisation de fiche produits et pages de services pour augmenter vos ventes et demandes de contact.</p>"
h4="<h3>Optimisation technique et contenu SEO</h3>"
h5="<p>Amélioration de la structure technique de votre site et rédaction de contenus optimisés pour lesmots-clés strategiques</p>"

h7="Intégration des mots-clés, amelioration technique et création de contenus optimisés"
h8="<p>"+h7+"</p>"
h9="Suivi et reporting des résultats"
h10="<h3>"+ h9 +"</h3>"
h11="Rapports mensuels sétaillés avec suivi des positions et recommandations d'ajustement."
h12="<p>"+h11+"</p>"
h.innerHTML=h1 + h0 + h2 + h3 + h4 + h5+h8+h10+h12;




	//for(i=1;i<d.length-1;i++){
	//w7=document.getElementById(c[i])
		//console.log(w7)
		//w7.className="col-12 col-lg-3 mx-3 text-justify";

		//w7.innerHTML=text[i] // pas w7.innerHTML(text[i])
		//text[i].className="text-jystify"
//}