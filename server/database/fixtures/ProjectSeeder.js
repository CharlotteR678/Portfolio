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
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd", 
        image : "http://localhost:3310/api/images/wildnoise.png"
      },
      {
        id : 2, 
        title : "Javascript Quizz", 
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd", 
        image : "http://localhost:3310/api/images/secondquiz.png"
      },
      {
        id : 3, 
        title : "Mars Weather", 
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd", 
        image : "http://localhost:3310/api/images/MMA.png"
      },
      {
        id : 4, 
        title : "Cretchum", 
        description : "Llorem Ipsilum dfskdfj sdjfkhsdkjfh sdjkfhsd", 
        image : "http://localhost:3310/api/images/cretchum.png"
      },
    ];

    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
