# CRM APP

## Présentation et contexte de l'application :

### Déroulé et organisation ;
Ce Test est en deux parties : MVP + Features bonus.

"MVP" : Ce sont les requirements minimum attendues pour la réalisation du test.

Features Bonus : fonctionnalités bonus "à la carte", appréciées mais non-obligatoires pour la réalisation du test.

*PS: n'hésites pas à le faire par étape ! (surtout pour la réalisation des bonus)*

### Contexte de l'application :
Pour une application de messagerie interne à l'entreprise, nous souhaitons développer une API REST, permettant de lire, écrire, modifier et supprimer des messages.

Les messages seront de 2 types : SMS et email.

Un utilisateur sera en mesure de lire les messages qui lui ont été envoyés, d'y répondre et/ou de les supprimer. L'utilisateur pourra aussi envoyer un message à un autre utilisateur de l'application et aussi modifier celui-ci.

Il n'est pas possible pour un utilisateur de lire/modifier/supprimer les messages destinés à un autre utilisateur.

Les messages comporteront au moins les informations suivantes :

* le message
* l'expéditeur
* la date d'envoi.

__Il s'agit donc naturellement de développer à la fois une API ainsi qu'un client front exploitant cette dernière afin de visualiser ces messages.__

---

### MVP :
* J'affiche la liste des messages du compte utilisateur.
* Je clique sur un message pour visualiser ses détails.
* Je peux changer d'utilisateur.
* Je peux envoyer un message à un utilisateur. 
* Je peux lire un message qui m'est addressé (ou que j'ai envoyé).

## Bonus:
* Je peux me créer un compte.
* Je peux me connecter.
* Je peux me déconnecter.
* Intégrer version responsive
* Je peux supprimer des messages (reçu ou envoyé).
* Je peux modifier un message envoyé

--- 

## BACK-END
### Contraintes techniques :
* API REST
* Node.js

### Bonus techniques :
* DB (de ton choix)
* Nest.js
* Docker
* tests fonctionnels


## FRONT-END

### Contraintes techniques :
* React (CRA, Next.js, ...)
* Only functional components (no class based)
* react-router (ou next/router le cas échéant)

### Bonus techniques :
* State management de ton choix (Redux, MobX, zustand, ...)
* Code coverage avec jest + react-testing-library


### Contenu

Les maquettes sont fournies au format [PDF](maquettes/wtn-crm-fe-test.pdf) et au format [FIGMA](https://www.figma.com/) et permettent d'avoir un aperçu du résultat attendu et de récupérer les éventuels assets.
