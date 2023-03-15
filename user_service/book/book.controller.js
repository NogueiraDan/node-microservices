const books = (req, res) => {
  const books = [
    { id: 1, name: "Guerra e Paz" },
    { id: 2, name: "As Cronicas de Nárnia" },
    { id: 3, name: "A revolução dos Bichos" },
    { id: 4, name: "A Morte de Ivan Ilitch" },
  ];

  res.json(books);
};

module.exports = {
  books,
};
