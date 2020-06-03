// Objekter og variabler bliver skabt
let input,input2,button
let json = {}; //Ny JSON fil
let savefile = true;
let screen = 0
let information = []
let forbruginfo = []
let info = true
let width = 1200
let height = 600
let logo;
let laan = [];
let forbrug1 = 0

let hun = 0



// Setup-fuktionen kører kun én gang ved starten af programmet. Indeholder Login-knapper og inputbokse.
function setup() {
  createCanvas(width, height);
  logo = loadImage('logo.png')
  username = new box((width/2)-100, 300, "Username")
  password = new box((width/2)-100, 330, "Password")
  login = new box((width/2)-45, 360, "Login", 0)
  signup = new box((width/2)-51, 390, "Sign up", 1)
  
  backTo1 = new box(1100, 20, "Tilbage")
  
  
  
  username.createInput()
  password.createInput()
  login.createButton() 
  signup.createButton()
  
  
  
}

//Klasse (box) skaber box for input-felter og login knapper
class box
{
  constructor(x, y, text,output)
  {
    this.x = x;
    this.y = y;
    this.text = text;
    this.output = output;
  }
  
  //clickLogin formål er at tjekke hvilket skærm der skal frem visses. Variablen output bestemmer hvilken skærm, der fremkommmer.
  clickLogin()
  {
    if (this.output == 0)
    {
      screen = 1
      //console.log("hello")
    }
    
    if (this.output == 1)
    {
      screen = 2
      
    }
    
    if (this.output == 2)
    {
      screen = 3
    }
    
    if (this.output == 3)
    {
      screen = 4
    }
    
    if (this.output == 4)
    {
      screen = 5
    }
    
    if (this.output == 5)
    {
      screen = 4
    }
    
    if (this.output == 6)
    {
      screen = 7
    }
    
    if (this.output == 7)
    {
      screen = 8
    }

  }
  
  //createInput skaber alle inputfelter, der er i programmet.
  createInput()
  {
    this.input = createInput(this.text)
    this.input.position(this.x,this.y)
  }
  
  // CreateButton skaber alle knapper  der bliver brugt i programmet.
  createButton()
  {
    this.button = createButton(this.text)
    this.button.position(this.x,this.y)
    this.button.mousePressed(() => {this.clickLogin()});
    
  } 
}





// Funktion jsonFil bliver brugt til at skabe en JSON-fil. Som indeholder information om selve brugeren der opretter sig ind gennem (Sign-up).
function jsonFil()
{
  json.name = firstname.input.value();
  json.lastname = lastname.input.value();
  json.email = email.input.value();
  json.password = password.input.value();
  saveJSON(json, "konto.json")
  
  
}


