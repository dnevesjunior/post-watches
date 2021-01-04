class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :slug, :created_at
end
