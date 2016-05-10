class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :edit, :update, :destroy]

  # GET /characters
  def index
    @characters = current_user.characters.all
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
    @character = Character.new(character_params)
    push_result = current_user.characters.push(@character)

    if push_result
      redirect_to @character, notice: 'Character was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      redirect_to @character, notice: 'Character was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
    redirect_to characters_url, notice: 'Character was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def character_params
      params[:character].permit(:name, :game_class, :game_role, :game_tag, :game_alt_role)
    end
end
