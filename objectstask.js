let my_arr= [23, "Jane", 560, ["Lesson", "Maths", {"currency" : "KES"}], 987, 76,"John"]
my_arr[3][2]["amount"] = 90
console.log(my_arr) 


let person = {
    "name":"Jane",
    "age":45
}
person["address"] = "123 Long St"
console.log(person)//{name: 'Jane', age: 45, address: '123 Long St'}

let num = String(my_arr[4]) 
let x = num.split('')
console.log(x) //['9', '8', '7']
x.reverse()
console.log(x) //['7', '8', '9']
let y = Number(x.join('') )
console.log(y)//789


my_arr[4] = Number(my_arr[4].toString().split('').reverse().join(''))
console.log(my_arr)
//(7)[23, 'Jane', 560, Array(3), 789, 76, 'John']


const userProfile = {
  id: 101,
  name: {
    first: "Brian",
    last: "Letting"
  },
  contact: {
    email: "jeff@example.com",
    phones: ["+254700000001", "+254700000002"]
  },
  address: {
    current: {
      city: "Nairobi",
      street: "Westlands Ave",
      postalCode: "00100"
    },
    previous: [
      {
        city: "Eldoret",
        street: "Main Street",
        postalCode: "30100"
      },
      {
        city: "Kisumu",
        street: "Lake View Road",
        postalCode: "40100"
      }
    ]
  },
  preferences: {
    theme: "dark",
    language: "en",
    notifications: {
      email: true,
      sms: false,
      push: ["promotions", "updates"]
    }
  },
  projects: [
    {
      id: 1,
      name: "POS System",
      technologies: ["React", "FastAPI", "PostgreSQL"],
      tasks: [
        { title: "Set up DB", done: true },
        { title: "Design UI", done: false }
      ]
    },
    {
      id: 2,
      name: "Portfolio Website",
      technologies: ["HTML", "CSS", "JavaScript"],
      tasks: [
        { title: "Create About Page", done: true },
        { title: "Deploy to Netlify", done: false }
      ]
    }
  ]
};

console.log(Object.keys(userProfile))
// ['id', 'name', 'contact', 'address', 'preferences', 'projects']
console.log(Object.keys(userProfile.projects[1])) //['id', 'name', 'technologies', 'tasks'
console.log(userProfile.projects[1].tasks[1].title) //Deploy to Netlify


const user = {
  id: 101,
  name: "John Doe",
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  posts: [
    { id: 1, title: "Hello", comments: [{ text: "Nice post!" }] },
    { id: 2, title: "World" },
  ],
  getStatus: () => "Active",
};

console.log(Object.keys(user)) //['id', 'name', 'settings', 'posts', 'getStatus']
console.log(user?.settings?.theme ?? "Light")
