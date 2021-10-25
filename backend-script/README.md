# Backend Script
Small ExpressJS Service to Search Movies.
## Installation
1. To run in local, copy file ```env.example.json``` to root folder and rename to ```env.json```.
2. Replace all value in ```env.json``` to your local configuration.
3. Replace ```OMDB_API``` value with ```https://www.omdbapi.com/```.
4. Replace ```OMDB_API_KEY``` value with ```dbb58a35```.
5. To install dependencies, run ```npm install```.
5. To run the service, use ```npm run dev```.

## SQL Script
```
CREATE TABLE `API_LOGS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `api_url` VARCHAR(255) NOT NULL,
  `parameters` TEXT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
```
