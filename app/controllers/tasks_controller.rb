class TasksController < ApplicationController

	def index

	end

	def new
		render json: Task.all
	end


	def create
		@task = Task.create(todo: params[:todo], completed: false)
		render json: @task
	end

	def update
		@task = Task.find_by(id: params[:id])
    	@task.update(completed: params[:completed])
    	render json: @task
	end

	def destroy
	end

end