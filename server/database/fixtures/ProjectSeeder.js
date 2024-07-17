const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "project", truncate: true });
  }

  run() {
    const users = [
      {
        id : 1, 
        title : "Wild Noise", 
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd"
      },
      {
        id : 2, 
        title : "Javascript Quizz", 
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd"
      },
      {
        id : 3, 
        title : "Mars Weather", 
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd"
      },
      {
        id : 4, 
        title : "Cretchum", 
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd"
      },
    ];

    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
