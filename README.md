# BookStore
Simple book store with angular and laravel Api

## Installation

Clone the project, You will have two folders as below
```bash
-auth-project [Backend - Laravel Api]
-book-store [Frontend - Angular]
```
Configure the database in .env file.

Open the backend folder in CMD or Git bash
```bash
 run : php artisan migrate 
```
Once migrated, we have to install laravel passport client Secret 
```bash
 run : php artisan passport:install --force
```
and finally 
```bash
 run : php artisan serve
```

Thats it for Backend, Run the front and folder
```bash
 run : ng serve -o 
```

The project will open in your default browser, Good Luck !

Default user Admin
```bash
 username : Admin
 password : 123456789
```
