const data = [
  {
    id: 0,
    answer: "Hola, como estas",
    question: "Bonjour, comment ça va?",
  },
  {
    id: 1,
    answer: "Estoy bien. Estoy mal.",
    question: "Je vais bien. Je vais mal.",
  },
  {
    id: 2,
    answer: "Hola, como esta usted",
    question: "Bonjour, comment allez-vous?",
  },
  {
    id: 3,
    answer: "Buenos dias",
    question: "Bonjour",
  },
  {
    id: 4,
    answer: "Buenas tardes",
    question: "Bon après-midi",
  },
  {
    id: 5,
    answer: "Buenas noches",
    question: "bonsoir",
  },
  {
    id: 6,
    answer: "Soy...",
    question: "je suis...",
  },
  {
    id: 7,
    answer: "Me llamo...",
    question: "Je m'appelle...",
  },
  {
    id: 8,
    answer: "Encantado/a de conocerte",
    question: "Enchanté(e) de te connaître.",
  },
  {
    id: 9,
    answer: "Con mucho gusto",
    question: "Avec Plasir.",
  },
  {
    id: 10,
    answer: "Adios",
    question: "Aurevoir",
  },
  {
    id: 11,
    answer: "Hasta manana",
    question: "À demain",
  },
  {
    id: 12,
    answer: "Perdon",
    question: "Je m'excuse.",
  },
  {
    id: 13,
    answer: "Gracias",
    question: "Merci",
  },
  {
    id: 14,
    answer: "Como te llamas",
    question: "Comment t’appelles-tu?",
  },
  {
    id: 15,
    answer: "De donde eres",
    question: "D'où viens-tu?",
  },
  {
    id: 16,
    answer: "Donde vives",
    question: "Où vis-tu?",
  },
  {
    id: 17,
    answer: "Que haces en la vida",
    question: "Que fais-tu dans la vie?",
  },
  {
    id: 18,
    answer: "Soy de Canada",
    question: "Je suis de Canada",
  },
  {
    id: 19,
    answer: "Vivo en Montreal",
    question: "Je vie à Montréal?",
  },
  {
    id: 20,
    answer: "Soy estudiante del colegio",
    question: "Je suis un étudiant du collège",
  },
  {
    id: 21,
    answer: "Cuantos anos tienes",
    question: "Tu as quel âge?",
  },
  {
    id: 22,
    answer: "Cuando es tu cumpleanos",
    question: "C’est quand ta fête?",
  },
  {
    id: 23,
    answer: "Como eres",
    question: "Comment est-tu?",
  },
  {
    id: 24,
    answer: "Tengo trece anos",
    question: "J’ai treize ans.",
  },
  {
    id: 25,
    answer: "Mi cumpleanos es el tres de febrero",
    question: "Ma fête est le trois février.",
  },
  {
    id: 26,
    answer:
      "Mis pasatiempos preferidos son escuchar musica y jugar videojuegos",
    question:
      "Mes passe-temps préférés sont d' écouter de la musique et jouer aux jeux vidéo.",
  },
  {
    id: 27,
    answer: "Soy simpatico y deportivo",
    question: "Je suis sympathique et sportif.",
  },
  {
    id: 28,
    answer: "Como se dice la palabra",
    question: "comment se dit ce mot",
  },
  {
    id: 29,
    answer: "Se dice...",
    question: "Ça se dit...",
  },
  {
    id: 30,
    answer: "Que significa",
    question: "Comment se signifie?",
  },
  {
    id: 31,
    answer: "Quiere decir...",
    question: "Ça veut dire...",
  },
  {
    id: 32,
    answer: "No lo sé",
    question: "Je ne sais pas",
  },
  {
    id: 33,
    answer: "Me puedes ayudar por favor",
    question: "Peux-tu m'aider, stp",
  },
  {
    id: 34,
    answer: "Tengo una pregunta: Puedes repetir",
    question: "J’ai une question: Peux-tu répéter.",
  },
  {
    id: 35,
    answer: "No entiendo",
    question: "Je ne comprend pas",
  },
  {
    id: 36,
    answer: "Tengo Retraso",
    question: "Je suis en retard",
  },
  {
    id: 37,
    answer: "Escucha",
    question: "Écoute",
  },
  {
    id: 38,
    answer: "Puedo beber agua",
    question: "Puis-je boire de l’eau",
  },
  {
    id: 39,
    answer: "Puedo ir al bano",
    question: "Puis-je aller au salle de bain",
  },
  {
    id: 40,
    answer: "Me olvide mi libro en mi casillero",
    question: "J’ai oublié mon livre dans mon casillé",
  },
  {
    id: 41,
    answer: "Tengo una pregunta: Puedo ir a la secretaria",
    question: "J’ai une question: Puis-je aller au secretaire",
  },
  {
    id: 42,
    answer: "No es justo. Ayudame",
    question: "Ce n’est pas juste. Aide-moi",
  },
  {
    id: 43,
    answer: "Puedo hablar en ingles, por favor",
    question: "Puis-je parler en anglais, stp?",
  },
  {
    id: 44,
    answer: "Como se escribe...",
    question: "Comment écrit-t-on...",
  },
  {
    id: 45,
    answer: "Pasa a la pizarra porque yo necesito ayuda",
    question: "Va au tableau, parce que j’ai besoin d’aide",
  },
  {
    id: 46,
    answer: "Mas despacio, por favor",
    question: "Plus lent stp",
  },
  {
    id: 47,
    answer: "Cierra el ordenador y abre el libro",
    question: "Range ton ordinateur et ouvre ton livre",
  },
  {
    id: 48,
    answer: "Silencio por favor y levantan la mano",
    question: "Silence stp et lève ta main",
  },
  {
    id: 49,
    answer: "No te preocupes. Es una broma",
    question: "Ne te préoccupe pas, c’est une blague.",
  },
  {
    id: 50,
    answer: "Presta atencion y trabaja con un companero",
    question: "Faites attention et travaille avec ton coéquipier",
  },
  {
    id: 51,
    answer: "Lunes",
    question: "Lundi",
  },
  {
    id: 52,
    answer: "Martes",
    question: "Mardi",
  },
  {
    id: 53,
    answer: "Miercoles",
    question: "Mercredi",
  },
  {
    id: 54,
    answer: "Jueves",
    question: "Jeudi",
  },
  {
    id: 55,
    answer: "Viernes",
    question: "Vendredi",
  },
  {
    id: 56,
    answer: "Sabado",
    question: "Samedi",
  },
  {
    id: 57,
    answer: "Domingo",
    question: "Dimanche",
  },
  {
    id: 58,
    answer: "Enero",
    question: "Janvier",
  },
  {
    id: 59,
    answer: "Febrero",
    question: "Février",
  },
  {
    id: 60,
    answer: "Marzo",
    question: "Mars",
  },
  {
    id: 61,
    answer: "Abril",
    question: "Avril",
  },
  {
    id: 62,
    answer: "Mayo",
    question: "Mai",
  },
  {
    id: 63,
    answer: "Junio",
    question: "Juin",
  },
  {
    id: 64,
    answer: "Julio",
    question: "Juillet",
  },
  {
    id: 65,
    answer: "Agosto",
    question: "Août",
  },
  {
    id: 66,
    answer: "Septiembre",
    question: "Septembre",
  },
  {
    id: 67,
    answer: "Octubre",
    question: "Octobre",
  },
  {
    id: 68,
    answer: "Noviembre",
    question: "Novembre",
  },
  {
    id: 69,
    answer: "Diciembre",
    question: "Décembre",
  },
  {
    id: 70,
    answer: "Invierno",
    question: "Hiver",
  },
  {
    id: 71,
    answer: "Primavera",
    question: "Printemps",
  },
  {
    id: 72,
    answer: "verano",
    question: "Été",
  },
  {
    id: 73,
    answer: "Otono",
    question: "Automne",
  },
  {
    id: 74,
    answer: "o",
    question: "Terminaison AR: Yo",
  },
  {
    id: 75,
    answer: "as",
    question: "Terminaison AR: Tu",
  },
  {
    id: 76,
    answer: "a",
    question: "Terminaison AR: El, Ella, Usted",
  },
  {
    id: 77,
    answer: "amos",
    question: "Terminaison AR: Nosotros",
  },
  {
    id: 79,
    answer: "an",
    question: "Terminaison AR: Ellos, Ellas, Ustedes",
  },
  {
    id: 80,
    answer: "o",
    question: "Terminaison ER: Yo",
  },
  {
    id: 81,
    answer: "es",
    question: "Terminaison ER: Tu",
  },
  {
    id: 82,
    answer: "e",
    question: "Terminaison ER: El, Ella, Usted",
  },
  {
    id: 83,
    answer: "emos",
    question: "Terminaison ER: Nosotros",
  },
  {
    id: 84,
    answer: "en",
    question: "Terminaison ER: Ellos, Ellas, Ustedes",
  },
  {
    id: 85,
    answer: "o",
    question: "Terminaison IR: Yo",
  },
  {
    id: 86,
    answer: "es",
    question: "Terminaison IR: Tu",
  },
  {
    id: 87,
    answer: "e",
    question: "Terminaison IR: El, Ella, Usted",
  },
  {
    id: 88,
    answer: "imos",
    question: "Terminaison IR: Nosotros",
  },
  {
    id: 89,
    answer: "en",
    question: "Terminaison IR: Ellos, Ellas, Ustedes",
  },
  {
    id: 90,
    answer: "uno",
    question: "1",
  },
  {
    id: 91,
    answer: "dos",
    question: "2",
  },
  {
    id: 92,
    answer: "tres",
    question: "3",
  },
  {
    id: 93,
    answer: "cuatro",
    question: "4",
  },
  {
    id: 94,
    answer: "cinco",
    question: "5",
  },
  {
    id: 95,
    answer: "seis",
    question: "6",
  },
  {
    id: 96,
    answer: "siete",
    question: "7",
  },
  {
    id: 95,
    answer: "ocho",
    question: "8",
  },
  {
    id: 96,
    answer: "nueve",
    question: "9",
  },
  {
    id: 97,
    answer: "diez",
    question: "10",
  },
  {
    id: 98,
    answer: "once",
    question: "11",
  },
  {
    id: 99,
    answer: "doce",
    question: "12",
  },
  {
    id: 100,
    answer: "trece",
    question: "13",
  },
  {
    id: 101,
    answer: "catorce",
    question: "14",
  },
  {
    id: 102,
    answer: "quince",
    question: "15",
  },
  {
    id: 103,
    answer: "dieci",
    question: "16 - 19 début",
  },
  {
    id: 104,
    answer: "veinti",
    question: "20 - 29 début",
  },
  {
    id: 105,
    answer: "treinta y",
    question: "30 - 39 début",
  },
  {
    id: 106,
    answer: "cuarenta y",
    question: "40 - 49 début",
  },
  {
    id: 107,
    answer: "cincuenta y",
    question: "50 - 59 début",
  },
  {
    id: 108,
    answer: "madre",
    question: "mère",
  },
  {
    id: 109,
    answer: "esposa",
    question: "épouse",
  },
  {
    id: 110,
    answer: "padre",
    question: "père",
  },
  {
    id: 111,
    answer: "esposo",
    question: "époux",
  },
  {
    id: 112,
    answer: "hermano",
    question: "frère",
  },
  {
    id: 113,
    answer: "hija",
    question: "fille",
  },
  {
    id: 114,
    answer: "hermana",
    question: "soeur",
  },
  {
    id: 115,
    answer: "hijo",
    question: "fils",
  },
  {
    id: 116,
    answer: "abuelo",
    question: "grand-père",
  },
  {
    id: 117,
    answer: "abuela",
    question: "grand-mère",
  },
  {
    id: 118,
    answer: "tio",
    question: "oncle",
  },
  {
    id: 119,
    answer: "tia",
    question: "tante?",
  },
  {
    id: 120,
    answer: "primo",
    question: "cousin",
  },
  {
    id: 121,
    answer: "prima",
    question: "cousine",
  },
  {
    id: 122,
    answer: "sobrina",
    question: "nièce",
  },
  {
    id: 123,
    answer: "sobrino",
    question: "neveu",
  },
  {
    id: 124,
    answer: "nieto",
    question: "petit fils",
  },
  {
    id: 125,
    answer: "nieta",
    question: "petit fille",
  },
  {
    id: 126,
    answer: "mi",
    question: "Yo: adj pos sing",
  },
  {
    id: 127,
    answer: "Tu",
    question: "Tu: adj pos sing",
  },
  {
    id: 128,
    answer: "su",
    question: "El, Ella, Usted: adj pos sing",
  },
  {
    id: 129,
    answer: "Nuestro/nuestra",
    question: "Nosotros: adj pos sing",
  },
  {
    id: 130,
    answer: "su",
    question: "Ellos, Ellas, Ustedes: adj pos sing",
  },
  {
    id: 131,
    answer: "mis",
    question: "Yo: adj pos plural",
  },
  {
    id: 132,
    answer: "tus",
    question: "Tu: adj pos plural",
  },
  {
    id: 133,
    answer: "sus",
    question: "El, Ella, Usted: adj pos plural",
  },
  {
    id: 134,
    answer: "Nuestros/Nuestras",
    question: "Nosotros: adj pos plural",
  },
  {
    id: 134,
    answer: "sus",
    question: "Ellos, Ellas, Ustedes: adj pos plural",
  },
  {
    id: 135,
    answer: "Soy alto",
    question: "Je suis grand",
  },
  {
    id: 136,
    answer: "Soy bajo",
    question: "Je suis petit",
  },
  {
    id: 137,
    answer: "Una pequena casa",
    question: "Une petit Maison",
  },
  {
    id: 138,
    answer: "Una grande casa",
    question: "Une grande maison",
  },
  {
    id: 139,
    answer: "Soy inteligente",
    question: "Je suis intelligent",
  },
  {
    id: 140,
    answer: "Soy tonto",
    question: "Je suis stupide",
  },
  {
    id: 141,
    answer: "Soy bromista",
    question: "Je suis drôle",
  },
  {
    id: 142,
    answer: "Soy serio",
    question: "Je suis sérieux",
  },
  {
    id: 143,
    answer: "Soy joven",
    question: "Je suis jeune",
  },
  {
    id: 144,
    answer: "Soy major",
    question: "Je suis vieux",
  },
  {
    id: 145,
    answer: "Soy pelirrojo",
    question: "Je suis roux",
  },
  {
    id: 146,
    answer: "el pelo",
    question: "les cheveux",
  },
  {
    id: 147,
    answer: "los ojos",
    question: "les yeux",
  },
  {
    id: 148,
    answer: "pelo corto",
    question: "cheveux court",
  },
  {
    id: 149,
    answer: "pelo largo",
    question: "cheveux large",
  },
  {
    id: 150,
    answer: "pelo rubio",
    question: "cheveux blond",
  },
  {
    id: 151,
    answer: "pelo café",
    question: "cheveux brun",
  },
  {
    id: 152,
    answer: "pelo negro",
    question: "cheveux noir",
  },
  {
    id: 153,
    answer: "pelo liso",
    question: "cheveux lisse/droit",
  },
  {
    id: 154,
    answer: "pelo rizado",
    question: "cheveux risé ( curly )",
  },
  {
    id: 155,
    answer: "los ojos azules",
    question: "Les yeux bleus",
  },
  {
    id: 156,
    answer: "los ojos grises",
    question: "Les yeux gris",
  },
  {
    id: 157,
    answer: "Una barba",
    question: "Une barbe",
  },
  {
    id: 158,
    answer: "Un bigote",
    question: "Une moustache",
  },
];

export default data;
