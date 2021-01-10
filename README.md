# Calculatrice en symfony

Ce projet est une calculatrice qui implimente les opérations élémentaires suivant (+ - * /)


### Installing

    .
    ├── docker                         # All docker images folder
    │   ├── nginx                      # Image docker nginx & vhost config
    │   ├── php-fpm                    # Image docker & requirement php-fpm for symfony
    │   ├── databbase                  # Image docker mariadbb
    │   ├── docker-compose             # Docker -compose file to run the project env
    │   └── .env                       # docker env variables
    ├── src
    │   └── Controller                 # List of available controllers
    │       └── CalculatorController   # Calculator controller
    ├── templates                      # twig templates files
    ├── public                         # Documentation files (alternatively `doc`)
    │   ├── css                        # Calculator styles
    │   └── js                         # Calculator javascripts
    ├── tests 
    │   └── Feat 
    │       └── CalculatorControllerTest   # CalculatorController phpUnit tests
    └── ...


### Installing

Le projet tourne sur des conteneurs docker:

- Conteneur php-fpm
- Conteneur nginx 

il y a une conteneur mariadb pour la base de données mais elle n'est pas utilisé pour ce projet (elle est comenté au niveau le docker compose ).


Pour lancer l'application

```
cd my_calculator
composer install
cd docker
docker-compose up -d
```

Pour accèder à l'application il faut y aller sur le lien http://localhost/calculate


Pour arrêter les conteneurs docker

```
docker-compose stop
```

## Exécution des tests


Pour exécuter les tests exécutés

```
php bin/phpunit
```
