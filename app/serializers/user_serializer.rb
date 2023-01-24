class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :position, :agency, :admin
end
