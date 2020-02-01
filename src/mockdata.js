const providers = [
  {
    "id": 1,
    "name": "Provider One",
    "username": "provider1",
    "streetaddress1": "12 Park Street",
    "streetaddress2": "",
    "city": "Boston",
    "state": "MA",
    "zipcode": "02108",
    "faxnumber": "",
    "phonenumber": "8572421314",
    "type": "Laywer",
    "coordinates": {
      "lat": -73.977797,
      "lng": 40.783826
    },
    "full_desc": "Full description about this place. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "short_desc": "Short description about this place. One.",
    "icon": "url link to icon",
    "hourly_rate": '$100',
    "free": true,
    "website": `http://google.com`
  },
  {
    "id": 2,
    "name": "Provider Two",
    "username": "provider2",
    "streetaddress1": "34 Hanover Ave",
    "streetaddress2": "",
    "city": "Winchester",
    "state": "MA",
    "zipcode": "02118",
    "faxnumber": "",
    "phonenumber": "8578621484",
    "type": "Psychiatrist",
    "coordinates": {
      "lat": -73.977797,
      "lng": 40.783826
    },
    "full_desc": "Full description about this place. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "short_desc": "Short description about this place. Two.",
    "icon": "url link to icon",
    "hourly_rate": '$200',
    "free": false,
    "website": `http://google.com`
  },
]

const user = [
  {
    "id": 1,
    "name": "User's Name",
    "username": "username to log in with",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "state": "",
    "zipcode": "",
    "phonenumber": "",
  },
]

export const states = [
  {
      "text": "AL - Alabama",
      "value": "AL - Alabama",
  },
  {
      "text": "AK - Alaska",
      "value": "AK - Alaska",
  },
  {
      "text": "AS - American Samoa",
      "value": "AS - American Samoa",
  },
  {
      "text": "AZ - Arizona",
      "value": "AZ - Arizona",
  },
  {
      "text": "AR - Arkansas",
      "value": "AR - Arkansas",
  },
  {
      "text": "CA - California",
      "value": "CA - California",
  },
  {
      "text": "CO - Colorado",
      "value": "CO - Colorado",
  },
  {
      "text": "CT - Connecticut",
      "value": "CT - Connecticut",
  },
  {
      "text": "DE - Delaware",
      "value": "DE - Delaware",
  },
  {
      "text": "DC - District Of Columbia",
      "value": "DC - District Of Columbia",
  },
  {
      "text": "FM - Federated States Of Micronesia",
      "value": "FM - Federated States Of Micronesia",
  },
  {
      "text": "FL - Florida",
      "value": "FL - Florida",
  },
  {
      "text": "GA - Georgia",
      "value": "GA - Georgia",
  },
  {
      "text": "GU - Guam",
      "value": "GU - Guam",
  },
  {
      "text": "HI - Hawaii",
      "value": "HI - Hawaii",
  },
  {
      "text": "ID - Idaho",
      "value": "ID - Idaho",
  },
  {
      "text": "IL - Illinois",
      "value": "IL - Illinois",
  },
  {
      "text": "IN - Indiana",
      "value": "IN - Indiana",
  },
  {
      "text": "IA - Iowa",
      "value": "IA - Iowa",
  },
  {
      "text": "KS - Kansas",
      "value": "KS - Kansas",
  },
  {
      "text": "KY - Kentucky",
      "value": "KY - Kentucky",
  },
  {
      "text": "LA - Louisiana",
      "value": "LA - Louisiana",
  },
  {
      "text": "ME - Maine",
      "value": "ME - Maine",
  },
  {
      "text": "MH - Marshall Islands",
      "value": "MH - Marshall Islands",
  },
  {
      "text": "MD - Maryland",
      "value": "MD - Maryland",
  },
  {
      "text": "MA - Massachusetts",
      "value": "MA - Massachusetts",
  },
  {
      "text": "MI - Michigan",
      "value": "MI - Michigan",
  },
  {
      "text": "MN - Minnesota",
      "value": "MN - Minnesota",
  },
  {
      "text": "MS - Mississippi",
      "value": "MS - Mississippi",
  },
  {
      "text": "MO - Missouri",
      "value": "MO - Missouri",
  },
  {
      "text": "MT - Montana",
      "value": "MT - Montana",
  },
  {
      "text": "NE - Nebraska",
      "value": "NE - Nebraska",
  },
  {
      "text": "NV - Nevada",
      "value": "NV - Nevada",
  },
  {
      "text": "NH - New Hampshire",
      "value": "NH - New Hampshire",
  },
  {
      "text": "NJ - New Jersey",
      "value": "NJ - New Jersey",
  },
  {
      "text": "NM - New Mexico",
      "value": "NM - New Mexico",
  },
  {
      "text": "NY - New York",
      "value": "NY - New York",
  },
  {
      "text": "NC - North Carolina",
      "value": "NC - North Carolina",
  },
  {
      "text": "ND - North Dakota",
      "value": "ND - North Dakota",
  },
  {
      "text": "MP - Northern Mariana Islands",
      "value": "MP - Northern Mariana Islands",
  },
  {
      "text": "OH - Ohio",
      "value": "OH - Ohio",
  },
  {
      "text": "OK - Oklahoma",
      "value": "OK - Oklahoma",
  },
  {
      "text": "OR - Oregon",
      "value": "OR - Oregon",
  },
  {
      "text": "PW - Palau",
      "value": "PW - Palau",
  },
  {
      "text": "PA - Pennsylvania",
      "value": "PA - Pennsylvania",
  },
  {
      "text": "PR - Puerto Rico",
      "value": "PR - Puerto Rico",
  },
  {
      "text": "RI - Rhode Island",
      "value": "RI - Rhode Island",
  },
  {
      "text": "SC - South Carolina",
      "value": "SC - South Carolina",
  },
  {
      "text": "SD - South Dakota",
      "value": "SD - South Dakota",
  },
  {
      "text": "TN - Tennessee",
      "value": "TN - Tennessee",
  },
  {
      "text": "TX - Texas",
      "value": "TX - Texas",
  },
  {
      "text": "UT - Utah",
      "value": "UT - Utah",
  },
  {
      "text": "VT - Vermont",
      "value": "VT - Vermont",
  },
  {
      "text": "VI - Virgin Islands",
      "value": "VI - Virgin Islands",
  },
  {
      "text": "VA - Virginia",
      "value": "VA - Virginia",
  },
  {
      "text": "WA - Washington",
      "value": "WA - Washington",
  },
  {
      "text": "WV - West Virginia",
      "value": "WV - West Virginia",
  },
  {
      "text": "WI - Wisconsin",
      "value": "WI - Wisconsin",
  },
  {
      "text": "WY - Wyoming",
      "value": "WY - Wyoming",
  }
]