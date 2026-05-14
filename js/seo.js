a=["accueil","seo","applicationWeb","automatisation","contact"]
d=["","Pourquoi nous-choisir en tant que consultant SEO ?","Nos services en référencement naturel","Les avantages du référencement naturel pour votre entreprise","Processus de travail pour un SEO efficace"]

for (i=1;i<a.length-1;i++){
	    //w8=document.createTextNode(d[i])
		//w9=document.createElement('div')
		//w10=document.createElement('h2')
		//w9.className="col-12 mx-3"
		//w9.appendChild(w10)


		text=["","<h2>Audit SEO: analyse complète de votre site</h2><br><p>J'effectue un audit SEO détaillépour identifier les opportunités d'optimisation.</p>","<h2>Référencement Google pour e-commerce et sites vitrines</h2><p>Optimisation de fiche produits et pages de services pour augmenter vos ventes et demandes de contact..<br> <ul></ul>","<h2>Optimisation technique et contenu SEO</h2><p>Amélioration de la structure technique de votre site et rédaction de contenus optimisés pour lesmots-clés strategiques</p>"]
		w7=document.getElementById(a[i])
		w7.className="col-12 col-lg-3 mx-3 text-justify";

		w7.innerHTML=text[i] // pas w7.innerHTML(text[i])
		text[i].className="text-jystify"
		
	}