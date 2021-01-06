class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description, :slug, :created_at
end
