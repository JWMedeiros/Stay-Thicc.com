const addFormHandler = async function (event){
  event.preventDefault();
  let workName = document.querySelector('#workName');
  let workType = document.querySelector('#workType');
  let workDay = document.querySelector('#workDay');
  let workWeight = document.querySelector('#workWeight');
  let workSets = document.querySelector('#workSets');
  let workReps = document.querySelector('#workReps');
  await fetch('/api/workout', {
    method: 'post',
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
    .catch((err) => console.log('you messed up'+err));
  console.log('\n\n\n\n\n');
  document.location.replace('/workout');
};

document.querySelector('#addForm').addEventListener('submit', addFormHandler);