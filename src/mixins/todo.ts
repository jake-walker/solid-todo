export const todo = {
  data: () => ({
    tasks: [
      {
        name: 'Hello World!',
        done: false,
        created: new Date(),
      },
      {
        name: 'This is a very long task which might span over multiple lines.',
        done: true,
        created: new Date(),
      },
    ],
  }),
  watch: {
    tasks: {
      handler() {
        // eslint-disable-next-line
        console.log('TODOS UPDATED!');
      },
      deep: true,
    },
  },
}