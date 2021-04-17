const { User } = require('../../models');

module.exports = {
  get: async (req, res) => {

    // TODO: 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    // HINT: 세션 객체에 담긴 정보가 궁금하다면 req.session을 콘솔로 출력해보세요

    if (!req.session.username) {
      res.status(400).send({ data: null, message: 'not authorized' });
    } else {
      const result = await User.findOne({
        where: { username: req.session.username },
      }).catch((err) => res.json(err));

      res.status(200).json({ data: result, message: 'ok' });
    }
  },
};