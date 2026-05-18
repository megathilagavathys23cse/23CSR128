const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());


// ====================================
// HOME ROUTE
// ====================================

app.get('/', (req, res) => {
    res.send('Vehicle Maintenance Scheduler API Running');
});


// ====================================
// FETCH DEPOTS API
// ====================================

app.get('/depots', async (req, res) => {

    try {

        const response = await axios.get(
            'https://4.224.186.213/evaluation-service/depots',
            {
                headers: {
                    Authorization: 'Bearer YOUR_TOKEN_HERE'
                }
            }
        );

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            message: 'Error fetching depots',
            error: error.message
        });
    }
});


// ====================================
// SERVER
// ====================================

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});