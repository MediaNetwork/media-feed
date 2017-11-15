module.exports = mongoose => {
	const schema = mongoose.Schema({
		path: {
			type: String,
			required: true
		},
		origin: {
			type: String,
			required: true
		},
		storage: {
			type: String,
			required: true
		},
		alias: {
			type: Number,
			required: true,
			unique: true
		},
		width: {
			type: Number
		},
		height: {
			type: Number
		},
		preview: {
			type: String
		},
		hash: {
			type: String,
			index: true
		},
		tags: {
			type: Array
		}
	});

	return mongoose.model('Media', schema);
};
