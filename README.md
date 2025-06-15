# My TODO App

### Overview

I spent around 2 hours on this project. I've used Laravel alongside React using Vite. I did spend a fair bit of time learning the newer/more native features of Laravel, because we migrated from Zend to Laravel not too long ago at my work, I have not had tha ability to work with fully native Laravel.

### Setup

composer create-project laravel/laravel todo-app
composer require laravel/breeze --dev
php artisan breeze:install react
npm install
npm run dev

php artisan make:model Todo -m
php artisan make:controller TaskController
php artisan make:policy TodoPolicy --model=Todo

php artisan migrate
php artisan make:request StoreTodoRequest
php artisan make:request UpdateTodoRequest

### Things I'd Improve

- Make a proper stylesheet
- Add a complete feature and time due date
- Add check in API to make sure editing a completed list is not permitted
- Write UTs
- Properly re use the shared components

### Things I'd do better if I had more time

- Better commit messages and smaller commits
- Fix 405 errors
