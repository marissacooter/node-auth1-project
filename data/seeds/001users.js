
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {username: test, password: 'abc123'},
        {username: test2, password: '123abc'},
        {username: test3, password: 'password123'}
      ]);
    });
};