//Function check kører i et loop og tjekker hvilken skærm, vi befinder os i. Derudover opstiller den alle de ting, som skal bruges på de enkelte skærme.
// I funktionen kan der observeres if-statements, der tjekker hvilken skærm, der vises.
function check()
{
  if (screen == 0) // Login-skærmen
  {
  
  rect(0, 0, width, height)
  image(logo, 380, 75, 0, 0)
    
  }
  
  if (screen == 1) // Forsiden
  {
    removeElements();
    fill(255)
    stroke(2)
    rect(0, 0, width, height)
    noStroke()
    fill(color(0,0,0))
    text("Cirkeldiagram over forbrug udregnet over din inkomst", 20, 75)
    
    forbrug = new circleDiagram(20, height / 2, [forbruginfo[0]/hun*100, forbruginfo[1]/hun*100, forbruginfo[2]/hun*100, forbruginfo[3]/hun*100, forbruginfo[4]/hun*100, forbruginfo[5]/hun*100, forbruginfo[6]/hun*100], ["Tilovers: ","Bolig: ", " Mad: "," Faste udgifter: ","      Transport: ","     Diverse:","Gældsafvikling: "])
    
    forbrug.createCircleDiagram()
    
    kontoimport = new box(20, 20, "Læg budget", 2)
    kontoimport.createButton()
    
    //kontoimport = new box(500, 200, "Importér konto", 3)
    //kontoimport.createButton()
    
    //fremtidbudget = new box(500, 250, "Fremtidigt budget", 4)
    //fremtidbudget.createButton()
    
    gaeld = new box(140, 20, "Gældsoversigt", 5)
    gaeld.createButton()
    
    //hvornaar = new box(500, 350, "Hvornår har jeg råd til...?", 6)
    //hvornaar.createButton()
    
    image(logo, 900, 450, 275, 120)
    
  }
  
  if (screen == 2) // Sign up-siden
  {
    removeElements();
    rect(0, 0, width, height)
    infoinput()
    
    signmeup = new box(260, 350, "Sign me up now", 1)
    signmeup.createButton()
    signmeup.button.size(280,50)
    
    textSize(20)
    text("First name",20,58)
    text("Last name",20,158)
    text("Email",20,258)
    text("Password",20,358)
    text("Repeat password",20,458)
    
    image(logo, 900, 450, 275, 120)
    
    noLoop()
    
  }
  
  if (screen == 3) // Læg budget-siden
  {
    removeElements();
    rect(0, 0, width, height)
    budget()
    
    fill('#222222');
    textSize(20)
    text("Månedlig indkomst",20,45)
    text("Bolig",20,125) 
    text("Mad",20,205)
    text("Faste udgifter",20,285)
    text("Transport",20,365)
    text("Diverse",20,445)
    text("Gældsafvikling",20,525)
    text("Hvad har du tilbage af din inkomst:",450,150)
    
    line(450, 155,  740, 155);
    
    // Skabber kanppen der sender dig tilbage til Menu skærm
    
    backTo1.createButton()
    backTo1.button.size(80,50)
    
    //Skaber kanppen der gammer din penge forbrugt og gemmer den i et liste
    saveinfo = new box(280,270, "Gem data")
    saveinfo.createButton()
    saveinfo.button.size(60,40)
    
    
    image(logo, 900, 450, 275, 120)
    
    noLoop()
  }
  
 
  if (screen == 4) // Gældsoversigt-siden
  {
    removeElements();
    
    fill((255, 255, 255))
    stroke(0)
    rect(0, 0, width, height)
    
    fill((0, 0, 0))
    textSize(25)
    text("Gældsoversigt", 50, 50)
    
    
    
    mineLaan = []
    
    noStroke()
    fill(200)
    rect(75, 75, 400, 500, 20)
    
    redigerLaan = new box(500, 100, "Rediger lån")
    redigerLaan.createButton()
    redigerLaan.button.size(300, 75)
    
    nytLaan = new box(500, 200, "Opret nyt lån", 7)
    nytLaan.createButton()
    nytLaan.button.size(300, 75)
    
    gaeldfri = new box(825, 200, "Hvornår er jeg gældfri?")
    gaeldfri.createButton()
    gaeldfri.button.size(300, 75)
    
    fill(255)
    stroke(0)
    rect(500, 300, 625, 275)
    
    if (laan.length > 0)
    {
      for (i = 0; i <= laan.length - 1; i += 1)
      {
        fill(120)
        textSize(25)
        text("Lån " + (i+1), 100, 100 + 50 * i)
        
        textSize(15)
        text("Stiftelse: " + laan[i][0] + " kr.", 175, 90 + 50 * i)
        text("Lån: " + laan[i][1] + " kr.", 175, 105 + 50 * i)
        text("Afdrag: " + laan[i][2] + " kr.", 275, 90 + 50 * i)
        text("Rente: " + laan[i][3] + " %", 275, 105 + 50 * i)
        text("Gebyr: " + laan[i][4] + " kr.", 375, 90 + 50 * i)
        text("Tid: " + laan[i][5] + " ", 375, 105 + 50 * i)
        fill(255)
        
      }
    }
    
    //if (mouseX > 75 && mouseX < 475 && mouseY > 75 && mouseY < 105)
    //{
      //rect(75, 75, 400, 30)
    //}
 
    backTo1.createButton()
    backTo1.button.size(80,50)
    noStroke()
    
    tint(255, 126)
    image(logo, 900, 450, 275, 120)
    
    
  }
  
  if (screen == 7) // Hvornår har jeg råd til..?
  {
    removeElements();
    rect(0, 0, width, height)
    
    image(logo, 900, 450, 275, 120)
  }
  
  
  if (screen == 8) // Opret lån
  {
    removeElements();
    rect(0, 0, width, height)
    tint(255, 126)
    image(logo, 900, 450, 275, 120)
    
    oprettelsesKrav = ["Stiftelsesgebyr", "Lån", "Afdrag", "Rente", "Gebyr", "Løbetid for lånet"]
    oprettelsesKravInput = []
    
    fill(0)
    textSize(25)
    text("Oprettelse af lån", 500, 60)
    
    text(" kr.", 805, 100)
    text(" kr.", 805, 175)
    text(" kr.", 805, 250)
    text(" %", 805, 325)
    text(" kr.", 805, 400)
    text(" måneder", 805, 475)
    
    for (i = 0; i <= 5; i += 1)
    {
      textSize(20)
      text(oprettelsesKrav[i],400, 100 + 75 * i)
      oprettelsesKravInput[i] = new box(650, (100 + 75 * i)-20, "0")
      oprettelsesKravInput[i].createInput()
    }
    
    
    
    gemLaan = new box(550, 500, "Gem lån")
    gemLaan.createButton()
    gemLaan.button.size(120, 60)
    
    backTo1.createButton()
    backTo1.button.size(80,50)
    
    noLoop()
    
    fill(255)
  }
}


