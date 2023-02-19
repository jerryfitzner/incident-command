




export const loadPersonnel = () => {
  return (dispatch) => {
    fetch('/users')
    .then((r) => r.json())
    .then((personnel) => dispatch({type: "LOAD_PERSONNEL", payload: personnel}))
  }
}