# :tools: EzCRM — Backend

Backend de **EzCRM**, une application CRM pensée pour les développeurs freelance. Il gère les données liées aux clients, projets, tâches et finances, et fournit une API utilisée par le frontend.

Ce dépôt contient l’API et l’interface d’administration, développées avec **Strapi**.

## :gear: Stack

- [Strapi 5](https://docs.strapi.io/)
- Base de données : SQLite (par défaut)

## :rocket: Lancement en local

1. Cloner le dépôt :

```bash
git clone https://github.com/ton-utilisateur/ezcrm-backend.git
cd ezcrm-backend
```

2. Installer les dépendances :
```bash
npm install
```
3. Démarrer le serveur en mode développement :
```bash
npm run develop
```
> L’interface d’administration Strapi est accessible sur http://localhost:1337/admin

📁 Structure

src/api/ — Collections et contrôleurs liés aux entités CRM

config/ — Configuration du serveur, des plugins, des permissions, etc.

database/ — Configuration de la base de données

🔗 API

Par défaut, l’API est accessible via :
http://localhost:1337/api

🧑‍💻 Développement

Ce backend est utilisé avec le frontend disponible ici :
https://github.com/ton-utilisateur/ezcrm-frontend
---

Développé pour faciliter la gestion de mon activité freelance.
