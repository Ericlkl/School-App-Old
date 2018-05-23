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
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    Facebook_ID: DataTypes.STRING,

    Qualification: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Good_at: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Personal_Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Teachering_Experience: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Music_skill: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Language_skill: {
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
  return Teacher
}
