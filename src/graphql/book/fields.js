const resolvers = {
  Book: {
    name: ({ title }) => title,
  },
};

export default { resolvers };
