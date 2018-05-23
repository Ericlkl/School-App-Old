module.exports = (sequelize, DataTypes) => {
  const Instrument = sequelize.define('Instrument', {
    InstrumentName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Status: {
      type: DataTypes.ENUM,
      values: ['New', 'Excellent', 'Good', 'Repair', 'Discard'],
      allowNull: false
    },
    Cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    InStock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Image_URL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  })
  return Instrument
}
