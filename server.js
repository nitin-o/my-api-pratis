const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Server is running on LAN!');
});

// API route for users
app.get('/api/users', (req, res) => {
  const users = [
    {
      id: 1,
      email: 'john.doe@example.com',
      phone: '2234567890',
      username: 'john_doe',
      gender: 'male',
      age: 20
    },
    {
      id: 2,
      email: 'jane.smith@example.com',
      phone: '2234567891',
      username: 'jane_smith',
      gender: 'female',
      age: 31
    },
    {
      id: 3,
      email: 'mike.jordan@example.com',
      phone: '2234567892',
      username: 'mike_jordan',
      gender: 'male',
      age: 22
    },
    {
      id: 4,
      email: 'sara.connor@example.com',
      phone: '2234567893',
      username: 'sara_connor',
      gender: 'female',
      age: 31
    },
    {
      id: 5,
      email: 'david.beck@example.com',
      phone: '2234567894',
      username: 'david_beck',
      gender: 'male',
      age: 33
    },
    {
      id: 6,
      email: 'emily.brown@example.com',
      phone: '2234567895',
      username: 'emily_brown',
      gender: 'female',
      age: 35
    },
    {
      id: 7,
      email: 'chris.johnson@example.com',
      phone: '2234567896',
      username: 'chris_johnson',
      gender: 'male',
      age: 32
    },
    {
      id: 8,
      email: 'anna.white@example.com',
      phone: '2234567897',
      username: 'anna_white',
      gender: 'female',
      age: 45
    },
    {
      id: 9,
      email: 'robert.lee@example.com',
      phone: '2234567898',
      username: 'robert_lee',
      gender: 'male',
      age: 47
    },
    {
      id: 10,
      email: 'linda.davis@example.com',
      phone: '2234567899',
      username: 'linda_davis',
      gender: 'female',
      age: 46
    },
    {
      id: 11,
      email: 'james.moore@example.com',
      phone: '22345678100',
      username: 'james_moore',
      gender: 'male',
      age: 42
    },
    {
      id: 12,
      email: 'patricia.hall@example.com',
      phone: '22345678101',
      username: 'patricia_hall',
      gender: 'female',
      age: 38
    },
    {
      id: 13,
      email: 'william.jones@example.com',
      phone: '22345678102',
      username: 'william_jones',
      gender: 'male',
      age: 31
    },
    {
      id: 14,
      email: 'jennifer.martin@example.com',
      phone: '22345678103',
      username: 'jennifer_martin',
      gender: 'female',
      age: 41
    },
    {
      id: 15,
      email: 'charles.clark@example.com',
      phone: '22345678104',
      username: 'charles_clark',
      gender: 'male',
      age: 46
    },
    {
      id: 16,
      email: 'elizabeth.lewis@example.com',
      phone: '22345678105',
      username: 'elizabeth_lewis',
      gender: 'female',
      age: 48
    },
    {
      id: 17,
      email: 'daniel.roberts@example.com',
      phone: '22345678106',
      username: 'daniel_roberts',
      gender: 'male',
      age: 48
    },
    {
      id: 18,
      email: 'barbara.walker@example.com',
      phone: '22345678107',
      username: 'barbara_walker',
      gender: 'female',
      age: 41
    },
    {
      id: 19,
      email: 'matthew.turner@example.com',
      phone: '22345678108',
      username: 'matthew_turner',
      gender: 'male',
      age: 25
    },
    {
      id: 20,
      email: 'susan.wright@example.com',
      phone: '22345678109',
      username: 'susan_wright',
      gender: 'female',
      age: 27
    },
    {
      id: 21,
      email: 'anthony.hill@example.com',
      phone: '22345678110',
      username: 'anthony_hill',
      gender: 'male',
      age: 47
    },
    {
      id: 22,
      email: 'jessica.cooper@example.com',
      phone: '22345678111',
      username: 'jessica_cooper',
      gender: 'female',
      age: 46
    },
    {
      id: 23,
      email: 'kevin.king@example.com',
      phone: '22345678112',
      username: 'kevin_king',
      gender: 'male',
      age: 41
    },
    {
      id: 24,
      email: 'sophia.young@example.com',
      phone: '22345678113',
      username: 'sophia_young',
      gender: 'female',
      age: 49
    },
    {
      id: 25,
      email: 'thomas.green@example.com',
      phone: '22345678114',
      username: 'thomas_green',
      gender: 'male',
      age: 23
    },
    {
      id: 26,
      email: 'mary.ward@example.com',
      phone: '22345678115',
      username: 'mary_ward',
      gender: 'female',
      age: 33
    },
    {
      id: 27,
      email: 'mark.adams@example.com',
      phone: '22345678116',
      username: 'mark_adams',
      gender: 'male',
      age: 50
    },
    {
      id: 28,
      email: 'victoria.baker@example.com',
      phone: '22345678117',
      username: 'victoria_baker',
      gender: 'female',
      age: 41
    },
    {
      id: 29,
      email: 'alex.mitchell@example.com',
      phone: '22345678118',
      username: 'alex_mitchell',
      gender: 'male',
      age: 30
    },
    {
      id: 30,
      email: 'olivia.morris@example.com',
      phone: '22345678119',
      username: 'olivia_morris',
      gender: 'female',
      age: 27
    }
  ];
  res.json(users);
});

// currencyData.js


app.get('/api/currencyData', (req, res) => {

const currencyData = {
    base: "USD",
    date: "2024-12-18",
    rates: {
      AED: 3.67,
      AFN: 84.00,
      ALL: 101.56,
      AMD: 415.80,
      ANG: 1.79,
      AOA: 830.00,
      ARS: 350.00,
      AUD: 1.55,
      AWG: 1.79,
      AZN: 1.70,
      BDT: 110.50,
      BGN: 1.80,
      BHD: 0.38,
      BIF: 2835.00,
      BMD: 1.00,
      BRL: 4.85,
      CAD: 1.34,
      CHF: 0.89,
      CNY: 7.31,
      EUR: 0.91,
      GBP: 0.78,
      INR: 82.54,
      JPY: 146.65,
      NGN: 800.00,
      RUB: 100.00,
      USD: 1.00,
      ZAR: 18.45
    }
  };
  res.json(currencyData);
});







app.listen(port, '192.168.60.171', () => {
  console.log(`Server is running at http://192.168.60.171:${port}`);
});
