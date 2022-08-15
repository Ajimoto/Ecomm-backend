const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
	// find all tags
	try {
		const tagData = await Tag.findAll();
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
	// be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
	// find a single tag by its `id`
	Tag.findAll({
		where: {
			id: req.params.id,
		},
	}).then((data) => {
		res.json(data);
	});
	// be sure to include its associated Product data
});

router.post('/', async (req, res) => {
	// create a new tag
	try {
		const tagData = await Tag.create(req.body);
		res.status(200).json(tagData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', (req, res) => {
	// update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
	// delete on tag by its `id` value
});

module.exports = router;
