export const people =[
    {   
        id : 0,
        name : "HONG CHAN KI",
        age : 26,
        gender : "male"
    },
    {
        id : 1,
        name : "HONG CHAN KI",
        age : 26,
        gender : "male"
    },
    {
        id : 2,
        name : "CHAN KI",
        age : 27,
        gender : "female"
    },
    {
        id : 3,
        name : "HONG",
        age : 28,
        gender : "male"
    },
    {
        id : 4,
        name : "hckcksrl",
        age : 29,
        gender : "female"
    }
];

export const getByID = (id) => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0]
}

