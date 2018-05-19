module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('Course', {
    CourseName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Requirement: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TutionFee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Period: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NumbersOfStudent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Instrument: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Teacher: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Image_URL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  })
  return course
}
