const { User, Nft } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')


        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    nft: async (parent, { _id }) => {
      return Nft.findOne({ _id });
    },

    nfts: async () => {
      return Nft.find({}).sort({ likes: -1 });
    },
    users: async () => {
      return User.find()

    },

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addComment: async (parent, { nftId, commentBody }, context) => {
      if (context.user) {
        const updatedNft = await Nft.findOneAndUpdate(
          { _id: nftId },
          { $push: { comments: { commentBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedNft;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    addLike: async (parent, { nftId }, context) => {
      if (context.user) {
        const updateLike = await Nft.findOneAndUpdate(
          { _id: nftId },
          { $inc: { likes: 1 } }
        )
        return updateLike;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addNonLike: async (parent, { nftId }, context) => {
      if (context.user) {
        const updateLike = await Nft.findOneAndUpdate(
          { _id: nftId },
          { $inc: { nonLikes: 1 } }
        )
        return updateLike;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;