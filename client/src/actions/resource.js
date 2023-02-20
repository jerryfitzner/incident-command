

export const loadResources = () => {
  return (dispatch) => {
    fetch('/emergency_vehicles')
    .then((r) => r.json())
    .then((resources) => dispatch({type: "LOAD_RESOURCES", payload: resources}))
  }
}

export const updatePersonnel = (resource) => {
  return {
    type: "UPDATE_RESOURCE", 
    payload: resource
  }
}