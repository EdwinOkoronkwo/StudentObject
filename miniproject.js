var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
        this.gender = "female";
    }
    Student.prototype.capitalize = function (word) {
        return word
            .split(" ")
            .map(function (w) { return w.substring(0, 1).toUpperCase() + w.substring(1); })
            .join(" ");
    };
    Object.defineProperty(Student.prototype, "studentName", {
        get: function () {
            return "".concat(this.capitalize("".concat(this.name)));
        },
        set: function (name) {
            this.name = this.capitalize(name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "pronoun", {
        get: function () {
            return this.gender === "female" ? "her" : "his";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "studentDetail", {
        get: function () {
            return "The student's name is ".concat(this.studentName, " , ").concat(this.pronoun, " age is ").concat(this.age, ", ").concat(this.pronoun, " gender is ").concat(this.gender, ", and ").concat(this.pronoun, " nationality is ").concat(this.nationality, ".");
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getNationality = function () {
        this.nationality = "".concat(this.capitalize("".concat(this.nationality)));
        console.log("".concat(this.nationality));
    };
    return Student;
}());
var rihanna = new Student("rihanna", 25, this.gender, "british");
console.log(rihanna.studentDetail);
rihanna.studentName = "princess rihanna";
console.log(rihanna.studentName);
rihanna.getNationality();
var UnderGraduate = /** @class */ (function (_super) {
    __extends(UnderGraduate, _super);
    function UnderGraduate(name, age, gender, nationality, batch, GPA) {
        var _this = _super.call(this, name, age, gender, nationality) || this;
        _this.name = name;
        _this.age = age;
        _this.gender = gender;
        _this.nationality = nationality;
        _this.batch = batch;
        _this.GPA = GPA;
        return _this;
    }
    Object.defineProperty(UnderGraduate.prototype, "studentDetail", {
        get: function () {
            return "The student's name is ".concat(this.studentName, ", ").concat(this.pronoun, " age is ").concat(this.age, ", ").concat(this.pronoun, " gender is ").concat(this.gender, ", ").concat(this.pronoun, " nationality is ").concat(this.nationality, ", ").concat(this.pronoun, " GPA Score is ").concat(this.GPA, ", and ").concat(this.pronoun, " batch is ").concat(this.batch, ".");
        },
        enumerable: false,
        configurable: true
    });
    return UnderGraduate;
}(Student));
var johnWick = new UnderGraduate("john wick", 55, "male", "american", 2023, 4);
console.log(johnWick);
johnWick.getNationality();
console.log(johnWick.studentDetail);
johnWick.studentName = "mr jonathan wick";
console.log(johnWick.studentName);
