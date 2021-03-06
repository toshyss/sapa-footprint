
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sapa').del()
    .then(function () {
      // Inserts seed entries
      return knex('sapa').insert([
        {
          id: 1,
          name: "UmihotaruPA",
          direction: "up",
          route: "Tokyo wan aqua-line expwy",
          address: "35° 27′ 52″ N, 139° 52′ 28″ E",
          service_name: "SEVEN",
          service_type: "CVS"
      },
      {
          id: 2,
          name: "IchiharaSA",
          direction: "up",
          route: "Tateyama expwy",
          address: "35° 27′ 34.79″ N, 140° 5′ 7.42″ E",
          service_name: "SEVEN",
          service_type: "ATM"
      },
      {
          id: 3,
          name: "HasudaSA",
          direction: "down",
          route: "Tohoku expwy",
          address: "36° 0′ 1.1″ N, 139° 40′ 2.6″ E",
          service_name: "Shouwa-Shell",
          service_type: "Gas Station"
      }
      ]);
    });
};
