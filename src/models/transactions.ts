import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface transactionsAttributes {
  id: string;
  amount: number;
  from_account: string;
  to_account: string;
  timestamp: Date;
  description?: string;
  status?: string;
}

export type transactionsPk = "id";
export type transactionsId = transactions[transactionsPk];
export type transactionsOptionalAttributes = "description" | "status";
export type transactionsCreationAttributes = Optional<transactionsAttributes, transactionsOptionalAttributes>;

export class transactions extends Model<transactionsAttributes, transactionsCreationAttributes> implements transactionsAttributes {
  id!: string;
  amount!: number;
  from_account!: string;
  to_account!: string;
  timestamp!: Date;
  description?: string;
  status?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof transactions {
    return transactions.init({
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    from_account: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    to_account: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "SUCCESS"
    }
  }, {
    sequelize,
    tableName: 'transactions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__transact__3213E83F66488F13",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
