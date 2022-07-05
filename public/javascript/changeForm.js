const changeFormHandler = async function (event){
  event.preventDefault();
  let id=workout.id;
  let workName = document.querySelector('#workName');
  let workType = document.querySelector('#workType');
  let workDay = document.querySelector('#workDay');
  let workWeight = document.querySelector('#workWeight');
  let workSets = document.querySelector('#workSets');
  let workReps = document.querySelector('#workReps');
  fetch(`/api/workout/:${id}`, {
    method: 'put',
    body: JSON.stringify({
      name: workName.value,
      weekday: workDay.value,
      type: workType.value,
      workout_weight:workWeight.value,
      reps: workReps.value,
      sets: workSets.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (res){
      return res.json();
    })
    .then(function () {
      //Jump to the workout page
      document.location.replace('/workout');
    })
    .catch((err) => console.log('you messed up'+err));
};

document.querySelector('#changeForm').addEventListener('submit', changeFormHandler);