function handleDragStart(e) {
  e.target.style.opacity = '0.7';
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.dropEffect = 'move';
  e.dataTransfer.setData('whatevertext', 'nanana');
}

function handleDragEnd(e) {
  e.target.style.opacity = '1';
}

function handleDragOver(e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
  e.stopPropagation();
  e.preventDefault();
  this.classList.add('over');
}

function handleDragLeave(e) {
  e.stopPropagation();
  e.preventDefault();
  this.classList.remove('over');
}

function handleDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  this.classList.remove('over');
}

var tasks = document.querySelectorAll('.task');
var taskBoxs = document.querySelectorAll('.task-box-content');

[].forEach.call(tasks, function(task) {
  task.addEventListener('dragstart', handleDragStart, false);
  task.addEventListener('dragend', handleDragEnd, false);
});

[].forEach.call(taskBoxs, function(taskBox) {
  taskBox.addEventListener('dragenter', handleDragEnter, false);
  taskBox.addEventListener('dragover', handleDragOver, false);
  taskBox.addEventListener('dragleave', handleDragLeave, false);
  taskBox.addEventListener('drop', handleDrop, false);
});
