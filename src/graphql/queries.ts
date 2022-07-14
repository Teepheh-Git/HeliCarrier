export let filmQuery =
    `query Query {
         allFilms(first: 10) {
                 films {
                     id
                      created
                      releaseDate
                      title
                      producers
                      episodeID
                             }
                          }
                        }`


export let vehicleQuery =
    `query Query{
allVehicles(first: 10) {
    vehicles {
      id
      created
      manufacturers
      name
      vehicleClass
      cargoCapacity
      model
    }
  }
}`


export let planetQuery =
    `query Query {
  allPlanets(first: 10)  {
    planets {
          id
          created
          orbitalPeriod
          population
          surfaceWater
          rotationPeriod
          gravity
          climates
          diameter
          name
          terrains
    }
  }
}
`
