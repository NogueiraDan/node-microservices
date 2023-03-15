const initialService = (req, res)=>{
    res.send({message: "Microserviço de usuáro utilizando controllers"})
}

const users = (req, res)=>{
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Matt Daniells' },
        { id: 4, name: 'Joseph Wives' },
      ];
    
      res.json(users);
}


module.exports={
    initialService,
    users
}