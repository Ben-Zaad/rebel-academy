export const getIndexFromForeignKey = (key) => {    
    if (key){
        return (parseInt(key.split('/')[5]) - 1)
    }
    return null;
}

export const getPilotsMaxHomePopulationSum = (vehicles, people ,planets) => {
    let largestPopulationVisitedByVehicle = [null,0] //null = vehicle reset value, 0 = largest population sum reset value
    vehicles.forEach(vehicle => {
        let vehiclePopSum = 0;
        vehicle.pilots.forEach(pilot => {
            const pilotHomeworld = people[getIndexFromForeignKey(pilot)].homeworld;
            const homeworldPopulation = planets[getIndexFromForeignKey(pilotHomeworld)].population;
            vehiclePopSum += homeworldPopulation;
        })
        if (largestPopulationVisitedByVehicle[1] < parseInt(vehiclePopSum)){
            largestPopulationVisitedByVehicle[0] = vehicle;
            largestPopulationVisitedByVehicle[1] = parseInt(vehiclePopSum);
        }
    })
    return largestPopulationVisitedByVehicle;
}