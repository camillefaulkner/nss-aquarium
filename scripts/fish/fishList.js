// Import the function that returns a copy of the fish array
import {getFish} from './database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishcard">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length}</div>
            <div class="fish__nickname">Christian Name: ${fish.christianName}</div>
            <div class="fish__location">Harvested Location: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}


export const locationList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationsListed">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {
        htmlString += `<section class="martinlocations"> 
            <div class="individualLocation">${fish.harvestLocation}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}