// Function infoinput laver inputfelterne for Sign up-siden
function infoinput()
{
  x = 20
  y = 60
  
  firstname = new box(x,y, "")
  lastname = new box(x, y + 100, "")
  email = new box(x, y + 200, "")
  password = new box(x, y + 300, "")
  repeat = new box(x, y + 400, "")
  
  firstname.createInput()
  lastname.createInput()
  email.createInput()
  password.createInput()
  repeat.createInput()
  
}

// Function budget skaber inputfelterne for budget-siden
function budget()
{
  x = 20
  y = 50
  
  indkomst = new box(x,y, "")
  
  bolig = new box(x, y + 80, "") 
  
  mad = new box(x, y + 160, "") 
  
  fasteUdgifter = new box(x, y + 240, "") 
  
  transport = new box(x, y + 320, "") 
  
  diverse = new box(x, y + 400, "") 
  
  galdsafvikling = new box(x, y + 480, "") 
  
  //resten = new box (515,170,forbrug1)
  
  indkomst.createInput()
  bolig.createInput()
  mad.createInput()
  fasteUdgifter.createInput()
  transport.createInput()
  diverse.createInput()
  galdsafvikling.createInput()
  //resten.createInput()
  
  textSize(32);
  text(forbrug1 + "Kr", 550, 190);
  
  
}


// I draw kalder vi kun check-funktionen
function draw() {
  background(220);
  check()
  console.log(screen)
  
}

// I klassen circleDiagram skaber vi et cirkeldiagram for forbrugernes afgifter.
class circleDiagram
{
  //I constructoren definerer vi attributerne. 
  constructor(x, y, split, label)
  {
    
    this.x = x
    this.y = y
    this.split = sort(split)
    print(this.split)
    this.label = label
    this.colors = [color(245, 66, 66), color(245, 161, 66), color(245, 239, 66), color(66, 245, 69), color(66, 75, 245), color(255, 10, 247), color(10, 235, 255)]
    this.lastAngle = 0
    this.amount = this.split.length
  }
  // I createCircleDiagram skaber vi selve diagrammet.
  createCircleDiagram()
  {
    if (forbrug1 >= 0)
    {
      for (this.i = 0; this.i <= this.amount - 1; this.i += 1)
      {
        forbrug.split = [nfc(forbruginfo[0]/hun*100,2), nfc(forbruginfo[1]/hun*100,2), nfc(forbruginfo[2]/hun*100,2), nfc(forbruginfo[3]/hun*100,2), nfc(forbruginfo[4]/hun*100,2), nfc(forbruginfo[5]/hun*100,2), nfc(forbruginfo[6]/hun*100,2)]
        this.angle = radians(360*(this.split[this.i]/100))
        fill(this.colors[this.i])
        arc(this.x + 150, this.y, 300, 300, this.lastAngle, this.lastAngle + this.angle)
        this.lastAngle += this.angle
        textSize(15)
        textFont('Calibri');
        textStyle(BOLD)
        //text(this.label[this.i], (((this.x + 400) / this.amount) * this.i) + 25, 500)
         if (this.i < 3)
        {
          text(this.label[this.i] + this.split[this.i] + "%", ((this.x + 400)/3) * this.i + 50, 500)
        }
        else
        {
          text(this.label[this.i] + this.split[this.i] + "%", ((this.x + 400)/3) * (this.i - 3), 550)
        }
        fill(color(255,255,255))

      }
    }
    
    else
    {
      fill(color(245, 66, 75))
      text("Dit forbrug er større end din indkomst. Ændr dit forbrug.", this.x, this.y)
      fill(255)
    }
  }
  
}

