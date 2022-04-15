import { getFish, mostHolyFish, nonHolyFish, soldierFish } from './fish/database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


// Import the FishList function from the correct module
import {fishList} from './fish/fishList.js'
const displayFish = fishList()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish")
parentHTMLElement.innerHTML = fishList(allFish)



import {locationList} from './fish/fishList.js'
const displayLocation = locationList()
const anotherHTMLElement = document.querySelector(".locations")
anotherHTMLElement.innerHTML = locationList(allFish)



