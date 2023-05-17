// import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "mva001",
    title: "The Avengers",
    releaseYear: 2012,
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
    ],
    image:
      "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Holly/avenger.jpg?updatedAt=1684268322469",
    genre: "Action",
    price: 850,
    category: "Hollywood",
    rating: 4.4
  },
  {
    _id: "mva002",
    title: "Inception",
    releaseYear: 2010,
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
      "Marion Cotillard",
    ],
    image:
      "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Holly/incep.jpg?updatedAt=1684268322464",
    genre: "Sci-Fi",
    price: 270, 
    category: "Hollywood",
    rating: 4.6
  },
  {
    _id: "mva003",
    title: "The Shawshank Redemption",
    releaseYear: 1994,
    cast: [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
    ],
    image:
      "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Holly/shawsh.jpg?updatedAt=1684268322056",
    genre: "Drama",
    price: 300,
    category: "Hollywood",
    rating: 4.0
  },
  {
    _id: "mva004",
    title: "Reservoir Dogs",
    releaseYear: 1992,
    cast: [
      "Harvey Keitel",
      "Tim Roth",
      "Michael Madsen",
      "Steve Buscemi",
      "Chris Penn",
      "Lawrence Tierney",
      "Edward Bunker",
      "Quentin Tarantino",
    ],
    image:
      "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Holly/rdogs.jpg?updatedAt=1684268322427",
    genre: "Crime",
    price: 380,
    category: "Hollywood",
    rating: 3.5
  },
  {
    _id: "mva005",
    title: "The Dark Knight",
    releaseYear: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Gary Oldman",
      "Maggie Gyllenhaal",
    ],
    image:
      "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Holly/tdk.jpg?updatedAt=1684268322022",
    genre: "Action",
    price: 250,
    category: "Hollywood",
    rating: 4.5
  },

  {
    _id: "mva006",
    title: "Dilwale Dulhania Le Jayenge",
    releaseYear: 1995,
    cast: [
      "Shah Rukh Khan",
      "Kajol",
      "Amrish Puri",
      "Anupam Kher",
      "Farida Jalal",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Bolly/ddlj.jpg?updatedAt=1684268772312",
    genre: "Romance",
    price: 340,
    category: "Bollywood",
    rating: 3.5
  },
  {
    _id: "mva007",
    title: "3 Idiots",
    releaseYear: 2009,
    cast: [
      "Aamir Khan",
      "Kareena Kapoor Khan",
      "R. Madhavan",
      "Sharman Joshi",
      "Boman Irani",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Bolly/3idiots.jpg?updatedAt=1684268772560",
    genre: "Comedy",
    price: 190,
    category: "Bollywood",
    rating: 4.2
  },
  {
    _id: "mva008",
    title: "Lagaan",
    releaseYear: 2001,
    cast: [
      "Aamir Khan",
      "Gracy Singh",
      "Rachel Shelley",
      "Paul Blackthorne",
      "Kulbhushan Kharbanda",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Bolly/lg.jpg?updatedAt=1684268991997",
    genre: "Drama",
    price: 200,
    category: "Bollywood",
    rating: 4.0
  },
  {
    _id: "mva009",
    title: "Deewar",
    releaseYear: 1975,
    cast: [
      "Amitabh Bachchan",
      "Shashi Kapoor",
      "Nirupa Roy",
      "Parveen Babi",
      "Neetu Singh",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Bolly/deewar.jpg?updatedAt=1684268772337",
    genre: "Drama",
    price: 300,
    category: "Bollywood",
    rating: 3.3
  },
  {
    _id: "mva010",
    title: "Gully Boy",
    releaseYear: 2019,
    cast: [
      "Ranveer Singh",
      "Alia Bhatt",
      "Siddhant Chaturvedi",
      "Vijay Varma",
      "Kalki Koechlin",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Bolly/gb.jpg?updatedAt=1684268772369",
    genre: "Drama",
    price: 450,
    category: "Bollywood",
    rating: 3.7
  },

  {
    _id: "mva011",
    title: "Baahubali: The Beginning",
    releaseYear: 2015,
    cast: [
      "Prabhas",
      "Rana Daggubati",
      "Anushka Shetty",
      "Tamannaah",
      "Ramya Krishnan",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Regional/bb1.jpg?updatedAt=1684269506237",
    genre: "Action",
    price: 800,
    category: "Regional",
    rating: 3.4
  },
  {
    _id: "mva012",
    title: "Angamaly Diaries",
    releaseYear: 2018,
    cast: [
      "Antony Varghese",
  "Sarath Kumar",
  "Tito Wilson",
  "Reshma Rajan",
  "Sinoj Varghese",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Regional/ad.jpg?updatedAt=1684269506025",
    genre: "Drama",
    price: 180,
    category: "Regional",
    rating: 3.8
  },
  {
    _id: "mva013",
    title: "Vikram Vedha",
    releaseYear: 2017,
    cast: [
      "R. Madhavan",
      "Vijay Sethupathi",
      "Shraddha Srinath",
      "Varalaxmi Sarathkumar",
      "Kathir",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Regional/vv.jpg?updatedAt=1684269506082",
    genre: "Crime",
    price: 380,
    category: "Regional",
    rating: 4.0
  },
  {
    _id: "mva014",
    title: "Super Deluxe",
    releaseYear: 2019,
    cast: [
      "Vijay Sethupathi",
      "Fahadh Faasil",
      "Samantha Akkineni",
      "Ramya Krishnan",
      "Mysskin",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Regional/sd.jpg?updatedAt=1684269506348",
    genre: "Drama",
    price: 240,
    category: "Regional",
    rating: 4.5
  },
  {
    _id: "mva015",
    title: "Bangalore Days",
    releaseYear: 2015,
    cast: [
      "Dulquer Salman",
      "Nivin Pauly",
      "Fahadh Faasil",
      "Nazriya"
    ],
    image :"https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/Regional/bd.jpg?updatedAt=1684269506283",
    genre: "Drama Comedy",
    price: 350,
    category: "Regional",
    rating: 3.6
  },

  {
    _id: "mva016",
    title: "Parasite",
    releaseYear: 2019,
    cast: [
      "Song Kang-ho",
      "Lee Sun-kyun",
      "Cho Yeo-jeong",
      "Choi Woo-shik",
      "Park So-dam",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/World/parasite.jpg?updatedAt=1684269967014",
    genre: "Drama",
    price: 650,
    category: "World",
    rating: 3.5
  },
  {
    _id: "mva017",
    title: "The Godfather",
    releaseYear: 1972,
    cast: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/World/the_godfather.jpg?updatedAt=1684269966672",
    genre: "Crime",
    price: 750,
    category: "World",
    rating: 4.8
  },
  {
    _id: "mva018",
    title: "Spirited Away",
    releaseYear: 2001,
    cast: [
      "Rumi Hiiragi",
      "Miyu Irino",
      "Mari Natsuki",
      "Takashi Naito",
      "Yasuko Sawaguchi",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/World/sp.jpg?updatedAt=1684269966479",
    genre: "Animation",
    price: 125,
    category: "World",
    rating: 3.3
  },
  {
    _id: "mva019",
    title: "City Of God",
    releaseYear: 2002,
    cast: [
      "Alexandre Rodrigues",
      "Leandro Firmino",
      "Phellipe Haagensen",
      "Douglas Silva",
    ],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/World/cog.jpg?updatedAt=1684269966978",
    genre: "Drama",
    price: 320,
    category: "World",
    rating: 2.6
  },

  {
    _id: "mva020",
    title: "Memories Of Murder",
    releaseYear: 2003,
    cast: ["Song Kang-ho", "Kim Sang-kyung", "Kim Roe-ha", "Park Hae-il"],
    image: "https://ik.imagekit.io/qsdtqu5hp/Cinemate_Category_wise/World/mom.jpg?updatedAt=1684269966859",
    genre: "Thriller",
    price: 265,
    category: "World",
    rating: 4.0
  },
];
