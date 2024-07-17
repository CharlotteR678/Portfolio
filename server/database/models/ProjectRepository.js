const AbstractRepository = require("./AbstractRepository");

class ProjectRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "project" });
  }

  // The C of CRUD - Create operation

  async create(project) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description) values (?, ?)`,
      [project.title, project.description]
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
    const [rows] = await this.database.query(`SELECT 
    project.id, 
    project.title, 
    project.description, 
    GROUP_CONCAT(skill.name SEPARATOR ' ') AS skills
    FROM project
    JOIN project_skill ON project_skill.project_id = project.id
    JOIN skill ON project_skill.skill_id = skill.id
    GROUP BY project.id`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(project) {
    const [result] = await this.database.query(
      `update ${this.table} set title = ?, description = ? where id = ?`,
      [project.title, project.description, project.id]
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

module.exports = ProjectRepository;