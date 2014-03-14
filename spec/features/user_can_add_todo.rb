require 'spec_helper'

describe "a user can interact with a todo" do
	it "lets user create a todo" do
		
		visit root_path
		fill_in "New Todo", with: "do your grammar homework"

		click_button "Submit"

		find("#todo-list").should have_content("do your grammar homework") 

	end

	# it "lets user delete a todo" do

		

	# end


end