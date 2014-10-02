class User < ActiveRecord::Base

  has_many :games

  def password
    @password ||= BCrypt::Password.new(password_hash)
  end

  def password=(pass)
    @password = BCrypt::Password.create(pass)
    self.password_hash = @password
  end

  def self.authenticate(email, password)
    user = User.find_by_email(email)
    if user && (user.password == password)
      return user
    else
      return nil
    end
  end

end
