class HomeController < ApplicationController

layout false, :only => [:json_test]
  def json_test
    render :json => { :message => 'Hello World' }
  end

  def index
    @all_characters = Character.all.sort{ |e2, e1| e1.ilvl.to_i <=> e2.ilvl.to_i}

    @post = Post.new
  end

end
