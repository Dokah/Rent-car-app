module.exports = (sequelize, Sequelize) => {
    const korisnik = sequelize.define("korisnik", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return korisnik;
  };