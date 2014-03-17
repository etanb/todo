Todo::Application.routes.draw do
  root to: "tasks#index"

  resources :tasks
  # get 'new' => 'tasks#new'
  # post 'newtodo' => 'tasks#create'
  # put 'updatetodo' => 'tasks#update'
  # delete 'deletetodo' => 'tasks#destroy'

end
