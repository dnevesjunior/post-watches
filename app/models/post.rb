class Post < ApplicationRecord
  has_one_attached :image

  before_create -> (post) do
    post.slug = post.title.parameterize
  end
end
