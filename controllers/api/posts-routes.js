const router = require('express').Router();
const { Post } = require('../../models');
const authorize = require('../../utils/auth');

router.post('/', authorize, async (req, res) => {
  const body = req.body;

  try {
    const userPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(userPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', authorize, async (req, res) => {
  try {
    const [affRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', authorize, async (req, res) => {
  try {
    const [affRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
