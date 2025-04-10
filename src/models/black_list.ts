import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface black_listAttributes {
  id: number;
  fullname?: string;
  citizen_identification_card?: string;
  identity_card?: string;
  passport?: string;
  dob?: string;
  address?: string;
  list?: string;
  source?: string;
}

export type black_listPk = "id";
export type black_listId = black_list[black_listPk];
export type black_listOptionalAttributes = "id" | "fullname" | "citizen_identification_card" | "identity_card" | "passport" | "dob" | "address" | "list" | "source";
export type black_listCreationAttributes = Optional<black_listAttributes, black_listOptionalAttributes>;

export class black_list extends Model<black_listAttributes, black_listCreationAttributes> implements black_listAttributes {
  id!: number;
  fullname?: string;
  citizen_identification_card?: string;
  identity_card?: string;
  passport?: string;
  dob?: string;
  address?: string;
  list?: string;
  source?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof black_list {
    return black_list.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    citizen_identification_card: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    identity_card: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    passport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    source: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'black_list',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__black_li__3213E83F3AE17FF5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
