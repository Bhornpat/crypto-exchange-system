// เพิ่ม route ทั้งหมด
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/wallets', require('./routes/walletRoutes'));
app.use('/api/transfer', require('./routes/transferRoutes'));
app.use('/api/exchange', require('./routes/transactionRoutes'));
app.use('/api/exchange-rates', require('./routes/exchangeRateRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

