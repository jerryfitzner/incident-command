class IncidentSerializer < ActiveModel::Serializer
  attributes :id, :type, :severity
end
