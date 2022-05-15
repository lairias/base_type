'use strict';
import { Model } from 'sequelize';
import { IRole } from '../src/types';
module.exports = (sequelize: any, DataTypes: any) => {
  class role extends Model<IRole> implements IRole {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_role!: number;
    nam_role!: string;
    desc_role!: string;
    ins_role!: boolean;
    static associate(models: any) {
      role.belongsToMany(models.pe_users, {
        through: 'user_has_role',
      });
      role.belongsToMany(models.permission, {
        through: 'role_has_permission',
      });
      // define association here
    }
  }
  role.init({
    cod_role: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de rol",
    },
    desc_role: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "Descripción de rol",
    },
    ins_role: {
      type: DataTypes.STRING(250),
      defaultValue: true,
      allowNull: false,
      comment: "Indicador de estado de rol",
    },
    nam_role: {
      allowNull: false,
      type: DataTypes.STRING(120),
      unique: true,
      comment: "Nombre de rol",
    },
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};