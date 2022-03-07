const dogs = [
    {
       "id":1,
       "name":"Affenpinscher",
       "weight":"3 - 6",
       "height":"23 - 29",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Stubborn",
          "Curious",
          "Playful",
          "Adventurous",
          "Active",
          "Fun-loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    },
    {
       "id":2,
       "name":"Afghan Hound",
       "weight":"23 - 27",
       "height":"64 - 69",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Aloof",
          "Clownish",
          "Dignified",
          "Independent",
          "Happy"
       ],
       "image":"https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
    },
    {
       "id":3,
       "name":"African Hunting Dog",
       "weight":"20 - 30",
       "height":"76",
       "life_span":"11 years",
       "temperaments":[
          "Wild",
          "Hardworking",
          "Dutiful"
       ],
       "image":"https://cdn2.thedogapi.com/images/rkiByec47.jpg"
    },
    {
       "id":4,
       "name":"Airedale Terrier",
       "weight":"18 - 29",
       "height":"53 - 58",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Outgoing",
          "Friendly",
          "Alert",
          "Confident",
          "Intelligent",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
    },
    {
       "id":5,
       "name":"Akbash Dog",
       "weight":"41 - 54",
       "height":"71 - 86",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Loyal",
          "Independent",
          "Intelligent",
          "Brave"
       ],
       "image":"https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
    },
    {
       "id":6,
       "name":"Akita",
       "weight":"29 - 52",
       "height":"61 - 71",
       "life_span":"10 - 14 years",
       "temperaments":[
          "Docile",
          "Alert",
          "Responsive",
          "Dignified",
          "Composed",
          "Friendly",
          "Receptive",
          "Faithful",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/BFRYBufpm.jpg"
    },
    {
       "id":7,
       "name":"Alapaha Blue Blood Bulldog",
       "weight":"25 - 41",
       "height":"46 - 61",
       "life_span":"12 - 13 years",
       "temperaments":[
          "Loving",
          "Protective",
          "Trainable",
          "Dutiful",
          "Responsible"
       ],
       "image":"https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg"
    },
    {
       "id":8,
       "name":"Alaskan Husky",
       "weight":"17 - 23",
       "height":"58 - 66",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Friendly",
          "Energetic",
          "Loyal",
          "Gentle",
          "Confident"
       ],
       "image":"https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
    },
    {
       "id":9,
       "name":"Alaskan Malamute",
       "weight":"29 - 45",
       "height":"58 - 64",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Friendly",
          "Affectionate",
          "Devoted",
          "Loyal",
          "Dignified",
          "Playful"
       ],
       "image":"https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
    },
    {
       "id":10,
       "name":"American Bulldog",
       "weight":"27 - 54",
       "height":"56 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Friendly",
          "Assertive",
          "Energetic",
          "Loyal",
          "Gentle",
          "Confident",
          "Dominant"
       ],
       "image":"https://cdn2.thedogapi.com/images/pk1AAdloG.jpg"
    },
    {
       "id":11,
       "name":"American Bully",
       "weight":"14 - 68",
       "height":"36 - 43",
       "life_span":"8 – 15 years",
       "temperaments":[
          "Strong Willed",
          "Stubborn",
          "Friendly",
          "Clownish",
          "Affectionate",
          "Loyal",
          "Obedient",
          "Intelligent",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg"
    },
    {
       "id":12,
       "name":"American Eskimo Dog",
       "weight":"9 - 18",
       "height":"38 - 48",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Friendly",
          "Alert",
          "Reserved",
          "Intelligent",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
    },
    {
       "id":13,
       "name":"American Eskimo Dog (Miniature)",
       "weight":"3 - 5",
       "height":"23 - 30",
       "life_span":"13 – 15 years",
       "temperaments":[
          "Friendly",
          "Alert",
          "Reserved",
          "Intelligent",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg"
    },
    {
       "id":14,
       "name":"American Foxhound",
       "weight":"29 - 34",
       "height":"53 - 71",
       "life_span":"8 - 15 years",
       "temperaments":[
          "Kind",
          "Sweet-Tempered",
          "Loyal",
          "Independent",
          "Intelligent",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg"
    },
    {
       "id":15,
       "name":"American Pit Bull Terrier",
       "weight":"14 - 27",
       "height":"43 - 53",
       "life_span":"10 - 15 years",
       "temperaments":[
          "Strong Willed",
          "Stubborn",
          "Friendly",
          "Clownish",
          "Affectionate",
          "Loyal",
          "Obedient",
          "Intelligent",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/HkC31gcNm.png"
    },
    {
       "id":16,
       "name":"American Staffordshire Terrier",
       "weight":"23 - 27",
       "height":"43 - 48",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Tenacious",
          "Friendly",
          "Devoted",
          "Loyal",
          "Attentive",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/rJIakgc4m.jpg"
    },
    {
       "id":17,
       "name":"American Water Spaniel",
       "weight":"11 - 20",
       "height":"38 - 46",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Friendly",
          "Energetic",
          "Obedient",
          "Intelligent",
          "Protective",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg"
    },
    {
       "id":18,
       "name":"Anatolian Shepherd Dog",
       "weight":"36 - 68",
       "height":"69 - 74",
       "life_span":"11 - 13 years",
       "temperaments":[
          "Steady",
          "Bold",
          "Independent",
          "Confident",
          "Intelligent",
          "Proud"
       ],
       "image":"https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg"
    },
    {
       "id":19,
       "name":"Appenzeller Sennenhund",
       "weight":"22 - 25",
       "height":"51 - 56",
       "life_span":"12 – 14 years",
       "temperaments":[
          "Reliable",
          "Fearless",
          "Energetic",
          "Lively",
          "Self-assured"
       ],
       "image":"https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg"
    },
    {
       "id":21,
       "name":"Australian Cattle Dog",
       "weight":"20 - 28",
       "height":"43 - 51",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Cautious",
          "Energetic",
          "Loyal",
          "Obedient",
          "Protective",
          "Brave"
       ],
       "image":"https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg"
    },
    {
       "id":22,
       "name":"Australian Kelpie",
       "weight":"14 - 21",
       "height":"43 - 51",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Friendly",
          "Energetic",
          "Alert",
          "Loyal",
          "Intelligent",
          "Eager"
       ],
       "image":"https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg"
    },
    {
       "id":23,
       "name":"Australian Shepherd",
       "weight":"16 - 29",
       "height":"46 - 58",
       "life_span":"12 - 16 years",
       "temperaments":[
          "Good-natured",
          "Affectionate",
          "Intelligent",
          "Active",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1-llgq4m.jpg"
    },
    {
       "id":24,
       "name":"Australian Terrier",
       "weight":"6 - 7",
       "height":"25 - 28",
       "life_span":"15 years",
       "temperaments":[
          "Spirited",
          "Alert",
          "Loyal",
          "Companionable",
          "Even Tempered",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg"
    },
    {
       "id":25,
       "name":"Azawakh",
       "weight":"15 - 25",
       "height":"58 - 74",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Aloof",
          "Affectionate",
          "Attentive",
          "Rugged",
          "Fierce",
          "Refined"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkvZgx94m.jpg"
    },
    {
       "id":26,
       "name":"Barbet",
       "weight":"18 - 29",
       "height":"51 - 66",
       "life_span":"13 – 15 years",
       "temperaments":[
          "Obedient",
          "Companionable",
          "Intelligent",
          "Joyful"
       ],
       "image":"https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg"
    },
    {
       "id":28,
       "name":"Basenji",
       "weight":"10 - 11",
       "height":"41 - 43",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Affectionate",
          "Energetic",
          "Alert",
          "Curious",
          "Playful",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg"
    },
    {
       "id":29,
       "name":"Basset Bleu de Gascogne",
       "weight":"16 - 18",
       "height":"33 - 38",
       "life_span":"10 - 14 years",
       "temperaments":[
          "Affectionate",
          "Lively",
          "Agile",
          "Curious",
          "Happy",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/BkMQll94X.jpg"
    },
    {
       "id":30,
       "name":"Basset Hound",
       "weight":"23 - 29",
       "height":"36",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Tenacious",
          "Friendly",
          "Affectionate",
          "Devoted",
          "Sweet-Tempered",
          "Gentle"
       ],
       "image":"https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg"
    },
    {
       "id":31,
       "name":"Beagle",
       "weight":"9 - 16",
       "height":"33 - 38",
       "life_span":"13 - 16 years",
       "temperaments":[
          "Amiable",
          "Even Tempered",
          "Excitable",
          "Determined",
          "Gentle",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg"
    },
    {
       "id":32,
       "name":"Bearded Collie",
       "weight":"20 - 25",
       "height":"51 - 56",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Self-confidence",
          "Hardy",
          "Lively",
          "Alert",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/A09F4c1qP.jpg"
    },
    {
       "id":33,
       "name":"Beauceron",
       "weight":"36 - 50",
       "height":"61 - 70",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Fearless",
          "Friendly",
          "Intelligent",
          "Protective",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg"
    },
    {
       "id":34,
       "name":"Bedlington Terrier",
       "weight":"8 - 10",
       "height":"38 - 41",
       "life_span":"14 - 16 years",
       "temperaments":[
          "Affectionate",
          "Spirited",
          "Intelligent",
          "Good-tempered"
       ],
       "image":"https://cdn2.thedogapi.com/images/ByK8gx947.jpg"
    },
    {
       "id":36,
       "name":"Belgian Malinois",
       "weight":"18 - 36",
       "height":"56 - 66",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Watchful",
          "Alert",
          "Stubborn",
          "Friendly",
          "Confident",
          "Hard-working",
          "Active",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg"
    },
    {
       "id":38,
       "name":"Belgian Tervuren",
       "weight":"18 - 29",
       "height":"56 - 66",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Energetic",
          "Alert",
          "Loyal",
          "Intelligent",
          "Attentive",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
    },
    {
       "id":41,
       "name":"Bernese Mountain Dog",
       "weight":"29 - 54",
       "height":"58 - 70",
       "life_span":"7 - 10 years",
       "temperaments":[
          "Affectionate",
          "Loyal",
          "Intelligent",
          "Faithful"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg"
    },
    {
       "id":42,
       "name":"Bichon Frise",
       "weight":"5 - 8",
       "height":"24 - 29",
       "life_span":"15 years",
       "temperaments":[
          "Feisty",
          "Affectionate",
          "Cheerful",
          "Playful",
          "Gentle",
          "Sensitive"
       ],
       "image":"https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg"
    },
    {
       "id":43,
       "name":"Black and Tan Coonhound",
       "weight":"29 - 45",
       "height":"58 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Easygoing",
          "Gentle",
          "Adaptable",
          "Trusting",
          "Even Tempered",
          "Lovable"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg"
    },
    {
       "id":45,
       "name":"Bloodhound",
       "weight":"36 - 50",
       "height":"58 - 69",
       "life_span":"8 - 10 years",
       "temperaments":[
          "Stubborn",
          "Affectionate",
          "Gentle",
          "Even Tempered"
       ],
       "image":"https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg"
    },
    {
       "id":47,
       "name":"Bluetick Coonhound",
       "weight":"20 - 36",
       "height":"53 - 69",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Friendly",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg"
    },
    {
       "id":48,
       "name":"Boerboel",
       "weight":"50 - 91",
       "height":"56 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Obedient",
          "Confident",
          "Intelligent",
          "Dominant",
          "Territorial"
       ],
       "image":"https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg"
    },
    {
       "id":50,
       "name":"Border Collie",
       "weight":"14 - 20",
       "height":"46 - 56",
       "life_span":"12 - 16 years",
       "temperaments":[
          "Tenacious",
          "Keen",
          "Energetic",
          "Responsive",
          "Alert",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg"
    },
    {
       "id":51,
       "name":"Border Terrier",
       "weight":"5 - 7",
       "height":"28 - 41",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Fearless",
          "Affectionate",
          "Alert",
          "Obedient",
          "Intelligent",
          "Even Tempered"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJOpge9Em.jpg"
    },
    {
       "id":53,
       "name":"Boston Terrier",
       "weight":"5 - 11",
       "height":"41 - 43",
       "life_span":"11 - 13 years",
       "temperaments":[
          "Friendly",
          "Lively",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/rkZRggqVX.jpg"
    },
    {
       "id":54,
       "name":"Bouvier des Flandres",
       "weight":"32 - 50",
       "height":"60 - 70",
       "life_span":"10 - 15 years",
       "temperaments":[
          "Protective",
          "Loyal",
          "Gentle",
          "Intelligent",
          "Familial",
          "Rational"
       ],
       "image":"https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg"
    },
    {
       "id":55,
       "name":"Boxer",
       "weight":"23 - 32",
       "height":"55 - 64",
       "life_span":"8 - 10 years",
       "temperaments":[
          "Devoted",
          "Fearless",
          "Friendly",
          "Cheerful",
          "Energetic",
          "Loyal",
          "Playful",
          "Confident",
          "Intelligent",
          "Bright",
          "Brave",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg"
    },
    {
       "id":56,
       "name":"Boykin Spaniel",
       "weight":"11 - 18",
       "height":"36 - 46",
       "life_span":"10 - 14 years",
       "temperaments":[
          "Friendly",
          "Energetic",
          "Companionable",
          "Intelligent",
          "Eager",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg"
    },
    {
       "id":57,
       "name":"Bracco Italiano",
       "weight":"25 - 40",
       "height":"55 - 67",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Stubborn",
          "Affectionate",
          "Loyal",
          "Playful",
          "Companionable",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg"
    },
    {
       "id":58,
       "name":"Briard",
       "weight":"32 - 41",
       "height":"56 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Fearless",
          "Loyal",
          "Obedient",
          "Intelligent",
          "Faithful",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg"
    },
    {
       "id":59,
       "name":"Brittany",
       "weight":"14 - 20",
       "height":"44 - 52",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Agile",
          "Adaptable",
          "Quick",
          "Intelligent",
          "Attentive",
          "Happy"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg"
    },
    {
       "id":61,
       "name":"Bull Terrier",
       "weight":"23 - 32",
       "height":"53 - 56",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Trainable",
          "Protective",
          "Sweet-Tempered",
          "Keen",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/VSraIEQGd.jpg"
    },
    {
       "id":62,
       "name":"Bull Terrier (Miniature)",
       "weight":"11 - 15",
       "height":"25 - 36",
       "life_span":"11 – 14 years",
       "temperaments":[
          "Trainable",
          "Protective",
          "Sweet-Tempered",
          "Keen",
          "Active",
          "Territorial"
       ],
       "image":"https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg"
    },
    {
       "id":64,
       "name":"Bullmastiff",
       "weight":"45 - 59",
       "height":"61 - 69",
       "life_span":"8 - 12 years",
       "temperaments":[
          "Docile",
          "Reliable",
          "Devoted",
          "Alert",
          "Loyal",
          "Reserved",
          "Loving",
          "Protective",
          "Powerful",
          "Calm",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg"
    },
    {
       "id":65,
       "name":"Cairn Terrier",
       "weight":"6 - 6",
       "height":"23 - 25",
       "life_span":"14 - 15 years",
       "temperaments":[
          "Hardy",
          "Fearless",
          "Assertive",
          "Gay",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg"
    },
    {
       "id":67,
       "name":"Cane Corso",
       "weight":"40 - 54",
       "height":"60 - 70",
       "life_span":"10 - 11 years",
       "temperaments":[
          "Trainable",
          "Reserved",
          "Stable",
          "Quiet",
          "Even Tempered",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/r15m-lc4m.jpg"
    },
    {
       "id":68,
       "name":"Cardigan Welsh Corgi",
       "weight":"11 - 17",
       "height":"27 - 32",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Affectionate",
          "Devoted",
          "Alert",
          "Companionable",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg"
    },
    {
       "id":69,
       "name":"Catahoula Leopard Dog",
       "weight":"23 - 43",
       "height":"51 - 66",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Energetic",
          "Inquisitive",
          "Independent",
          "Gentle",
          "Intelligent",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/BJcNbec4X.jpg"
    },
    {
       "id":70,
       "name":"Caucasian Shepherd (Ovcharka)",
       "weight":"36 - 45",
       "height":"61 - 85",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Alert",
          "Quick",
          "Dominant",
          "Powerful",
          "Calm",
          "Strong"
       ],
       "image":"https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg"
    },
    {
       "id":71,
       "name":"Cavalier King Charles Spaniel",
       "weight":"6 - 8",
       "height":"30 - 33",
       "life_span":"10 - 14 years",
       "temperaments":[
          "Fearless",
          "Affectionate",
          "Sociable",
          "Patient",
          "Playful",
          "Adaptable"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg"
    },
    {
       "id":76,
       "name":"Chesapeake Bay Retriever",
       "weight":"25 - 36",
       "height":"53 - 66",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Affectionate",
          "Intelligent",
          "Quiet",
          "Dominant",
          "Happy",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg"
    },
    {
       "id":78,
       "name":"Chinese Crested",
       "weight":"5 - 6",
       "height":"28 - 33",
       "life_span":"10 - 14 years",
       "temperaments":[
          "Affectionate",
          "Sweet-Tempered",
          "Lively",
          "Alert",
          "Playful",
          "Happy"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg"
    },
    {
       "id":79,
       "name":"Chinese Shar-Pei",
       "weight":"20 - 27",
       "height":"46 - 51",
       "life_span":"10 years",
       "temperaments":[
          "Suspicious",
          "Affectionate",
          "Devoted",
          "Reserved",
          "Independent",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg"
    },
    {
       "id":80,
       "name":"Chinook",
       "weight":"23 - 41",
       "height":"56 - 66",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Friendly",
          "Alert",
          "Dignified",
          "Intelligent",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/Sypubg54Q.jpg"
    },
    {
       "id":81,
       "name":"Chow Chow",
       "weight":"18 - 32",
       "height":"43 - 51",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Aloof",
          "Loyal",
          "Independent",
          "Quiet"
       ],
       "image":"https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"
    },
    {
       "id":84,
       "name":"Clumber Spaniel",
       "weight":"25 - 39",
       "height":"43 - 51",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Affectionate",
          "Loyal",
          "Dignified",
          "Gentle",
          "Calm",
          "Great-hearted"
       ],
       "image":"https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg"
    },
    {
       "id":86,
       "name":"Cocker Spaniel",
       "weight":"9 - 14",
       "height":"36 - 38",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Trainable",
          "Friendly",
          "Affectionate",
          "Playful",
          "Quiet",
          "Faithful"
       ],
       "image":"https://cdn2.thedogapi.com/images/1lFmrzECl.jpg"
    },
    {
       "id":87,
       "name":"Cocker Spaniel (American)",
       "weight":"9 - 14",
       "height":"36 - 38",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Outgoing",
          "Sociable",
          "Trusting",
          "Joyful",
          "Even Tempered",
          "Merry"
       ],
       "image":"https://cdn2.thedogapi.com/images/HkRcZe547.jpg"
    },
    {
       "id":89,
       "name":"Coton de Tulear",
       "weight":"4 - 7",
       "height":"23 - 28",
       "life_span":"13 - 16 years",
       "temperaments":[
          "Affectionate",
          "Lively",
          "Playful",
          "Intelligent",
          "Trainable",
          "Vocal"
       ],
       "image":"https://cdn2.thedogapi.com/images/SyviZlqNm.jpg"
    },
    {
       "id":92,
       "name":"Dalmatian",
       "weight":"23 - 25",
       "height":"48 - 58",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Outgoing",
          "Friendly",
          "Energetic",
          "Playful",
          "Sensitive",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg"
    },
    {
       "id":94,
       "name":"Doberman Pinscher",
       "weight":"30 - 40",
       "height":"61 - 71",
       "life_span":"10 years",
       "temperaments":[
          "Fearless",
          "Energetic",
          "Alert",
          "Loyal",
          "Obedient",
          "Confident",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg"
    },
    {
       "id":95,
       "name":"Dogo Argentino",
       "weight":"36 - 45",
       "height":"60 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Friendly",
          "Affectionate",
          "Cheerful",
          "Loyal",
          "Tolerant",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg"
    },
    {
       "id":98,
       "name":"Dutch Shepherd",
       "weight":"23 - 32",
       "height":"56 - 62",
       "life_span":"15 years",
       "temperaments":[
          "Reliable",
          "Affectionate",
          "Alert",
          "Loyal",
          "Obedient",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg"
    },
    {
       "id":101,
       "name":"English Setter",
       "weight":"20 - 36",
       "height":"61 - 64",
       "life_span":"12 years",
       "temperaments":[
          "Strong Willed",
          "Mischievous",
          "Affectionate",
          "Energetic",
          "Playful",
          "Companionable",
          "Gentle",
          "Hard-working",
          "Intelligent",
          "Eager",
          "People-Oriented"
       ],
       "image":"https://cdn2.thedogapi.com/images/By4A-eqVX.jpg"
    },
    {
       "id":102,
       "name":"English Shepherd",
       "weight":"20 - 30",
       "height":"46 - 58",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Kind",
          "Energetic",
          "Independent",
          "Adaptable",
          "Intelligent",
          "Bossy"
       ],
       "image":"https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg"
    },
    {
       "id":103,
       "name":"English Springer Spaniel",
       "weight":"16 - 23",
       "height":"48 - 51",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Affectionate",
          "Cheerful",
          "Alert",
          "Intelligent",
          "Attentive",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg"
    },
    {
       "id":104,
       "name":"English Toy Spaniel",
       "weight":"4 - 6",
       "height":"25",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Affectionate",
          "Reserved",
          "Playful",
          "Gentle",
          "Happy",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg"
    },
    {
       "id":105,
       "name":"English Toy Terrier",
       "weight":"3 - 4",
       "height":"25 - 30",
       "life_span":"12 - 13 years",
       "temperaments":[
          "Stubborn",
          "Alert",
          "Companionable",
          "Intelligent",
          "Cunning",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg"
    },
    {
       "id":107,
       "name":"Eurasier",
       "weight":"18 - 32",
       "height":"52 - 60",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Alert",
          "Reserved",
          "Intelligent",
          "Even Tempered",
          "Watchful",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg"
    },
    {
       "id":108,
       "name":"Field Spaniel",
       "weight":"16 - 23",
       "height":"43 - 46",
       "life_span":"11 - 15 years",
       "temperaments":[
          "Docile",
          "Cautious",
          "Sociable",
          "Sensitive",
          "Adaptable",
          "Familial"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkJfGecE7.jpg"
    },
    {
       "id":110,
       "name":"Finnish Lapphund",
       "weight":"15 - 24",
       "height":"41 - 53",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Friendly",
          "Keen",
          "Faithful",
          "Calm",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg"
    },
    {
       "id":111,
       "name":"Finnish Spitz",
       "weight":"10 - 13",
       "height":"39 - 51",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Playful",
          "Loyal",
          "Independent",
          "Intelligent",
          "Happy",
          "Vocal"
       ],
       "image":"https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg"
    },
    {
       "id":113,
       "name":"French Bulldog",
       "weight":"13",
       "height":"28 - 30",
       "life_span":"9 - 11 years",
       "temperaments":[
          "Playful",
          "Affectionate",
          "Keen",
          "Sociable",
          "Lively",
          "Alert",
          "Easygoing",
          "Patient",
          "Athletic",
          "Bright"
       ],
       "image":"https://cdn2.thedogapi.com/images/HyWNfxc47.jpg"
    },
    {
       "id":114,
       "name":"German Pinscher",
       "weight":"11 - 20",
       "height":"43 - 51",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Spirited",
          "Lively",
          "Intelligent",
          "Loving",
          "Even Tempered",
          "Familial"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg"
    },
    {
       "id":115,
       "name":"German Shepherd Dog",
       "weight":"23 - 41",
       "height":"56 - 66",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Alert",
          "Loyal",
          "Obedient",
          "Curious",
          "Confident",
          "Intelligent",
          "Watchful",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg"
    },
    {
       "id":116,
       "name":"German Shorthaired Pointer",
       "weight":"20 - 32",
       "height":"53 - 64",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Boisterous",
          "Bold",
          "Affectionate",
          "Intelligent",
          "Cooperative",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg"
    },
    {
       "id":119,
       "name":"Giant Schnauzer",
       "weight":"29 - 41",
       "height":"60 - 70",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Strong Willed",
          "Kind",
          "Loyal",
          "Intelligent",
          "Dominant",
          "Powerful"
       ],
       "image":"https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg"
    },
    {
       "id":120,
       "name":"Glen of Imaal Terrier",
       "weight":"15 - 18",
       "height":"32 - 36",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Spirited",
          "Agile",
          "Loyal",
          "Gentle",
          "Active",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/H1oLMe94m.jpg"
    },
    {
       "id":121,
       "name":"Golden Retriever",
       "weight":"25 - 34",
       "height":"55 - 61",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Intelligent",
          "Kind",
          "Reliable",
          "Friendly",
          "Trustworthy",
          "Confident"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg"
    },
    {
       "id":123,
       "name":"Gordon Setter",
       "weight":"20 - 36",
       "height":"58 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Fearless",
          "Alert",
          "Loyal",
          "Confident",
          "Gay",
          "Eager"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg"
    },
    {
       "id":124,
       "name":"Great Dane",
       "weight":"50 - 86",
       "height":"71 - 81",
       "life_span":"7 - 10 years",
       "temperaments":[
          "Friendly",
          "Devoted",
          "Reserved",
          "Gentle",
          "Confident",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg"
    },
    {
       "id":125,
       "name":"Great Pyrenees",
       "weight":"39 - 52",
       "height":"64 - 81",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Strong Willed",
          "Fearless",
          "Affectionate",
          "Patient",
          "Gentle",
          "Confident"
       ],
       "image":"https://cdn2.thedogapi.com/images/B12uzg9V7.png"
    },
    {
       "id":127,
       "name":"Greyhound",
       "weight":"23 - 32",
       "height":"69 - 76",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Affectionate",
          "Athletic",
          "Gentle",
          "Intelligent",
          "Quiet",
          "Even Tempered"
       ],
       "image":"https://cdn2.thedogapi.com/images/ryNYMx94X.jpg"
    },
    {
       "id":128,
       "name":"Griffon Bruxellois",
       "weight":"5",
       "height":"23 - 28",
       "life_span":"10 – 15 years",
       "temperaments":[
          "Self-important",
          "Inquisitive",
          "Alert",
          "Companionable",
          "Sensitive",
          "Watchful"
       ],
       "image":"https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg"
    },
    {
       "id":129,
       "name":"Harrier",
       "weight":"18 - 27",
       "height":"46 - 56",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Outgoing",
          "Friendly",
          "Cheerful",
          "Sweet-Tempered",
          "Tolerant",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg"
    },
    {
       "id":130,
       "name":"Havanese",
       "weight":"3 - 6",
       "height":"22 - 29",
       "life_span":"14 - 15 years",
       "temperaments":[
          "Affectionate",
          "Responsive",
          "Playful",
          "Companionable",
          "Gentle",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg"
    },
    {
       "id":134,
       "name":"Irish Setter",
       "weight":"16 - 32",
       "height":"61 - 69",
       "life_span":"10 - 11 years",
       "temperaments":[
          "Affectionate",
          "Energetic",
          "Lively",
          "Independent",
          "Playful",
          "Companionable"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1osGeqVm.jpg"
    },
    {
       "id":135,
       "name":"Irish Terrier",
       "weight":"11 - 12",
       "height":"46",
       "life_span":"12 - 16 years",
       "temperaments":[
          "Respectful",
          "Lively",
          "Intelligent",
          "Dominant",
          "Protective",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/By-hGecVX.jpg"
    },
    {
       "id":137,
       "name":"Irish Wolfhound",
       "weight":"48 - 82",
       "height":"76 - 89",
       "life_span":"6 - 8 years",
       "temperaments":[
          "Sweet-Tempered",
          "Loyal",
          "Dignified",
          "Patient",
          "Thoughtful",
          "Generous"
       ],
       "image":"https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg"
    },
    {
       "id":138,
       "name":"Italian Greyhound",
       "weight":"3 - 7",
       "height":"33 - 38",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Mischievous",
          "Affectionate",
          "Agile",
          "Athletic",
          "Companionable",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg"
    },
    {
       "id":140,
       "name":"Japanese Chin",
       "weight":"2 - 4",
       "height":"20 - 28",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Alert",
          "Loyal",
          "Independent",
          "Intelligent",
          "Loving",
          "Cat-like"
       ],
       "image":"https://cdn2.thedogapi.com/images/r1H6feqEm.jpg"
    },
    {
       "id":141,
       "name":"Japanese Spitz",
       "weight":"7 - 9",
       "height":"30 - 38",
       "life_span":"10 – 16 years",
       "temperaments":[
          "Affectionate",
          "Obedient",
          "Playful",
          "Companionable",
          "Intelligent",
          "Proud"
       ],
       "image":"https://cdn2.thedogapi.com/images/HksaMxqNX.jpg"
    },
    {
       "id":142,
       "name":"Keeshond",
       "weight":"16 - 20",
       "height":"43 - 46",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Agile",
          "Obedient",
          "Playful",
          "Quick",
          "Sturdy",
          "Bright"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg"
    },
    {
       "id":144,
       "name":"Komondor",
       "weight":"36 - 45",
       "height":"65 - 70",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Steady",
          "Fearless",
          "Affectionate",
          "Independent",
          "Gentle",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/Bko0fl547.jpg"
    },
    {
       "id":145,
       "name":"Kooikerhondje",
       "weight":"9 - 14",
       "height":"36 - 41",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Benevolent",
          "Agile",
          "Alert",
          "Intelligent",
          "Active",
          "Territorial"
       ],
       "image":"https://cdn2.thedogapi.com/images/kOMy84GQE.jpg"
    },
    {
       "id":147,
       "name":"Kuvasz",
       "weight":"32 - 52",
       "height":"66 - 76",
       "life_span":"8 - 10 years",
       "temperaments":[
          "Clownish",
          "Loyal",
          "Patient",
          "Independent",
          "Intelligent",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg"
    },
    {
       "id":149,
       "name":"Labrador Retriever",
       "weight":"25 - 36",
       "height":"55 - 62",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Kind",
          "Outgoing",
          "Agile",
          "Gentle",
          "Intelligent",
          "Trusting",
          "Even Tempered"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg"
    },
    {
       "id":151,
       "name":"Lagotto Romagnolo",
       "weight":"11 - 16",
       "height":"41 - 48",
       "life_span":"14 - 16 years",
       "temperaments":[
          "Keen",
          "Loyal",
          "Companionable",
          "Loving",
          "Active",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg"
    },
    {
       "id":153,
       "name":"Lancashire Heeler",
       "weight":"3 - 6",
       "height":"25 - 30",
       "life_span":"12 – 15 years",
       "temperaments":[
          "Clever",
          "Friendly",
          "Alert",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1RGml5Em.jpg"
    },
    {
       "id":155,
       "name":"Leonberger",
       "weight":"54 - 77",
       "height":"65 - 80",
       "life_span":"6 - 8 years",
       "temperaments":[
          "Obedient",
          "Fearless",
          "Loyal",
          "Companionable",
          "Adaptable",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg"
    },
    {
       "id":156,
       "name":"Lhasa Apso",
       "weight":"5 - 8",
       "height":"25 - 28",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Steady",
          "Fearless",
          "Friendly",
          "Devoted",
          "Assertive",
          "Spirited",
          "Energetic",
          "Lively",
          "Alert",
          "Obedient",
          "Playful",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg"
    },
    {
       "id":161,
       "name":"Maltese",
       "weight":"2 - 3",
       "height":"20 - 25",
       "life_span":"15 - 18 years",
       "temperaments":[
          "Playful",
          "Docile",
          "Fearless",
          "Affectionate",
          "Sweet-Tempered",
          "Lively",
          "Responsive",
          "Easygoing",
          "Gentle",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg"
    },
    {
       "id":165,
       "name":"Miniature American Shepherd",
       "weight":"9 - 18",
       "height":"33 - 46",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Energetic",
          "Loyal",
          "Intelligent",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg"
    },
    {
       "id":167,
       "name":"Miniature Pinscher",
       "weight":"4 - 5",
       "height":"25 - 32",
       "life_span":"15 years",
       "temperaments":[
          "Clever",
          "Outgoing",
          "Friendly",
          "Energetic",
          "Responsive",
          "Playful"
       ],
       "image":"https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg"
    },
    {
       "id":168,
       "name":"Miniature Schnauzer",
       "weight":"5 - 9",
       "height":"30 - 36",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Fearless",
          "Friendly",
          "Spirited",
          "Alert",
          "Obedient",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg"
    },
    {
       "id":171,
       "name":"Newfoundland",
       "weight":"45 - 68",
       "height":"66 - 71",
       "life_span":"8 - 10 years",
       "temperaments":[
          "Sweet-Tempered",
          "Gentle",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg"
    },
    {
       "id":172,
       "name":"Norfolk Terrier",
       "weight":"5 - 5",
       "height":"23 - 25",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Self-confidence",
          "Fearless",
          "Spirited",
          "Companionable",
          "Happy",
          "Lovable"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1ADQg94X.jpg"
    },
    {
       "id":176,
       "name":"Norwich Terrier",
       "weight":"5 - 5",
       "height":"25",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Hardy",
          "Affectionate",
          "Energetic",
          "Sensitive",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg"
    },
    {
       "id":177,
       "name":"Nova Scotia Duck Tolling Retriever",
       "weight":"16 - 23",
       "height":"43 - 53",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Outgoing",
          "Alert",
          "Patient",
          "Intelligent",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg"
    },
    {
       "id":178,
       "name":"Old English Sheepdog",
       "weight":"27 - 45",
       "height":"53",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Sociable",
          "Bubbly",
          "Playful",
          "Adaptable",
          "Intelligent",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg"
    },
    {
       "id":179,
       "name":"Olde English Bulldogge",
       "weight":"NaN",
       "height":"38 - 48",
       "life_span":"9 – 14 years",
       "temperaments":[
          "Friendly",
          "Alert",
          "Confident",
          "Loving",
          "Courageous",
          "Strong"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1d5me547.jpg"
    },
    {
       "id":181,
       "name":"Papillon",
       "weight":"1 - 5",
       "height":"20 - 28",
       "life_span":"13 - 17 years",
       "temperaments":[
          "Hardy",
          "Friendly",
          "Energetic",
          "Alert",
          "Intelligent",
          "Happy"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkJj7e547.jpg"
    },
    {
       "id":183,
       "name":"Pekingese",
       "weight":"6",
       "height":"15 - 23",
       "life_span":"14 - 18 years",
       "temperaments":[
          "Opinionated",
          "Good-natured",
          "Stubborn",
          "Affectionate",
          "Aggressive",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg"
    },
    {
       "id":184,
       "name":"Pembroke Welsh Corgi",
       "weight":"11 - 14",
       "height":"25 - 30",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Tenacious",
          "Outgoing",
          "Friendly",
          "Bold",
          "Playful",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg"
    },
    {
       "id":185,
       "name":"Perro de Presa Canario",
       "weight":"40 - 50",
       "height":"56 - 65",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Strong Willed",
          "Suspicious",
          "Gentle",
          "Dominant",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg"
    },
    {
       "id":188,
       "name":"Pharaoh Hound",
       "weight":"18 - 27",
       "height":"53 - 64",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Affectionate",
          "Sociable",
          "Playful",
          "Intelligent",
          "Active",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg"
    },
    {
       "id":189,
       "name":"Plott",
       "weight":"18 - 27",
       "height":"51 - 64",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Bold",
          "Alert",
          "Loyal",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg"
    },
    {
       "id":193,
       "name":"Pomeranian",
       "weight":"1 - 3",
       "height":"20 - 30",
       "life_span":"15 years",
       "temperaments":[
          "Extroverted",
          "Friendly",
          "Sociable",
          "Playful",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJd0XecNX.jpg"
    },
    {
       "id":196,
       "name":"Poodle (Miniature)",
       "weight":"7 - 8",
       "height":"28 - 38",
       "life_span":"12 – 15 years",
       "image":"https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg"
    },
    {
       "id":197,
       "name":"Poodle (Toy)",
       "weight":"3 - 4",
       "height":"23 - 28",
       "life_span":"18 years",
       "image":"https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg"
    },
    {
       "id":201,
       "name":"Pug",
       "weight":"6 - 8",
       "height":"25 - 30",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Docile",
          "Clever",
          "Charming",
          "Stubborn",
          "Sociable",
          "Playful",
          "Quiet",
          "Attentive"
       ],
       "image":"https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg"
    },
    {
       "id":204,
       "name":"Puli",
       "weight":"11 - 16",
       "height":"41 - 43",
       "life_span":"12 - 16 Years years",
       "temperaments":[
          "Energetic",
          "Agile",
          "Loyal",
          "Obedient",
          "Intelligent",
          "Faithful"
       ],
       "image":"https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg"
    },
    {
       "id":205,
       "name":"Pumi",
       "weight":"8 - 15",
       "height":"38 - 47",
       "life_span":"13 - 15 years",
       "temperaments":[
          "Lively",
          "Reserved",
          "Intelligent",
          "Active",
          "Protective",
          "Vocal"
       ],
       "image":"https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg"
    },
    {
       "id":207,
       "name":"Rat Terrier",
       "weight":"4 - 11",
       "height":"25 - 33",
       "life_span":"12 - 18 years",
       "temperaments":[
          "Affectionate",
          "Lively",
          "Inquisitive",
          "Alert",
          "Intelligent",
          "Loving"
       ],
       "image":"https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg"
    },
    {
       "id":208,
       "name":"Redbone Coonhound",
       "weight":"20 - 36",
       "height":"53 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Affectionate",
          "Energetic",
          "Independent",
          "Companionable",
          "Familial",
          "Unflappable"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg"
    },
    {
       "id":209,
       "name":"Rhodesian Ridgeback",
       "weight":"34 - 36",
       "height":"61 - 69",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Strong Willed",
          "Mischievous",
          "Loyal",
          "Dignified",
          "Sensitive",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/By9zNgqE7.jpg"
    },
    {
       "id":210,
       "name":"Rottweiler",
       "weight":"34 - 50",
       "height":"56 - 69",
       "life_span":"8 - 10 years",
       "temperaments":[
          "Steady",
          "Good-natured",
          "Fearless",
          "Devoted",
          "Alert",
          "Obedient",
          "Confident",
          "Self-assured",
          "Calm",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg"
    },
    {
       "id":211,
       "name":"Russian Toy",
       "weight":"1 - 3",
       "height":"19 - 27",
       "life_span":"10 - 12 years",
       "image":"https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg"
    },
    {
       "id":212,
       "name":"Saint Bernard",
       "weight":"59 - 82",
       "height":"65 - 70",
       "life_span":"7 - 10 years",
       "temperaments":[
          "Friendly",
          "Lively",
          "Gentle",
          "Watchful",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/_Qf9nfRzL.png"
    },
    {
       "id":213,
       "name":"Saluki",
       "weight":"16 - 29",
       "height":"58 - 71",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Aloof",
          "Reserved",
          "Intelligent",
          "Quiet"
       ],
       "image":"https://cdn2.thedogapi.com/images/fjFIuehNo.jpg"
    },
    {
       "id":214,
       "name":"Samoyed",
       "weight":"23 - 27",
       "height":"48 - 60",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Stubborn",
          "Friendly",
          "Sociable",
          "Lively",
          "Alert",
          "Playful"
       ],
       "image":"https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg"
    },
    {
       "id":216,
       "name":"Schipperke",
       "weight":"5 - 7",
       "height":"25 - 33",
       "life_span":"13 - 15 years",
       "temperaments":[
          "Fearless",
          "Agile",
          "Curious",
          "Independent",
          "Confident",
          "Faithful"
       ],
       "image":"https://cdn2.thedogapi.com/images/SyBvVgc47.jpg"
    },
    {
       "id":218,
       "name":"Scottish Deerhound",
       "weight":"32 - 59",
       "height":"71 - 81",
       "life_span":"8 - 10 years",
       "temperaments":[
          "Docile",
          "Friendly",
          "Dignified",
          "Gentle"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg"
    },
    {
       "id":219,
       "name":"Scottish Terrier",
       "weight":"8 - 10",
       "height":"25",
       "life_span":"11 - 13 years",
       "temperaments":[
          "Feisty",
          "Alert",
          "Independent",
          "Playful",
          "Quick",
          "Self-assured"
       ],
       "image":"https://cdn2.thedogapi.com/images/Bklnce5NX.jpg"
    },
    {
       "id":221,
       "name":"Shetland Sheepdog",
       "weight":"14",
       "height":"33 - 41",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Affectionate",
          "Lively",
          "Responsive",
          "Alert",
          "Loyal",
          "Reserved",
          "Playful",
          "Gentle",
          "Intelligent",
          "Active",
          "Trainable",
          "Strong"
       ],
       "image":"https://cdn2.thedogapi.com/images/rJa29l9E7.jpg"
    },
    {
       "id":222,
       "name":"Shiba Inu",
       "weight":"8 - 10",
       "height":"34 - 42",
       "life_span":"12 - 16 years",
       "temperaments":[
          "Charming",
          "Fearless",
          "Keen",
          "Alert",
          "Confident",
          "Faithful"
       ],
       "image":"https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg"
    },
    {
       "id":223,
       "name":"Shih Tzu",
       "weight":"4 - 7",
       "height":"20 - 28",
       "life_span":"10 - 18 years",
       "temperaments":[
          "Clever",
          "Spunky",
          "Outgoing",
          "Friendly",
          "Affectionate",
          "Lively",
          "Alert",
          "Loyal",
          "Independent",
          "Playful",
          "Gentle",
          "Intelligent",
          "Happy",
          "Active",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg"
    },
    {
       "id":225,
       "name":"Shiloh Shepherd",
       "weight":"54 - 64",
       "height":"66 - 76",
       "life_span":"9 – 14 years",
       "temperaments":[
          "Outgoing",
          "Loyal",
          "Companionable",
          "Gentle",
          "Loving",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJJxjecEX.jpg"
    },
    {
       "id":226,
       "name":"Siberian Husky",
       "weight":"16 - 27",
       "height":"51 - 60",
       "life_span":"12 years",
       "temperaments":[
          "Outgoing",
          "Friendly",
          "Alert",
          "Gentle",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/S17ZilqNm.jpg"
    },
    {
       "id":228,
       "name":"Silky Terrier",
       "weight":"4 - 5",
       "height":"23 - 25",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Friendly",
          "Responsive",
          "Inquisitive",
          "Alert",
          "Quick",
          "Joyful"
       ],
       "image":"https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg"
    },
    {
       "id":232,
       "name":"Smooth Fox Terrier",
       "weight":"NaN - 8",
       "height":"39",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Fearless",
          "Affectionate",
          "Alert",
          "Playful",
          "Intelligent",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/Syszjx9Em.jpg"
    },
    {
       "id":233,
       "name":"Soft Coated Wheaten Terrier",
       "weight":"14 - 18",
       "height":"41 - 46",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Affectionate",
          "Spirited",
          "Energetic",
          "Playful",
          "Intelligent",
          "Faithful"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg"
    },
    {
       "id":235,
       "name":"Spanish Water Dog",
       "weight":"14 - 23",
       "height":"41 - 51",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Trainable",
          "Diligent",
          "Affectionate",
          "Loyal",
          "Athletic",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg"
    },
    {
       "id":236,
       "name":"Spinone Italiano",
       "weight":"28 - 39",
       "height":"57 - 70",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Docile",
          "Friendly",
          "Affectionate",
          "Loyal",
          "Patient",
          "Gentle"
       ],
       "image":"https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg"
    },
    {
       "id":238,
       "name":"Staffordshire Bull Terrier",
       "weight":"11 - 17",
       "height":"36 - 41",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Reliable",
          "Fearless",
          "Bold",
          "Affectionate",
          "Loyal",
          "Intelligent",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/H1zSie9V7.jpg"
    },
    {
       "id":239,
       "name":"Standard Schnauzer",
       "weight":"14 - 23",
       "height":"44 - 50",
       "life_span":"13 - 15 years",
       "temperaments":[
          "Trainable",
          "Good-natured",
          "Devoted",
          "Lively",
          "Playful",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg"
    },
    {
       "id":242,
       "name":"Swedish Vallhund",
       "weight":"9 - 14",
       "height":"29 - 34",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Fearless",
          "Friendly",
          "Energetic",
          "Alert",
          "Intelligent",
          "Watchful"
       ],
       "image":"https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg"
    },
    {
       "id":243,
       "name":"Thai Ridgeback",
       "weight":"16 - 25",
       "height":"51 - 61",
       "life_span":"10 - 12 years",
       "temperaments":[
          "Protective",
          "Loyal",
          "Independent",
          "Intelligent",
          "Loving",
          "Familial"
       ],
       "image":"https://cdn2.thedogapi.com/images/zv89hR-O8.jpg"
    },
    {
       "id":244,
       "name":"Tibetan Mastiff",
       "weight":"39 - 64",
       "height":"61 - 66",
       "life_span":"10 - 14 years",
       "temperaments":[
          "Strong Willed",
          "Tenacious",
          "Aloof",
          "Stubborn",
          "Intelligent",
          "Protective"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkM9sec47.jpg"
    },
    {
       "id":245,
       "name":"Tibetan Spaniel",
       "weight":"4 - 7",
       "height":"25",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Willful",
          "Aloof",
          "Assertive",
          "Independent",
          "Playful",
          "Intelligent",
          "Happy"
       ],
       "image":"https://cdn2.thedogapi.com/images/Hyjcol947.jpg"
    },
    {
       "id":246,
       "name":"Tibetan Terrier",
       "weight":"9 - 11",
       "height":"36 - 43",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Affectionate",
          "Energetic",
          "Amiable",
          "Reserved",
          "Gentle",
          "Sensitive"
       ],
       "image":"https://cdn2.thedogapi.com/images/6f5n_42mB.jpg"
    },
    {
       "id":248,
       "name":"Toy Fox Terrier",
       "weight":"2 - 4",
       "height":"20 - 28",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Friendly",
          "Spirited",
          "Alert",
          "Loyal",
          "Playful",
          "Intelligent"
       ],
       "image":"https://cdn2.thedogapi.com/images/B17ase9V7.jpg"
    },
    {
       "id":250,
       "name":"Treeing Walker Coonhound",
       "weight":"20 - 36",
       "height":"51 - 69",
       "life_span":"10 - 13 years",
       "temperaments":[
          "Clever",
          "Affectionate",
          "Confident",
          "Intelligent",
          "Loving",
          "Trainable"
       ],
       "image":"https://cdn2.thedogapi.com/images/SkRpsgc47.jpg"
    },
    {
       "id":251,
       "name":"Vizsla",
       "weight":"23 - 29",
       "height":"53 - 61",
       "life_span":"10 - 14 years",
       "temperaments":[
          "Affectionate",
          "Energetic",
          "Loyal",
          "Gentle",
          "Quiet"
       ],
       "image":"https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg"
    },
    {
       "id":253,
       "name":"Weimaraner",
       "weight":"25 - 41",
       "height":"58 - 69",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Steady",
          "Aloof",
          "Stubborn",
          "Energetic",
          "Alert",
          "Intelligent",
          "Powerful",
          "Fast"
       ],
       "image":"https://cdn2.thedogapi.com/images/SyU12l9V7.jpg"
    },
    {
       "id":254,
       "name":"Welsh Springer Spaniel",
       "weight":"16 - 25",
       "height":"43 - 48",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Stubborn",
          "Friendly",
          "Affectionate",
          "Loyal",
          "Playful",
          "Active"
       ],
       "image":"https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg"
    },
    {
       "id":256,
       "name":"West Highland White Terrier",
       "weight":"7 - 10",
       "height":"25 - 28",
       "life_span":"15 - 20 years",
       "temperaments":[
          "Hardy",
          "Friendly",
          "Alert",
          "Independent",
          "Gay",
          "Active",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg"
    },
    {
       "id":257,
       "name":"Whippet",
       "weight":"11 - 16",
       "height":"46 - 56",
       "life_span":"12 - 15 years",
       "temperaments":[
          "Friendly",
          "Affectionate",
          "Lively",
          "Gentle",
          "Intelligent",
          "Quiet"
       ],
       "image":"https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg"
    },
    {
       "id":258,
       "name":"White Shepherd",
       "weight":"27 - 39",
       "height":"56 - 64",
       "life_span":"12 – 14 years",
       "temperaments":[
          "Self-confidence",
          "Aloof",
          "Fearless",
          "Alert",
          "Companionable",
          "Eager"
       ],
       "image":"https://cdn2.thedogapi.com/images/r14M3e9E7.jpg"
    },
    {
       "id":259,
       "name":"Wire Fox Terrier",
       "weight":"7 - 9",
       "height":"33 - 41",
       "life_span":"13 – 14 years",
       "temperaments":[
          "Fearless",
          "Friendly",
          "Bold",
          "Keen",
          "Alert",
          "Quick"
       ],
       "image":"https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg"
    },
    {
       "id":260,
       "name":"Wirehaired Pointing Griffon",
       "weight":"20 - 32",
       "height":"51 - 61",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Loyal",
          "Gentle",
          "Vigilant",
          "Trainable",
          "Proud"
       ],
       "image":"https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg"
    },
    {
       "id":261,
       "name":"Wirehaired Vizsla",
       "weight":"20 - 29",
       "height":"55 - 64",
       "life_span":"12 - 14 years",
       "image":"https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg"
    },
    {
       "id":262,
       "name":"Xoloitzcuintli",
       "weight":"4 - 14",
       "height":"25 - 58",
       "life_span":"12 - 14 years",
       "temperaments":[
          "Cheerful",
          "Alert",
          "Companionable",
          "Intelligent",
          "Protective",
          "Calm"
       ],
       "image":"https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg"
    },
    {
       "id":264,
       "name":"Yorkshire Terrier",
       "weight":"2 - 3",
       "height":"20 - 23",
       "life_span":"12 - 16 years",
       "temperaments":[
          "Bold",
          "Independent",
          "Confident",
          "Intelligent",
          "Courageous"
       ],
       "image":"https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg"
    }
 ]
  export default dogs