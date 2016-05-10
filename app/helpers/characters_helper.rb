module CharactersHelper

  def role_name_to_fa name
    case name.gsub(' ', '').downcase
    when 'tank'
     '<i class="fa fa-shield fa-2x"></i>'
    when 'healer'
     '<i class="fa fa-plus fa-2x">'
    when 'meleedd'
     '<i class="fa fa-gavel fa-2x"></i>'
    when 'rangeddd'
     '<i class="fa fa-crosshairs fa-2x"></i>'
    else
     ''
    end
  end

end
