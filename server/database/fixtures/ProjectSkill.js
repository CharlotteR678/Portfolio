const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const ProjectSeeder = require("./ProjectSeeder");
const SkillSeeder = require("./SkillSeeder");

class HomeStructureSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "project_skill",
      truncate: true,
      dependencies: [ProjectSeeder, SkillSeeder],
    });
  }

  run() {
    const homeStructure = [
      {
        id : 1, 
        project_id : 1, 
        skill_id : 1,
      },
      {
        id : 2, 
        project_id : 1, 
        skill_id : 3,
      },
      {
        id : 3, 
        project_id : 1, 
        skill_id : 4,
      },
      {
        id : 4, 
        project_id : 2, 
        skill_id : 2,
      },
      {
        id : 5, 
        project_id : 2, 
        skill_id : 7,
      },
      {
        id : 6, 
        project_id : 2, 
        skill_id : 6,
      },
      {
        id : 7, 
        project_id : 3, 
        skill_id : 2,
      },
      {
        id : 8, 
        project_id : 3, 
        skill_id : 7,
      },
      {
        id : 9, 
        project_id : 4, 
        skill_id : 7,
      },
      {
        id : 10, 
        project_id : 4, 
        skill_id : 2,
      },
    ];

    homeStructure.forEach((structure) => {
      this.insert(structure);
    });
  }
}

module.exports = HomeStructureSeeder;
