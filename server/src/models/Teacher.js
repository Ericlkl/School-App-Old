module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Gender: {
      type: DataTypes.ENUM('Male', 'Female'),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      unique: true
    },
    Facebook_ID: DataTypes.STRING,
    Qualification: {
      type: DataTypes.ENUM('Diploma', 'Bachelor', 'Master'),
      allowNull: false
    },
    Music_skill: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Language_skill: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  })
  return Teacher
}
