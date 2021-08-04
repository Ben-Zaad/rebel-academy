export const getNumString = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const getIndexFromForeignKey = (key) => {    
    if (key){
        return (parseInt(key.split('/')[5]) - 1)
    }
    return null;
}

export const getHighestPopulationData = (vehicles, people ,planets) => {
    let resultObject = {
        vehicle: null,
        largestPopulationSum: 0,
        relatedPlanets: [],
        relatedPilotNames: []
    }
    vehicles.forEach(vehicle => {
        let vehiclePopSum = 0;
        let pilotsNames = [];
        let planetsNames = [];
        vehicle.pilots.forEach(pilot => {
            const pilotHomeworld = people[getIndexFromForeignKey(pilot)].homeworld;
            const homeworldPopulation = planets[getIndexFromForeignKey(pilotHomeworld)].population;
            vehiclePopSum += homeworldPopulation;
            pilotsNames.push(people[getIndexFromForeignKey(pilot)].name);
            planetsNames.push({name: planets[getIndexFromForeignKey(pilotHomeworld)].name, population: planets[getIndexFromForeignKey(pilotHomeworld)].population})
        })
        if (resultObject.largestPopulationSum < parseInt(vehiclePopSum)){
            resultObject.vehicle = vehicle;
            resultObject.largestPopulationSum = parseInt(vehiclePopSum);
            resultObject.relatedPilotNames = pilotsNames;
            resultObject.relatedPlanets = planetsNames;
        }
    })
    return resultObject;
}