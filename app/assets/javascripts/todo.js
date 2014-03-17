var todoFieldInput = $("input");
function renderTasks() {
	$.getJSON("/tasks/new", function(response) {
		$.each(response, function(index, task) {
			
			// console.log(taskId)
			var checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			checkbox.addEventListener("change", function() {
				$(this).parent().toggleClass('checked');
				$.ajax({
	    			url: '/tasks/' + task.id,
	    			type: "PUT",
	    			data: {id: task.id, completed: !task.completed}
				});
			}) 
			$("<li>").text(task.todo).append(checkbox).appendTo("ul");
			if(task.completed === true) {
				$(checkbox).prop('checked', true);
				$(checkbox).parent().addClass( 'checked' );
			}

		});
	});
};

$("form").submit(function(e) {
	e.preventDefault();
	$.post("/tasks", { todo: todoFieldInput.val() })
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.addEventListener("click", function() {
		$(this).parent().toggleClass('checked');

	})
	$("<li>").text(todoFieldInput.val()).append(checkbox).appendTo("ul");
		this.reset();
	});
renderTasks();




// var todoFieldInput = $("input");

// $("form").submit(function(e) {
// 	e.preventDefault();
// 	$.post("/newtodo", { todo: todoFieldInput.val() })
// 	var checkedItem = $("<li>").text(todoFieldInput.val()).append('<input class="check_todo" type="checkbox">').appendTo("ul");
// 	$('.check_todo').click(function() {
// 		var todo = $(this).parent();
// 		if(checkedItem === ('checked')) {
// 			todo.toggleClass('checked');
// 		} else {
// 			todo.toggleClass('checked');
// 		}
		
// 	});
// 	this.reset();
// });

// $.getJSON("/new", function(response) {
// 	$.each(response, function(index, text) {
// 		var checkboxTodo 
// 		$("<li>").text(text.todo).append('<input class="check_todo" type="checkbox">').appendTo("ul").click(function() {
// 		if(this === ('checked')) {
// 			$(this).parent().toggleClass('checked');
// 		} else {
// 			$(this).parent().toggleClass('checked');
// 		}
		
// 	}); 


// 	});
// });

