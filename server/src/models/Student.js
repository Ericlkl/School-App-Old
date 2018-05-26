module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
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
      unique: true,
      allowNull: false
    },
    Facebook_ID: DataTypes.STRING,
    Parent_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Parent_Phone_Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  })
  return Student
}
