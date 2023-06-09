const lessons = [
  {
    id: 1,
    title: "Lesson 1: Arabic Alphabet\nAlif to Khaa (ا - خ)",
    duration: "20 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "أ",
        transliteration: "(Alif)",
        soundSymbol: "Alif",
        englishEquivalent: "Apple",
        options: ["Alif", "e", "o"],
        answer: "Alif",
      },
      {
        id: 2,
        letter: "ب",
        transliteration: "(Baa)",
        soundSymbol: "Baa",
        englishEquivalent: "Bet",
        options: ["Baa", "p", "d"],
        answer: "Baa",
      },
      {
        id: 3,
        letter: "ت",
        transliteration: "(Taa)",
        soundSymbol: "Taa",
        englishEquivalent: "tea",
        options: ["Taa", "k", "c"],
        answer: "Taa",
      },
      {
        id: 4,
        letter: "ث",
        transliteration: "(Thaa)",
        soundSymbol: "Thaa",
        englishEquivalent: "Thing",
        options: ["Thaa", "dh", "sh"],
        answer: "Thaa",
      },
      {
        id: 5,
        letter: "ج",
        transliteration: "(Jiim)",
        soundSymbol: "Jiim",
        englishEquivalent: "judge",
        options: ["Jiim", "g", "h"],
        answer: "Jiim",
      },
      {
        id: 6,
        letter: "ح",
        transliteration: "(Haa)",
        soundSymbol: "Haa",
        englishEquivalent: "",
        options: ["Haa", "g", "z"],
        answer: "Haa",
      },
      {
        id: 7,
        letter: "خ",
        transliteration: "(Khaa)",
        soundSymbol: "Khaa",
        englishEquivalent: "",
        options: ["Khaa", "ch", "dh"],
        answer: "Khaa",
      },
      // more test questions
    ],
  },
  {
    id: 2,
    title: "Lesson 2: Arabic Alphabet\nDaal to Saad (د - ص)",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "د",
        transliteration: "(Daal)",
        soundSymbol: "Daal",
        englishEquivalent: "door",
        options: ["Daal", "dh", "ka"],
        answer: "Daal",
      },
      {
        id: 2,
        letter: "ذ",
        transliteration: "(Dhaal)",
        soundSymbol: "Dhaal",
        englishEquivalent: "That",
        options: ["Dhaal", "p", "d"],
        answer: "Dhaal",
      },
      {
        id: 3,
        letter: "ر",
        transliteration: "(Raa)",
        soundSymbol: "Raa",
        englishEquivalent: "Red",
        options: ["Raa", "k", "c"],
        answer: "Raa",
      },
      {
        id: 4,
        letter: "ز",
        transliteration: "(Zaa)",
        soundSymbol: "Zaa",
        englishEquivalent: "Zoo",
        options: ["Zaa", "dh", "sh"],
        answer: "Zaa",
      },
      {
        id: 5,
        letter: "س",
        transliteration: "(Siin)",
        soundSymbol: "Siin",
        englishEquivalent: "judge",
        options: ["Siin", "g", "h"],
        answer: "Siin",
      },
      {
        id: 6,
        letter: "ش",
        transliteration: "(Shiin)",
        soundSymbol: "Shiin",
        englishEquivalent: "",
        options: ["Shiin", "g", "z"],
        answer: "Shiin",
      },
      {
        id: 7,
        letter: "ص",
        transliteration: "(Saad)",
        soundSymbol: "Saad",
        englishEquivalent: "Saw",
        options: ["Saad", "ch", "dh"],
        answer: "Saad",
      },
      // more test questions
    ],
  },
  {
    id: 3,
    title: "Lesson 3: Arabic Alphabet\nDaad to Qaaf (ض - ق)",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "ض",
        transliteration: "(Daad)",
        soundSymbol: "Daad",
        englishEquivalent: "Dul",
        options: ["Daad", "dh", "ka"],
        answer: "Daad",
      },
      {
        id: 2,
        letter: "ط",
        transliteration: "(Taa)",
        soundSymbol: "Taa",
        englishEquivalent: "Task",
        options: ["Taa", "p", "d"],
        answer: "Taa",
      },
      {
        id: 3,
        letter: "ظ",
        transliteration: "(Dhaa)",
        soundSymbol: "Dhaa",
        englishEquivalent: "Bet",
        options: ["Dhaa", "k", "c"],
        answer: "Dhaa",
      },
      {
        id: 4,
        letter: "ع",
        transliteration: "(Ain)",
        soundSymbol: "Ain",
        englishEquivalent: "'Angry",
        options: ["Ain", "dh", "sh"],
        answer: "Ain",
      },
      {
        id: 5,
        letter: "غ",
        transliteration: "(Ghain)",
        soundSymbol: "Ghain",
        englishEquivalent: "",
        options: ["Ghain", "g", "h"],
        answer: "Ghain",
      },
      {
        id: 6,
        letter: "ف",
        transliteration: "(Faa)",
        soundSymbol: "Faa",
        englishEquivalent: "Fire",
        options: ["Faa", "g", "z"],
        answer: "Faa",
      },
      {
        id: 7,
        letter: "ق",
        transliteration: "(Qaaf)",
        soundSymbol: "Qaaf",
        englishEquivalent: "Bet",
        options: ["Qaaf", "ch", "dh"],
        answer: "Qaaf",
      },
      // more test questions
    ],
  },
  {
    id: 4,
    title: "Lesson 4: Arabic Alphabet\nKaaf to Yaa' (ك - ي)",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "ك",
        transliteration: "(Kaaf)",
        soundSymbol: "Kaaf",
        englishEquivalent: "Kid",
        options: ["Kaaf", "dh", "ka"],
        answer: "Kaaf",
      },
      {
        id: 2,
        letter: "ل",
        transliteration: "(Laam)",
        soundSymbol: "Laam",
        englishEquivalent: "Let",
        options: ["Laam", "p", "d"],
        answer: "Laam",
      },
      {
        id: 3,
        letter: "م",
        transliteration: "(Miim)",
        soundSymbol: "Miim",
        englishEquivalent: "Man",
        options: ["Miim", "k", "c"],
        answer: "Miim",
      },
      {
        id: 4,
        letter: "ن",
        transliteration: "(Nuun)",
        soundSymbol: "Nuun",
        englishEquivalent: "Net",
        options: ["Nuun", "dh", "sh"],
        answer: "Nuun",
      },
      {
        id: 5,
        letter: "ه هـ",
        transliteration: "(Haa)",
        soundSymbol: "Haa",
        englishEquivalent: "Bet",
        options: ["Haa", "g", "h"],
        answer: "Haa",
      },
      {
        id: 6,
        letter: "و",
        transliteration: "(Waaw)",
        soundSymbol: "Waaw",
        englishEquivalent: "Watch",
        options: ["Waaw", "g", "z"],
        answer: "Waaw",
      },
      {
        id: 7,
        letter: "ي",
        transliteration: "(Yaa)",
        soundSymbol: "Yaa",
        englishEquivalent: "Yet",
        options: ["Yaa", "ch", "dh"],
        answer: "Yaa",
      },
      // more test questions
    ],
  },
  {
    id: 5,
    title: "Lesson 5: Arabic Alphabet\nInitial, Medial & Final Letters",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letterInitial: "بـ",
        letterMedial: "ـبـ",
        letterFinal: "ـب",
        transliteration: "(Baa)",
        soundSymbol: "Baa",
        englishEquivalent: "Bed",
        options: ["Baa", "e", "o"],
        answer: "Baa",
      },
      {
        id: 2,
        letterInitial: "تـ",
        letterMedial: "ـتـ",
        letterFinal: "ـت",
        transliteration: "(Taa)",
        soundSymbol: "Taa",
        englishEquivalent: "Tea",
        options: ["Taa", "a", "e"],
        answer: "Taa",
      },
      {
        id: 3,
        letterInitial: "ثـ",
        letterMedial: "ـثـ",
        letterFinal: "ـث",
        transliteration: "(Thaa)",
        soundSymbol: "Thaa",
        englishEquivalent: "Think",
        options: ["Thaa", "f", "p"],
        answer: "Thaa",
      },
      {
        id: 4,
        letterInitial: "جـ",
        letterMedial: "ـجـ",
        letterFinal: "ـج",
        transliteration: "(Jeem)",
        soundSymbol: "Jeem",
        englishEquivalent: "Jeep",
        options: ["Jeem", "g", "z"],
        answer: "Jeem",
      },
      {
        id: 5,
        letterInitial: "حـ",
        letterMedial: "ـحـ",
        letterFinal: "ـح",
        transliteration: "(Haa)",
        soundSymbol: "Haa",
        englishEquivalent: "Help",
        options: ["Haa", "k", "n"],
        answer: "Haa",
      },
      {
        id: 6,
        letterInitial: "خـ",
        letterMedial: "ـخـ",
        letterFinal: "ـخ",
        transliteration: "(Khaa)",
        soundSymbol: "Khaa",
        englishEquivalent: "Khan",
        options: ["Khaa", "x", "z"],
        answer: "Khaa",
      },
      {
        id: 7,
        letterInitial: "د",
        letterMedial: "",
        letterFinal: "ـد",
        transliteration: "(Daal)",
        soundSymbol: "Daal",
        englishEquivalent: "Duck",
        options: ["Daal", "t", "n"],
        answer: "Daal",
      },
      {
        id: 8,
        letterInitial: "ذ",
        letterMedial: "",
        letterFinal: "ـذ",
        transliteration: "(Dhaal)",
        soundSymbol: "Dhaal",
        englishEquivalent: "That",
        options: ["Dhaal", "z", "r"],
        answer: "Dhaal",
      },
      {
        id: 9,
        letterInitial: "ر",
        letterMedial: "",
        letterFinal: "ـر",
        transliteration: "(Raa)",
        soundSymbol: "Raa",
        englishEquivalent: "Rug",
        options: ["Raa", "u", "g"],
        answer: "Raa",
      },
      {
        id: 10,
        letterInitial: "ز",
        letterMedial: "",
        letterFinal: "ـز",
        transliteration: "(Zaa)",
        soundSymbol: "Zaa",
        englishEquivalent: "Zip",
        options: ["Zaa", "i", "p"],
        answer: "Zaa",
      },
      {
        id: 11,
        letterInitial: "سـ",
        letterMedial: "ـسـ",
        letterFinal: "ـس",
        transliteration: "(Seen)",
        soundSymbol: "Seen",
        englishEquivalent: "Sea",
        options: ["Seen", "e", "a"],
        answer: "Seen",
      },
      {
        id: 12,
        letterInitial: "شـ",
        letterMedial: "ـشـ",
        letterFinal: "ـش",
        transliteration: "(Sheen)",
        soundSymbol: "Sheen",
        englishEquivalent: "Sheep",
        options: ["Sheen", "e", "p"],
        answer: "Sheen",
      },
      {
        id: 13,
        letterInitial: "صـ",
        letterMedial: "ـصـ",
        letterFinal: "ـص",
        transliteration: "(Saad)",
        soundSymbol: "Saad'",
        englishEquivalent: "Sud",
        options: ["Saad'", "u", "d"],
        answer: "Saad'",
      },
      {
        id: 14,
        letterInitial: "ضـ",
        letterMedial: "ـضـ",
        letterFinal: "ـض",
        transliteration: "(Daad)",
        soundSymbol: "Daad'",
        englishEquivalent: "Dud",
        options: ["Daad'", "u", "d"],
        answer: "Daad'",
      },
      {
        id: 15,
        letterInitial: "طـ",
        letterMedial: "ـطـ",
        letterFinal: "ـط",
        transliteration: "(Taa)",
        soundSymbol: "Taa'",
        englishEquivalent: "Tea",
        options: ["Taa'", "e", "a"],
        answer: "Taa'",
      },
      {
        id: 16,
        letterInitial: "ظـ",
        letterMedial: "ـظـ",
        letterFinal: "ـظ",
        transliteration: "(thaa)",
        soundSymbol: "thaa'",
        englishEquivalent: "",
        options: ["thaa'", "u", "z"],
        answer: "thaa'",
      },
      {
        id: 17,
        letterInitial: "عـ",
        letterMedial: "ـعـ",
        letterFinal: "ـع",
        transliteration: "(Ayn)",
        soundSymbol: "Ayn",
        englishEquivalent: "Oak",
        options: ["Ayn", "o", "k"],
        answer: "Ayn",
      },
      {
        id: 18,
        letterInitial: "غـ",
        letterMedial: "ـغـ",
        letterFinal: "ـغ",
        transliteration: "(Ghayn)",
        soundSymbol: "Ghayn",
        englishEquivalent: "Grape",
        options: ["Ghayn", "h", "z"],
        answer: "Ghayn",
      },
      {
        id: 19,
        letterInitial: "فـ",
        letterMedial: "ـفـ",
        letterFinal: "ـف",
        transliteration: "(Fa)",
        soundSymbol: "Fa",
        englishEquivalent: "Fan",
        options: ["Fa", "p", "z"],
        answer: "Fa",
      },
      {
        id: 20,
        letterInitial: "قـ",
        letterMedial: "ـقـ",
        letterFinal: "ـق",
        transliteration: "(Qaf)",
        soundSymbol: "Qaf",
        englishEquivalent: "Queen",
        options: ["Qaf", "k", "t"],
        answer: "Qaf",
      },
      {
        id: 21,
        letterInitial: "كـ",
        letterMedial: "ـكـ",
        letterFinal: "ـك",
        transliteration: "(Kaf)",
        soundSymbol: "Kaf",
        englishEquivalent: "Key",
        options: ["Kaf", "g", "t"],
        answer: "Kaf",
      },
      {
        id: 22,
        letterInitial: "لـ",
        letterMedial: "ـلـ",
        letterFinal: "ـل",
        transliteration: "(Lam)",
        soundSymbol: "Lam",
        englishEquivalent: "Lamp",
        options: ["Lam", "m", "n"],
        answer: "Lam",
      },
      {
        id: 23,
        letterInitial: "مـ",
        letterMedial: "ـمـ",
        letterFinal: "ـم",
        transliteration: "(Meem)",
        soundSymbol: "Meem",
        englishEquivalent: "Moon",
        options: ["Meem", "n", "h"],
        answer: "Meem",
      },
      {
        id: 24,
        letterInitial: "نـ",
        letterMedial: "ـنـ",
        letterFinal: "ـن",
        transliteration: "(Noon)",
        soundSymbol: "Noon",
        englishEquivalent: "Nest",
        options: ["Noon", "m", "t"],
        answer: "Noon",
      },
      {
        id: 25,
        letterInitial: "هـ",
        letterMedial: "ـهـ",
        letterFinal: "ـه",
        transliteration: "(Ha)",
        soundSymbol: "Ha",
        englishEquivalent: "House",
        options: ["Ha", "s", "f"],
        answer: "Ha",
      },
      {
        id: 26,
        letterInitial: "و",
        letterMedial: "",
        letterFinal: "ـو",
        transliteration: "(Waw)",
        soundSymbol: "Waw",
        englishEquivalent: "Window",
        options: ["Waw", "y", "z"],
        answer: "Waw",
      },
      {
        id: 27,
        letterInitial: "يـ",
        letterMedial: "ـيـ",
        letterFinal: "ـي",
        transliteration: "(Ya)",
        soundSymbol: "Ya",
        englishEquivalent: "Yoyo",
        options: ["Ya", "z", "n"],
        answer: "Ya",
      },
      // more test questions
    ],
  },
  {
    id: 6,
    title: "Lesson 6: Arabic Alphabet\nLetters with Fat-ha mark",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "اَ",
        transliteration: "(aa)",
        options: ["aa", "ee", "oo"],
        answer: "aa",
      },
      {
        id: 2,
        letter: "بَ",
        transliteration: "(ba)",
        options: ["ba", "a", "e"],
        answer: "ba",
      },
      {
        id: 3,
        letter: "تَ",
        transliteration: "(ta)",
        options: ["ta", "f", "p"],
        answer: "ta",
      },
      {
        id: 4,
        letter: "ثَ",
        transliteration: "(tha)",
        options: ["tha", "g", "z"],
        answer: "tha",
      },
      {
        id: 5,
        letter: "جَ",
        transliteration: "(ja)",
        options: ["ja", "k", "n"],
        answer: "ja",
      },
      {
        id: 6,
        letter: "حَ",
        transliteration: "(ha)",
        options: ["ha", "x", "z"],
        answer: "ha",
      },
      {
        id: 7,
        letter: "خَ",
        transliteration: "(kha)",
        options: ["kha", "t", "n"],
        answer: "kha",
      },
      {
        id: 8,
        letter: "دَ",
        transliteration: "(da)",
        options: ["da", "z", "r"],
        answer: "da",
      },
      {
        id: 9,
        letter: "ذَ",
        transliteration: "(dha)",
        options: ["dha", "u", "g"],
        answer: "dha",
      },
      {
        id: 10,
        letter: "رَ",
        transliteration: "(ra)",
        options: ["ra", "i", "p"],
        answer: "ra",
      },
      {
        id: 11,
        letter: "زَ",
        transliteration: "(za)",
        options: ["za", "e", "a"],
        answer: "za",
      },
      {
        id: 12,
        letter: "سَ",
        transliteration: "(sa)",
        options: ["sa", "e", "p"],
        answer: "sa",
      },
      {
        id: 13,
        letter: "شَ",
        transliteration: "(sha)",
        options: ["sha'", "u", "d"],
        answer: "sha'",
      },
      {
        id: 14,
        letter: "صَ",
        transliteration: "(sa)",
        options: ["sa'", "u", "d"],
        answer: "sa'",
      },
      {
        id: 15,
        letter: "ضَ",
        transliteration: "(da)",
        options: ["da'", "e", "a"],
        answer: "da'",
      },
      {
        id: 16,
        letter: "طَ",
        transliteration: "(ta)",
        options: ["ta'", "u", "z"],
        answer: "ta'",
      },
      {
        id: 17,
        letter: "ظَ",
        transliteration: "(tha)",
        options: ["tha", "o", "k"],
        answer: "tha",
      },
      {
        id: 18,
        letter: "عَ",
        transliteration: "(aa)",
        options: ["aa", "h", "z"],
        answer: "aa",
      },
      {
        id: 19,
        letter: "غَ",
        transliteration: "(gha)",
        options: ["gha", "p", "z"],
        answer: "gha",
      },
      {
        id: 20,
        letter: "فَ",
        transliteration: "(fa)",
        options: ["fa", "k", "t"],
        answer: "fa",
      },
      {
        id: 21,
        letter: "قَ",
        transliteration: "(qa)",
        options: ["qa", "g", "t"],
        answer: "qa",
      },
      {
        id: 22,
        letter: "كَ",
        transliteration: "(ka)",
        options: ["ka", "m", "n"],
        answer: "ka",
      },
      {
        id: 23,
        letter: "لَ",
        transliteration: "(la)",
        options: ["la", "n", "h"],
        answer: "la",
      },
      {
        id: 24,
        letter: "مَ",
        transliteration: "(ma)",
        options: ["ma", "m", "t"],
        answer: "ma",
      },
      {
        id: 25,
        letter: "نَ",
        transliteration: "(na)",
        options: ["na", "s", "f"],
        answer: "na",
      },
      {
        id: 26,
        letter: "هَ",
        transliteration: "(ha)",
        options: ["ha", "y", "z"],
        answer: "ha",
      },
      {
        id: 27,
        letter: "وَ",
        transliteration: "(wa)",
        options: ["wa", "z", "n"],
        answer: "wa",
      },
      {
        id: 28,
        letter: "يَ",
        transliteration: "(ya)",
        options: ["ya", "z", "n"],
        answer: "ya",
      },
      // more test questions
    ],
  },
  {
    id: 7,
    title: "Lesson 7: Arabic Alphabet\nLetters with Damma Mark",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "اٌ",
        transliteration: "(uu)",
        options: ["uu", "ee", "oo"],
        answer: "uu",
      },
      {
        id: 2,
        letter: "بُ",
        transliteration: "(bu)",
        options: ["bu", "a", "e"],
        answer: "bu",
      },
      {
        id: 3,
        letter: "تُ",
        transliteration: "(tu)",
        options: ["tu", "f", "p"],
        answer: "tu",
      },
      {
        id: 4,
        letter: "ثُ",
        transliteration: "(thu)",
        options: ["thu", "g", "z"],
        answer: "thu",
      },
      {
        id: 5,
        letter: "جُ",
        transliteration: "(ju)",
        options: ["ju", "k", "n"],
        answer: "ju",
      },
      {
        id: 6,
        letter: "حُ",
        transliteration: "(hu)",
        options: ["hu", "x", "z"],
        answer: "hu",
      },
      {
        id: 7,
        letter: "خُ",
        transliteration: "(khu)",
        options: ["khu", "t", "n"],
        answer: "khu",
      },
      {
        id: 8,
        letter: "دُ",
        transliteration: "(du)",
        options: ["du", "z", "r"],
        answer: "du",
      },
      {
        id: 9,
        letter: "ذُ",
        transliteration: "(dhu)",
        options: ["dhu", "u", "g"],
        answer: "dhu",
      },
      {
        id: 10,
        letter: "رُ",
        transliteration: "(ru)",
        options: ["ru", "i", "p"],
        answer: "ru",
      },
      {
        id: 11,
        letter: "زُ",
        transliteration: "(zu)",
        options: ["zu", "e", "a"],
        answer: "zu",
      },
      {
        id: 12,
        letter: "سُ",
        transliteration: "(su)",
        options: ["su", "e", "p"],
        answer: "su",
      },
      {
        id: 13,
        letter: "شُ",
        transliteration: "(shu)",
        options: ["shu'", "u", "d"],
        answer: "shu'",
      },
      {
        id: 14,
        letter: "صُ",
        transliteration: "(su)",
        options: ["su'", "u", "d"],
        answer: "su'",
      },
      {
        id: 15,
        letter: "ضُ",
        transliteration: "(du)",
        options: ["du'", "e", "a"],
        answer: "du'",
      },
      {
        id: 16,
        letter: "طُ",
        transliteration: "(tu)",
        options: ["tu'", "u", "z"],
        answer: "tu'",
      },
      {
        id: 17,
        letter: "ظُ",
        transliteration: "(dhu)",
        options: ["dhu", "o", "k"],
        answer: "dhu",
      },
      {
        id: 18,
        letter: "عُ",
        transliteration: "(uu)",
        options: ["uu", "h", "z"],
        answer: "uu",
      },
      {
        id: 19,
        letter: "غُ",
        transliteration: "(ghu)",
        options: ["ghu", "p", "z"],
        answer: "ghu",
      },
      {
        id: 20,
        letter: "فُ",
        transliteration: "(fu)",
        options: ["fu", "k", "t"],
        answer: "fu",
      },
      {
        id: 21,
        letter: "قُ",
        transliteration: "(qu)",
        options: ["qu", "g", "t"],
        answer: "qu",
      },
      {
        id: 22,
        letter: "كُ",
        transliteration: "(ku)",
        options: ["ku", "m", "n"],
        answer: "ku",
      },
      {
        id: 23,
        letter: "لُ",
        transliteration: "(lu)",
        options: ["lu", "n", "h"],
        answer: "lu",
      },
      {
        id: 24,
        letter: "مُ",
        transliteration: "(mu)",
        options: ["mu", "m", "t"],
        answer: "mu",
      },
      {
        id: 25,
        letter: "نُ",
        transliteration: "(nu)",
        options: ["nu", "s", "f"],
        answer: "nu",
      },
      {
        id: 26,
        letter: "هُ",
        transliteration: "(hu)",
        options: ["hu", "y", "z"],
        answer: "hu",
      },
      {
        id: 27,
        letter: "وُ",
        transliteration: "(wu)",
        options: ["wu", "z", "n"],
        answer: "wu",
      },
      {
        id: 28,
        letter: "يُ",
        transliteration: "(yu)",
        options: ["yu", "z", "n"],
        answer: "yu",
      },
      // more test questions
    ],
  },
  {
    id: 8,
    title: "Lesson 8: Arabic Alphabet\nLetters with Kasra Mark",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "اِ",
        transliteration: "(ii)",
        options: ["ii", "ee", "oo"],
        answer: "ii",
      },
      {
        id: 2,
        letter: "بِ",
        transliteration: "(bii)",
        options: ["bii", "a", "e"],
        answer: "bii",
      },
      {
        id: 3,
        letter: "تِ",
        transliteration: "(tii)",
        options: ["tii", "f", "p"],
        answer: "tii",
      },
      {
        id: 4,
        letter: "ثِ",
        transliteration: "(thii)",
        options: ["thii", "g", "z"],
        answer: "thii",
      },
      {
        id: 5,
        letter: "جِ",
        transliteration: "(jii)",
        options: ["jii", "k", "n"],
        answer: "jii",
      },
      {
        id: 6,
        letter: "حِ",
        transliteration: "(hii)",
        options: ["hii", "x", "z"],
        answer: "hii",
      },
      {
        id: 7,
        letter: "خِ",
        transliteration: "(khii)",
        options: ["khii", "t", "n"],
        answer: "khii",
      },
      {
        id: 8,
        letter: "دِ",
        transliteration: "(dii)",
        options: ["dii", "z", "r"],
        answer: "dii",
      },
      {
        id: 9,
        letter: "ذِ",
        transliteration: "(dhii)",
        options: ["dhii", "u", "g"],
        answer: "dhii",
      },
      {
        id: 10,
        letter: "رِ",
        transliteration: "(rii)",
        options: ["rii", "i", "p"],
        answer: "rii",
      },
      {
        id: 11,
        letter: "زِ",
        transliteration: "(zii)",
        options: ["zii", "e", "a"],
        answer: "zii",
      },
      {
        id: 12,
        letter: "سِ",
        transliteration: "(sii)",
        options: ["sii", "e", "p"],
        answer: "si",
      },
      {
        id: 13,
        letter: "شِ",
        transliteration: "(shii)",
        options: ["shii'", "u", "d"],
        answer: "shii'",
      },
      {
        id: 14,
        letter: "صِ",
        transliteration: "(sii)",
        options: ["sii'", "u", "d"],
        answer: "sii'",
      },
      {
        id: 15,
        letter: "ضِ",
        transliteration: "(dii)",
        options: ["dii'", "e", "a"],
        answer: "dii'",
      },
      {
        id: 16,
        letter: "طِ",
        transliteration: "(tii)",
        options: ["tii'", "u", "z"],
        answer: "tii'",
      },
      {
        id: 17,
        letter: "ظِ",
        transliteration: "(dhii)",
        options: ["dhii", "o", "k"],
        answer: "dhii",
      },
      {
        id: 18,
        letter: "عِ",
        transliteration: "(ii)",
        options: ["ii", "h", "z"],
        answer: "ii",
      },
      {
        id: 19,
        letter: "غِ",
        transliteration: "(ghii)",
        options: ["ghii", "p", "z"],
        answer: "ghii",
      },
      {
        id: 20,
        letter: "فِ",
        transliteration: "(fii)",
        options: ["fii", "k", "t"],
        answer: "fii",
      },
      {
        id: 21,
        letter: "قِ",
        transliteration: "(qii)",
        options: ["qii", "g", "t"],
        answer: "qii",
      },
      {
        id: 22,
        letter: "كِ",
        transliteration: "(kii)",
        options: ["kii", "m", "n"],
        answer: "kii",
      },
      {
        id: 23,
        letter: "لِ",
        transliteration: "(lii)",
        options: ["lii", "n", "h"],
        answer: "lii",
      },
      {
        id: 24,
        letter: "مِ",
        transliteration: "(mii)",
        options: ["mii", "m", "t"],
        answer: "mii",
      },
      {
        id: 25,
        letter: "نِ",
        transliteration: "(nii)",
        options: ["nii", "s", "f"],
        answer: "nii",
      },
      {
        id: 26,
        letter: "هِ",
        transliteration: "(hii)",
        options: ["hii", "y", "z"],
        answer: "hii",
      },
      {
        id: 27,
        letter: "وِ",
        transliteration: "(wii)",
        options: ["wii", "z", "n"],
        answer: "wii",
      },
      {
        id: 28,
        letter: "يِ",
        transliteration: "(yii)",
        options: ["yii", "z", "n"],
        answer: "yii",
      },
      // more test questions
    ],
  },
  {
    id: 9,
    title: "Lesson 9: Arabic Alphabet\nWords with Fat-ha Mark",
    duration: "15 minutes",
    testQuestions: [
      {
        id: 1,
        letter: "جَلَسَ",
        transliteration: "(ja-la-sa)",
        meaning: "He Sat",
        options: ["ja-la-sa", "sa-ma-ha", "da-ra-sa"],
        answer: "ja-la-sa",
      },
      {
        id: 2,
        letter: "سَمَحَ",
        transliteration: "(sa-ma-ha)",
        meaning: "He Permitted",
        options: ["sa-ma-ha", "da-ra-sa", "ja-la-sa"],
        answer: "sa-ma-ha",
      },
      {
        id: 3,
        letter: "دَرَسَ",
        transliteration: "(da-ra-sa)",
        meaning: "He Studied",
        options: ["da-ra-sa", "ja-la-sa", "sa-ma-ha"],
        answer: "da-ra-sa",
      },
      // more test questions
    ],
  },
  // more lessons
];

export { lessons };
