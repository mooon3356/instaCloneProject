const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const userInfo = await User.findOne({
      where: { email: req.body.email },
    });
  //  console.log('hi')
    console.log(userInfo)

    if (userInfo) {
        res.status(400).send({message: "not signup"})
    } else {
      await User.create({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        mobile: req.body.mobile,
      });
      res.status(200).send({message: 'ok'})
    }
  },
};
