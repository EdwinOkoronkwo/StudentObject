class Student {
  constructor(
    public name: String,
    public age: Number,
    public gender: String,
    public nationality: String
  ) {
    this.gender = "female";
  }

  public capitalize(word: string): string {
    return word
      .split(" ")
      .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1))
      .join(" ");
  }

  public get studentName(): string {
    return `${this.capitalize(`${this.name}`)}`;
  }

  public set studentName(name) {
    this.name = this.capitalize(name);
  }

  public get pronoun(): string {
    return this.gender === "female" ? "her" : "his";
  }

  public get studentDetail(): string {
    return `The student's name is ${this.studentName} , ${this.pronoun} age is ${this.age}, ${this.pronoun} gender is ${this.gender}, and ${this.pronoun} nationality is ${this.nationality}.`;
  }

  public getNationality(): void {
    this.nationality = `${this.capitalize(`${this.nationality}`)}`;
    console.log(`${this.nationality}`);
  }
}

const rihanna = new Student("rihanna", 25, this.gender, "british");

console.log(rihanna.studentDetail);

rihanna.studentName = "princess rihanna";
console.log(rihanna.studentName);

rihanna.getNationality();

interface IUnderGraduate {
  name: String;
  age: Number;
  gender: String;
  nationality: String;
  batch: Number;
  GPA: Number;
}

class UnderGraduate extends Student implements IUnderGraduate {
  constructor(
    public name: String,
    public age: Number,
    public gender: String,
    public nationality: String,
    public batch: number,
    public GPA: number
  ) {
    super(name, age, gender, nationality);
  }
  public get studentDetail(): string {
    return `The student's name is ${this.studentName}, ${this.pronoun} age is ${this.age}, ${this.pronoun} gender is ${this.gender}, ${this.pronoun} nationality is ${this.nationality}, ${this.pronoun} GPA Score is ${this.GPA}, and ${this.pronoun} batch is ${this.batch}.`;
  }
}

const johnWick = new UnderGraduate(
  "john wick",
  55,
  "male",
  "american",
  2023,
  4
);

console.log(johnWick);

johnWick.getNationality();

console.log(johnWick.studentDetail);

johnWick.studentName = "mr jonathan wick";
console.log(johnWick.studentName);
