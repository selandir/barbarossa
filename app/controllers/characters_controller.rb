class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :edit, :update, :destroy]

  # GET /characters
  def index
    @characters = current_user.characters.all
    @character = Character.new # for first char page
  end

  # GET /characters/1
  def show
  end

  # GET /characters/new
  def new
    @character = Character.new
  end

  # GET /characters/1/edit
  def edit
  end

  # POST /characters
  def create

    if params[:character][:old_character]
      @character = Character.where(:name => params[:character][:name]).first
      push_result = current_user.characters.push(@character)
    else
      @character = Character.new(character_params)
      push_result = current_user.characters.push(@character)
    end

    if push_result
      redirect_to edit_character_path(@character), notice: 'Character was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      current_user.characters.push(@character) if @character.user_id.nil?
      redirect_to characters_path, notice: 'Character was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
    redirect_to characters_path, notice: 'Character was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def character_params
      params[:character].permit(:name, :game_class, :game_role, :game_tag, :game_alt_role, :armory_addr)
    end
end
