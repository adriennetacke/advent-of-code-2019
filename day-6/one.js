const orbits = (input) => {
  let mapParts = '(.*)([\(\)])(.*)';
  let fullOrbitMap = {}

  let localOrbits = input
    .split('\n')
    .map(x => {
      let orbitMap = x.trim().match(mapParts); //(Orbited Object)(Orbit perimeter)(Orbiting Object)

      let orbited = orbitMap[1];
      let orbiter = orbitMap[3];
      // console.log(orbitMap, orbited, orbiter);

      let mapKeyOrbited = fullOrbitMap[`${orbited}`];
      let mapKeyOrbiter = fullOrbitMap[`${orbiter}`];

      // console.log("mapKeyOrbited, mapKeyOrbiter", mapKeyOrbited, mapKeyOrbiter);

      if (mapKeyOrbited) {
        mapKeyOrbited.orbitedBy.add(orbiter);

        if (mapKeyOrbited.directOrbits) {
          mapKeyOrbited.directOrbits.forEach(directOrbit => {
            fullOrbitMap[directOrbit].indirectOrbits.add(orbiter);
  
            if (fullOrbitMap[directOrbit].directOrbits) {
              fullOrbitMap[directOrbit].directOrbits.forEach(subDirectOrbit => {
                if (mapKeyOrbited.indirectOrbits) {
                  mapKeyOrbited.indirectOrbits.add(subDirectOrbit);
                } else {
                  mapKeyOrbited.indirectOrbits = new Set([ subDirectOrbit ]);
                }
              });
            }
          });
        }

      } else {
        fullOrbitMap[`${orbited}`] =  
          { 
            'directOrbits': new Set(),
            'indirectOrbits': new Set(),
            'orbitedBy': new Set([ orbiter ])
          };

          if (fullOrbitMap[`${orbited}`].directOrbits) {
            fullOrbitMap[`${orbited}`].directOrbits.forEach(directOrbit => {
              fullOrbitMap[directOrbit].indirectOrbits.add(orbiter);
    
              if (fullOrbitMap[directOrbit].directOrbits) {
                fullOrbitMap[directOrbit].directOrbits.forEach(subDirectOrbit => {
                  if (fullOrbitMap[`${orbited}`].indirectOrbits) {
                    fullOrbitMap[`${orbited}`].indirectOrbits.add(subDirectOrbit);
                  } else {
                    fullOrbitMap[`${orbited}`].indirectOrbits = new Set([ subDirectOrbit ]);
                  }
                });
              }
            });
          }
      }

      // console.log(orbiter, "fullOrbitMap[`${orbiter}`]", fullOrbitMap[`${orbiter}`]);
      if (mapKeyOrbiter) {
        // console.log("orbiter", orbiter, "mapKeyOrbiter", mapKeyOrbiter);
        mapKeyOrbiter.directOrbits.add(orbited);

        if (mapKeyOrbiter.directOrbits) {
          mapKeyOrbiter.directOrbits.forEach(directOrbit => {
            if (fullOrbitMap[directOrbit].directOrbits) {
              fullOrbitMap[directOrbit].directOrbits.forEach(subDirectOrbit => {
                if (mapKeyOrbiter.indirectOrbits) {
                  mapKeyOrbiter.indirectOrbits.add(subDirectOrbit);
                } else {
                  mapKeyOrbiter.indirectOrbits = new Set([ subDirectOrbit ]);
                }
              });
            }
          });
        }
      } else {
        fullOrbitMap[`${orbiter}`] =  
        { 
          'directOrbits': new Set([ orbited ]),
          'indirectOrbits': new Set(),
          'orbitedBy': new Set()
        };

        if (fullOrbitMap[`${orbiter}`].directOrbits) {
          fullOrbitMap[`${orbiter}`].directOrbits.forEach(directOrbit => {
            if (fullOrbitMap[directOrbit].directOrbits) {
              fullOrbitMap[directOrbit].directOrbits.forEach(subDirectOrbit => {
                if (fullOrbitMap[`${orbiter}`].indirectOrbits) {
                  fullOrbitMap[`${orbiter}`].indirectOrbits.add(subDirectOrbit);
                } else {
                  fullOrbitMap[`${orbiter}`].indirectOrbits = new Set([ subDirectOrbit ]);
                }
              });
            }
          });
        }
        // console.log(orbiter, "fullOrbitMap[`${orbiter}`]", fullOrbitMap[`${orbiter}`]);
      }

      console.log("processed: ", orbited, orbiter, "fullOrbitMap: ", fullOrbitMap);

      return fullOrbitMap;
    });
  
  // console.log(localOrbits);
}

module.exports = orbits;