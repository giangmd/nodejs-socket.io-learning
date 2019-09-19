'use strict';

exports.index = (req, res) => {
    const data = [
        {id: 1, title: 'Tempor cillum deserunt aliquip.', description: "In in eu in velit occaecat labore aute aliqua minim est ad fugiat nostrud non consequat est."},
        {id: 2, title: 'Aliqua nisi officia velit officia.', description: "Aliquip est laboris deserunt esse labore pariatur aliqua in nulla officia mollit ut nulla labore adipisicing culpa."},
        {id: 3, title: 'Lorem ipsum incididunt aliqua nisi elit.', description: "Deserunt amet dolore aliqua occaecat exercitation irure voluptate laboris consequat."},
    ]
    res.json({data: data})
}

exports.store = (req, res) => {
    // console.log(req.body);
    res.json(req.body)
}