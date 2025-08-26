const CarTypes: any[] = [
    { value: 1, caption: "Aston Martin" },
    { value: 2, caption: "Bentley" },
    { value: 3, caption: "Alfa Romeo" },
    { value: 4, caption: "Ferrari" },
    { value: 5, caption: "Subaru" },
    { value: 6, caption: "Porsche" },
    { value: 7, caption: "Tesla" },
    { value: 8, caption: "Toyota" },
    { value: 9, caption: "Renault" },
    { value: 10, caption: "Peugeot" },
    { value: 11, caption: "Suzuki" },
    { value: 12, caption: "Mitsubishi" },
    { value: 13, caption: "Nissan" },
  ];
  
  const GirlsNames: string[] = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
  
  const MovieGenre: string[] = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
    "Western",
  ];

//--- Part 1 ----------------------------------------------------------------------------------------------
function cmbTask1CalculateClick(){
    const txtRectHeight: HTMLInputElement = document.getElementById("txtRectHeight") as HTMLInputElement;
    const txtRectWidth: HTMLInputElement = document.getElementById("txtRectWidth") as HTMLInputElement;
    const txtTask1Output: HTMLInputElement = document.getElementById("txtTask1Output") as HTMLInputElement;
    const hoyde: number = Number(txtRectHeight.value);
    const bredde: number = Number(txtRectWidth.value);

    const Omkrets: number = 2 * (hoyde + bredde);
    const Areal: number = hoyde * bredde;
    txtTask1Output.innerHTML = "Omkrets: " + Omkrets + " Areal: " + Areal;

  }
  
  const cmbTask1Calculate: HTMLSelectElement = document.getElementById("cmbTask1Calculate") as HTMLSelectElement;
  cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
//--- Part 2 ----------------------------------------------------------------------------------------------
function txtTask2WordKeyPress(aEvent: KeyboardEvent){
    const key: string = aEvent.key;
    switch(key){
        case "Enter":
            const words: string[] = txtTask2Word.value.split(" ");
            txtTask2Words.length = 0;
            txtTask2Words = txtTask2Words.concat(words);
            txtTask2Output.innerHTML = "Number of words: " + txtTask2Words.length + "<br>" + txtTask2Words.join(" ");
    }
}

const txtTask2Word: HTMLInputElement = document.getElementById("txtTask2Word") as HTMLInputElement;
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

let txtTask2Words: string[] = [];
const txtTask2Output: HTMLInputElement = document.getElementById("txtTask2Output") as HTMLInputElement;


//--- Part 3 ----------------------------------------------------------------------------------------------
function txtTask3CheckAnswerClick(){
    const chkTask3
}

const cmbTask3CheckAnswer: HTMLSelectElement = document.getElementById("cmbTask3CheckAnswer") as HTMLSelectElement;
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output: HTMLInputElement = document.getElementById("txtTask3Output") as HTMLInputElement;

let text: string = "";


//--- Part 4 ----------------------------------------------------------------------------------------------
//--- Part 5 ----------------------------------------------------------------------------------------------
//--- Part 6 ----------------------------------------------------------------------------------------------
//--- Part 7 ----------------------------------------------------------------------------------------------
