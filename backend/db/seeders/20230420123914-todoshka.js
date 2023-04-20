/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Todoshkas', [{
      title: 'Погулять с собакой',
      description: 'Погулять с песиком вокруг квартала',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Поиграть с кошкой',
      description: 'Купить котику игрушку в зоомагазине',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Поговорить с попугаем',
      description: 'Научить его парочку словечек',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Todoshkas', null, {});
  },
};
