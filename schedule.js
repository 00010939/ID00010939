const tranings = [
    {
        name: "08:00 - 10:00",
        Monday: "Fitness",
        Tuesday: "",
        Wednesday: "Running",
        Thursday: "",
        Friday: "GYM",
        Saturday: "",
        Sunday: "Workout",	
    },
    {
        name: "11:00 - 13:00",
        Monday: "Fitness",
        Tuesday: "Running",
        Wednesday: "GYM",
        Thursday: "",
        Friday: "",
        Saturday: "Workout",
        Sunday: "Crossfit",	
    },
    {
        name: "14:00 - 16:00",
        Monday: "",
        Tuesday: "Yoga",
        Wednesday: "",
        Thursday: "Fitness",
        Friday: "",
        Saturday: "Workout",
        Sunday: "",	
    },
    {
        name: "17:00 - 19:00",
        Monday: "GYM",
        Tuesday: "Yoga",
        Wednesday: "",
        Thursday: "Fitness",
        Friday: "Crossfit",
        Saturday: "",
        Sunday: "",	
    },
    {
        name: "20:00 - 22:00",
        Monday: "Workout",
        Tuesday: "",
        Wednesday: "Yoga",
        Thursday: "Fitness",
        Friday: "Crossfit",
        Saturday: "",
        Sunday: "GYM",	
    },
    
]
tranings.forEach((traning, index) => {
    document.getElementById('tranings').innerHTML += `<tr>
        <td>${traning.name}</td>
        <td>${traning.Monday}</td>
        <td>${traning.Tuesday}</td>
        <td>${traning.Wednesday}</td>
        <td>${traning.Thursday}</td>
        <td>${traning.Friday}</td>
        <td>${traning.Saturday}</td>
        <td>${traning.Sunday}</td>
        </tr>`
})