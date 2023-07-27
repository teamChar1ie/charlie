var cities = [
  {
      "name": "New York", 
      "lat": 40.7127837, 
      "lng": -74.0059413, 
      "state": "New York"
  }, 
  {
      "name": "Los Angeles", 
      "lat": 34.0522342, 
      "lng": -118.2436849, 
      "state": "California"
  }, 
  {
      "name": "Chicago", 
      "lat": 41.8781136, 
      "lng": -87.6297982, 
      "state": "Illinois"
  }, 
  {
      "name": "Houston", 
      
      "lat": 29.7604267, 
      "lng": -95.3698028, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Philadelphia", 
      
      "lat": 39.9525839, 
      "lng": -75.1652215, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Phoenix", 
      
      "lat": 33.4483771, 
      "lng": -112.0740373, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "San Antonio", 
      
      "lat": 29.4241219, 
      "lng": -98.49362819999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "San Diego", 
      
      "lat": 32.715738, 
      "lng": -117.1610838, 
      
      
      "state": "California"
  }, 
  {
      "name": "Dallas", 
      
      "lat": 32.7766642, 
      "lng": -96.79698789999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "San Jose", 
      
      "lat": 37.3382082, 
      "lng": -121.8863286, 
      
      
      "state": "California"
  }, 
  {
      "name": "Austin", 
      
      "lat": 30.267153, 
      "lng": -97.7430608, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Indianapolis", 
      
      "lat": 39.768403, 
      "lng": -86.158068, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Jacksonville", 
      
      "lat": 30.3321838, 
      "lng": -81.65565099999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "San Francisco", 
      
      "lat": 37.7749295, 
      "lng": -122.4194155, 
      
      
      "state": "California"
  }, 
  {
      "name": "Columbus", 
      
      "lat": 39.9611755, 
      "lng": -82.99879419999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Charlotte", 
      
      "lat": 35.2270869, 
      "lng": -80.8431267, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Fort Worth", 
      
      "lat": 32.7554883, 
      "lng": -97.3307658, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Detroit", 
      
      "lat": 42.331427, 
      "lng": -83.0457538, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "El Paso", 
      
      "lat": 31.7775757, 
      "lng": -106.4424559, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Memphis", 
      
      "lat": 35.1495343, 
      "lng": -90.0489801, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Seattle", 
      
      "lat": 47.6062095, 
      "lng": -122.3320708, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Denver", 
      
      "lat": 39.7392358, 
      "lng": -104.990251, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Washington", 
      
      "lat": 38.9071923, 
      "lng": -77.0368707, 
      
      
      "state": "District of Columbia"
  }, 
  {
      "name": "Boston", 
      
      "lat": 42.3600825, 
      "lng": -71.0588801, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Nashville-Davidson", 
      
      "lat": 36.1626638, 
      "lng": -86.7816016, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Baltimore", 
      
      "lat": 39.2903848, 
      "lng": -76.6121893, 
      
      
      "state": "Maryland"
  }, 
  {
      "name": "Oklahoma City", 
      
      "lat": 35.4675602, 
      "lng": -97.5164276, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Louisville/Jefferson County", 
      
      "lat": 38.2526647, 
      "lng": -85.7584557, 
      
      
      "state": "Kentucky"
  }, 
  {
      "name": "Portland", 
      
      "lat": 45.5230622, 
      "lng": -122.6764816, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Las Vegas", 
      
      "lat": 36.1699412, 
      "lng": -115.1398296, 
      
      
      "state": "Nevada"
  }, 
  {
      "name": "Milwaukee", 
      
      "lat": 43.0389025, 
      "lng": -87.9064736, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Albuquerque", 
      
      "lat": 35.0853336, 
      "lng": -106.6055534, 
      
      
      "state": "New Mexico"
  }, 
  {
      "name": "Tucson", 
      
      "lat": 32.2217429, 
      "lng": -110.926479, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Fresno", 
      
      "lat": 36.7468422, 
      "lng": -119.7725868, 
      
      
      "state": "California"
  }, 
  {
      "name": "Sacramento", 
      
      "lat": 38.5815719, 
      "lng": -121.4943996, 
      
      
      "state": "California"
  }, 
  {
      "name": "Long Beach", 
      
      "lat": 33.7700504, 
      "lng": -118.1937395, 
      
      
      "state": "California"
  }, 
  {
      "name": "Kansas City", 
      
      "lat": 39.0997265, 
      "lng": -94.5785667, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Mesa", 
      
      "lat": 33.4151843, 
      "lng": -111.8314724, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Virginia Beach", 
      
      "lat": 36.8529263, 
      "lng": -75.97798499999999, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Atlanta", 
      
      "lat": 33.7489954, 
      "lng": -84.3879824, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Colorado Springs", 
      
      "lat": 38.8338816, 
      "lng": -104.8213634, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Omaha", 
      
      "lat": 41.2523634, 
      "lng": -95.99798829999999, 
      
      
      "state": "Nebraska"
  }, 
  {
      "name": "Raleigh", 
      
      "lat": 35.7795897, 
      "lng": -78.6381787, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Miami", 
      
      "lat": 25.7616798, 
      "lng": -80.1917902, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Oakland", 
      
      "lat": 37.8043637, 
      "lng": -122.2711137, 
      
      
      "state": "California"
  }, 
  {
      "name": "Minneapolis", 
      
      "lat": 44.977753, 
      "lng": -93.2650108, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Tulsa", 
      
      "lat": 36.1539816, 
      "lng": -95.99277500000001, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Cleveland", 
      
      "lat": 41.49932, 
      "lng": -81.6943605, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Wichita", 
      
      "lat": 37.688889, 
      "lng": -97.336111, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Arlington", 
      
      "lat": 32.735687, 
      "lng": -97.10806559999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "New Orleans", 
      
      "lat": 29.95106579999999, 
      "lng": -90.0715323, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Bakersfield", 
      
      "lat": 35.3732921, 
      "lng": -119.0187125, 
      
      
      "state": "California"
  }, 
  {
      "name": "Tampa", 
      
      "lat": 27.950575, 
      "lng": -82.4571776, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Honolulu", 
      
      "lat": 21.3069444, 
      "lng": -157.8583333, 
      
      
      "state": "Hawaii"
  }, 
  {
      "name": "Aurora", 
      
      "lat": 39.7294319, 
      "lng": -104.8319195, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Anaheim", 
      
      "lat": 33.8352932, 
      "lng": -117.9145036, 
      
      
      "state": "California"
  }, 
  {
      "name": "Santa Ana", 
      
      "lat": 33.7455731, 
      "lng": -117.8678338, 
      
      
      "state": "California"
  }, 
  {
      "name": "St. Louis", 
      
      "lat": 38.6270025, 
      "lng": -90.19940419999999, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Riverside", 
      
      "lat": 33.9533487, 
      "lng": -117.3961564, 
      
      
      "state": "California"
  }, 
  {
      "name": "Corpus Christi", 
      
      "lat": 27.8005828, 
      "lng": -97.39638099999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Lexington-Fayette", 
      
      "lat": 38.0405837, 
      "lng": -84.5037164, 
      
      
      "state": "Kentucky"
  }, 
  {
      "name": "Pittsburgh", 
      
      "lat": 40.44062479999999, 
      "lng": -79.9958864, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Anchorage", 
      
      "lat": 61.2180556, 
      "lng": -149.9002778, 
      
      
      "state": "Alaska"
  }, 
  {
      "name": "Stockton", 
      
      "lat": 37.9577016, 
      "lng": -121.2907796, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cincinnati", 
      
      "lat": 39.1031182, 
      "lng": -84.5120196, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "St. Paul", 
      
      "lat": 44.9537029, 
      "lng": -93.0899578, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Toledo", 
      
      "lat": 41.6639383, 
      "lng": -83.55521200000001, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Greensboro", 
      
      "lat": 36.0726354, 
      "lng": -79.7919754, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Newark", 
      
      "lat": 40.735657, 
      "lng": -74.1723667, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Plano", 
      
      "lat": 33.0198431, 
      "lng": -96.6988856, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Henderson", 
      
      "lat": 36.0395247, 
      "lng": -114.9817213, 
      
      
      "state": "Nevada"
  }, 
  {
      "name": "Lincoln", 
      
      "lat": 40.8257625, 
      "lng": -96.6851982, 
      
      
      "state": "Nebraska"
  }, 
  {
      "name": "Buffalo", 
      
      "lat": 42.88644679999999, 
      "lng": -78.8783689, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Jersey City", 
      
      "lat": 40.72815749999999, 
      "lng": -74.0776417, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Chula Vista", 
      
      "lat": 32.6400541, 
      "lng": -117.0841955, 
      
      
      "state": "California"
  }, 
  {
      "name": "Fort Wayne", 
      
      "lat": 41.079273, 
      "lng": -85.1393513, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Orlando", 
      
      "lat": 28.5383355, 
      "lng": -81.3792365, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "St. Petersburg", 
      
      "lat": 27.773056, 
      "lng": -82.64, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Chandler", 
      
      "lat": 33.3061605, 
      "lng": -111.8412502, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Laredo", 
      
      "lat": 27.5305671, 
      "lng": -99.48032409999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Norfolk", 
      
      "lat": 36.8507689, 
      "lng": -76.28587259999999, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Durham", 
      
      "lat": 35.9940329, 
      "lng": -78.898619, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Madison", 
      
      "lat": 43.0730517, 
      "lng": -89.4012302, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Lubbock", 
      
      "lat": 33.5778631, 
      "lng": -101.8551665, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Irvine", 
      
      "lat": 33.6839473, 
      "lng": -117.7946942, 
      
      
      "state": "California"
  }, 
  {
      "name": "Winston-Salem", 
      
      "lat": 36.09985959999999, 
      "lng": -80.244216, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Glendale", 
      
      "lat": 33.5386523, 
      "lng": -112.1859866, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Garland", 
      
      "lat": 32.912624, 
      "lng": -96.63888329999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Hialeah", 
      
      "lat": 25.8575963, 
      "lng": -80.2781057, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Reno", 
      
      "lat": 39.5296329, 
      "lng": -119.8138027, 
      
      
      "state": "Nevada"
  }, 
  {
      "name": "Chesapeake", 
      
      "lat": 36.7682088, 
      "lng": -76.2874927, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Gilbert", 
      
      "lat": 33.3528264, 
      "lng": -111.789027, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Baton Rouge", 
      
      "lat": 30.4582829, 
      "lng": -91.1403196, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Irving", 
      
      "lat": 32.8140177, 
      "lng": -96.9488945, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Scottsdale", 
      
      "lat": 33.4941704, 
      "lng": -111.9260519, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "North Las Vegas", 
      
      "lat": 36.1988592, 
      "lng": -115.1175013, 
      
      
      "state": "Nevada"
  }, 
  {
      "name": "Fremont", 
      
      "lat": 37.5482697, 
      "lng": -121.9885719, 
      
      
      "state": "California"
  }, 
  {
      "name": "Boise City", 
      
      "lat": 43.6187102, 
      "lng": -116.2146068, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "Richmond", 
      
      "lat": 37.5407246, 
      "lng": -77.4360481, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "San Bernardino", 
      
      "lat": 34.1083449, 
      "lng": -117.2897652, 
      
      
      "state": "California"
  }, 
  {
      "name": "Birmingham", 
      
      "lat": 33.5206608, 
      "lng": -86.80248999999999, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Spokane", 
      
      "lat": 47.6587802, 
      "lng": -117.4260466, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Rochester", 
      
      "lat": 43.16103, 
      "lng": -77.6109219, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Des Moines", 
      
      "lat": 41.6005448, 
      "lng": -93.6091064, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Modesto", 
      
      "lat": 37.63909719999999, 
      "lng": -120.9968782, 
      
      
      "state": "California"
  }, 
  {
      "name": "Fayetteville", 
      
      "lat": 35.0526641, 
      "lng": -78.87835849999999, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Tacoma", 
      
      "lat": 47.2528768, 
      "lng": -122.4442906, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Oxnard", 
      
      "lat": 34.1975048, 
      "lng": -119.1770516, 
      
      
      "state": "California"
  }, 
  {
      "name": "Fontana", 
      
      "lat": 34.0922335, 
      "lng": -117.435048, 
      
      
      "state": "California"
  }, 
  {
      "name": "Columbus", 
      
      "lat": 32.4609764, 
      "lng": -84.9877094, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Montgomery", 
      
      "lat": 32.3668052, 
      "lng": -86.2999689, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Moreno Valley", 
      
      "lat": 33.9424658, 
      "lng": -117.2296717, 
      
      
      "state": "California"
  }, 
  {
      "name": "Shreveport", 
      
      "lat": 32.5251516, 
      "lng": -93.7501789, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Aurora", 
      
      "lat": 41.7605849, 
      "lng": -88.32007150000001, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Yonkers", 
      
      "lat": 40.9312099, 
      "lng": -73.89874689999999, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Akron", 
      
      "lat": 41.0814447, 
      "lng": -81.51900529999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Huntington Beach", 
      
      "lat": 33.660297, 
      "lng": -117.9992265, 
      
      
      "state": "California"
  }, 
  {
      "name": "Little Rock", 
      
      "lat": 34.7464809, 
      "lng": -92.28959479999999, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Augusta-Richmond County", 
      
      "lat": 33.4734978, 
      "lng": -82.0105148, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Amarillo", 
      
      "lat": 35.2219971, 
      "lng": -101.8312969, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Glendale", 
      
      "lat": 34.1425078, 
      "lng": -118.255075, 
      
      
      "state": "California"
  }, 
  {
      "name": "Mobile", 
      
      "lat": 30.6953657, 
      "lng": -88.0398912, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Grand Rapids", 
      
      "lat": 42.9633599, 
      "lng": -85.6680863, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Salt Lake City", 
      
      "lat": 40.7607793, 
      "lng": -111.8910474, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Tallahassee", 
      
      "lat": 30.4382559, 
      "lng": -84.28073289999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Huntsville", 
      
      "lat": 34.7303688, 
      "lng": -86.5861037, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Grand Prairie", 
      
      "lat": 32.7459645, 
      "lng": -96.99778459999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Knoxville", 
      
      "lat": 35.9606384, 
      "lng": -83.9207392, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Worcester", 
      
      "lat": 42.2625932, 
      "lng": -71.8022934, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Newport News", 
      
      "lat": 37.0870821, 
      "lng": -76.4730122, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Brownsville", 
      
      "lat": 25.9017472, 
      "lng": -97.4974838, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Overland Park", 
      
      "lat": 38.9822282, 
      "lng": -94.6707917, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Santa Clarita", 
      
      "lat": 34.3916641, 
      "lng": -118.542586, 
      
      
      "state": "California"
  }, 
  {
      "name": "Providence", 
      
      "lat": 41.8239891, 
      "lng": -71.4128343, 
      
      
      "state": "Rhode Island"
  }, 
  {
      "name": "Garden Grove", 
      
      "lat": 33.7739053, 
      "lng": -117.9414477, 
      
      
      "state": "California"
  }, 
  {
      "name": "Chattanooga", 
      
      "lat": 35.0456297, 
      "lng": -85.3096801, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Oceanside", 
      
      "lat": 33.1958696, 
      "lng": -117.3794834, 
      
      
      "state": "California"
  }, 
  {
      "name": "Jackson", 
      
      "lat": 32.2987573, 
      "lng": -90.1848103, 
      
      
      "state": "Mississippi"
  }, 
  {
      "name": "Fort Lauderdale", 
      
      "lat": 26.1224386, 
      "lng": -80.13731740000001, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Santa Rosa", 
      
      "lat": 38.440429, 
      "lng": -122.7140548, 
      
      
      "state": "California"
  }, 
  {
      "name": "Rancho Cucamonga", 
      
      "lat": 34.10639889999999, 
      "lng": -117.5931084, 
      
      
      "state": "California"
  }, 
  {
      "name": "Port St. Lucie", 
      
      "lat": 27.2730492, 
      "lng": -80.3582261, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Tempe", 
      
      "lat": 33.4255104, 
      "lng": -111.9400054, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Ontario", 
      
      "lat": 34.0633443, 
      "lng": -117.6508876, 
      
      
      "state": "California"
  }, 
  {
      "name": "Vancouver", 
      
      "lat": 45.6387281, 
      "lng": -122.6614861, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Cape Coral", 
      
      "lat": 26.5628537, 
      "lng": -81.9495331, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Sioux Falls", 
      
      "lat": 43.5445959, 
      "lng": -96.73110340000001, 
      
      
      "state": "South Dakota"
  }, 
  {
      "name": "Springfield", 
      
      "lat": 37.2089572, 
      "lng": -93.29229889999999, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Peoria", 
      
      "lat": 33.5805955, 
      "lng": -112.2373779, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Pembroke Pines", 
      
      "lat": 26.007765, 
      "lng": -80.2962555, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Elk Grove", 
      
      "lat": 38.4087993, 
      "lng": -121.3716178, 
      
      
      "state": "California"
  }, 
  {
      "name": "Salem", 
      
      "lat": 44.9428975, 
      "lng": -123.0350963, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Lancaster", 
      
      "lat": 34.6867846, 
      "lng": -118.1541632, 
      
      
      "state": "California"
  }, 
  {
      "name": "Corona", 
      
      "lat": 33.8752935, 
      "lng": -117.5664384, 
      
      
      "state": "California"
  }, 
  {
      "name": "Eugene", 
      
      "lat": 44.0520691, 
      "lng": -123.0867536, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Palmdale", 
      
      "lat": 34.5794343, 
      "lng": -118.1164613, 
      
      
      "state": "California"
  }, 
  {
      "name": "Salinas", 
      
      "lat": 36.6777372, 
      "lng": -121.6555013, 
      
      
      "state": "California"
  }, 
  {
      "name": "Springfield", 
      
      "lat": 42.1014831, 
      "lng": -72.589811, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Pasadena", 
      
      "lat": 29.6910625, 
      "lng": -95.2091006, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Fort Collins", 
      
      "lat": 40.5852602, 
      "lng": -105.084423, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Hayward", 
      
      "lat": 37.6688205, 
      "lng": -122.0807964, 
      
      
      "state": "California"
  }, 
  {
      "name": "Pomona", 
      
      "lat": 34.055103, 
      "lng": -117.7499909, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cary", 
      
      "lat": 35.79154, 
      "lng": -78.7811169, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Rockford", 
      
      "lat": 42.2711311, 
      "lng": -89.0939952, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Alexandria", 
      
      "lat": 38.8048355, 
      "lng": -77.0469214, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Escondido", 
      
      "lat": 33.1192068, 
      "lng": -117.086421, 
      
      
      "state": "California"
  }, 
  {
      "name": "McKinney", 
      
      "lat": 33.1972465, 
      "lng": -96.6397822, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Kansas City", 
      
      "lat": 39.114053, 
      "lng": -94.6274636, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Joliet", 
      
      "lat": 41.525031, 
      "lng": -88.0817251, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Sunnyvale", 
      
      "lat": 37.36883, 
      "lng": -122.0363496, 
      
      
      "state": "California"
  }, 
  {
      "name": "Torrance", 
      
      "lat": 33.8358492, 
      "lng": -118.3406288, 
      
      
      "state": "California"
  }, 
  {
      "name": "Bridgeport", 
      
      "lat": 41.1865478, 
      "lng": -73.19517669999999, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Lakewood", 
      
      "lat": 39.7047095, 
      "lng": -105.0813734, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Hollywood", 
      
      "lat": 26.0112014, 
      "lng": -80.1494901, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Paterson", 
      
      "lat": 40.9167654, 
      "lng": -74.17181099999999, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Naperville", 
      
      "lat": 41.7508391, 
      "lng": -88.1535352, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Syracuse", 
      
      "lat": 43.0481221, 
      "lng": -76.14742439999999, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Mesquite", 
      
      "lat": 32.76679550000001, 
      "lng": -96.5991593, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Dayton", 
      
      "lat": 39.7589478, 
      "lng": -84.1916069, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Savannah", 
      
      "lat": 32.0835407, 
      "lng": -81.09983419999999, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Clarksville", 
      
      "lat": 36.5297706, 
      "lng": -87.3594528, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Orange", 
      
      "lat": 33.7877944, 
      "lng": -117.8531119, 
      
      
      "state": "California"
  }, 
  {
      "name": "Pasadena", 
      
      "lat": 34.1477849, 
      "lng": -118.1445155, 
      
      
      "state": "California"
  }, 
  {
      "name": "Fullerton", 
      
      "lat": 33.8703596, 
      "lng": -117.9242966, 
      
      
      "state": "California"
  }, 
  {
      "name": "Killeen", 
      
      "lat": 31.1171194, 
      "lng": -97.72779589999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Frisco", 
      
      "lat": 33.1506744, 
      "lng": -96.82361159999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Hampton", 
      
      "lat": 37.0298687, 
      "lng": -76.34522179999999, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "McAllen", 
      
      "lat": 26.2034071, 
      "lng": -98.23001239999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Warren", 
      
      "lat": 42.5144566, 
      "lng": -83.01465259999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Bellevue", 
      
      "lat": 47.610377, 
      "lng": -122.2006786, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "West Valley City", 
      
      "lat": 40.6916132, 
      "lng": -112.0010501, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Columbia", 
      
      "lat": 34.0007104, 
      "lng": -81.0348144, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Olathe", 
      
      "lat": 38.8813958, 
      "lng": -94.81912849999999, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Sterling Heights", 
      
      "lat": 42.5803122, 
      "lng": -83.0302033, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "New Haven", 
      
      "lat": 41.308274, 
      "lng": -72.9278835, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Miramar", 
      
      "lat": 25.9860762, 
      "lng": -80.30356019999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Waco", 
      
      "lat": 31.549333, 
      "lng": -97.1466695, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Thousand Oaks", 
      
      "lat": 34.1705609, 
      "lng": -118.8375937, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cedar Rapids", 
      
      "lat": 41.9778795, 
      "lng": -91.6656232, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Charleston", 
      
      "lat": 32.7764749, 
      "lng": -79.93105120000001, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Visalia", 
      
      "lat": 36.3302284, 
      "lng": -119.2920585, 
      
      
      "state": "California"
  }, 
  {
      "name": "Topeka", 
      
      "lat": 39.0558235, 
      "lng": -95.68901849999999, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Elizabeth", 
      
      "lat": 40.6639916, 
      "lng": -74.2107006, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Gainesville", 
      
      "lat": 29.6516344, 
      "lng": -82.32482619999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Thornton", 
      
      "lat": 39.8680412, 
      "lng": -104.9719243, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Roseville", 
      
      "lat": 38.7521235, 
      "lng": -121.2880059, 
      
      
      "state": "California"
  }, 
  {
      "name": "Carrollton", 
      
      "lat": 32.9756415, 
      "lng": -96.8899636, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Coral Springs", 
      
      "lat": 26.271192, 
      "lng": -80.2706044, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Stamford", 
      
      "lat": 41.0534302, 
      "lng": -73.5387341, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Simi Valley", 
      
      "lat": 34.2694474, 
      "lng": -118.781482, 
      
      
      "state": "California"
  }, 
  {
      "name": "Concord", 
      
      "lat": 37.9779776, 
      "lng": -122.0310733, 
      
      
      "state": "California"
  }, 
  {
      "name": "Hartford", 
      
      "lat": 41.76371109999999, 
      "lng": -72.6850932, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Kent", 
      
      "lat": 47.3809335, 
      "lng": -122.2348431, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Lafayette", 
      
      "lat": 30.2240897, 
      "lng": -92.0198427, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Midland", 
      
      "lat": 31.9973456, 
      "lng": -102.0779146, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Surprise", 
      
      "lat": 33.6292337, 
      "lng": -112.3679279, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Denton", 
      
      "lat": 33.2148412, 
      "lng": -97.13306829999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Victorville", 
      
      "lat": 34.5362184, 
      "lng": -117.2927641, 
      
      
      "state": "California"
  }, 
  {
      "name": "Evansville", 
      
      "lat": 37.9715592, 
      "lng": -87.5710898, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Santa Clara", 
      
      "lat": 37.3541079, 
      "lng": -121.9552356, 
      
      
      "state": "California"
  }, 
  {
      "name": "Abilene", 
      
      "lat": 32.4487364, 
      "lng": -99.73314390000002, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Athens-Clarke County", 
      
      "lat": 33.9519347, 
      "lng": -83.357567, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Vallejo", 
      
      "lat": 38.1040864, 
      "lng": -122.2566367, 
      
      
      "state": "California"
  }, 
  {
      "name": "Allentown", 
      
      "lat": 40.6084305, 
      "lng": -75.4901833, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Norman", 
      
      "lat": 35.2225668, 
      "lng": -97.4394777, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Beaumont", 
      
      "lat": 30.080174, 
      "lng": -94.1265562, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Independence", 
      
      "lat": 39.0911161, 
      "lng": -94.41550679999999, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Murfreesboro", 
      
      "lat": 35.8456213, 
      "lng": -86.39027, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Ann Arbor", 
      
      "lat": 42.2808256, 
      "lng": -83.7430378, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Springfield", 
      
      "lat": 39.78172130000001, 
      "lng": -89.6501481, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Berkeley", 
      
      "lat": 37.8715926, 
      "lng": -122.272747, 
      
      
      "state": "California"
  }, 
  {
      "name": "Peoria", 
      
      "lat": 40.6936488, 
      "lng": -89.5889864, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Provo", 
      
      "lat": 40.2338438, 
      "lng": -111.6585337, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "El Monte", 
      
      "lat": 34.0686206, 
      "lng": -118.0275667, 
      
      
      "state": "California"
  }, 
  {
      "name": "Columbia", 
      
      "lat": 38.9517053, 
      "lng": -92.3340724, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Lansing", 
      
      "lat": 42.732535, 
      "lng": -84.5555347, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Fargo", 
      
      "lat": 46.8771863, 
      "lng": -96.7898034, 
      
      
      "state": "North Dakota"
  }, 
  {
      "name": "Downey", 
      
      "lat": 33.9401088, 
      "lng": -118.1331593, 
      
      
      "state": "California"
  }, 
  {
      "name": "Costa Mesa", 
      
      "lat": 33.6411316, 
      "lng": -117.9186689, 
      
      
      "state": "California"
  }, 
  {
      "name": "Wilmington", 
      
      "lat": 34.2257255, 
      "lng": -77.9447102, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Arvada", 
      
      "lat": 39.8027644, 
      "lng": -105.0874842, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Inglewood", 
      
      "lat": 33.9616801, 
      "lng": -118.3531311, 
      
      
      "state": "California"
  }, 
  {
      "name": "Miami Gardens", 
      
      "lat": 25.9420377, 
      "lng": -80.2456045, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Carlsbad", 
      
      "lat": 33.1580933, 
      "lng": -117.3505939, 
      
      
      "state": "California"
  }, 
  {
      "name": "Westminster", 
      
      "lat": 39.8366528, 
      "lng": -105.0372046, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Rochester", 
      
      "lat": 44.0121221, 
      "lng": -92.4801989, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Odessa", 
      
      "lat": 31.8456816, 
      "lng": -102.3676431, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Manchester", 
      
      "lat": 42.9956397, 
      "lng": -71.4547891, 
      
      
      "state": "New Hampshire"
  }, 
  {
      "name": "Elgin", 
      
      "lat": 42.0354084, 
      "lng": -88.2825668, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "West Jordan", 
      
      "lat": 40.6096698, 
      "lng": -111.9391031, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Round Rock", 
      
      "lat": 30.5082551, 
      "lng": -97.678896, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Clearwater", 
      
      "lat": 27.9658533, 
      "lng": -82.8001026, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Waterbury", 
      
      "lat": 41.5581525, 
      "lng": -73.0514965, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Gresham", 
      
      "lat": 45.5001357, 
      "lng": -122.4302013, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Fairfield", 
      
      "lat": 38.24935809999999, 
      "lng": -122.0399663, 
      
      
      "state": "California"
  }, 
  {
      "name": "Billings", 
      
      "lat": 45.7832856, 
      "lng": -108.5006904, 
      
      
      "state": "Montana"
  }, 
  {
      "name": "Lowell", 
      
      "lat": 42.6334247, 
      "lng": -71.31617179999999, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "San Buenaventura (Ventura)", 
      
      "lat": 34.274646, 
      "lng": -119.2290316, 
      
      
      "state": "California"
  }, 
  {
      "name": "Pueblo", 
      
      "lat": 38.2544472, 
      "lng": -104.6091409, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "High Point", 
      
      "lat": 35.9556923, 
      "lng": -80.0053176, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "West Covina", 
      
      "lat": 34.0686208, 
      "lng": -117.9389526, 
      
      
      "state": "California"
  }, 
  {
      "name": "Richmond", 
      
      "lat": 37.9357576, 
      "lng": -122.3477486, 
      
      
      "state": "California"
  }, 
  {
      "name": "Murrieta", 
      
      "lat": 33.5539143, 
      "lng": -117.2139232, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cambridge", 
      
      "lat": 42.3736158, 
      "lng": -71.10973349999999, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Antioch", 
      
      "lat": 38.0049214, 
      "lng": -121.805789, 
      
      
      "state": "California"
  }, 
  {
      "name": "Temecula", 
      
      "lat": 33.4936391, 
      "lng": -117.1483648, 
      
      
      "state": "California"
  }, 
  {
      "name": "Norwalk", 
      
      "lat": 33.9022367, 
      "lng": -118.081733, 
      
      
      "state": "California"
  }, 
  {
      "name": "Centennial", 
      
      "lat": 39.5807452, 
      "lng": -104.8771726, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Everett", 
      
      "lat": 47.9789848, 
      "lng": -122.2020794, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Palm Bay", 
      
      "lat": 28.0344621, 
      "lng": -80.5886646, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Wichita Falls", 
      
      "lat": 33.9137085, 
      "lng": -98.4933873, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Green Bay", 
      
      "lat": 44.51915899999999, 
      "lng": -88.019826, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Daly City", 
      
      "lat": 37.6879241, 
      "lng": -122.4702079, 
      
      
      "state": "California"
  }, 
  {
      "name": "Burbank", 
      
      "lat": 34.1808392, 
      "lng": -118.3089661, 
      
      
      "state": "California"
  }, 
  {
      "name": "Richardson", 
      
      "lat": 32.9483335, 
      "lng": -96.7298519, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Pompano Beach", 
      
      "lat": 26.2378597, 
      "lng": -80.1247667, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "North Charleston", 
      
      "lat": 32.8546197, 
      "lng": -79.9748103, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Broken Arrow", 
      
      "lat": 36.060949, 
      "lng": -95.7974526, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Boulder", 
      
      "lat": 40.0149856, 
      "lng": -105.2705456, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "West Palm Beach", 
      
      "lat": 26.7153424, 
      "lng": -80.0533746, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Santa Maria", 
      
      "lat": 34.9530337, 
      "lng": -120.4357191, 
      
      
      "state": "California"
  }, 
  {
      "name": "El Cajon", 
      
      "lat": 32.7947731, 
      "lng": -116.9625269, 
      
      
      "state": "California"
  }, 
  {
      "name": "Davenport", 
      
      "lat": 41.5236437, 
      "lng": -90.5776367, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Rialto", 
      
      "lat": 34.1064001, 
      "lng": -117.3703235, 
      
      
      "state": "California"
  }, 
  {
      "name": "Las Cruces", 
      
      "lat": 32.3199396, 
      "lng": -106.7636538, 
      
      
      "state": "New Mexico"
  }, 
  {
      "name": "San Mateo", 
      
      "lat": 37.5629917, 
      "lng": -122.3255254, 
      
      
      "state": "California"
  }, 
  {
      "name": "Lewisville", 
      
      "lat": 33.046233, 
      "lng": -96.994174, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "South Bend", 
      
      "lat": 41.6763545, 
      "lng": -86.25198979999999, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Lakeland", 
      
      "lat": 28.0394654, 
      "lng": -81.9498042, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Erie", 
      
      "lat": 42.12922409999999, 
      "lng": -80.085059, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Tyler", 
      
      "lat": 32.3512601, 
      "lng": -95.30106239999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Pearland", 
      
      "lat": 29.5635666, 
      "lng": -95.2860474, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "College Station", 
      
      "lat": 30.627977, 
      "lng": -96.3344068, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Kenosha", 
      
      "lat": 42.5847425, 
      "lng": -87.82118539999999, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Sandy Springs", 
      
      "lat": 33.9304352, 
      "lng": -84.3733147, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Clovis", 
      
      "lat": 36.8252277, 
      "lng": -119.7029194, 
      
      
      "state": "California"
  }, 
  {
      "name": "Flint", 
      
      "lat": 43.0125274, 
      "lng": -83.6874562, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Roanoke", 
      
      "lat": 37.2709704, 
      "lng": -79.9414266, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Albany", 
      
      "lat": 42.6525793, 
      "lng": -73.7562317, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Jurupa Valley", 
      
      "lat": 33.9971974, 
      "lng": -117.4854802, 
      
      
      "state": "California"
  }, 
  {
      "name": "Compton", 
      
      "lat": 33.8958492, 
      "lng": -118.2200712, 
      
      
      "state": "California"
  }, 
  {
      "name": "San Angelo", 
      
      "lat": 31.4637723, 
      "lng": -100.4370375, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Hillsboro", 
      
      "lat": 45.5228939, 
      "lng": -122.989827, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Lawton", 
      
      "lat": 34.6035669, 
      "lng": -98.39592909999999, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Renton", 
      
      "lat": 47.48287759999999, 
      "lng": -122.2170661, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Vista", 
      
      "lat": 33.2000368, 
      "lng": -117.2425355, 
      
      
      "state": "California"
  }, 
  {
      "name": "Davie", 
      
      "lat": 26.0764783, 
      "lng": -80.25211569999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Greeley", 
      
      "lat": 40.4233142, 
      "lng": -104.7091322, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Mission Viejo", 
      
      "lat": 33.6000232, 
      "lng": -117.6719953, 
      
      
      "state": "California"
  }, 
  {
      "name": "Portsmouth", 
      
      "lat": 36.8354258, 
      "lng": -76.2982742, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Dearborn", 
      
      "lat": 42.3222599, 
      "lng": -83.17631449999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "South Gate", 
      
      "lat": 33.954737, 
      "lng": -118.2120161, 
      
      
      "state": "California"
  }, 
  {
      "name": "Tuscaloosa", 
      
      "lat": 33.2098407, 
      "lng": -87.56917349999999, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Livonia", 
      
      "lat": 42.36837, 
      "lng": -83.35270969999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "New Bedford", 
      
      "lat": 41.6362152, 
      "lng": -70.93420499999999, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Vacaville", 
      
      "lat": 38.3565773, 
      "lng": -121.9877444, 
      
      
      "state": "California"
  }, 
  {
      "name": "Brockton", 
      
      "lat": 42.0834335, 
      "lng": -71.0183787, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Roswell", 
      
      "lat": 34.0232431, 
      "lng": -84.3615555, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Beaverton", 
      
      "lat": 45.48706199999999, 
      "lng": -122.8037102, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Quincy", 
      
      "lat": 42.2528772, 
      "lng": -71.0022705, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Sparks", 
      
      "lat": 39.5349112, 
      "lng": -119.7526886, 
      
      
      "state": "Nevada"
  }, 
  {
      "name": "Yakima", 
      
      "lat": 46.6020711, 
      "lng": -120.5058987, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Lee's Summit", 
      
      "lat": 38.9108408, 
      "lng": -94.3821724, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Federal Way", 
      
      "lat": 47.3223221, 
      "lng": -122.3126222, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Carson", 
      
      "lat": 33.8316745, 
      "lng": -118.281693, 
      
      
      "state": "California"
  }, 
  {
      "name": "Santa Monica", 
      
      "lat": 34.0194543, 
      "lng": -118.4911912, 
      
      
      "state": "California"
  }, 
  {
      "name": "Hesperia", 
      
      "lat": 34.4263886, 
      "lng": -117.3008784, 
      
      
      "state": "California"
  }, 
  {
      "name": "Allen", 
      
      "lat": 33.1031744, 
      "lng": -96.67055030000002, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Rio Rancho", 
      
      "lat": 35.2327544, 
      "lng": -106.6630437, 
      
      
      "state": "New Mexico"
  }, 
  {
      "name": "Yuma", 
      
      "lat": 32.6926512, 
      "lng": -114.6276916, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Westminster", 
      
      "lat": 33.7513419, 
      "lng": -117.9939921, 
      
      
      "state": "California"
  }, 
  {
      "name": "Orem", 
      
      "lat": 40.2968979, 
      "lng": -111.6946475, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Lynn", 
      
      "lat": 42.46676300000001, 
      "lng": -70.9494938, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Redding", 
      
      "lat": 40.5865396, 
      "lng": -122.3916754, 
      
      
      "state": "California"
  }, 
  {
      "name": "Spokane Valley", 
      
      "lat": 47.6732281, 
      "lng": -117.2393748, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Miami Beach", 
      
      "lat": 25.790654, 
      "lng": -80.1300455, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "League City", 
      
      "lat": 29.5074538, 
      "lng": -95.0949303, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Lawrence", 
      
      "lat": 38.9716689, 
      "lng": -95.2352501, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Santa Barbara", 
      
      "lat": 34.4208305, 
      "lng": -119.6981901, 
      
      
      "state": "California"
  }, 
  {
      "name": "Plantation", 
      
      "lat": 26.1275862, 
      "lng": -80.23310359999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Sandy", 
      
      "lat": 40.5649781, 
      "lng": -111.8389726, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Sunrise", 
      
      "lat": 26.1669711, 
      "lng": -80.25659499999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Macon", 
      
      "lat": 32.8406946, 
      "lng": -83.6324022, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Longmont", 
      
      "lat": 40.1672068, 
      "lng": -105.1019275, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Boca Raton", 
      
      "lat": 26.3683064, 
      "lng": -80.1289321, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "San Marcos", 
      
      "lat": 33.1433723, 
      "lng": -117.1661449, 
      
      
      "state": "California"
  }, 
  {
      "name": "Greenville", 
      
      "lat": 35.612661, 
      "lng": -77.3663538, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Waukegan", 
      
      "lat": 42.3636331, 
      "lng": -87.84479379999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Fall River", 
      
      "lat": 41.7014912, 
      "lng": -71.1550451, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Chico", 
      
      "lat": 39.7284944, 
      "lng": -121.8374777, 
      
      
      "state": "California"
  }, 
  {
      "name": "Newton", 
      
      "lat": 42.3370413, 
      "lng": -71.20922139999999, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "San Leandro", 
      
      "lat": 37.7249296, 
      "lng": -122.1560768, 
      
      
      "state": "California"
  }, 
  {
      "name": "Reading", 
      
      "lat": 40.3356483, 
      "lng": -75.9268747, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Norwalk", 
      
      "lat": 41.11774399999999, 
      "lng": -73.4081575, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Fort Smith", 
      
      "lat": 35.3859242, 
      "lng": -94.39854749999999, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Newport Beach", 
      
      "lat": 33.6189101, 
      "lng": -117.9289469, 
      
      
      "state": "California"
  }, 
  {
      "name": "Asheville", 
      
      "lat": 35.5950581, 
      "lng": -82.5514869, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Nashua", 
      
      "lat": 42.7653662, 
      "lng": -71.46756599999999, 
      
      
      "state": "New Hampshire"
  }, 
  {
      "name": "Edmond", 
      
      "lat": 35.6528323, 
      "lng": -97.47809540000002, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Whittier", 
      
      "lat": 33.9791793, 
      "lng": -118.032844, 
      
      
      "state": "California"
  }, 
  {
      "name": "Nampa", 
      
      "lat": 43.5407172, 
      "lng": -116.5634624, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "Bloomington", 
      
      "lat": 44.840798, 
      "lng": -93.2982799, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Deltona", 
      
      "lat": 28.9005446, 
      "lng": -81.26367379999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Hawthorne", 
      
      "lat": 33.9164032, 
      "lng": -118.3525748, 
      
      
      "state": "California"
  }, 
  {
      "name": "Duluth", 
      
      "lat": 46.78667189999999, 
      "lng": -92.1004852, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Carmel", 
      
      "lat": 39.978371, 
      "lng": -86.1180435, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Suffolk", 
      
      "lat": 36.7282054, 
      "lng": -76.5835621, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Clifton", 
      
      "lat": 40.8584328, 
      "lng": -74.16375529999999, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Citrus Heights", 
      
      "lat": 38.7071247, 
      "lng": -121.2810611, 
      
      
      "state": "California"
  }, 
  {
      "name": "Livermore", 
      
      "lat": 37.6818745, 
      "lng": -121.7680088, 
      
      
      "state": "California"
  }, 
  {
      "name": "Tracy", 
      
      "lat": 37.7396513, 
      "lng": -121.4252227, 
      
      
      "state": "California"
  }, 
  {
      "name": "Alhambra", 
      
      "lat": 34.095287, 
      "lng": -118.1270146, 
      
      
      "state": "California"
  }, 
  {
      "name": "Kirkland", 
      
      "lat": 47.6814875, 
      "lng": -122.2087353, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Trenton", 
      
      "lat": 40.2170534, 
      "lng": -74.7429384, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Ogden", 
      
      "lat": 41.223, 
      "lng": -111.9738304, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Hoover", 
      
      "lat": 33.4053867, 
      "lng": -86.8113781, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Cicero", 
      
      "lat": 41.8455877, 
      "lng": -87.7539448, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Fishers", 
      
      "lat": 39.9567548, 
      "lng": -86.01335, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Sugar Land", 
      
      "lat": 29.6196787, 
      "lng": -95.6349463, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Danbury", 
      
      "lat": 41.394817, 
      "lng": -73.4540111, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Meridian", 
      
      "lat": 43.6121087, 
      "lng": -116.3915131, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "Indio", 
      
      "lat": 33.7205771, 
      "lng": -116.2155619, 
      
      
      "state": "California"
  }, 
  {
      "name": "Concord", 
      
      "lat": 35.4087517, 
      "lng": -80.579511, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Menifee", 
      
      "lat": 33.6971468, 
      "lng": -117.185294, 
      
      
      "state": "California"
  }, 
  {
      "name": "Champaign", 
      
      "lat": 40.1164204, 
      "lng": -88.2433829, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Buena Park", 
      
      "lat": 33.8675143, 
      "lng": -117.9981181, 
      
      
      "state": "California"
  }, 
  {
      "name": "Troy", 
      
      "lat": 42.6064095, 
      "lng": -83.1497751, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "O'Fallon", 
      
      "lat": 38.8106075, 
      "lng": -90.69984769999999, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Johns Creek", 
      
      "lat": 34.0289259, 
      "lng": -84.198579, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Bellingham", 
      
      "lat": 48.74908, 
      "lng": -122.4781473, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Westland", 
      
      "lat": 42.32420399999999, 
      "lng": -83.400211, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Bloomington", 
      
      "lat": 39.165325, 
      "lng": -86.52638569999999, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Sioux City", 
      
      "lat": 42.4999942, 
      "lng": -96.40030689999999, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Warwick", 
      
      "lat": 41.7001009, 
      "lng": -71.4161671, 
      
      
      "state": "Rhode Island"
  }, 
  {
      "name": "Hemet", 
      
      "lat": 33.7475203, 
      "lng": -116.9719684, 
      
      
      "state": "California"
  }, 
  {
      "name": "Longview", 
      
      "lat": 32.5007037, 
      "lng": -94.74048909999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Farmington Hills", 
      
      "lat": 42.4989936, 
      "lng": -83.3677168, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Bend", 
      
      "lat": 44.0581728, 
      "lng": -121.3153096, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Lakewood", 
      
      "lat": 33.8536269, 
      "lng": -118.1339563, 
      
      
      "state": "California"
  }, 
  {
      "name": "Merced", 
      
      "lat": 37.3021632, 
      "lng": -120.4829677, 
      
      
      "state": "California"
  }, 
  {
      "name": "Mission", 
      
      "lat": 26.2159066, 
      "lng": -98.32529319999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Chino", 
      
      "lat": 34.0122346, 
      "lng": -117.688944, 
      
      
      "state": "California"
  }, 
  {
      "name": "Redwood City", 
      
      "lat": 37.48521520000001, 
      "lng": -122.2363548, 
      
      
      "state": "California"
  }, 
  {
      "name": "Edinburg", 
      
      "lat": 26.3017374, 
      "lng": -98.1633432, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Cranston", 
      
      "lat": 41.7798226, 
      "lng": -71.4372796, 
      
      
      "state": "Rhode Island"
  }, 
  {
      "name": "Parma", 
      
      "lat": 41.4047742, 
      "lng": -81.7229086, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "New Rochelle", 
      
      "lat": 40.9114882, 
      "lng": -73.7823549, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Lake Forest", 
      
      "lat": 33.6469661, 
      "lng": -117.689218, 
      
      
      "state": "California"
  }, 
  {
      "name": "Napa", 
      
      "lat": 38.2975381, 
      "lng": -122.286865, 
      
      
      "state": "California"
  }, 
  {
      "name": "Hammond", 
      
      "lat": 41.5833688, 
      "lng": -87.5000412, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Fayetteville", 
      
      "lat": 36.0625795, 
      "lng": -94.1574263, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Bloomington", 
      
      "lat": 40.4842027, 
      "lng": -88.99368729999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Avondale", 
      
      "lat": 33.4355977, 
      "lng": -112.3496021, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Somerville", 
      
      "lat": 42.3875968, 
      "lng": -71.0994968, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Palm Coast", 
      
      "lat": 29.5844524, 
      "lng": -81.20786989999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Bryan", 
      
      "lat": 30.6743643, 
      "lng": -96.3699632, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Gary", 
      
      "lat": 41.5933696, 
      "lng": -87.3464271, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Largo", 
      
      "lat": 27.9094665, 
      "lng": -82.7873244, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Brooklyn Park", 
      
      "lat": 45.0941315, 
      "lng": -93.3563405, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Tustin", 
      
      "lat": 33.7458511, 
      "lng": -117.826166, 
      
      
      "state": "California"
  }, 
  {
      "name": "Racine", 
      
      "lat": 42.7261309, 
      "lng": -87.78285230000002, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Deerfield Beach", 
      
      "lat": 26.3184123, 
      "lng": -80.09976569999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Lynchburg", 
      
      "lat": 37.4137536, 
      "lng": -79.14224639999999, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Mountain View", 
      
      "lat": 37.3860517, 
      "lng": -122.0838511, 
      
      
      "state": "California"
  }, 
  {
      "name": "Medford", 
      
      "lat": 42.3265152, 
      "lng": -122.8755949, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Lawrence", 
      
      "lat": 42.7070354, 
      "lng": -71.1631137, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Bellflower", 
      
      "lat": 33.8816818, 
      "lng": -118.1170117, 
      
      
      "state": "California"
  }, 
  {
      "name": "Melbourne", 
      
      "lat": 28.0836269, 
      "lng": -80.60810889999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "St. Joseph", 
      
      "lat": 39.7674578, 
      "lng": -94.84668099999999, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Camden", 
      
      "lat": 39.9259463, 
      "lng": -75.1196199, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "St. George", 
      
      "lat": 37.0965278, 
      "lng": -113.5684164, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Kennewick", 
      
      "lat": 46.2112458, 
      "lng": -119.1372338, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Baldwin Park", 
      
      "lat": 34.0852868, 
      "lng": -117.9608978, 
      
      
      "state": "California"
  }, 
  {
      "name": "Chino Hills", 
      
      "lat": 33.9898188, 
      "lng": -117.7325848, 
      
      
      "state": "California"
  }, 
  {
      "name": "Alameda", 
      
      "lat": 37.7652065, 
      "lng": -122.2416355, 
      
      
      "state": "California"
  }, 
  {
      "name": "Albany", 
      
      "lat": 31.5785074, 
      "lng": -84.15574099999999, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Arlington Heights", 
      
      "lat": 42.0883603, 
      "lng": -87.98062650000001, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Scranton", 
      
      "lat": 41.408969, 
      "lng": -75.66241219999999, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Evanston", 
      
      "lat": 42.0450722, 
      "lng": -87.68769689999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Kalamazoo", 
      
      "lat": 42.2917069, 
      "lng": -85.5872286, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Baytown", 
      
      "lat": 29.7355047, 
      "lng": -94.97742740000001, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Upland", 
      
      "lat": 34.09751, 
      "lng": -117.6483876, 
      
      
      "state": "California"
  }, 
  {
      "name": "Springdale", 
      
      "lat": 36.18674420000001, 
      "lng": -94.1288141, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Bethlehem", 
      
      "lat": 40.6259316, 
      "lng": -75.37045789999999, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Schaumburg", 
      
      "lat": 42.0333607, 
      "lng": -88.0834059, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Mount Pleasant", 
      
      "lat": 32.8323225, 
      "lng": -79.82842579999999, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Auburn", 
      
      "lat": 47.30732279999999, 
      "lng": -122.2284532, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Decatur", 
      
      "lat": 39.8403147, 
      "lng": -88.9548001, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "San Ramon", 
      
      "lat": 37.7799273, 
      "lng": -121.9780153, 
      
      
      "state": "California"
  }, 
  {
      "name": "Pleasanton", 
      
      "lat": 37.6624312, 
      "lng": -121.8746789, 
      
      
      "state": "California"
  }, 
  {
      "name": "Wyoming", 
      
      "lat": 42.9133602, 
      "lng": -85.7053085, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Lake Charles", 
      
      "lat": 30.2265949, 
      "lng": -93.2173758, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Plymouth", 
      
      "lat": 45.0105194, 
      "lng": -93.4555093, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Bolingbrook", 
      
      "lat": 41.69864159999999, 
      "lng": -88.0683955, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Pharr", 
      
      "lat": 26.1947962, 
      "lng": -98.1836216, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Appleton", 
      
      "lat": 44.2619309, 
      "lng": -88.41538469999999, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Gastonia", 
      
      "lat": 35.262082, 
      "lng": -81.18730049999999, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Folsom", 
      
      "lat": 38.6779591, 
      "lng": -121.1760583, 
      
      
      "state": "California"
  }, 
  {
      "name": "Southfield", 
      
      "lat": 42.4733688, 
      "lng": -83.2218731, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Rochester Hills", 
      
      "lat": 42.65836609999999, 
      "lng": -83.1499322, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "New Britain", 
      
      "lat": 41.6612104, 
      "lng": -72.7795419, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Goodyear", 
      
      "lat": 33.4353394, 
      "lng": -112.3576567, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Canton", 
      
      "lat": 40.79894729999999, 
      "lng": -81.378447, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Warner Robins", 
      
      "lat": 32.6130007, 
      "lng": -83.624201, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Union City", 
      
      "lat": 37.5933918, 
      "lng": -122.0438298, 
      
      
      "state": "California"
  }, 
  {
      "name": "Perris", 
      
      "lat": 33.7825194, 
      "lng": -117.2286478, 
      
      
      "state": "California"
  }, 
  {
      "name": "Manteca", 
      
      "lat": 37.7974273, 
      "lng": -121.2160526, 
      
      
      "state": "California"
  }, 
  {
      "name": "Iowa City", 
      
      "lat": 41.6611277, 
      "lng": -91.5301683, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Jonesboro", 
      
      "lat": 35.84229670000001, 
      "lng": -90.704279, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Wilmington", 
      
      "lat": 39.7390721, 
      "lng": -75.5397878, 
      
      
      "state": "Delaware"
  }, 
  {
      "name": "Lynwood", 
      
      "lat": 33.930293, 
      "lng": -118.2114603, 
      
      
      "state": "California"
  }, 
  {
      "name": "Loveland", 
      
      "lat": 40.3977612, 
      "lng": -105.0749801, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Pawtucket", 
      
      "lat": 41.878711, 
      "lng": -71.38255579999999, 
      
      
      "state": "Rhode Island"
  }, 
  {
      "name": "Boynton Beach", 
      
      "lat": 26.5317866, 
      "lng": -80.0905465, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Waukesha", 
      
      "lat": 43.0116784, 
      "lng": -88.2314813, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Gulfport", 
      
      "lat": 30.3674198, 
      "lng": -89.0928155, 
      
      
      "state": "Mississippi"
  }, 
  {
      "name": "Apple Valley", 
      
      "lat": 34.5008311, 
      "lng": -117.1858759, 
      
      
      "state": "California"
  }, 
  {
      "name": "Passaic", 
      
      "lat": 40.8567662, 
      "lng": -74.1284764, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Rapid City", 
      
      "lat": 44.0805434, 
      "lng": -103.2310149, 
      
      
      "state": "South Dakota"
  }, 
  {
      "name": "Layton", 
      
      "lat": 41.0602216, 
      "lng": -111.9710529, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Lafayette", 
      
      "lat": 40.4167022, 
      "lng": -86.87528689999999, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Turlock", 
      
      "lat": 37.4946568, 
      "lng": -120.8465941, 
      
      
      "state": "California"
  }, 
  {
      "name": "Muncie", 
      
      "lat": 40.1933767, 
      "lng": -85.3863599, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Temple", 
      
      "lat": 31.0982344, 
      "lng": -97.342782, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Missouri City", 
      
      "lat": 29.6185669, 
      "lng": -95.5377215, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Redlands", 
      
      "lat": 34.0555693, 
      "lng": -117.1825381, 
      
      
      "state": "California"
  }, 
  {
      "name": "Santa Fe", 
      
      "lat": 35.6869752, 
      "lng": -105.937799, 
      
      
      "state": "New Mexico"
  }, 
  {
      "name": "Lauderhill", 
      
      "lat": 26.1403635, 
      "lng": -80.2133808, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Milpitas", 
      
      "lat": 37.4323341, 
      "lng": -121.8995741, 
      
      
      "state": "California"
  }, 
  {
      "name": "Palatine", 
      
      "lat": 42.1103041, 
      "lng": -88.03424000000001, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Missoula", 
      
      "lat": 46.87871759999999, 
      "lng": -113.996586, 
      
      
      "state": "Montana"
  }, 
  {
      "name": "Rock Hill", 
      
      "lat": 34.9248667, 
      "lng": -81.02507840000001, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Jacksonville", 
      
      "lat": 34.7540524, 
      "lng": -77.4302414, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Franklin", 
      
      "lat": 35.9250637, 
      "lng": -86.8688899, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Flagstaff", 
      
      "lat": 35.1982836, 
      "lng": -111.651302, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Flower Mound", 
      
      "lat": 33.0145673, 
      "lng": -97.0969552, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Weston", 
      
      "lat": 26.1003654, 
      "lng": -80.3997748, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Waterloo", 
      
      "lat": 42.492786, 
      "lng": -92.34257749999999, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Union City", 
      
      "lat": 40.6975898, 
      "lng": -74.26316349999999, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Mount Vernon", 
      
      "lat": 40.9125992, 
      "lng": -73.8370786, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Fort Myers", 
      
      "lat": 26.640628, 
      "lng": -81.8723084, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Dothan", 
      
      "lat": 31.2232313, 
      "lng": -85.3904888, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Rancho Cordova", 
      
      "lat": 38.5890723, 
      "lng": -121.302728, 
      
      
      "state": "California"
  }, 
  {
      "name": "Redondo Beach", 
      
      "lat": 33.8491816, 
      "lng": -118.3884078, 
      
      
      "state": "California"
  }, 
  {
      "name": "Jackson", 
      
      "lat": 35.6145169, 
      "lng": -88.81394689999999, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Pasco", 
      
      "lat": 46.2395793, 
      "lng": -119.1005657, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "St. Charles", 
      
      "lat": 38.7881062, 
      "lng": -90.4974359, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Eau Claire", 
      
      "lat": 44.811349, 
      "lng": -91.4984941, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "North Richland Hills", 
      
      "lat": 32.8342952, 
      "lng": -97.2289029, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Bismarck", 
      
      "lat": 46.8083268, 
      "lng": -100.7837392, 
      
      
      "state": "North Dakota"
  }, 
  {
      "name": "Yorba Linda", 
      
      "lat": 33.8886259, 
      "lng": -117.8131125, 
      
      
      "state": "California"
  }, 
  {
      "name": "Kenner", 
      
      "lat": 29.9940924, 
      "lng": -90.2417434, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Walnut Creek", 
      
      "lat": 37.9100783, 
      "lng": -122.0651819, 
      
      
      "state": "California"
  }, 
  {
      "name": "Frederick", 
      
      "lat": 39.41426879999999, 
      "lng": -77.4105409, 
      
      
      "state": "Maryland"
  }, 
  {
      "name": "Oshkosh", 
      
      "lat": 44.0247062, 
      "lng": -88.5426136, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Pittsburg", 
      
      "lat": 38.0279762, 
      "lng": -121.8846806, 
      
      
      "state": "California"
  }, 
  {
      "name": "Palo Alto", 
      
      "lat": 37.4418834, 
      "lng": -122.1430195, 
      
      
      "state": "California"
  }, 
  {
      "name": "Bossier City", 
      
      "lat": 32.5159852, 
      "lng": -93.7321228, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Portland", 
      
      "lat": 43.66147100000001, 
      "lng": -70.2553259, 
      
      
      "state": "Maine"
  }, 
  {
      "name": "St. Cloud", 
      
      "lat": 45.5579451, 
      "lng": -94.16324039999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Davis", 
      
      "lat": 38.5449065, 
      "lng": -121.7405167, 
      
      
      "state": "California"
  }, 
  {
      "name": "South San Francisco", 
      
      "lat": 37.654656, 
      "lng": -122.4077498, 
      
      
      "state": "California"
  }, 
  {
      "name": "Camarillo", 
      
      "lat": 34.2163937, 
      "lng": -119.0376023, 
      
      
      "state": "California"
  }, 
  {
      "name": "North Little Rock", 
      
      "lat": 34.769536, 
      "lng": -92.2670941, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Schenectady", 
      
      "lat": 42.8142432, 
      "lng": -73.9395687, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Gaithersburg", 
      
      "lat": 39.1434406, 
      "lng": -77.2013705, 
      
      
      "state": "Maryland"
  }, 
  {
      "name": "Harlingen", 
      
      "lat": 26.1906306, 
      "lng": -97.69610259999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Woodbury", 
      
      "lat": 44.9238552, 
      "lng": -92.9593797, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Eagan", 
      
      "lat": 44.8041322, 
      "lng": -93.1668858, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Yuba City", 
      
      "lat": 39.1404477, 
      "lng": -121.6169108, 
      
      
      "state": "California"
  }, 
  {
      "name": "Maple Grove", 
      
      "lat": 45.0724642, 
      "lng": -93.4557877, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Youngstown", 
      
      "lat": 41.0997803, 
      "lng": -80.6495194, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Skokie", 
      
      "lat": 42.0324025, 
      "lng": -87.7416246, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Kissimmee", 
      
      "lat": 28.2919557, 
      "lng": -81.40757099999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Johnson City", 
      
      "lat": 36.3134397, 
      "lng": -82.3534727, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Victoria", 
      
      "lat": 28.8052674, 
      "lng": -97.0035982, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "San Clemente", 
      
      "lat": 33.4269728, 
      "lng": -117.6119925, 
      
      
      "state": "California"
  }, 
  {
      "name": "Bayonne", 
      
      "lat": 40.6687141, 
      "lng": -74.1143091, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Laguna Niguel", 
      
      "lat": 33.5225261, 
      "lng": -117.7075526, 
      
      
      "state": "California"
  }, 
  {
      "name": "East Orange", 
      
      "lat": 40.767323, 
      "lng": -74.2048677, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Shawnee", 
      
      "lat": 39.02284849999999, 
      "lng": -94.7151865, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Homestead", 
      
      "lat": 25.4687224, 
      "lng": -80.4775569, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Rockville", 
      
      "lat": 39.0839973, 
      "lng": -77.1527578, 
      
      
      "state": "Maryland"
  }, 
  {
      "name": "Delray Beach", 
      
      "lat": 26.4614625, 
      "lng": -80.0728201, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Janesville", 
      
      "lat": 42.6827885, 
      "lng": -89.0187222, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Conway", 
      
      "lat": 35.0886963, 
      "lng": -92.4421011, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Pico Rivera", 
      
      "lat": 33.9830688, 
      "lng": -118.096735, 
      
      
      "state": "California"
  }, 
  {
      "name": "Lorain", 
      
      "lat": 41.452819, 
      "lng": -82.1823746, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Montebello", 
      
      "lat": 34.0165053, 
      "lng": -118.1137535, 
      
      
      "state": "California"
  }, 
  {
      "name": "Lodi", 
      
      "lat": 38.1341477, 
      "lng": -121.2722194, 
      
      
      "state": "California"
  }, 
  {
      "name": "New Braunfels", 
      
      "lat": 29.7030024, 
      "lng": -98.1244531, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Marysville", 
      
      "lat": 48.0517637, 
      "lng": -122.1770818, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Tamarac", 
      
      "lat": 26.2128609, 
      "lng": -80.2497707, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Madera", 
      
      "lat": 36.9613356, 
      "lng": -120.0607176, 
      
      
      "state": "California"
  }, 
  {
      "name": "Conroe", 
      
      "lat": 30.3118769, 
      "lng": -95.45605119999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Santa Cruz", 
      
      "lat": 36.9741171, 
      "lng": -122.0307963, 
      
      
      "state": "California"
  }, 
  {
      "name": "Eden Prairie", 
      
      "lat": 44.8546856, 
      "lng": -93.47078599999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Cheyenne", 
      
      "lat": 41.1399814, 
      "lng": -104.8202462, 
      
      
      "state": "Wyoming"
  }, 
  {
      "name": "Daytona Beach", 
      
      "lat": 29.2108147, 
      "lng": -81.0228331, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Alpharetta", 
      
      "lat": 34.0753762, 
      "lng": -84.2940899, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Hamilton", 
      
      "lat": 39.3995008, 
      "lng": -84.5613355, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Waltham", 
      
      "lat": 42.3764852, 
      "lng": -71.2356113, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Coon Rapids", 
      
      "lat": 45.1732394, 
      "lng": -93.30300629999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Haverhill", 
      
      "lat": 42.7762015, 
      "lng": -71.0772796, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Council Bluffs", 
      
      "lat": 41.2619444, 
      "lng": -95.8608333, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Taylor", 
      
      "lat": 42.240872, 
      "lng": -83.2696509, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Utica", 
      
      "lat": 43.100903, 
      "lng": -75.232664, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Ames", 
      
      "lat": 42.034722, 
      "lng": -93.61999999999999, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "La Habra", 
      
      "lat": 33.9319578, 
      "lng": -117.9461734, 
      
      
      "state": "California"
  }, 
  {
      "name": "Encinitas", 
      
      "lat": 33.0369867, 
      "lng": -117.2919818, 
      
      
      "state": "California"
  }, 
  {
      "name": "Bowling Green", 
      
      "lat": 36.9685219, 
      "lng": -86.4808043, 
      
      
      "state": "Kentucky"
  }, 
  {
      "name": "Burnsville", 
      
      "lat": 44.7677424, 
      "lng": -93.27772259999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Greenville", 
      
      "lat": 34.85261759999999, 
      "lng": -82.3940104, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "West Des Moines", 
      
      "lat": 41.5772115, 
      "lng": -93.711332, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Cedar Park", 
      
      "lat": 30.505198, 
      "lng": -97.8202888, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Tulare", 
      
      "lat": 36.2077288, 
      "lng": -119.3473379, 
      
      
      "state": "California"
  }, 
  {
      "name": "Monterey Park", 
      
      "lat": 34.0625106, 
      "lng": -118.1228476, 
      
      
      "state": "California"
  }, 
  {
      "name": "Vineland", 
      
      "lat": 39.4863773, 
      "lng": -75.02596369999999, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Terre Haute", 
      
      "lat": 39.4667034, 
      "lng": -87.41390919999999, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "North Miami", 
      
      "lat": 25.8900949, 
      "lng": -80.1867138, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Mansfield", 
      
      "lat": 32.5631924, 
      "lng": -97.1416768, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "West Allis", 
      
      "lat": 43.0166806, 
      "lng": -88.0070315, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Bristol", 
      
      "lat": 41.67176480000001, 
      "lng": -72.9492703, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Taylorsville", 
      
      "lat": 40.66772479999999, 
      "lng": -111.9388258, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Malden", 
      
      "lat": 42.4250964, 
      "lng": -71.066163, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Meriden", 
      
      "lat": 41.5381535, 
      "lng": -72.80704349999999, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Blaine", 
      
      "lat": 45.1607987, 
      "lng": -93.23494889999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Wellington", 
      
      "lat": 26.6617635, 
      "lng": -80.2683571, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Cupertino", 
      
      "lat": 37.3229978, 
      "lng": -122.0321823, 
      
      
      "state": "California"
  }, 
  {
      "name": "Springfield", 
      
      "lat": 44.0462362, 
      "lng": -123.0220289, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Rogers", 
      
      "lat": 36.3320196, 
      "lng": -94.1185366, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "St. Clair Shores", 
      
      "lat": 42.4974085, 
      "lng": -82.89636039999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Gardena", 
      
      "lat": 33.8883487, 
      "lng": -118.3089624, 
      
      
      "state": "California"
  }, 
  {
      "name": "Pontiac", 
      
      "lat": 42.6389216, 
      "lng": -83.29104679999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "National City", 
      
      "lat": 32.6781085, 
      "lng": -117.0991967, 
      
      
      "state": "California"
  }, 
  {
      "name": "Grand Junction", 
      
      "lat": 39.0638705, 
      "lng": -108.5506486, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Rocklin", 
      
      "lat": 38.7907339, 
      "lng": -121.2357828, 
      
      
      "state": "California"
  }, 
  {
      "name": "Chapel Hill", 
      
      "lat": 35.9131996, 
      "lng": -79.0558445, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Casper", 
      
      "lat": 42.866632, 
      "lng": -106.313081, 
      
      
      "state": "Wyoming"
  }, 
  {
      "name": "Broomfield", 
      
      "lat": 39.9205411, 
      "lng": -105.0866504, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Petaluma", 
      
      "lat": 38.232417, 
      "lng": -122.6366524, 
      
      
      "state": "California"
  }, 
  {
      "name": "South Jordan", 
      
      "lat": 40.5621704, 
      "lng": -111.929658, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Springfield", 
      
      "lat": 39.9242266, 
      "lng": -83.8088171, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Great Falls", 
      
      "lat": 47.4941836, 
      "lng": -111.2833449, 
      
      
      "state": "Montana"
  }, 
  {
      "name": "Lancaster", 
      
      "lat": 40.0378755, 
      "lng": -76.3055144, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "North Port", 
      
      "lat": 27.044224, 
      "lng": -82.2359254, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Lakewood", 
      
      "lat": 47.1717649, 
      "lng": -122.518458, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Marietta", 
      
      "lat": 33.95260200000001, 
      "lng": -84.5499327, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "San Rafael", 
      
      "lat": 37.9735346, 
      "lng": -122.5310874, 
      
      
      "state": "California"
  }, 
  {
      "name": "Royal Oak", 
      
      "lat": 42.4894801, 
      "lng": -83.1446485, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Des Plaines", 
      
      "lat": 42.0333623, 
      "lng": -87.88339909999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Huntington Park", 
      
      "lat": 33.9816812, 
      "lng": -118.2250725, 
      
      
      "state": "California"
  }, 
  {
      "name": "La Mesa", 
      
      "lat": 32.7678287, 
      "lng": -117.0230839, 
      
      
      "state": "California"
  }, 
  {
      "name": "Orland Park", 
      
      "lat": 41.6303103, 
      "lng": -87.85394250000002, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Auburn", 
      
      "lat": 32.6098566, 
      "lng": -85.48078249999999, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Lakeville", 
      
      "lat": 44.6496868, 
      "lng": -93.24271999999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Owensboro", 
      
      "lat": 37.7719074, 
      "lng": -87.1111676, 
      
      
      "state": "Kentucky"
  }, 
  {
      "name": "Moore", 
      
      "lat": 35.3395079, 
      "lng": -97.48670279999999, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Jupiter", 
      
      "lat": 26.9342246, 
      "lng": -80.0942087, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Idaho Falls", 
      
      "lat": 43.49165139999999, 
      "lng": -112.0339645, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "Dubuque", 
      
      "lat": 42.5005583, 
      "lng": -90.66457179999999, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Bartlett", 
      
      "lat": 35.2045328, 
      "lng": -89.8739753, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Rowlett", 
      
      "lat": 32.9029017, 
      "lng": -96.56388, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Novi", 
      
      "lat": 42.48059, 
      "lng": -83.4754913, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "White Plains", 
      
      "lat": 41.03398620000001, 
      "lng": -73.7629097, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Arcadia", 
      
      "lat": 34.1397292, 
      "lng": -118.0353449, 
      
      
      "state": "California"
  }, 
  {
      "name": "Redmond", 
      
      "lat": 47.6739881, 
      "lng": -122.121512, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Lake Elsinore", 
      
      "lat": 33.6680772, 
      "lng": -117.3272615, 
      
      
      "state": "California"
  }, 
  {
      "name": "Ocala", 
      
      "lat": 29.1871986, 
      "lng": -82.14009229999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Tinley Park", 
      
      "lat": 41.5731442, 
      "lng": -87.7932939, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Port Orange", 
      
      "lat": 29.1383165, 
      "lng": -80.9956105, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Medford", 
      
      "lat": 42.4184296, 
      "lng": -71.1061639, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Oak Lawn", 
      
      "lat": 41.719978, 
      "lng": -87.7479528, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Rocky Mount", 
      
      "lat": 35.9382103, 
      "lng": -77.7905339, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Kokomo", 
      
      "lat": 40.486427, 
      "lng": -86.13360329999999, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Coconut Creek", 
      
      "lat": 26.2517482, 
      "lng": -80.17893509999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Bowie", 
      
      "lat": 39.0067768, 
      "lng": -76.77913649999999, 
      
      
      "state": "Maryland"
  }, 
  {
      "name": "Berwyn", 
      
      "lat": 41.85058739999999, 
      "lng": -87.7936685, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Midwest City", 
      
      "lat": 35.4495065, 
      "lng": -97.3967019, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Fountain Valley", 
      
      "lat": 33.7091847, 
      "lng": -117.9536697, 
      
      
      "state": "California"
  }, 
  {
      "name": "Buckeye", 
      
      "lat": 33.3703197, 
      "lng": -112.5837766, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Dearborn Heights", 
      
      "lat": 42.3369816, 
      "lng": -83.27326269999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Woodland", 
      
      "lat": 38.67851570000001, 
      "lng": -121.7732971, 
      
      
      "state": "California"
  }, 
  {
      "name": "Noblesville", 
      
      "lat": 40.0455917, 
      "lng": -86.0085955, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Valdosta", 
      
      "lat": 30.8327022, 
      "lng": -83.2784851, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Diamond Bar", 
      
      "lat": 34.0286226, 
      "lng": -117.8103367, 
      
      
      "state": "California"
  }, 
  {
      "name": "Manhattan", 
      
      "lat": 39.18360819999999, 
      "lng": -96.57166939999999, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Santee", 
      
      "lat": 32.8383828, 
      "lng": -116.9739167, 
      
      
      "state": "California"
  }, 
  {
      "name": "Taunton", 
      
      "lat": 41.900101, 
      "lng": -71.0897674, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Sanford", 
      
      "lat": 28.8028612, 
      "lng": -81.269453, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Kettering", 
      
      "lat": 39.68950359999999, 
      "lng": -84.1688274, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "New Brunswick", 
      
      "lat": 40.4862157, 
      "lng": -74.4518188, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Decatur", 
      
      "lat": 34.6059253, 
      "lng": -86.9833417, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Chicopee", 
      
      "lat": 42.1487043, 
      "lng": -72.6078672, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Anderson", 
      
      "lat": 40.1053196, 
      "lng": -85.6802541, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Margate", 
      
      "lat": 26.2445263, 
      "lng": -80.206436, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Weymouth Town", 
      
      "lat": 42.2180724, 
      "lng": -70.94103559999999, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Hempstead", 
      
      "lat": 40.7062128, 
      "lng": -73.6187397, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Corvallis", 
      
      "lat": 44.5645659, 
      "lng": -123.2620435, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Eastvale", 
      
      "lat": 33.952463, 
      "lng": -117.5848025, 
      
      
      "state": "California"
  }, 
  {
      "name": "Porterville", 
      
      "lat": 36.06523, 
      "lng": -119.0167679, 
      
      
      "state": "California"
  }, 
  {
      "name": "West Haven", 
      
      "lat": 41.2705484, 
      "lng": -72.9469711, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Brentwood", 
      
      "lat": 37.931868, 
      "lng": -121.6957863, 
      
      
      "state": "California"
  }, 
  {
      "name": "Paramount", 
      
      "lat": 33.8894598, 
      "lng": -118.1597911, 
      
      
      "state": "California"
  }, 
  {
      "name": "Grand Forks", 
      
      "lat": 47.9252568, 
      "lng": -97.0328547, 
      
      
      "state": "North Dakota"
  }, 
  {
      "name": "Georgetown", 
      
      "lat": 30.6332618, 
      "lng": -97.6779842, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "St. Peters", 
      
      "lat": 38.7874699, 
      "lng": -90.6298922, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Shoreline", 
      
      "lat": 47.7556531, 
      "lng": -122.3415178, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Mount Prospect", 
      
      "lat": 42.0664167, 
      "lng": -87.9372908, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Hanford", 
      
      "lat": 36.3274502, 
      "lng": -119.6456844, 
      
      
      "state": "California"
  }, 
  {
      "name": "Normal", 
      
      "lat": 40.5142026, 
      "lng": -88.9906312, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Rosemead", 
      
      "lat": 34.0805651, 
      "lng": -118.072846, 
      
      
      "state": "California"
  }, 
  {
      "name": "Lehi", 
      
      "lat": 40.3916172, 
      "lng": -111.8507662, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Pocatello", 
      
      "lat": 42.8713032, 
      "lng": -112.4455344, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "Highland", 
      
      "lat": 34.1283442, 
      "lng": -117.2086513, 
      
      
      "state": "California"
  }, 
  {
      "name": "Novato", 
      
      "lat": 38.1074198, 
      "lng": -122.5697032, 
      
      
      "state": "California"
  }, 
  {
      "name": "Port Arthur", 
      
      "lat": 29.8849504, 
      "lng": -93.93994699999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Carson City", 
      
      "lat": 39.1637984, 
      "lng": -119.7674034, 
      
      
      "state": "Nevada"
  }, 
  {
      "name": "San Marcos", 
      
      "lat": 29.8832749, 
      "lng": -97.9413941, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Hendersonville", 
      
      "lat": 36.3047735, 
      "lng": -86.6199957, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Elyria", 
      
      "lat": 41.3683798, 
      "lng": -82.10764859999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Revere", 
      
      "lat": 42.4084302, 
      "lng": -71.0119948, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Pflugerville", 
      
      "lat": 30.4393696, 
      "lng": -97.62000429999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Greenwood", 
      
      "lat": 39.6136578, 
      "lng": -86.10665259999999, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Bellevue", 
      
      "lat": 41.1543623, 
      "lng": -95.9145568, 
      
      
      "state": "Nebraska"
  }, 
  {
      "name": "Wheaton", 
      
      "lat": 41.8661403, 
      "lng": -88.1070127, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Smyrna", 
      
      "lat": 33.8839926, 
      "lng": -84.51437609999999, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Sarasota", 
      
      "lat": 27.3364347, 
      "lng": -82.53065269999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Blue Springs", 
      
      "lat": 39.0169509, 
      "lng": -94.2816148, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Colton", 
      
      "lat": 34.0739016, 
      "lng": -117.3136547, 
      
      
      "state": "California"
  }, 
  {
      "name": "Euless", 
      
      "lat": 32.8370727, 
      "lng": -97.08195409999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Castle Rock", 
      
      "lat": 39.3722121, 
      "lng": -104.8560902, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Cathedral City", 
      
      "lat": 33.7805388, 
      "lng": -116.4668036, 
      
      
      "state": "California"
  }, 
  {
      "name": "Kingsport", 
      
      "lat": 36.548434, 
      "lng": -82.5618186, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Lake Havasu City", 
      
      "lat": 34.483901, 
      "lng": -114.3224548, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Pensacola", 
      
      "lat": 30.42130899999999, 
      "lng": -87.2169149, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Hoboken", 
      
      "lat": 40.7439905, 
      "lng": -74.0323626, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Yucaipa", 
      
      "lat": 34.033625, 
      "lng": -117.0430865, 
      
      
      "state": "California"
  }, 
  {
      "name": "Watsonville", 
      
      "lat": 36.910231, 
      "lng": -121.7568946, 
      
      
      "state": "California"
  }, 
  {
      "name": "Richland", 
      
      "lat": 46.2856907, 
      "lng": -119.2844621, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Delano", 
      
      "lat": 35.7688425, 
      "lng": -119.2470536, 
      
      
      "state": "California"
  }, 
  {
      "name": "Hoffman Estates", 
      
      "lat": 42.0629915, 
      "lng": -88.12271989999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Florissant", 
      
      "lat": 38.789217, 
      "lng": -90.322614, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Placentia", 
      
      "lat": 33.8722371, 
      "lng": -117.8703363, 
      
      
      "state": "California"
  }, 
  {
      "name": "West New York", 
      
      "lat": 40.7878788, 
      "lng": -74.0143064, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Dublin", 
      
      "lat": 37.7021521, 
      "lng": -121.9357918, 
      
      
      "state": "California"
  }, 
  {
      "name": "Oak Park", 
      
      "lat": 41.8850317, 
      "lng": -87.7845025, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Peabody", 
      
      "lat": 42.5278731, 
      "lng": -70.9286609, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Perth Amboy", 
      
      "lat": 40.5067723, 
      "lng": -74.2654234, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Battle Creek", 
      
      "lat": 42.3211522, 
      "lng": -85.17971419999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Bradenton", 
      
      "lat": 27.4989278, 
      "lng": -82.5748194, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Gilroy", 
      
      "lat": 37.0057816, 
      "lng": -121.5682751, 
      
      
      "state": "California"
  }, 
  {
      "name": "Milford", 
      
      "lat": 41.2306979, 
      "lng": -73.064036, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Albany", 
      
      "lat": 44.6365107, 
      "lng": -123.1059282, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Ankeny", 
      
      "lat": 41.7317884, 
      "lng": -93.6001278, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "La Crosse", 
      
      "lat": 43.8013556, 
      "lng": -91.23958069999999, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Burlington", 
      
      "lat": 36.0956918, 
      "lng": -79.43779909999999, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "DeSoto", 
      
      "lat": 32.5896998, 
      "lng": -96.8570738, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Harrisonburg", 
      
      "lat": 38.4495688, 
      "lng": -78.8689155, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Minnetonka", 
      
      "lat": 44.9211836, 
      "lng": -93.4687489, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Elkhart", 
      
      "lat": 41.6819935, 
      "lng": -85.9766671, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Lakewood", 
      
      "lat": 41.4819932, 
      "lng": -81.7981908, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Glendora", 
      
      "lat": 34.1361187, 
      "lng": -117.865339, 
      
      
      "state": "California"
  }, 
  {
      "name": "Southaven", 
      
      "lat": 34.9889818, 
      "lng": -90.0125913, 
      
      
      "state": "Mississippi"
  }, 
  {
      "name": "Charleston", 
      
      "lat": 38.3498195, 
      "lng": -81.6326234, 
      
      
      "state": "West Virginia"
  }, 
  {
      "name": "Joplin", 
      
      "lat": 37.08422710000001, 
      "lng": -94.51328099999999, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Enid", 
      
      "lat": 36.3955891, 
      "lng": -97.8783911, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Palm Beach Gardens", 
      
      "lat": 26.8233946, 
      "lng": -80.13865469999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Brookhaven", 
      
      "lat": 33.8651033, 
      "lng": -84.3365917, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Plainfield", 
      
      "lat": 40.6337136, 
      "lng": -74.4073736, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Grand Island", 
      
      "lat": 40.9263957, 
      "lng": -98.3420118, 
      
      
      "state": "Nebraska"
  }, 
  {
      "name": "Palm Desert", 
      
      "lat": 33.7222445, 
      "lng": -116.3744556, 
      
      
      "state": "California"
  }, 
  {
      "name": "Huntersville", 
      
      "lat": 35.410694, 
      "lng": -80.84285040000002, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Tigard", 
      
      "lat": 45.4312294, 
      "lng": -122.7714861, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Lenexa", 
      
      "lat": 38.9536174, 
      "lng": -94.73357089999999, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Saginaw", 
      
      "lat": 43.4194699, 
      "lng": -83.9508068, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Kentwood", 
      
      "lat": 42.8694731, 
      "lng": -85.64474919999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Doral", 
      
      "lat": 25.8195424, 
      "lng": -80.3553302, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Apple Valley", 
      
      "lat": 44.7319094, 
      "lng": -93.21772000000001, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Grapevine", 
      
      "lat": 32.9342919, 
      "lng": -97.0780654, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Aliso Viejo", 
      
      "lat": 33.5676842, 
      "lng": -117.7256083, 
      
      
      "state": "California"
  }, 
  {
      "name": "Sammamish", 
      
      "lat": 47.61626829999999, 
      "lng": -122.0355736, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Casa Grande", 
      
      "lat": 32.8795022, 
      "lng": -111.7573521, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Pinellas Park", 
      
      "lat": 27.8428025, 
      "lng": -82.6995443, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Troy", 
      
      "lat": 42.7284117, 
      "lng": -73.69178509999999, 
      
      
      "state": "New York"
  }, 
  {
      "name": "West Sacramento", 
      
      "lat": 38.5804609, 
      "lng": -121.530234, 
      
      
      "state": "California"
  }, 
  {
      "name": "Burien", 
      
      "lat": 47.4703767, 
      "lng": -122.3467918, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Commerce City", 
      
      "lat": 39.8083196, 
      "lng": -104.9338675, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Monroe", 
      
      "lat": 32.5093109, 
      "lng": -92.1193012, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Cerritos", 
      
      "lat": 33.8583483, 
      "lng": -118.0647871, 
      
      
      "state": "California"
  }, 
  {
      "name": "Downers Grove", 
      
      "lat": 41.8089191, 
      "lng": -88.01117459999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Coral Gables", 
      
      "lat": 25.72149, 
      "lng": -80.2683838, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Wilson", 
      
      "lat": 35.7212689, 
      "lng": -77.9155395, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Niagara Falls", 
      
      "lat": 43.0962143, 
      "lng": -79.0377388, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Poway", 
      
      "lat": 32.9628232, 
      "lng": -117.0358646, 
      
      
      "state": "California"
  }, 
  {
      "name": "Edina", 
      
      "lat": 44.8896866, 
      "lng": -93.3499489, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Cuyahoga Falls", 
      
      "lat": 41.1339449, 
      "lng": -81.48455849999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Rancho Santa Margarita", 
      
      "lat": 33.640855, 
      "lng": -117.603104, 
      
      
      "state": "California"
  }, 
  {
      "name": "Harrisburg", 
      
      "lat": 40.2731911, 
      "lng": -76.8867008, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Huntington", 
      
      "lat": 38.4192496, 
      "lng": -82.44515400000002, 
      
      
      "state": "West Virginia"
  }, 
  {
      "name": "La Mirada", 
      
      "lat": 33.9172357, 
      "lng": -118.0120086, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cypress", 
      
      "lat": 33.8169599, 
      "lng": -118.0372852, 
      
      
      "state": "California"
  }, 
  {
      "name": "Caldwell", 
      
      "lat": 43.66293839999999, 
      "lng": -116.6873596, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "Logan", 
      
      "lat": 41.7369803, 
      "lng": -111.8338359, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Galveston", 
      
      "lat": 29.3013479, 
      "lng": -94.7976958, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Sheboygan", 
      
      "lat": 43.7508284, 
      "lng": -87.71453, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Middletown", 
      
      "lat": 39.5150576, 
      "lng": -84.39827629999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Murray", 
      
      "lat": 40.6668916, 
      "lng": -111.8879909, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Roswell", 
      
      "lat": 33.3942655, 
      "lng": -104.5230242, 
      
      
      "state": "New Mexico"
  }, 
  {
      "name": "Parker", 
      
      "lat": 39.5186002, 
      "lng": -104.7613633, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Bedford", 
      
      "lat": 32.844017, 
      "lng": -97.1430671, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "East Lansing", 
      
      "lat": 42.7369792, 
      "lng": -84.48386540000001, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Methuen", 
      
      "lat": 42.7262016, 
      "lng": -71.1908924, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Covina", 
      
      "lat": 34.0900091, 
      "lng": -117.8903397, 
      
      
      "state": "California"
  }, 
  {
      "name": "Alexandria", 
      
      "lat": 31.3112936, 
      "lng": -92.4451371, 
      
      
      "state": "Louisiana"
  }, 
  {
      "name": "Olympia", 
      
      "lat": 47.0378741, 
      "lng": -122.9006951, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Euclid", 
      
      "lat": 41.5931049, 
      "lng": -81.5267873, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Mishawaka", 
      
      "lat": 41.6619927, 
      "lng": -86.15861559999999, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Salina", 
      
      "lat": 38.8402805, 
      "lng": -97.61142369999999, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Azusa", 
      
      "lat": 34.1336186, 
      "lng": -117.9075627, 
      
      
      "state": "California"
  }, 
  {
      "name": "Newark", 
      
      "lat": 40.0581205, 
      "lng": -82.4012642, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Chesterfield", 
      
      "lat": 38.6631083, 
      "lng": -90.5770675, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Leesburg", 
      
      "lat": 39.1156615, 
      "lng": -77.56360149999999, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Dunwoody", 
      
      "lat": 33.9462125, 
      "lng": -84.3346473, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Hattiesburg", 
      
      "lat": 31.3271189, 
      "lng": -89.29033919999999, 
      
      
      "state": "Mississippi"
  }, 
  {
      "name": "Roseville", 
      
      "lat": 42.4972583, 
      "lng": -82.9371409, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Bonita Springs", 
      
      "lat": 26.339806, 
      "lng": -81.7786972, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Portage", 
      
      "lat": 42.2011538, 
      "lng": -85.5800022, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "St. Louis Park", 
      
      "lat": 44.9597376, 
      "lng": -93.3702186, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Collierville", 
      
      "lat": 35.042036, 
      "lng": -89.6645266, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Middletown", 
      
      "lat": 41.5623209, 
      "lng": -72.6506488, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Stillwater", 
      
      "lat": 36.1156071, 
      "lng": -97.0583681, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "East Providence", 
      
      "lat": 41.8137116, 
      "lng": -71.3700545, 
      
      
      "state": "Rhode Island"
  }, 
  {
      "name": "Lawrence", 
      
      "lat": 39.8386516, 
      "lng": -86.0252612, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Wauwatosa", 
      
      "lat": 43.0494572, 
      "lng": -88.0075875, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Mentor", 
      
      "lat": 41.6661573, 
      "lng": -81.339552, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Ceres", 
      
      "lat": 37.5949316, 
      "lng": -120.9577098, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cedar Hill", 
      
      "lat": 32.5884689, 
      "lng": -96.9561152, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Mansfield", 
      
      "lat": 40.75839, 
      "lng": -82.5154471, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Binghamton", 
      
      "lat": 42.09868669999999, 
      "lng": -75.91797380000001, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Coeur d'Alene", 
      
      "lat": 47.6776832, 
      "lng": -116.7804664, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "San Luis Obispo", 
      
      "lat": 35.2827524, 
      "lng": -120.6596156, 
      
      
      "state": "California"
  }, 
  {
      "name": "Minot", 
      
      "lat": 48.2329668, 
      "lng": -101.2922906, 
      
      
      "state": "North Dakota"
  }, 
  {
      "name": "Palm Springs", 
      
      "lat": 33.8302961, 
      "lng": -116.5452921, 
      
      
      "state": "California"
  }, 
  {
      "name": "Pine Bluff", 
      
      "lat": 34.2284312, 
      "lng": -92.00319549999999, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Texas City", 
      
      "lat": 29.383845, 
      "lng": -94.9027002, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Summerville", 
      
      "lat": 33.0185039, 
      "lng": -80.17564809999999, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Twin Falls", 
      
      "lat": 42.5629668, 
      "lng": -114.4608711, 
      
      
      "state": "Idaho"
  }, 
  {
      "name": "Jeffersonville", 
      
      "lat": 38.2775702, 
      "lng": -85.7371847, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "San Jacinto", 
      
      "lat": 33.7839084, 
      "lng": -116.958635, 
      
      
      "state": "California"
  }, 
  {
      "name": "Madison", 
      
      "lat": 34.6992579, 
      "lng": -86.74833180000002, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Altoona", 
      
      "lat": 40.5186809, 
      "lng": -78.3947359, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Columbus", 
      
      "lat": 39.2014404, 
      "lng": -85.9213796, 
      
      
      "state": "Indiana"
  }, 
  {
      "name": "Beavercreek", 
      
      "lat": 39.7092262, 
      "lng": -84.06326849999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Apopka", 
      
      "lat": 28.6934076, 
      "lng": -81.5322149, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Elmhurst", 
      
      "lat": 41.8994744, 
      "lng": -87.9403418, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Maricopa", 
      
      "lat": 33.0581063, 
      "lng": -112.0476423, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Farmington", 
      
      "lat": 36.72805830000001, 
      "lng": -108.2186856, 
      
      
      "state": "New Mexico"
  }, 
  {
      "name": "Glenview", 
      
      "lat": 42.0697509, 
      "lng": -87.7878408, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Cleveland Heights", 
      
      "lat": 41.5200518, 
      "lng": -81.556235, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Draper", 
      
      "lat": 40.5246711, 
      "lng": -111.8638226, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Lincoln", 
      
      "lat": 38.891565, 
      "lng": -121.2930079, 
      
      
      "state": "California"
  }, 
  {
      "name": "Sierra Vista", 
      
      "lat": 31.5455001, 
      "lng": -110.2772856, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Lacey", 
      
      "lat": 47.03426289999999, 
      "lng": -122.8231915, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Biloxi", 
      
      "lat": 30.3960318, 
      "lng": -88.88530779999999, 
      
      
      "state": "Mississippi"
  }, 
  {
      "name": "Strongsville", 
      
      "lat": 41.3144966, 
      "lng": -81.83569, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Barnstable Town", 
      
      "lat": 41.7003208, 
      "lng": -70.3002024, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Wylie", 
      
      "lat": 33.0151201, 
      "lng": -96.5388789, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Sayreville", 
      
      "lat": 40.45940210000001, 
      "lng": -74.360846, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Kannapolis", 
      
      "lat": 35.4873613, 
      "lng": -80.6217341, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Charlottesville", 
      
      "lat": 38.0293059, 
      "lng": -78.47667810000002, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Littleton", 
      
      "lat": 39.613321, 
      "lng": -105.0166498, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Titusville", 
      
      "lat": 28.6122187, 
      "lng": -80.8075537, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Hackensack", 
      
      "lat": 40.8859325, 
      "lng": -74.0434736, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Newark", 
      
      "lat": 37.5296593, 
      "lng": -122.0402399, 
      
      
      "state": "California"
  }, 
  {
      "name": "Pittsfield", 
      
      "lat": 42.4500845, 
      "lng": -73.2453824, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "York", 
      
      "lat": 39.9625984, 
      "lng": -76.727745, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Lombard", 
      
      "lat": 41.8800296, 
      "lng": -88.00784349999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Attleboro", 
      
      "lat": 41.94454409999999, 
      "lng": -71.2856082, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "DeKalb", 
      
      "lat": 41.9294736, 
      "lng": -88.75036469999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Blacksburg", 
      
      "lat": 37.2295733, 
      "lng": -80.4139393, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Dublin", 
      
      "lat": 40.0992294, 
      "lng": -83.1140771, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Haltom City", 
      
      "lat": 32.7995738, 
      "lng": -97.26918169999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Lompoc", 
      
      "lat": 34.6391501, 
      "lng": -120.4579409, 
      
      
      "state": "California"
  }, 
  {
      "name": "El Centro", 
      
      "lat": 32.792, 
      "lng": -115.5630514, 
      
      
      "state": "California"
  }, 
  {
      "name": "Danville", 
      
      "lat": 37.8215929, 
      "lng": -121.9999606, 
      
      
      "state": "California"
  }, 
  {
      "name": "Jefferson City", 
      
      "lat": 38.57670170000001, 
      "lng": -92.1735164, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Cutler Bay", 
      
      "lat": 25.5808323, 
      "lng": -80.34685929999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Oakland Park", 
      
      "lat": 26.1723065, 
      "lng": -80.1319893, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "North Miami Beach", 
      
      "lat": 25.9331488, 
      "lng": -80.1625463, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Freeport", 
      
      "lat": 40.6576022, 
      "lng": -73.58318349999999, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Moline", 
      
      "lat": 41.5067003, 
      "lng": -90.51513419999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Coachella", 
      
      "lat": 33.6803003, 
      "lng": -116.173894, 
      
      
      "state": "California"
  }, 
  {
      "name": "Fort Pierce", 
      
      "lat": 27.4467056, 
      "lng": -80.3256056, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Smyrna", 
      
      "lat": 35.9828412, 
      "lng": -86.5186045, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Bountiful", 
      
      "lat": 40.8893895, 
      "lng": -111.880771, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Fond du Lac", 
      
      "lat": 43.7730448, 
      "lng": -88.4470508, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Everett", 
      
      "lat": 42.40843, 
      "lng": -71.0536625, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Danville", 
      
      "lat": 36.5859718, 
      "lng": -79.39502279999999, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Keller", 
      
      "lat": 32.9341893, 
      "lng": -97.229298, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Belleville", 
      
      "lat": 38.5200504, 
      "lng": -89.9839935, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Bell Gardens", 
      
      "lat": 33.9652918, 
      "lng": -118.1514588, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cleveland", 
      
      "lat": 35.1595182, 
      "lng": -84.8766115, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "North Lauderdale", 
      
      "lat": 26.217305, 
      "lng": -80.2258811, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Fairfield", 
      
      "lat": 39.3454673, 
      "lng": -84.5603187, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Salem", 
      
      "lat": 42.51954, 
      "lng": -70.8967155, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Rancho Palos Verdes", 
      
      "lat": 33.7444613, 
      "lng": -118.3870173, 
      
      
      "state": "California"
  }, 
  {
      "name": "San Bruno", 
      
      "lat": 37.6304904, 
      "lng": -122.4110835, 
      
      
      "state": "California"
  }, 
  {
      "name": "Concord", 
      
      "lat": 43.2081366, 
      "lng": -71.5375718, 
      
      
      "state": "New Hampshire"
  }, 
  {
      "name": "Burlington", 
      
      "lat": 44.4758825, 
      "lng": -73.21207199999999, 
      
      
      "state": "Vermont"
  }, 
  {
      "name": "Apex", 
      
      "lat": 35.732652, 
      "lng": -78.85028559999999, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Midland", 
      
      "lat": 43.6155825, 
      "lng": -84.2472116, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Altamonte Springs", 
      
      "lat": 28.6611089, 
      "lng": -81.3656242, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Hutchinson", 
      
      "lat": 38.0608445, 
      "lng": -97.92977429999999, 
      
      
      "state": "Kansas"
  }, 
  {
      "name": "Buffalo Grove", 
      
      "lat": 42.1662831, 
      "lng": -87.9631308, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Urbandale", 
      
      "lat": 41.6266555, 
      "lng": -93.71216559999999, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "State College", 
      
      "lat": 40.7933949, 
      "lng": -77.8600012, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Urbana", 
      
      "lat": 40.1105875, 
      "lng": -88.2072697, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Plainfield", 
      
      "lat": 41.632223, 
      "lng": -88.2120315, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Manassas", 
      
      "lat": 38.7509488, 
      "lng": -77.47526669999999, 
      
      
      "state": "Virginia"
  }, 
  {
      "name": "Bartlett", 
      
      "lat": 41.9950276, 
      "lng": -88.1856301, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Kearny", 
      
      "lat": 40.7684342, 
      "lng": -74.1454214, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Oro Valley", 
      
      "lat": 32.3909071, 
      "lng": -110.966488, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Findlay", 
      
      "lat": 41.04422, 
      "lng": -83.6499321, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Rohnert Park", 
      
      "lat": 38.3396367, 
      "lng": -122.7010984, 
      
      
      "state": "California"
  }, 
  {
      "name": "Westfield", 
      
      "lat": 42.1250929, 
      "lng": -72.749538, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Linden", 
      
      "lat": 40.6220478, 
      "lng": -74.24459019999999, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Sumter", 
      
      "lat": 33.9204354, 
      "lng": -80.3414693, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Wilkes-Barre", 
      
      "lat": 41.2459149, 
      "lng": -75.88130749999999, 
      
      
      "state": "Pennsylvania"
  }, 
  {
      "name": "Woonsocket", 
      
      "lat": 42.00287609999999, 
      "lng": -71.51478390000001, 
      
      
      "state": "Rhode Island"
  }, 
  {
      "name": "Leominster", 
      
      "lat": 42.5250906, 
      "lng": -71.759794, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Shelton", 
      
      "lat": 41.3164856, 
      "lng": -73.0931641, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Brea", 
      
      "lat": 33.9166805, 
      "lng": -117.9000604, 
      
      
      "state": "California"
  }, 
  {
      "name": "Covington", 
      
      "lat": 39.0836712, 
      "lng": -84.5085536, 
      
      
      "state": "Kentucky"
  }, 
  {
      "name": "Rockwall", 
      
      "lat": 32.93123360000001, 
      "lng": -96.4597089, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Meridian", 
      
      "lat": 32.3643098, 
      "lng": -88.703656, 
      
      
      "state": "Mississippi"
  }, 
  {
      "name": "Riverton", 
      
      "lat": 40.521893, 
      "lng": -111.9391023, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "St. Cloud", 
      
      "lat": 28.2489016, 
      "lng": -81.2811801, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Quincy", 
      
      "lat": 39.9356016, 
      "lng": -91.4098726, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Morgan Hill", 
      
      "lat": 37.1305012, 
      "lng": -121.6543901, 
      
      
      "state": "California"
  }, 
  {
      "name": "Warren", 
      
      "lat": 41.2375569, 
      "lng": -80.81841659999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Edmonds", 
      
      "lat": 47.8106521, 
      "lng": -122.3773552, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Burleson", 
      
      "lat": 32.5420821, 
      "lng": -97.3208492, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Beverly", 
      
      "lat": 42.5584283, 
      "lng": -70.880049, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Mankato", 
      
      "lat": 44.1635775, 
      "lng": -93.99939959999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Hagerstown", 
      
      "lat": 39.6417629, 
      "lng": -77.71999319999999, 
      
      
      "state": "Maryland"
  }, 
  {
      "name": "Prescott", 
      
      "lat": 34.5400242, 
      "lng": -112.4685025, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Campbell", 
      
      "lat": 37.2871651, 
      "lng": -121.9499568, 
      
      
      "state": "California"
  }, 
  {
      "name": "Cedar Falls", 
      
      "lat": 42.5348993, 
      "lng": -92.4453161, 
      
      
      "state": "Iowa"
  }, 
  {
      "name": "Beaumont", 
      
      "lat": 33.9294606, 
      "lng": -116.977248, 
      
      
      "state": "California"
  }, 
  {
      "name": "La Puente", 
      
      "lat": 34.0200114, 
      "lng": -117.9495083, 
      
      
      "state": "California"
  }, 
  {
      "name": "Crystal Lake", 
      
      "lat": 42.2411344, 
      "lng": -88.31619649999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Fitchburg", 
      
      "lat": 42.5834228, 
      "lng": -71.8022955, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Carol Stream", 
      
      "lat": 41.91252859999999, 
      "lng": -88.13479269999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Hickory", 
      
      "lat": 35.7344538, 
      "lng": -81.3444573, 
      
      
      "state": "North Carolina"
  }, 
  {
      "name": "Streamwood", 
      
      "lat": 42.0255827, 
      "lng": -88.17840849999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Norwich", 
      
      "lat": 41.5242649, 
      "lng": -72.07591049999999, 
      
      
      "state": "Connecticut"
  }, 
  {
      "name": "Coppell", 
      
      "lat": 32.9545687, 
      "lng": -97.01500779999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "San Gabriel", 
      
      "lat": 34.09611110000001, 
      "lng": -118.1058333, 
      
      
      "state": "California"
  }, 
  {
      "name": "Holyoke", 
      
      "lat": 42.2042586, 
      "lng": -72.6162009, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Bentonville", 
      
      "lat": 36.3728538, 
      "lng": -94.2088172, 
      
      
      "state": "Arkansas"
  }, 
  {
      "name": "Florence", 
      
      "lat": 34.79981, 
      "lng": -87.677251, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Peachtree Corners", 
      
      "lat": 33.9698929, 
      "lng": -84.2214551, 
      
      
      "state": "Georgia"
  }, 
  {
      "name": "Brentwood", 
      
      "lat": 36.0331164, 
      "lng": -86.78277720000001, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "Bozeman", 
      
      "lat": 45.6769979, 
      "lng": -111.0429339, 
      
      
      "state": "Montana"
  }, 
  {
      "name": "New Berlin", 
      
      "lat": 42.9764027, 
      "lng": -88.1084224, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Goose Creek", 
      
      "lat": 32.9810059, 
      "lng": -80.03258670000001, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Huntsville", 
      
      "lat": 30.7235263, 
      "lng": -95.55077709999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Prescott Valley", 
      
      "lat": 34.6100243, 
      "lng": -112.315721, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Maplewood", 
      
      "lat": 44.9530215, 
      "lng": -92.9952153, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Romeoville", 
      
      "lat": 41.6475306, 
      "lng": -88.0895061, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Duncanville", 
      
      "lat": 32.6518004, 
      "lng": -96.9083366, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Atlantic City", 
      
      "lat": 39.3642834, 
      "lng": -74.4229266, 
      
      
      "state": "New Jersey"
  }, 
  {
      "name": "Clovis", 
      
      "lat": 34.4047987, 
      "lng": -103.2052272, 
      
      
      "state": "New Mexico"
  }, 
  {
      "name": "The Colony", 
      
      "lat": 33.0806083, 
      "lng": -96.89283089999999, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Culver City", 
      
      "lat": 34.0211224, 
      "lng": -118.3964665, 
      
      
      "state": "California"
  }, 
  {
      "name": "Marlborough", 
      
      "lat": 42.3459271, 
      "lng": -71.5522874, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Hilton Head Island", 
      
      "lat": 32.216316, 
      "lng": -80.752608, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Moorhead", 
      
      "lat": 46.8737648, 
      "lng": -96.76780389999999, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Calexico", 
      
      "lat": 32.6789476, 
      "lng": -115.4988834, 
      
      
      "state": "California"
  }, 
  {
      "name": "Bullhead City", 
      
      "lat": 35.1359386, 
      "lng": -114.5285981, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Germantown", 
      
      "lat": 35.0867577, 
      "lng": -89.8100858, 
      
      
      "state": "Tennessee"
  }, 
  {
      "name": "La Quinta", 
      
      "lat": 33.6633573, 
      "lng": -116.3100095, 
      
      
      "state": "California"
  }, 
  {
      "name": "Lancaster", 
      
      "lat": 39.7136754, 
      "lng": -82.5993294, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Wausau", 
      
      "lat": 44.9591352, 
      "lng": -89.6301221, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Sherman", 
      
      "lat": 33.6356618, 
      "lng": -96.6088805, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Ocoee", 
      
      "lat": 28.5691677, 
      "lng": -81.5439619, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Shakopee", 
      
      "lat": 44.7973962, 
      "lng": -93.5272861, 
      
      
      "state": "Minnesota"
  }, 
  {
      "name": "Woburn", 
      
      "lat": 42.4792618, 
      "lng": -71.1522765, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Bremerton", 
      
      "lat": 47.5673202, 
      "lng": -122.6329356, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Rock Island", 
      
      "lat": 41.5094771, 
      "lng": -90.5787476, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Muskogee", 
      
      "lat": 35.7478769, 
      "lng": -95.3696909, 
      
      
      "state": "Oklahoma"
  }, 
  {
      "name": "Cape Girardeau", 
      
      "lat": 37.3058839, 
      "lng": -89.51814759999999, 
      
      
      "state": "Missouri"
  }, 
  {
      "name": "Annapolis", 
      
      "lat": 38.9784453, 
      "lng": -76.4921829, 
      
      
      "state": "Maryland"
  }, 
  {
      "name": "Greenacres", 
      
      "lat": 26.6276276, 
      "lng": -80.1353896, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Ormond Beach", 
      
      "lat": 29.2858129, 
      "lng": -81.0558894, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Hallandale Beach", 
      
      "lat": 25.9812024, 
      "lng": -80.14837899999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Stanton", 
      
      "lat": 33.8025155, 
      "lng": -117.9931165, 
      
      
      "state": "California"
  }, 
  {
      "name": "Puyallup", 
      
      "lat": 47.1853785, 
      "lng": -122.2928974, 
      
      
      "state": "Washington"
  }, 
  {
      "name": "Pacifica", 
      
      "lat": 37.6138253, 
      "lng": -122.4869194, 
      
      
      "state": "California"
  }, 
  {
      "name": "Hanover Park", 
      
      "lat": 41.9994722, 
      "lng": -88.1450735, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Hurst", 
      
      "lat": 32.8234621, 
      "lng": -97.1705678, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Lima", 
      
      "lat": 40.742551, 
      "lng": -84.1052256, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Marana", 
      
      "lat": 32.436381, 
      "lng": -111.2224422, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Carpentersville", 
      
      "lat": 42.1211364, 
      "lng": -88.2578582, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Oakley", 
      
      "lat": 37.9974219, 
      "lng": -121.7124536, 
      
      
      "state": "California"
  }, 
  {
      "name": "Huber Heights", 
      
      "lat": 39.843947, 
      "lng": -84.12466080000002, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Lancaster", 
      
      "lat": 32.5920798, 
      "lng": -96.7561082, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Montclair", 
      
      "lat": 34.0775104, 
      "lng": -117.6897776, 
      
      
      "state": "California"
  }, 
  {
      "name": "Wheeling", 
      
      "lat": 42.1391927, 
      "lng": -87.9289591, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Brookfield", 
      
      "lat": 43.0605671, 
      "lng": -88.1064787, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Park Ridge", 
      
      "lat": 42.0111412, 
      "lng": -87.84061919999999, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Florence", 
      
      "lat": 34.1954331, 
      "lng": -79.7625625, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Roy", 
      
      "lat": 41.1616108, 
      "lng": -112.0263313, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Winter Garden", 
      
      "lat": 28.5652787, 
      "lng": -81.58618469999999, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Chelsea", 
      
      "lat": 42.3917638, 
      "lng": -71.0328284, 
      
      
      "state": "Massachusetts"
  }, 
  {
      "name": "Valley Stream", 
      
      "lat": 40.6642699, 
      "lng": -73.70846449999999, 
      
      
      "state": "New York"
  }, 
  {
      "name": "Spartanburg", 
      
      "lat": 34.9495672, 
      "lng": -81.9320482, 
      
      
      "state": "South Carolina"
  }, 
  {
      "name": "Lake Oswego", 
      
      "lat": 45.42067489999999, 
      "lng": -122.6706498, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Friendswood", 
      
      "lat": 29.5293998, 
      "lng": -95.2010447, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Westerville", 
      
      "lat": 40.1261743, 
      "lng": -82.92906959999999, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Northglenn", 
      
      "lat": 39.8961821, 
      "lng": -104.9811468, 
      
      
      "state": "Colorado"
  }, 
  {
      "name": "Phenix City", 
      
      "lat": 32.4709761, 
      "lng": -85.0007653, 
      
      
      "state": "Alabama"
  }, 
  {
      "name": "Grove City", 
      
      "lat": 39.88145189999999, 
      "lng": -83.0929644, 
      
      
      "state": "Ohio"
  }, 
  {
      "name": "Texarkana", 
      
      "lat": 33.425125, 
      "lng": -94.04768820000001, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Addison", 
      
      "lat": 41.931696, 
      "lng": -87.9889556, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Dover", 
      
      "lat": 39.158168, 
      "lng": -75.5243682, 
      
      
      "state": "Delaware"
  }, 
  {
      "name": "Lincoln Park", 
      
      "lat": 42.2505943, 
      "lng": -83.1785361, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Calumet City", 
      
      "lat": 41.6155909, 
      "lng": -87.5294871, 
      
      
      "state": "Illinois"
  }, 
  {
      "name": "Muskegon", 
      
      "lat": 43.2341813, 
      "lng": -86.24839209999999, 
      
      
      "state": "Michigan"
  }, 
  {
      "name": "Aventura", 
      
      "lat": 25.9564812, 
      "lng": -80.1392121, 
      
      
      "state": "Florida"
  }, 
  {
      "name": "Martinez", 
      
      "lat": 38.0193657, 
      "lng": -122.1341321, 
      
      
      "state": "California"
  }, 
  {
      "name": "Greenfield", 
      
      "lat": 42.9614039, 
      "lng": -88.0125865, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Apache Junction", 
      
      "lat": 33.4150485, 
      "lng": -111.5495777, 
      
      
      "state": "Arizona"
  }, 
  {
      "name": "Monrovia", 
      
      "lat": 34.1442616, 
      "lng": -118.0019482, 
      
      
      "state": "California"
  }, 
  {
      "name": "Weslaco", 
      
      "lat": 26.1595194, 
      "lng": -97.9908366, 
      
      
      "state": "Texas"
  }, 
  {
      "name": "Keizer", 
      
      "lat": 44.9901194, 
      "lng": -123.0262077, 
      
      
      "state": "Oregon"
  }, 
  {
      "name": "Spanish Fork", 
      
      "lat": 40.114955, 
      "lng": -111.654923, 
      
      
      "state": "Utah"
  }, 
  {
      "name": "Beloit", 
      
      "lat": 42.5083482, 
      "lng": -89.03177649999999, 
      
      
      "state": "Wisconsin"
  }, 
  {
      "name": "Panama City", 
      
      "lat": 30.1588129, 
      "lng": -85.6602058, 
      
      
      "state": "Florida"
  }
]

const formattedCountries = cities.map((city
  ) => ({
    value: city.name,
    label: city.state,
    latlng: [city.lat, city.lng]
  }));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;