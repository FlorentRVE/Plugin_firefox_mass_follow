# Plugin_firefox_mass_follow

Création d’un plugin Firefox

1.	Création du manifeste:

Le fichier manifest.json est un fichier de configuration qui décrit l'extension et ses fonctionnalités. Il définit des informations telles que le nom de l'extension, sa version, sa description, son icône, les fichiers nécessaires pour son fonctionnement, les autorisations requises, etc. C'est le point de départ de toute extension pour Firefox.
Voici les principaux champs de manifest.json et leur signification :
•	name : le nom de l'extension tel qu'il doit apparaître dans Firefox.
•	version : la version actuelle de l'extension.
•	description : une description brève de l'extension.
•	author : le nom de l'auteur de l'extension.
•	manifest_version : la version de la spécification du manifeste utilisée.
•	icons : une liste d'icônes utilisées par l'extension.
•	permissions : une liste de permissions nécessaires pour l'extension pour fonctionner correctement, par exemple l'accès au stockage local ou l'accès à des sites web spécifiques.
•	content_scripts : une liste de scripts à injecter dans les pages web visitées.
•	background : des scripts qui s'exécutent en arrière-plan et peuvent être utilisés pour effectuer des tâches en arrière-plan ou pour répondre à des événements.
•	browser_action : une icône qui peut être cliquée pour déclencher une action de l'extension.
•	page_action : similaire à browser_action, mais l'icône ne s'affiche que sur les pages spécifiques où l'extension est active.
•	options_page : la page de configuration de l'extension.
Il est important de noter que tous ces champs ne sont pas obligatoires et que vous pouvez inclure d'autres champs spécifiques à votre extension si nécessaire.

2.	Implémentation du code :

Une fois les fonctionnalités de l'extension définies, il faut écrire le code nécessaire pour les implémenter. Cela implique souvent la création de plusieurs fichiers de code :

•	Le fichier index.html définit l'interface utilisateur et index.js  est utilisé pour interagir avec l'interface utilisateur, écouter les événements et les messages, et communiquer avec le code de l'extension. index.js est un script JavaScript qui s'exécute dans le contexte de l'extension elle-même. Il est utilisé pour gérer les interactions utilisateur avec l'interface de l'extension et pour communiquer avec d'autres parties de l'extension, telles que le script de fond (background.js) ou les scripts injectés (content.js).

•	Le fichier content.js est un fichier JavaScript qui est injecté dans chaque page web chargée dans le navigateur, par l'intermédiaire du fichier manifest.json de l'extension. C’est un script JavaScript qui est injecté dans la page web visitée. Il s'exécute dans le contexte de la page web elle-même, ce qui signifie qu'il peut accéder au DOM de la page et interagir avec les éléments de la page. Il est utilisé pour ajouter des fonctionnalités à la page web visitée, telles que des boutons supplémentaires ou des fonctionnalités de modification de contenu.

En d'autres termes, index.js est utilisé pour gérer l'interface utilisateur de l'extension, tandis que content.js est utilisé pour modifier le contenu de la page web visitée.


•	Le fichier background.js est optionnel et est utilisé pour effectuer des tâches en arrière-plan, telles que la gestion des téléchargements ou l'envoi de notifications. 
C’est un script qui s'exécute en arrière-plan de l'extension, même lorsque l'utilisateur ne visite pas de pages web. Il est souvent utilisé pour effectuer des tâches qui ne nécessitent pas d'interaction avec l'utilisateur, telles que la gestion des téléchargements ou la surveillance des mises à jour. Le code dans background.js peut également communiquer avec les autres parties de l'extension, telles que content.js ou index.js.

3.	API pour extensions
L'API browser est une interface de programmation JavaScript proposée par Firefox pour développer des extensions de navigateur. Elle permet aux développeurs d'interagir avec le navigateur et d'accéder à de nombreuses fonctionnalités telles que le gestionnaire d'onglets, l'historique de navigation, les préférences utilisateur, etc.
Voici quelques-unes des fonctionnalités clés fournies par l'API browser :
•	Gestion des onglets : ouvrir, fermer, récupérer et modifier des onglets.
•	Gestion des fenêtres : ouvrir, fermer, récupérer et modifier des fenêtres.
•	Gestion des marque-pages : créer, récupérer, modifier et supprimer des marque-pages.
•	Gestion de l'historique : récupérer et supprimer l'historique de navigation.
•	Notifications : afficher des notifications personnalisées à l'utilisateur.
•	Stockage local : stocker des données localement pour une utilisation ultérieure.
•	Communication avec les scripts de contenu : envoyer et recevoir des messages entre l'extension et les scripts injectés dans les pages web.
L'API browser est compatible avec les dernières versions de Firefox et les autres navigateurs basés sur Gecko (tels que Waterfox, Basilisk, etc.). Elle est également conçue pour être compatible avec les API de navigateurs similaires telles que chrome (pour Google Chrome) et browser (pour Microsoft Edge).

