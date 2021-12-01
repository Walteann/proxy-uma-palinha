const express = require('express');

const app = express();

const port = process.env.PORT || 3333;

const API_URL = 'https://itunes.apple.com';

const axios = require('axios');

const cors = require('cors');

app.use(cors());

app.get('/api/v1/musics', async (request, response) => {

    try {

        const params = request.query;

        const { data } = await axios(`${API_URL}/search`, { params });

        return response.status(200).json(data);
        
    } catch (error) {
        return response.status(error.status).json(error);
    }

});


app.listen(port, () => {

    console.log('Api está rodando');

});