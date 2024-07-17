const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "skill", truncate: true });
  }

  run() {
    const users = [
      {
        id: 1, 
        name: "Javascript", 
      },
      {
        id: 2, 
        name: "React", 
      },
      {
        id: 3, 
        name: "HTML", 
      },
      {
        id: 4, 
        name: "CSS", 
      },
      {
        id: 5, 
        name: "Figma", 
      },
      {
        id: 6, 
        name: "Git", 
      },
      {
        id: 7, 
        name: "NodeJs", 
      },
    ];

    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
