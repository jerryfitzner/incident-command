class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :position, :admin
  belongs_to :agency
end
