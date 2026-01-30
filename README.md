# Cat-AI : Reconnaissance de Races de Chats

Ce projet a pour but de reconnaître la race d'un chat à partir d'une image. Il utilise un modèle de Deep Learning entraîné pour classifier les images parmi 12 races de chats différentes.

La précision du modèle se situe entre **80% et 85%**.

## 🧠 Modèle

Le modèle est basé sur une approche de **Transfer Learning** en utilisant **EfficientNetB0**, un modèle pré-entraîné sur le jeu de données ImageNet. L'entraînement a été affiné (fine-tuning) sur un jeu de données spécifique de chats pour spécialiser le modèle dans la reconnaissance de leurs races.

Le processus d'entraînement est détaillé dans le notebook `notebook.ipynb`.

### Races supportées

Le modèle peut reconnaître les 12 races suivantes :
- Abyssinian
- Bengal
- Birman
- Bombay
- British Shorthair
- Egyptian Mau
- Maine Coon
- Persian
- Ragdoll
- Russian Blue
- Siamese
- Sphynx - Hairless Cat

## 🚀 API Backend

Une API a été développée avec **FastAPI** pour servir le modèle. Elle permet d'envoyer une image et de recevoir en retour les 3 races les plus probables avec leur score de confiance.

### Routes de l'API

- `GET /` : Renvoie un message de statut pour confirmer que l'API est en ligne.
- `POST /predict` : Prend une image en entrée (`multipart/form-data`) et renvoie les prédictions.

Vous pouvez consulter la documentation interactive de l'API et faire des tests via l'interface Swagger UI à l'adresse [http://localhost:8000/docs](http://localhost:8000/docs).

## ✨ Frontend

L'interface utilisateur est une application web moderne développée avec **React** et **TypeScript**. Elle est stylisée avec **Tailwind CSS** et utilise **Vite** comme outil de build.

L'application permet de téléverser une image de chat et d'afficher les prédictions de race renvoyées par le backend.

## Déploiement

Le projet est également déployé et accessible en ligne :

-   **Frontend (Vercel)** : [https://cat-f7eawaecf-yxtomixs-projects.vercel.app/](https://cat-f7eawaecf-yxtomixs-projects.vercel.app/)
-   **Backend (Render)** : [https://cat-ai-0h0f.onrender.com/docs#/](https://cat-ai-0h0f.onrender.com/docs#/)

Vous pouvez tester l'application directement via ces liens sans installation locale.

## 🛠️ Installation et Lancement

Voici les commandes pour mettre en place et lancer le projet.

### Backend

1.  **Placez-vous dans le dossier du projet** :
    ```bash
    cd CAT-AI
    ```

2.  **Installez les dépendances Python** :
    ```bash
    pip install -r requirements.txt
    ```
    *Note : Si vous rencontrez des problèmes de dépendances, vous pouvez essayer `python -m pip install -r requirements.txt --no-deps`.*

3.  **Lancez le serveur de l'API** :
    ```bash
    uvicorn backend.app.main:app --reload
    ```
    Le serveur sera accessible à l'adresse [http://localhost:8000](http://localhost:8000).

### Frontend

1.  **Placez-vous dans le dossier du frontend** :
    ```bash
    cd frontend
    ```

2.  **Installez les dépendances Node.js** :
    ```bash
    npm install
    ```

3.  **Lancez le serveur de développement** :
    ```bash
    npm run dev
    ```
    L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173) (ou un autre port si celui-ci est déjà utilisé).

## 📚 Données

Pour entraîner le modèle, vous pouvez télécharger et décompresser les données :
```bash
unzip "archive.zip" -d data
```


