import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isALink=[
    ['yes', 'fa-brands fa-github fa-2x'],
    ['no', 'fa-brands fa-github fa-2x'],
    ['yes', 'fa-regular fa-address-card fa-2x'],
    ['yes', 'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-docker fa-2x'],
    ['yes',  'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-java fa-3x'],
    ['yes',  'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-github fa-2x'],
    ['yes',  'fa-brands fa-codepen   fa-2x'],
    ['no',  'fa-brands fa-github fa-2x'],
    ['no',  'fa-brands fa-github fa-2x']
  ];
  imagesLinks=[
    ['assets/IT-projects/Pedagogical-Spreadsheet/test1.png', 'assets/IT-projects/Pedagogical-Spreadsheet/test2.png'],
    ['assets/IT-projects/Deliverapp/tournees-calculees.jpg', 'assets/IT-projects/Deliverapp/ajout-livraison.jpg', 'assets/IT-projects/Deliverapp/feuille-de-route.png'],
    ['assets/IT-projects/Portfolio-Flandre-Corentin/home.jpg', 'assets/IT-projects/Portfolio-Flandre-Corentin/hobbies.jpg'],
    ['assets/IT-projects/Aperit\'IF/aperitif.jpg', 'assets/IT-projects/Aperit\'IF/research.jpg', 'assets/IT-projects/Aperit\'IF/mojito.jpg', 'assets/IT-projects/Aperit\'IF/rum.jpg'],
    ['assets/IT-projects/miniged/schema.jpg'], // TODO rajouter photos miniged
    ['assets/IT-projects/C-Messagerie/img1.png', 'assets/IT-projects/C-Messagerie/img2.png', 'assets/IT-projects/C-Messagerie/img3.png'],
    ['assets/IT-projects/Mini-jeu-JAVA/demineur1.png', 'assets/IT-projects/Mini-jeu-JAVA/demineur2.png', 'assets/IT-projects/Mini-jeu-JAVA/casse-briques.png', 'assets/IT-projects/Mini-jeu-JAVA/snake.jpg', 'assets/IT-projects/Mini-jeu-JAVA/home.jpg'],
    ['assets/IT-projects/TrajetC++/test1.png', 'assets/IT-projects/TrajetC++/test2.png', 'assets/IT-projects/TrajetC++/test3.png', 'assets/IT-projects/TrajetC++/test4.png', 'assets/IT-projects/TrajetC++/test5.png', 'assets/IT-projects/TrajetC++/test6.png', 'assets/IT-projects/TrajetC++/test7.png'],
    ['assets/IT-projects/eau-the-l-eau/game1.png', 'assets/IT-projects/eau-the-l-eau/game2.png', 'assets/IT-projects/eau-the-l-eau/choice-player.png'],
    ['assets/IT-projects/Ancien-Portfolio/home.jpg', 'assets/IT-projects/Ancien-Portfolio/cursus.jpg', 'assets/IT-projects/Ancien-Portfolio/projects.jpg', 'assets/IT-projects/Ancien-Portfolio/hobbies.jpg', 'assets/IT-projects/Ancien-Portfolio/diaporama-sport.jpg', 'assets/IT-projects/Ancien-Portfolio/diaporama-art.jpg'],
    ['assets/IT-projects/FamillyWall/home.png', 'assets/IT-projects/FamillyWall/register.png'],
    ['link1', 'link2']
  ];
  links = [
    'https://github.com/flandrecorentin/Pedagogical-Spreadsheet',
    'https://github.com/flandrecorentin/Deliverapp',
    'about',
    'https://github.com/flandrecorentin/Aperit\'IF',
    'https://flandrecorentin.notion.site/Documentation-miniged-d0682cd62f4a48aea9d714b1e5daa6bf',
    'https://github.com/flandrecorentin/Messagerie4IF_G2_S1',
    'https://github.com/flandrecorentin/Mini-jeu_JAVA',
    'https://github.com/flandrecorentin/', //TODO lien pour l'archive
    'https://github.com/flandrecorentin/eau-the-l-eau',
    'https://flandrecorentin.github.io/',
    'https://github.com/flandrecorentin/FamilyWall',
    'linkProject',
  ];
  hobbies=[
    // [0] -> 1/x
    [   '[1] Pedagogical-Spreadsheet',
        'Pedagogical-Spreadsheet est une application de type tableur g??rant des feuilles de calcul pour l\'apprentissage des outils scientifiques dans le monde de l\'??ducation (entre autre). L\'application rassemble toutes les fonctions essentielles primaires et utiles pour apprendre ?? manier un tableur. Il est ainsi possible de faire de nombreux calculs et op??rations,  de tracer des diagrammes et des jeux permettent de d??couvrir toutes les fonctionnalit??s de Pedagogical-Spreadsheet. Il s\'agit d\'un projet personnel r??alis?? ?? 2 et repr??sente pour l\'instant (projet non fini) environ 60h de mon temps perso. Il est cod?? en Java et utilise la biblioth??que JavaFX et un peu de CSS pour les interfaces.',
    ],
    // [1] -> 2/x
    [   '[2] Deliverapp',
      'Deliverapp est une application qui calcule les meilleures tourn??es de livraisons de colis.  Cela prend en compte l\'adresse et le cr??neau de livraison et les livreurs. Deliverapp proposent diff??rentes fonctionnalit??s: ajout/modification/suppression d\'une livraison, calcul de tourn??es, impression de la feuille de route (chemin et horaires d\'une tourn??e), sauvegarde/chargement des listes de livraisons, ajout/suppresion rapide d\'une livraison apr??s calcul, etc. Il s\'agit d\'un projet universitaire r??alis?? en hexan??me et repr??sente de 72h de travail par personne (moiti?? en s??ance et moiti?? en dehors). Deliverapp est cod?? en Java 19.0.1 et utilise la biblioth??que JavaFX pour les interfaces. L\'organisation du projet a utilis?? la m??thodologie Agile.',
    ],
    // [2] -> 3/x
    [   '[3] Portfolio-Flandre-Corentin',
      'Comme vous l\'aurez compris ce projet est le site-web sur lequel vous vous trouvez qui est mon portfolio perso afin d\'en d??couvrir davantage sur moi: mon cursus scolaire et professionnel, mes diff??rents projets informatiques (personnels, universitaire et professionels) et ainsi que mes hobbies. C\'est un projet personnel qui repr??sente environ 60h de travail en prenant en compte l\'apprentissage des technologies. Le site a ??t?? d??v??lopp?? ?? l\'aide du framework Angular 15.0.4. Il sera normalement publi?? d??s que j\'aurais mon propre nom de domaine et de quoi faire tourner le serveur web.',
    ],
    // [3] -> 4/x
    [   '[4] Aperit\'IF',
      'Aperit\'IF est un moteur de recherche de cocktail et d\'ingr??dients. Via la barre de recherche, Aperit\'IF permet de chercher un cocktail ?? partir de son nom afin d\'obtenir sa description, sa recette (avec les quantit??s en fonctions du nombre de personnes), une image et ses indices de services. Il s\'agit d\'un projet universitaire r??alis?? en hexan??me dans le but de d??couvrir le web s??mantique. Cela repr??sente environ 24h de travail par personne (moiti?? s??ance, moiti?? perso). Aperi\'IF est un site web d??velopp?? avec le framework React et tire ses donn??es de Wikidata et DBpedia avec des requ??tes SPARQL.',
    ],
    // [4] -> 5/x
    [   '[5] miniged',
      'miniged est une application web de type GED (Gestionnaire Electronique de Documents) simplifi??e. Il permet de g??rer des documents de certains types contenant sch??mas de m??tadonn??es de sp??cifiques dans le cloud. miniged propose notamment un plan de classement de documents virtuel intelligent. Le projet est orchestr?? et d??ploy?? par Docker et Docker-composer. miniged est conmpos?? d\'un backend Java utilisant le framework Spring et l\'API REST, d\'un frontend r??alis?? avec le framework Vue.Js 3, d\'une base de donn??es non relationnelle MongoDB et d\'un service Minio pour stocker les pi??ces jointes dans le cloud. Le projet miniged a ??t?? r??alis?? seul dans le cadre d\'un POC durant un stage de 2 mois dans lequel j\'??tais notamment charg?? de d??finir mes propres sp??cifications. Le code source n\'est pas disponible pour des raisons de confidentialit??.',
    ],
    // [5] -> 6/x
    [   '[6] C-Messagerie',
      'C-Messagerie est une micro application de messagerie d??velopp?? en C uniquement dans le cadre universitaire. C-Messagerie utilise une architecture centralis??e avec un serveur et n clients. L\'application permet d\'??changer des messages en directs diff??rentes sessions. Les fonctionnalit??s principales sont: connexion via login/mdp, ??change de message en direct entre utilisateurs, historique de message, cr??ation de groupe d\'utilisateurs, traitement de l\'horaire des messages et mise en place de la possibilit?? de cryptage. Le projet a ??t?? r??alis?? en 12h en TP en bin??me avec un ami.',
    ],
    // [6] -> 7/x
    [   '[7] Mini_jeu_Java',
      'Mini_jeu_Java est une plateforme de 3 minis-jeux que j\'ai d??velopp?? lorsque j\'ai commenc?? l\'informatique. Cette plateforme comporte un d??mineur, un casse brique et le jeu "snake". Ce sont des jeux cod??s en Java et utilisent la biblioth??que Swing pour l\'interface (qui laisse ?? d??sirer certes ahah). J\'ai pass?? beaucoup de temps pour apprendre de nombreuses notions sur le langage Java (Programmation orient??e objet, h??ritage, interface avec swing et API)...',
    ],
    // [7] -> 8/x
    [   '[8] Trajet C++',
      'Trajet C++ est une application sur terminal cod?? en C++ dans le cadre d\'un projet universitaire de 3?? ann??e d\'INSA. L\'application permet de g??rer un catalogue de divers trajets et comporte de nombreuses fonctionnalit??s: impression du catalogue, ajout de trajet simple, ajout de trajet complexe (combinaise de trajets simples ou complexes), recherche, chargement d\'un catalogue, sauvegarde d\'un catalogue. Trajet C++ repr??sente 16heures de travail et a ??t?? fait avec un ami..',
    ],
    // [8] -> 9/x
    [   '[9] eau-the-l-eau (Intelligence Artificielle)',
      'Derri??re ce jeu de mot (plus que m??diocre je vous l\'accorde) r??alis?? par moi m??me, se cache le jeu de l\'othello. Ce projet universitaire a pour but de s\'initier ?? l\'IA en analysant la puissance des algorithmes qui existent pour gagner ?? l\'othello et ?? la cr??ation d\'heuristiques pour am??liorer/perfectionner l\'IA. On arrive ?? une IA capable de jouer en temps raisonnable le meilleur coup en profondeur 4. Le projet est r??alis?? en hexan??me tout en Prolog mais le code est grandement tir?? de l\'utilisateur GitHub pchampio, nous avons principalement fait de l\'analyse et de la modification de code. Ce projet nous a pris 12h par personne.',
    ],
    // [9] -> 10/x
    [   '[10] Ancien Portfolio',
      'Comme son nom l\'indique, il s\'agit de mon premier Portfolio et m??me de mon premier site web que j\'ai cr????. Pour ce projet j\'ai r??alis?? mes maquettes sur l\'outil Figma. Au niveau technologie c\'etait l\'occasion d\'apprendre HTML/CSS/JavaScript.',
    ],
    // [10] -> 11/x
    [   '[11] FamilyWall',
      '[Projet en cours] FamilyWall est une application web de messagerie en ligne maximisant l\'exp??rience utilisateur ?? fort enjeu environnementaux et soci??taux. FamilyWall est tr??s s??curis?? (protocole de cryptage de bout en bout, fonctionnalit??s sans dangers: pas de suggestion d\'amis etc.), tr??s respectueux de l\'environnement possible (suppression d\'historique au bout de X temps d??termin?? par l\'utilisateur, baisse de la qualit?? des fichiers m??dias sauf contre-indication de l\'utilisateur). L\'objectif de FamilyWall est de pouvoir communiquer ?? distance de mani??re simple et raisonnable :)',
    ]
  ];
}
