var todoFieldInput = $("input");

$("form").submit(function(e) {
	e.preventDefault();
	$.post("/newtodo", { todo: todoFieldInput.val() })
	this.reset();
});