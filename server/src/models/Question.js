module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Question
}
