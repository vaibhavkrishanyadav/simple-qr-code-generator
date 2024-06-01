const express = require('express');
const QRCode = require('qrcode');
const PORT = process.env.PORT;

const app = express();

app.get('/generateQR', async(req, res) => {
    try {
        const url = req.query.url || 'https://www.google.com';
        const qrimage = await QRCode.toDataURL(url);
        res.send(`<img src="${qrimage}" alt="QR Code"/>`);
        console.log('QR code generated successfully');
    } catch (err) {
        console.error('Error generating QR code:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})