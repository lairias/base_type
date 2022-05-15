'use strict';
import {
  Model
} from 'sequelize';
import { IPeople } from '../src/types';
module.exports = (sequelize: any, DataTypes: any) => {
  class pe_people extends Model<IPeople> implements IPeople {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_user!: number;
    firstName!: string;
    middleName!: string;
    lastName!: string;
    photoProfile!: string;
    photoBackground!: string;
    age!: number;
    birthDate!: Date;
    static associate(models: any) {
      pe_people.belongsTo(models.pe_users)

      // define association here
    }
  }
  pe_people.init({
    cod_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
    firstName: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Nombre del usuario",
    },
    middleName: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Segundo nombre del usuario",
    },
    lastName: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Apellido del usuario",
    },
    photoProfile: {
      type: DataTypes.STRING(250),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Foto de perfil del usuario",
    },
    photoBackground: {
      type: DataTypes.STRING(250),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Foto de fondo del usuario",
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Edad del usuario",
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Fecha de nacimiento del usuario",
    },
  }, {
    sequelize,
    modelName: 'pe_people',
  });
  return pe_people;
};