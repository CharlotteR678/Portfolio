const AbstractRepository = require("./AbstractRepository");

class ProjectSkillRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "project_skill" });
  }

  // The C of CRUD - Create operation

  async create(projectSkill) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (project_id, skill_id) values (?, ?)`,
      [projectSkill.projectId, projectSkill.skillId]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(projectSkill) {
    const [result] = await this.database.query(
      `update ${this.table} set project_id = ?, skill_id where id = ?`,
      [projectSkill.projectId, projectSkill.skillId]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return [result.affectedRows];
  }
}

module.exports = ProjectSkillRepository;
