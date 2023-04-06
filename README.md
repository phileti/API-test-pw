# API-test-pw
Test d'une REST API avec playwright.

## Installation
`npm install @playwright/test` installe playwright

## Exécution
`npx playwright test` exécute tous les tests

## Rapport
`npx playwright show-report` permet de voir un rapport HTML

## Description
L'API testée est celle du proxy tags qui permet de récupérer les tags de diffusion d'un utilisateur en fonction de son éditeur.
L'URL de l'API est définie dans le fichier de configuration `playwright.config.ts`