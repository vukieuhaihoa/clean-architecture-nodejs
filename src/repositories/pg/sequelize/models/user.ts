import { Model, UUIDV4 } from 'sequelize';

type UserAttributes = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> {
    declare id: string;

    declare firstName: string;

    declare lastName: string;

    declare email: string;

    declare createdAt: Date;

    declare updatedAt: Date;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      User.belongsToMany(models.Project, {
        through: 'ProjectAssignments',
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
