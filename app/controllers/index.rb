get '/' do
  # Look in app/views/index.erb
  erb :index
end

#-------USER----------------
get '/signup' do
  erb :signup
end

post '/signup/new' do
  if params[:user][:password] == params[:password_conf]
    user = User.create!(params[:user])
    session[:user_id] = user.id
    redirect '/profile'
  end
end

#----SESSIONS----------------
get '/login' do
  erb :login
end

post '/login/new' do

end

#-------PROFILE---------------
get '/profile' do
  @user = current_user
  @games = Game.where(user_id: @user.id)
  erb :profile
end
