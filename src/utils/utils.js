export const getIndexFromForeignKey = (key) => {    
    if (key){
        return (parseInt(key.split('/')[5]) - 1)
    }
    return null;
}

export const getPilotsMaxHomePopulationSum = (vehicles, people ,planets) => {
    let resultObject = {
        vehicle: null,
        largestPopulationSum: 0,
        relatedPlanets: [],
        relatedPilotNames: []
    }
    let largestPopulationVisitedByVehicle = [null,0] //null = vehicle reset value, 0 = largest population sum reset value
    vehicles.forEach(vehicle => {
        let vehiclePopSum = 0;
        let pilotsNames = [];
        let planetsNames = [];
        vehicle.pilots.forEach(pilot => {
            const pilotHomeworld = people[getIndexFromForeignKey(pilot)].homeworld;
            const homeworldPopulation = planets[getIndexFromForeignKey(pilotHomeworld)].population;
            vehiclePopSum += homeworldPopulation;
            pilotsNames.push(people[getIndexFromForeignKey(pilot)].name);
            planetsNames.push(planets[getIndexFromForeignKey(pilotHomeworld)].name)
        })
        if (resultObject.largestPopulationSum < parseInt(vehiclePopSum)){
            resultObject.vehicle = vehicle;
            resultObject.largestPopulationSum = parseInt(vehiclePopSum);
            resultObject.relatedPilotNames = pilotsNames;
            resultObject.relatedPlanets = planetsNames;
        }
    })
    console.log("resultObject",resultObject);
    return resultObject;
}