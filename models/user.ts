'use strict';
import {
  Model
} from 'sequelize';
import { IUser } from '../src/types';

module.exports = (sequelize: any, DataTypes: any) => {
  class pe_users extends Model<IUser> implements IUser {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_user!: number;
    email!: string;
    userName!: string;
    password!: string;
    _token!: string;
    verifiedEmail!: boolean;
    ind_usr!: boolean;
    ins_usr!: boolean;

    static associate(models: any) {
      pe_users.hasMany(models.pe_people, {
        foreignKey: 'cod_user',
        onDelete: 'CASCADE',
      })
      pe_users.belongsToMany(models.role, {
        through: 'user_has_role'
      })

      // define association here
    }
  }
  pe_users.init({
    cod_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de usuario",
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      },
      comment: "Correo del usuario",
    },
    userName: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      },
      comment: "Nombre de usuario unico",
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Contraseña del usuario",
    },

    _token: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: false,
      validate: {
        notEmpty: true
      },
      comment: "Indicador de primer ingreso",
    },
    verifiedEmail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "Indicador de correo verificado",
    },

    ind_usr: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notEmpty: true
      },
      comment: "Indicador de primer ingreso",
    },
    ins_usr: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Estado del usuario",
    },

  }, {
    sequelize,
    modelName: 'pe_users',
  });
  return pe_users;
};