// Funktionen mousePressed tjekker, om vi trykker på de forskellige knapper, vi bruger igennem programet. Dette gør vi ved hjælp af  if-statemants, som kan ses ned under.
function mousePressed(){
  
  
  
  if (screen == 2 && savefile == true && mouseX > 260 && mouseX < 540 && mouseY > 350 && mouseY < 400 && mouseIsPressed)
  {
    jsonFil()
    savefile = false;
    information = [firstname.input.value() ,lastname.input.value(), email.input.value(), password.input.value()]
    
    screen = 1
    
    loop();
    
  }
  
  if (screen == 3 && mouseX > 1100 && mouseX < 1200 && mouseY > 20 && mouseY < 70 && mouseIsPressed)
  {
    screen = 1
    loop(); 
    
  }
  
  if ( screen == 3 && mouseX > 280 && mouseX < 340 && mouseY > 270 && mouseY < 310 && mouseIsPressed)
  {
    
    
    // Sakber et liste med informationer omkring dit månedlig indkomst 
    forbruginfo = [float(indkomst.input.value()), float(bolig.input.value()), float(mad.input.value()), float(fasteUdgifter.input.value()),   float(transport.input.value()), float(diverse.input.value()), float(galdsafvikling.input.value())]
    console.log(forbruginfo)
    
    
    // Minusser alle din informationer omkring din mådelig forburg fra dit månedelig indskomst således at, du få information omkring hvor, mange penge du har tilbage. 
    forbrug1 = forbruginfo[0] - forbruginfo[1] - forbruginfo[2] - forbruginfo[3] - forbruginfo[4] - forbruginfo[5] - forbruginfo[6]
    
    
     //kalder budget funktionene for at opdater vore cirkel diagram. 
    budget()
    //skaber et variebel der bruges til at opsamle boede din mådedelig forbrug samt dit indkomst.
    hun = forbruginfo[0] +  forbruginfo[1] + forbruginfo[2] + forbruginfo[3] + forbruginfo[4] + forbruginfo[5] + forbruginfo[6]
    
    //Skaber et liste hvor i den bliver der regnet din mådedlig forbrug og indkomst om til procent dele. Ud fra "hun" det ville sige ud fra den samlede økonimi.  
    forbrug.split = [nfc(forbruginfo[0]/hun*100), nfc(forbruginfo[1]/hun*100), nfc(forbruginfo[2]/hun*100), nfc(forbruginfo[3]/hun*100), nfc(forbruginfo[4]/hun*100), nfc(forbruginfo[5]/hun*100), nfc(forbruginfo[6]/hun*100,10)]
    
    console.log(forbrug.split)
  }
  
  if ( screen == 1 && mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 40 && mouseIsPressed)
  {
    screen = 3
    loop();
  }
  
  if ( screen == 8 && mouseX > 550 && mouseX < 670 && mouseY > 500 && mouseY < 560 && mouseIsPressed)
  {
    laan.push([oprettelsesKravInput[0].input.value(), oprettelsesKravInput[1].input.value(), oprettelsesKravInput[2].input.value(), oprettelsesKravInput[3].input.value(), oprettelsesKravInput[4].input.value(), oprettelsesKravInput[5].input.value()])
    console.log(laan)
    screen = 4
    loop();
  }
  
  if (screen == 8 && mouseX > 1100 && mouseX < 1200 && mouseY > 20 && mouseY < 70 && mouseIsPressed)
  {
    screen = 4
    loop(); 
    
  }
  
  if (screen == 4 && mouseX > 1100 && mouseX < 1200 && mouseY > 20 && mouseY < 70 && mouseIsPressed)
  {
    screen = 1
    textSize(25)
  }
}








