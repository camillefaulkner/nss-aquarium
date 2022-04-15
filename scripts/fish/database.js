const database = {
    fish: [
        {
            image: "images/mandarinfish.jpeg",
            species: "Mandarinfish",
            length: .5,
            christianName: "Jerry",
            harvestLocation: "Ryukyu Islands",
            diet: "Live food and reject frozen or pellet food"
        },
        {
            image: "images/flowerhorn.jpeg",
            species: "Flowerhorn Cichlid",
            length: 18,
            christianName: "Aunt Pam",
            harvestLocation: "Malaysia",
            diet: "Provide protein-rich fish flakes"
        },
        {
            image: "images/angelfish.jpeg",
            species: "Juvenile Emperor Angelfish",
            length: 4,
            christianName: "Dorothy",
            harvestLocation: "Red Sea",
            diet: "Spirulina, algae, and commercial marine fish food"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = (fishArray) => {
    // 3, 6, 9, 12, etc... fish
    debugger; const holyFish = []
    for (const fish of fishArray) {
        if (fish.length % 3 === 0) {
        holyFish.push(fish)   
        }
    }
    return holyFish
}

export const soldierFish = (fishArray) => {
    const soldiers = []
    for (const fish of fishArray) {// 5, 10, 15, 20, 25, etc... fish
        if (fish.length % 5 === 0) {
        soldiers.push(fish)
        }
    }    
    return soldiers
}

export const nonHolyFish = (fishArray) => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishArray) {
        if (fish.length % 3 !== 0 || fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}