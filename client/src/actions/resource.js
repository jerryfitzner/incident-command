

export const loadResources = () => {
  return (dispatch) => {
    fetch('/emergency_vehicles')
    .then((r) => r.json())
    .then((resources) => dispatch({type: "LOAD_RESOURCES", payload: resources}))
  }
}

export const updateResource = (resource) => {
  return {
    type: "UPDATE_RESOURCE", 
    payload: resource
  }
}

export const updateDeleteIncident = (resource) => {
  return {
    type: "UPDATE_DELETE",
    payload: resource
  }
}