module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    EventName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Place: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Date: {
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
  return Event
}
