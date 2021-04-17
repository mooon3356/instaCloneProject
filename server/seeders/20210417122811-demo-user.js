'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     * 시쿼라이즈가 실행할 시드 명령어를 작성합니다..
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Users', [
      {
        id: 1,    
        email: 'kimcoding@authstates.com',
        password: '1234',
        username: 'kimcoding',
        mobile: '010-0000-0000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     * 시드를 취소하기 위한 명령어를 작성합니다.
     *
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
