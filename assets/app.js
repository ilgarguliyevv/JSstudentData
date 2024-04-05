// const array = ["Banana", "Orange", "Apple", "Mango"];


// let result = array.length


// result = array.toString

// result = array.at(1);

// result = array.join(" * ");

// result = array.join(1);

// result = array.pop("Orange")

// result = array.push("Ilgar")

// result = array.shift("Orange")

// result = array.unshift("Banana")

// // result = array.delete("")

// result = array.concat()

// result = array.copyWithin(2, 0);

// result = array.flat()

// result = array.splice(3, 0, "Armud");

// result = array.tospliced(0, 1);

// result = array.slice();





// console.log(array);


// console.log(result);


let students = [
    {
        id: 1,
        name: "Nurane",
        surname: "Ismayilzade",
        age: 21,
        hobbies: ["music", "walking", "watchingfilm"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "cavid" },
            { id: 4, name: "alisa" },
        ],
        loginDetail: { username: "nurana21", password: "nunu123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 88,
        salaryAZN: 144,
    },
    {
        id: 2,
        name: "Gizilgul",
        surname: "Allahverdiyeva",
        age: 20,
        hobbies: ["book", "writing code"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "babaxan" },
            { id: 4, name: "gulshen" },
        ],
        loginDetail: { username: "allahverdieva1", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 70,
        salaryAZN: 100,
    },
    {
        id: 3,
        name: "Xanim",
        surname: "Nuriyeva",
        age: 21,
        hobbies: ["book", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "hikmet" },
            { id: 4, name: "gulsen" },
        ],
        loginDetail: { username: "xanim123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 145,
    },
    {
        id: 4,
        name: "Minaya",
        surname: "Binnetova",
        age: 21,
        hobbies: ["book", "gaming", "movie", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "anar" },
        ],
        loginDetail: { username: "binnetova", password: "hello123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 90,
        salaryAZN: 142,
    },
    {
        id: 5,
        name: "Sabina",
        surname: "Hatamli",
        age: 21,
        hobbies: ["shopping", "listen to music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Mirvari" },
        ],
        loginDetail: { username: "sebine123", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 81,
        salaryAZN: 146,
    },

    {
        id: 6,
        name: "Ləman",
        surname: "Şamilova",
        age: 20,
        hobbies: [
            "watching movies",
            "reading books",
            "painting",
            " walking",
            " listen to music",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "lemanshamilova", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 85.8,
        salaryAZN: 145,
    },
    {
        id: 7,
        name: "Narmin",
        surname: "Musayeva",
        age: 21,
        hobbies: ["book", "gaming", "painting", "walking"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "fidan" },
            { id: 4, name: "Irada" },
        ],
        loginDetail: {
            username: "narmin0",
            password: "narmin01",
        },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 196,
    },

    {
        id: 8,
        name: "Fatima",
        surname: "Akhundzada",
        age: 20,
        hobbies: ["drawing", "sleeping"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Valida" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 76,
        salaryAZN: 100,
    },
    {
        id: 9,
        name: "Elmir",
        surname: "Huseynov",
        age: 21,
        hobbies: ["book", "ice skating", "Tennis", "Karting"],
        student: true,
        teacher: [
            { id: 1, name: "Gurban" },
            { id: 2, name: "Hajar" },
            { id: 3, name: "Morad" },
            { id: 4, name: "Fikrat" },
        ],
        loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
        gender: "man",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 120,
    },
    {
        id: 10,
        name: "Fidan",
        surname: "Rehimli",
        age: 21,
        hobbies: ["book", "gaming"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Turan" },
        ],
        loginDetail: { username: "fidan123", password: "fidanrahimli" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 75,
        salaryAZN: 98,
    },
    {
        id: 11,
        name: "Aynur",
        surname: "Aynurova",
        age: 20,
        hobbies: ["book", "gaming"],
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 81,
        salaryAZN: 120,
    },

    {
        id: 12,
        name: "Elman",
        surname: "Muradov",
        age: 20,
        hobbies: [
            "book",
            "gaming",
            "sking",
            "wrestling",
            "swiming",
            "arguing about philosophy",
            "solving sudoku",
            "hiking",
            "walking",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "jale" },
            { id: 4, name: "akhmed" },
        ],
        loginDetail: { username: "elman17", password: "elman12345" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 100,
    },
];

// butun elementleri konsola yazin

function studentsdata(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}
// studentsdata(students)

// butun telebelerin adlarinini konsola yazin:

function studentsname(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].name);

    }
}
// studentsname(students)

// butun telebelerin adlarini ve soyadlarini  konsola yazin

function studentsnamesurname(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].name, array[i].surname);

    }
}
// studentsnamesurname(students)

// kesri olan telebelerin ad ve hobbilerini capa verin.

function studentsbrak(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].fail == true)

            console.log(array[i].name, array[i].surname);
    }
}
// studentsbrak(students)

// en cox hobbisi olan telebenin ad ve hobbilerini capa verin

function studentsHobbi(array) {
    let counter = ""
    for (let i = 0; i < array.length; i++) {
        mosthobbies = array[i]
        if (mosthobbies.lengt > counter.length) {
            counter = mosthobbies.length
        }


    }
    console.log(mosthobbies.name, mosthobbies.surname);
}

// studentsHobbi(students)

// Ortalamasi en boyuk olan telebenin ad ve soyadini capa verin

function studentsAverage(array) {
    let counter = 0;
    let x;
    let ad = ""
    let soyad = ""
    for (let i = 0; i < array.length; i++) {
        x = array[i]
        if (x.avgPoint > counter) {
            counter = x.avgPoint
            ad = x.name
            soyad = x.surname

        }
    }
    console.log(ad, soyad, counter);
}

// studentsAverage(students);

// Parolu en uzun olan telebenin username ve adini capa verin.

function studentsPassword(array) {
    let counter = 0;
    let adi = ""
    let x;
    let pass = ""
    let user;
    for (let i = 0; i < array.length; i++) {
        x = array[i]
        if (x.loginDetail.password.length > pass.length) {
            pass = x.loginDetail.password
            user = x
        }
    }
    console.log(user.name, pass);
}
// studentsPassword(students);

// boyfriend-i olan telebelerin adlarini ve username-lerini capa verin.

function studentFriend(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].boyfriendGirlfriend == true)

            console.log(array[i].name, array[i].surname);
    }
}

// studentFriend(students)

// yasi 20 olan telebelerin adlarini ve muellim adlarini capa verin.

function teacherName(array) {
    for (let i = 0; i < array.length; i++) {
        let teacherBox = ""

        if (array[i].age == 20) {
            for (let j = 0; j < array[i].teacher.length; j++) {

                teacherBox += array[i].teacher[j].name + " ";
            }

            // console.log(`ad: ${array[i].name}, muellimler: ${teacherBox}`);
        }
    }
}

teacherName(students)

// butun telebelerin hobbileri olan array yaradin

// let allHobbies = [];

// students.forEach(student => {
//     allHobbies = allHobbies.concat(student.hobbies);
// });
// const Hobbies = [...new Set(allHobbies)];

// console.log(Hobbies);

// gamig hevesinde olanlar

// let allGaming = [];

// students.forEach(students => {
//     allGaming = allGaming.concat(student);
// });
// const Gaming = [...new (allGaming)];
// console.log(Gaming);

let gamingStudents = students.filter(students => students.hobbies.includes("gaming"));
// console.log(gamingStudents);

// butun telebelerin yaslarinin cemi

let totalAge = students.reduce((total, student) => total + student.age, 0);
console.log(totalAge);
