var todoFieldInput = $("input");

$("form").submit(function(e) {
	e.preventDefault();
	$.post("/newtodo", { todo: todoFieldInput.val() })
	this.reset();
});

$.getJSON("/new", function(response) {
	console.log(response);
	$.each(response, function(index, text) {
		$("<li>").text(text.todo).appendTo("ul"); 
	});
});