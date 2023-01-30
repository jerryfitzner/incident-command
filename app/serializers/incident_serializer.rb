class IncidentSerializer < ActiveModel::Serializer
  attributes :id, :name, :severity
end
