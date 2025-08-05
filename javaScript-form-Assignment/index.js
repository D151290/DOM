const form = document.getElementById("registration");

const nameError = document.getElementById("name-error");

const emailError = document.getElementById("email-error");

const genderError = document.getElementById("gender-error");

const countryError = document.getElementById("country-error");

const passwordError = document.getElementById("password-error");




const runMyFxn = (e) => {
    e.preventDefault()

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const gender = document.getElementById("gender").value;

const country = document.getElementById("country").value;

const passwordError = document.getElementById("password").value;

console.log({ name, email, gender, country, password});

nameError.textContent = "name is required"

const nameInput = document.getElementById('name')
nameInput.style.borderColor = "red"

emailError.textContent = "Enter email "

const emailInput = document.getElementById("email")
emailInput.style.borderColor = "red"

genderError.textContent = "Enter gender"

const genderInput = document.getElementById("gender")
genderInput.style.borderColor = "red"

countryError.textContent = "Enter country"
const countryInput = document.getElementById("country")
countryInput.style.borderColor = "red"

passwordError.textContent = "Enter password"
const passwordInput = document.getElementById("password")

passwordInput.style.borderColor = "red"


};




form.addEventListener("submit", runMyFxn);



const jss1Student = [
    {firstName: "mercy",
        score: 90,
        IsCompleted: true
    },

      {firstName: "jude",
        score: 50,
        IsCompleted: false
    },

   {firstName: "jane",
        score: 70,
        IsCompleted: true
    },
 
]


const jss2Student =[
      {firstName: "george",
        score: 90,
        IsCompleted: true
    },

      {firstName: "latif",
        score: 50,
        IsCompleted: false
    },

   {firstName: "chris",
        score: 70,
        IsCompleted: true
    },
]

const jss3Student = [
      {firstName: "josh",
        score: 90,
        IsCompleted: true
    },

      {firstName: "pete",
        score: 50,
        IsCompleted: false
    },

   {firstName: "rodri",
        score: 70,
        IsCompleted: true
    },
]

const container = document.getElementById("container")

jss1Student.forEach((each)=>{
    container.innerHTML +=`
    <div class= one>
    <h2>${each.firstName}</h2>
    <h3>${each.score}</h3>

    </div>

    `
})

jss2Student.forEach((each)=>{
    container.innerHTML +=`
   <div class= two>
   <h2>${each.firstName}</h2>
   <h3>${each.score}</h3>
   </div> 
    `
})


jss3Student.forEach((each)=>{
    container.innerHTML +=`
    <div class= three>
    <h2>${each.firstName}</h2>
    <h3>${each.score}</h3>
    </div>
    
    `
})













