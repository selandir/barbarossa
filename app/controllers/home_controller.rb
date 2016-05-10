class HomeController < ApplicationController

layout false, :only => [:json_test]
  def json_test
    render :json => { :message => 'Hello World' }
  end

  def index
    @all_characters = Character.all
    @post = Post.new
  end

end
