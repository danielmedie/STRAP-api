# STRAP-api

Computers

GET: http://localhost:1337/api/computers
DELETE: http://localhost:1337/api/computers/{id}
PUT: http://localhost:1337/api/computers/{id}

exemple:

{
  "data": {
    "name": "Dell XPS 13",
    "description": "Dell XPS 13 bärbar dator är en smidig och kraftfull enhet med en 13,3-tums skärm och upp till 16 GB RAM-minne. Den är perfekt för att ta med på resor eller för att använda som en produktionsenhet för mindre projekt.",
    "manufacturer": "Dell",
    "price": 9990,
    "processor": "Intel® Core™ i5-1135G7"
  }
}

POST: http://localhost:1337/api/computers
exemple:
{
  "data": {
    "name": "Dell XPS 15",
    "description": "Dell XPS 15 bärbar dator för kreativa yrken har en kraftfull Intel® Core™-processor och NVIDIA-grafik. Med en stor 15,6-tums skärm och upp till 32 GB RAM-minne är denna dator en utmärkt produktionsenhet för allt från bildredigering till videoarbete.",
    "manufacturer": "Dell",
    "price": 14990,
    "processor": "Intel® Core™ i7-11800H"
  }
}

	Televisions

GET: http://localhost:1337/api/televisions
DELETE: http://localhost:1337/api/televisions/{id}
PUT: http://localhost:1337/api/televisions/{id}

exemple:
{
  "data": {
    "name": "Dell XPS 13",
    "description": "Dell XPS 13 bärbar dator är en smidig och kraftfull enhet med en 13,3-tums skärm och upp till 16 GB RAM-minne. Den är perfekt för att ta med på resor eller för att använda som en produktionsenhet för mindre projekt.",
    "manufacturer": "Dell",
    "price": 9990,
    "screen_size": 91
  }
}

POST: http://localhost:1337/api/televisions

exemple:

{
  "data": {
    "name": "Dell XPS 15",
    "description": "den är bra",
    "manufacturer": "Dell",
    "price": 14990,
    "screen_size": "42"
  }
}


	Audio-devices

GET: http://localhost:1337/api/televisions
DELETE: http://localhost:1337/api/televisions/{id}
PUT: http://localhost:1337/api/televisions/{id}

exemple:
{
  "data": {
    "name": "Dell XPS 1425",
    "description": "den är bra",
    "manufacturer": "Dell",
    "price": 14990,
    "effect": "42"
  }
}

POST: http://localhost:1337/api/televisions

exemple:

{
  "data": {
    "name": "Dell XPS 15",
    "description": "den är bra",
    "manufacturer": "Dell",
    "price": 14990,
    "effect": "42"
  }
}


	Mobiles

GET: http://localhost:1337/api/televisions
DELETE: http://localhost:1337/api/televisions/{id}
PUT: http://localhost:1337/api/televisions/{id}

exemple:
{
  "data": {
    "name": "Dell XPS 15",
    "description": "den är bra",
    "manufacturer": "Dell",
    "price": 14990,
    "screen_type": "42"
  }
}

POST: http://localhost:1337/api/televisions

exemple:
{
  "data": {
    "name": "Dell XPS 1225",
    "description": "den är bra",
    "manufacturer": "Dell",
    "price": 14990,
    "screen_type": "42"
  }
}



