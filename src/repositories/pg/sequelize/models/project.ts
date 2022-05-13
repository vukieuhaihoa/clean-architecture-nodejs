import { Model } from 'sequelize';

type ProjectAttributes = {
  id: number;
  title: string;
};
export = (sequelize: any, DataTypes: any) => {
  class Project extends Model<ProjectAttributes> {
    declare id: number;

    declare title: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Project.belongsToMany(models.User, {
        through: 'ProjectAssignments',
      });
    }
  }
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};
