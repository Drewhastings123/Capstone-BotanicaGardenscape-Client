// plants.map((plant) => ({plant.dropped ? draggableMarkup : <div>&#9734;</div>}))
// plants.forEach((plant) => console.log(plant));

const allPlants = [
  {
    id: 0,
    plant_name: "Netleaf willow",
    dropped: false,
    pic: "0",
  },
  {
    id: 1,
    plant_name: "Dwarf",
    dropped: false,
    pic: "1",
  },
  {
    id: 2,
    plant_name: "Crowberr",
    dropped: false,
    pic: "2",
  },
  {
    id: 3,
    plant_name: "Paper birc",
    dropped: false,
    pic: "3",
  },
  {
    id: 4,
    plant_name: "Bunchberry",
    dropped: false,
    pic: "4",
  },
  {
    id: 5,
    dropped: false,
    pic: "5",
  },
  {
    id: 6,
    plant_name: "Foxglove",
    dropped: false,
    pic: "6",
  },
  {
    id: 7,
    plant_name: "Common juniper",
    dropped: false,
    pic: "7",
  },
  {
    id: 8,
    plant_name: "Goldenrod",
    dropped: false,
    pic: "8",
  },
  {
    id: 9,
    plant_name: "Sugar maple",
    dropped: false,
    pic: "9",
  },

  {
    id: 10,
    plant_name: "Crabapple tree",
    dropped: false,
    pic: "0",
  },
  {
    id: 11,
    plant_name: "Delphinium",
    dropped: false,
    pic: "1",
  },
];


<Droppable key={container.id} id={container.id}>
                      {parent === container.id ? draggableMarkup2 : "Drop here"}
                    </Droppable> 

{/* // aqui tengo que hacer un mapeo de plants y preguntar por el "droppable" field si es true ponga "dragable markup", si es false ponga la estrella */}
