const addWork= document.querySelector('#workCreate');
const workouts = document.querySelector('#workContainer').children;

addWork.addEventListener('click',function(){
  document.location.replace('/addWorkout');
});

for (let i=0;i<workouts.length;i++){
  //Update Button Functionality
  workouts[i].children[6].addEventListener('click',async function(){
    let workID=parseInt(workouts[i].children[6].textContent.slice(6));
    location.replace(`/api/workout/changeWorkout/:${workID}`);
  });

  //Delete Button Functionality
  workouts[i].children[7].addEventListener('click', async function(){
    let workID=parseInt(workouts[i].children[7].textContent.slice(6));
    await fetch(`/api/workout/:${workID}`,{
      method: 'DELETE',
    });
    document.location.replace('/workout');
  });
}