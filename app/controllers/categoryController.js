const Category = require("../models/category")

module.exports.list = (req, res) => {
	Category.find()
		.then(categories => {
			res.json(categories)
		})
		.catch(err => res.json(err))
}

module.exports.create = (req, res) => {
	const body = ({ name } = req.body)
	const category = new Category(body)
	category
		.save()
		.then(response => res.json(response))
		.catch(err => res.json(err))
}

module.exports.update = (req, res) => {
	const { name, _id } = req.body
	Category.findByIdAndUpdate({ _id }, { name })
		.then(category => 
			res.json(category)
		)
		.catch(err => res.json(err))
}

//destroy should not be there.