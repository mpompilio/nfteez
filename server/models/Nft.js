const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const nftSchema = new Schema(
  {
    nftName: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    price: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true,
      unique: true
    },
    likes: {
      type: Number,
      required: true
    },
    nonLikes: {
      type: Number,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

nftSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Nft = model('Nft', nftSchema);

module.exports = Nft;
