const controller = {
    getCities: (req, res) => {
        res.json({
            cities:[
                {name: 'Buenos Aires'},
                {name: 'Paris'}
            ]
        });
    }
};

export default controller;