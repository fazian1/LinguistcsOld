//getting API for showing all the data
export const getPlacementTestQuestions = () => fetch("http://localhost:7000/placementQuestions").then(res => res.json())

//getting API for inserting the data
export const createPlacementTestQuestions = (todo) => fetch("http://localhost:7000/placementQuestions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const deletePlacements = (todo, id) => fetch(`http://localhost:7000/placementQuestions/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updatePlacementTestQuestions = (todo, _id) => fetch(`http://localhost:7000/placementQuestions${_id}`, {
// http://localhost:4000/${id}
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getPlacementTestQuestion = (_id) => fetch(`http://localhost:7000/placementQuestions${_id}`).then(res => res.json())
