// Day and Months Display 
function clock() {
  let d = new Date();
  let day = d.getDay();
  let date = d.getDate();
  let month = d.getMonth();


  let daysOF = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let monthsOF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let time = ` ${daysOF[day]}, ${monthsOF[month]}${date}`;


  document.querySelector('.dayMonth').textContent = time;
  setTimeout(clock, 1000);

}


//White filling input
let toDoAdd = document.querySelector('.toDoAdd');
let addList = document.querySelector('.addList');
let addingNote = document.querySelector('.addingNote');
let description = document.querySelector('.description');

addList.addEventListener('input', () => {

  if (addList.value) {
    addingNote.style.display = 'block';
    description.style.display = 'block';
  } else {
    addingNote.style.display = 'none';
    description.style.display = 'none';
  }
})

// Selecting DOM elements

let listContain = document.querySelector('.ListOfWork');
let addButton = document.querySelector('.addButton');
let textAdded = document.querySelector('.TextAdded');
let editing = document.querySelector('.editing');
let taskActive = document.querySelector('.taskActive')
let pinTopDiv = document.querySelector('.pinTopDiv');


let numPinned = document.querySelector('.numberOfPins');
numPinned.textContent = 0;
let completedTask = document.querySelector('.completedTask');
completedTask.textContent = 0;



// ********** Adding event listener to the Add button


addButton.addEventListener('click', () => {

  //To remove the add list button after clicking add button

  toDoAdd.style.display = 'none';

  // Checking if the AddList input is not empty

  if (addList.value.trim() !== '') {

    // Creating a new task container div

    let taskActive = document.createElement('div');
    taskActive.classList.add('taskActive');

    taskActive.innerHTML = `<div class="taskActive">
  <h2 class="TextAdded">${addList.value}</h2>
  <div class="descriptionAdded">${description.value}</div>
  <i class="fa-solid fa-ellipsis-vertical editing">
  <div class="editAllText">
    <button class="editInnerText">Edit</button>
    <button class="removeInnerText">Delete</button>
    <button class="pinTop">Pin</button>
   
  </div></i>
  <input type="checkbox" class="taskDone">
  
</div>`

    listContain.appendChild(taskActive);


    //*************Here Dom Is Created now adding Functionalities

    // Creating a new task title h2 element

    let taskHead = taskActive.querySelector('.TextAdded');

    // Creating a new task description div element
    let takeDescription = taskActive.querySelector('.descriptionAdded');

    // Creating the edit icon and adding functionality
    let editing = taskActive.querySelector('.editing');

    //Now creating an Edit Div with all options

    // let editAllText=taskActive.querySelector('.editAllText');
    //Edit Button
    let editInnerText = taskActive.querySelector('.editInnerText');

    editInnerText.addEventListener('click', () => {
      const isEditable = taskHead.contentEditable === 'true';
      taskHead.contentEditable = !isEditable;
      takeDescription.contentEditable = !isEditable;
      if (taskHead.contentEditable === 'true') {
        taskHead.style.border = '1px dotted #ffffff7c';
        takeDescription.style.border = '1px dotted #ffffff7c';
        editInnerText.textContent = 'Editted';
        // takeDescription.style.display = 'block'
      } else {
        taskHead.style.border = '0px';
        takeDescription.style.border = '0px';
        editInnerText.textContent = 'Edit';
        // takeDescription.style.display = 'none';
      }
    });

    //Remove Button

    let removeInnerText = taskActive.querySelector('.removeInnerText');

    removeInnerText.addEventListener('click', () => {
      taskActive.remove();
    });

    //When checkbox is checked then task is done

    let taskDone = taskActive.querySelector('.taskDone');

    taskDone.addEventListener('click', () => {
      if (taskDone.checked) {
        taskActive.style.opacity = '0.4';
        editing.style.display = 'none';

        completedTask.textContent = ++completedTask.textContent;
        // taskComplete(completedTask.textContent);

      } else {
        taskActive.style.opacity = '1';
        completedTask.textContent = --completedTask.textContent;
        editing.style.display = 'block';
        // taskComplete(completedTask.textContent);

      }

    });


    //This is to Pin and Unpin the task;

    let pinTop = taskActive.querySelector('.pinTop');


    pinTop.addEventListener('click', () => {
      if (pinTopDiv.contains(taskActive)) {
        listContain.appendChild(taskActive);
        pinTop.textContent = `Pin`;
        numPinned.textContent = --numPinned.textContent;
        removeInnerText.style.display = 'block';
        // pinned(numPinned.textContent);


       


      } else {
        pinTopDiv.appendChild(taskActive)
        pinTop.textContent = `Unpin`;
        numPinned.textContent = ++numPinned.textContent;
        removeInnerText.style.display = 'none';
        // pinned(numPinned.textContent);
      
      }


    });

    // let moreInfo = document.querySelector('.MoreInfo');
    // moreInfo.addEventListener('click', () => {
    //   takeDescription.classList.toggle('active');
    // });


    // Clearing the inputvalues after creating a new task
    addList.value = '';
    description.value = '';
  }
});

let addMark = document.querySelector('.addMark');
addMark.addEventListener('click', () => {
  toDoAdd.style.display = 'flex';
  addingNote.style.display = 'none';
  description.style.display = 'none';

  toDoAdd.classList.toggle('transition');
})

// //To add Number of Pins
// let keypin = 'keyPin';
// numPinned.textContent = 0;

// function pinned(pinnedNum) {
//   numPinned.textContent = localStorage.setItem(keypin, pinnedNum);
//   numPinned.textContent = localStorage.getItem(keypin);
// }

// numPinned.textContent = localStorage.getItem(keypin);

// //To add number of completed task
// let keyComp = 'keyComp';
// completedTask.textContent = 0;

// function taskComplete(taskCompleNum) {
//   localStorage.setItem(keyComp, taskCompleNum);
//   completedTask.textContent = localStorage.getItem(keyComp);
// }
// completedTask.textContent = localStorage.getItem(keyComp);



