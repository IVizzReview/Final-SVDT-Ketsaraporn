const app = require('express')();
const mockData = require("../mockdata.json")

app.get('/search-c-pdb', (req, res ) => {
    const tag = req.query.tags
    console.log(tag)
        let mock = mockData.data
        let data = mock.filter((item) => item.name === tag)[0]
        console.log(data)
    res.status(200).send({
        message: "OK",
        resultdata: data
    })
    
    
})

const port = process.env.PORT || 9004;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );