import type { Sequelize } from "sequelize";
import { black_list as _black_list } from "./black_list";
import type { black_listAttributes, black_listCreationAttributes } from "./black_list";
import { roles as _roles } from "./roles";
import type { rolesAttributes, rolesCreationAttributes } from "./roles";
import { transactions as _transactions } from "./transactions";
import type { transactionsAttributes, transactionsCreationAttributes } from "./transactions";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _black_list as black_list,
  _roles as roles,
  _transactions as transactions,
  _users as users,
};

export type {
  black_listAttributes,
  black_listCreationAttributes,
  rolesAttributes,
  rolesCreationAttributes,
  transactionsAttributes,
  transactionsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const black_list = _black_list.initModel(sequelize);
  const roles = _roles.initModel(sequelize);
  const transactions = _transactions.initModel(sequelize);
  const users = _users.initModel(sequelize);

  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});

  return {
    black_list: black_list,
    roles: roles,
    transactions: transactions,
    users: users,
  };
}
