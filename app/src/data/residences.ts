/* Residence data transcribed from coastalreserveproperties.com listings. Do not invent fields. */
export interface AmenityGroup { group: string; items: string[] }
export interface Residence {
  slug: string;
  name: string;
  bookingId: string;
  title: string;
  town: "Holmes Beach" | "Bradenton Beach" | "Anna Maria";
  guests: number;
  bedrooms: number;
  baths: number;
  summary: string;
  details: string;
  neighborhood: string;
  amenities: AmenityGroup[];
  images: string[];
  license: string | null;
  sourceUrl: string;
}

export const residences: Residence[] = [
  {
    "slug": "bayfront-home-dock-heated-pool-manatees",
    "name": "Infinite Views",
    "bookingId": "2330160",
    "title": "Bayfront Home: Dock, Heated Pool, Dolphins and Manatees",
    "town": "Holmes Beach",
    "guests": 8,
    "bedrooms": 4,
    "baths": 3,
    "summary": "Some mornings, manatees drift past your private dock -  an ordinary day at Infinite Views, a Bayfront home directly on Tampa Bay and a quiet residential retreat. Private Heated plunge pool, deep-water dock, and water views from nearly every room. The Gulf beaches are six minutes away. Two king suites, two king rooms, and a bunk-nook. Sleeps eight. Dogs are always welcomed. Sunshine Skyway bridge scenic views. Ping- pong, BBQ. 120 Feet of private Waterfront Dock .",
    "details": "✦ Infinite Views, Bayfront Home on Tampa Bay\n236 S Harbor Dr, Holmes Beach | Sleeps 8 | VRC25-000151\nHighlights\nDirectly on Tampa Bay with 120 feet of private deep-water dock, manatees and dolphins are regular morning visitors\nPrivate heated plunge pool overlooking the water\nOutside furniture include a table with six chairs, and four lounge chairs.\nStunning Sunshine Skyway Bridge views across the bay\nFour king bedrooms (including two full suites), every couple gets a real bed and a door that closes\nPing-pong, and a BBQ grill included\nGulf beaches are a 6-minute walk\nPets warmly welcome, they get a snack on arrival\nQuiet residential street with on-site parking for up to 4 vehicles\nAbout This Space\nSome mornings, manatees drift past your dock before you've had your coffee. That's just a regular morning at Infinite Views.\nThis is a true Bayfront home, sitting directly on Tampa Bay with unobstructed water views from nearly every room. The dock runs out over the bay, the plunge pool is heated and private, and the covered patio ties it all together into a backyard that most Florida rentals don't come close to.\nInside: four bedrooms, three baths, sleeping eight comfortably. Two king suites, two additional king rooms, no queen pullouts, no one drawing the short straw. A game room with ping-pong and foosball keeps things lively when you're not on the water.\nOutside: a deep-water dock, and a grill. The Gulf beaches are a five-minute walk when you want sand. The rest of the time, the bay is right there.\nGuest Access\nThe entire home is yours, pool, dock, and all. Pets are genuinely welcome and get a treat on arrival. Flat, easy entry with on-site parking for up to 4 vehicles.\nThe Neighborhood\nHolmes Beach is a quiet, residential island community on Anna Maria Island. This pocket of the neighborhood sits directly on the bay, which means wildlife, open water views, and the kind of calm that beachfront condos rarely offer. The Gulf beaches are a short walk when you want them; the rest of the time you have a private waterfront retreat to come back to.\nGood to Know\nThis home is bayfront, not beachfront, that's the trade worth understanding. You're directly on the water with a dock, manatees, and Skyway views, in a quiet neighborhood most gulf-side properties can't match. If a Gulf beach out your back door is the non-negotiable, a beachfront property is the better fit. If the waterfront experience, privacy, and wildlife are what you're after, this is it.\nParking & Noise\nUp to 4 vehicles may park on the property. Please coordinate with your group ahead of arrival, no overnight parking is available for additional vehicles.\nThis home is in a quiet residential neighborhood. We ask all guests to keep noise at a respectful level day and night. Excessive noise violates local ordinance and may result in fines or termination of your rental agreement without refund. We appreciate you being a good neighbor.\nOther Details to Note\nGolf Cart available for a seperate fee. Fishing Charters and pleasure charters are also available for a separate fee.",
    "neighborhood": "",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "Alfresco dining",
          "BBQ",
          "Beach essentials",
          "Boat slip",
          "Garden or backyard",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Drying rack for clothing",
          "Extra pillows and blankets",
          "Hangers",
          "Iron",
          "Clothing storage"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Family",
        "items": [
          "Crib"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Single level home",
          "No stairs in home"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ping Pong Table"
        ]
      }
    ],
    "images": [
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/00.webp",
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/01.webp",
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/02.webp",
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/03.webp",
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/04.webp",
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/05.webp",
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/06.webp",
      "/assets/residences/bayfront-home-dock-heated-pool-manatees/07.webp"
    ],
    "license": "VRC25-000151",
    "sourceUrl": "https://coastalreserveproperties.com/property/bayfront-home-dock-heated-pool-manatees"
  },
  {
    "slug": "heated-poolspa",
    "name": "Palm Resort",
    "bookingId": "2330161",
    "title": "Steps To Beach • Heated Pool/Spa • Quiet Retreat",
    "town": "Holmes Beach",
    "guests": 8,
    "bedrooms": 4,
    "baths": 3,
    "summary": "Walk to the beach in about 2 minutes, then come home to your own heated pool and hot tub surrounded by palms. Palm Resort is a renovated, single-level quiet Holmes Beach home for up to 8 guests, with 3 king bedrooms, a bunk room and 3 full bathrooms. Pack light: beach chairs, a cart, umbrella and beach towels are provided. Enjoy poolside meals, a gas grill and a fully fenced backyard. Pets are welcome.",
    "details": "",
    "neighborhood": "",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Hot tub",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "Alfresco dining",
          "BBQ",
          "Beach essentials",
          "Garden or backyard",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Private entrance"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron",
          "Clothing storage"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Family",
        "items": [
          "Crib"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ethernet connection"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Single level home",
          "No stairs in home"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/heated-poolspa/00.webp",
      "/assets/residences/heated-poolspa/01.webp",
      "/assets/residences/heated-poolspa/02.webp",
      "/assets/residences/heated-poolspa/03.webp",
      "/assets/residences/heated-poolspa/04.webp",
      "/assets/residences/heated-poolspa/05.webp",
      "/assets/residences/heated-poolspa/06.webp",
      "/assets/residences/heated-poolspa/07.webp"
    ],
    "license": null,
    "sourceUrl": "https://coastalreserveproperties.com/property/heated-poolspa"
  },
  {
    "slug": "guest-suite-heated-pool-spa-walk-to-pine",
    "name": "Blue Pearl",
    "bookingId": "2356636",
    "title": "4 King Beds + Guest House • Heated Pool/Spa",
    "town": "Anna Maria",
    "guests": 10,
    "bedrooms": 4,
    "baths": 3,
    "summary": "Blue Pearl is a 4BR/3BA home on Anna Maria Island's quiet north end, a short walk to Pine Avenue's shops and restaurants and to Bayfront Park on the bay. A private heated pool with sun shelf and spa sits in a lush, fully fenced backyard, and a detached guest house with its own king bed and ensuite bath gives one couple real privacy. Four king beds, full kitchen, laundry, grill, and beach gear. Dogs welcome.",
    "details": "New Six seater gold carts available for rental. Not included in Stay.\nTHE LAYOUT\nBright, open main house with a dining table for eight and large doors that open straight to the pool deck. Fully stocked kitchen with stainless appliances, five-burner stove, and a tucked-away washer and dryer.\nUpstairs, the open loft is its own retreat: king bed, sitting area, TV, and\na spa-style bath with a clawfoot tub.\nOut back, a separate guest house, king bed, sofa, large TV, coffee bar, mini fridge, and a private ensuite bath. Ideal for grandparents or a second couple who want their own door.\nBEDROOMS AND BATHS\n- Bedroom 1 (main house): King, back porch access\n- Bedroom 2 (main house): King, back porch access\n- Bedroom 3 (upstairs loft): King, sitting area, TV, ensuite with\nclawfoot tub\n- Bedroom 4 (detached guest house): King, sofa, TV, coffee bar, mini\nfridge, ensuite with walk-in shower\n- Living room: Sofa bed\nBathrooms: Bedrooms 3 and 4 have private ensuites. Bedrooms 1 and 2 share the main-house bath, which has a double vanity and walk-in shower. Worth knowing if you're travelling as a large group.\nOUTSIDE\nPrivate heated pool with sun shelf, spa, gas grill, and an outdoor\ndining table under the trees. The yard is fully fenced, good for\ndogs, good for kids, good for a quiet morning coffee.\nTHE NORTH END\nThis is the quiet prestigious end of the island. Pine Avenue's shops, galleries, and restaurants are a short walk. Bayfront Park, the City Pier, and Rod & Reel Pier are close by on the bay side, and the Gulf beaches are a walk across the island. The free island trolley runs the length of Anna Maria.\nOther Details to Note\nBEACH GEAR INCLUDED\n6 beach chairs, a beach cart, and two beach umbrella. All bath towels, beach towels, and linens provided.\nDOGS\nDogs are welcome.\nPARKING\nUp to 3 vehicles.\nGOOD TO KNOW\n- Bedroom 3 is up a flight of interior stairs.\n- Bedroom 4 is a detached building reached across the backyard.\n- Bedrooms 1 and 2 share one bathroom.\n- The pool is heated.\n- Residential street. Please keep noise considerate day and night.",
    "neighborhood": "Small, walkable residential neighborhood on the north end of Anna Maria Island. Short pedestrian access to Gulf beaches, Anna Maria City Pier, Pine Avenue dining and shops, and local parks. Vibe is peaceful and family-friendly with coastal cottages, mature landscaping, and easy access to island restaurants and sunset views.",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cleaning products",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Hair dryer",
          "Heating",
          "Hot tub",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "Alfresco dining",
          "BBQ",
          "Beach essentials",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Kitchenette",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Private entrance",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ethernet connection"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Single level home",
          "No stairs in home"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/00.webp",
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/01.webp",
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/02.webp",
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/03.webp",
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/04.webp",
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/05.webp",
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/06.webp",
      "/assets/residences/guest-suite-heated-pool-spa-walk-to-pine/07.webp"
    ],
    "license": null,
    "sourceUrl": "https://coastalreserveproperties.com/property/guest-suite-heated-pool-spa-walk-to-pine"
  },
  {
    "slug": "beachfront-heated-pool-spa-rooftop-views",
    "name": "Seagrape Cottage",
    "bookingId": "2356615",
    "title": "Beachfront · Heated Pool & Spa · Balcony Views",
    "town": "Bradenton Beach",
    "guests": 9,
    "bedrooms": 4,
    "baths": 4,
    "summary": "Seagrape Cottage is a renovated 4BR/4BA island home a short walk from the white sand of Cortez Beach. A private heated pool with sun ledge and spa sits in a fully fenced backyard, with four full baths so a group of nine never waits in line. Bridge Street's shops and restaurants are a walk north, and the free island trolley stops out front. Wrap-around porch, shaded patio dining, and an open coastal interior built for slow mornings and long beach days on Anna Maria Island.",
    "details": "Welcome to Seagrape Cottage.\nNew Six-seater golf carts available for rental. Not included in Stay.\nCOASTAL COMFORT\nBright wood beams, nautical detail, and an open layout. A plush\nsectional for after-beach recovery, and a fully equipped galley\nkitchen with stainless appliances and butcher block counters. Eat\nindoors, poolside on the patio, or out on the wrap-around porch.\nSLEEPING (4 bedrooms, 4 full baths, sleeps 9)\n- Primary suite, 1st floor: King, patio access, ensuite with double\nvanity and walk-in shower\n- Bedroom 2, 1st floor: Queen, ensuite with walk-in shower\n- Bedroom 3, 1st floor: Twin-over-queen bunk, hall bath with walk-in\nshower\n- Bedroom 4, 2nd floor: Queen, ensuite, private balcony with sunrise and sunset views\nEvery bedroom has a bath. Three of the four are on the ground floor, easy for grandparents and small kids.\nOUTSIDE\nPrivate heated pool with sun ledge, infinity spa, gas grill, and\npoolside lounging in a fully fenced yard.\nTHE LOCATION\nCortez Beach is a short walk across Gulf Drive. Bridge Street's\nrestaurants, shops, and the historic pier are a walk north. The free\nisland trolley stops out front and runs the length of Anna Maria\nIsland, Pine Avenue, Rod & Reel Pier, and Bean Point without moving the car.\nBEACH GEAR INCLUDED\n4 beach chairs, a beach cart, and a beach umbrella. All bath towels, beach towels, and linens provided.\nPARKING\nUp to 3 vehicles. Please plan your group accordingly.\nGOOD TO KNOW\n- The home is across Gulf Drive from the beach, not directly on the sand.\n- Bedroom 4 is on the second floor via interior stairs.\n- The pool is heated on request; the spa shares the pool system.\n- This is a residential street. Please keep noise considerate day and night so we stay welcome neighbors.\nOther Details to Note\nDogs are welcome for 150$ pet fee.",
    "neighborhood": "Quiet, coastal small-town feel at the southern tip of Anna Maria Island. Key local features: Bridge Street commercial strip (restaurants, bars, shops), Historic Bridge Street/City Pier, Gulf-front beaches and sunset views, short walk to Bayfront and fishing piers. Visitors find an Old-Florida vibe mixed with tourist amenities; some streets offer direct beach access and neighborhood lodging.",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Hot tub",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "BBQ",
          "Beach essentials",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Private entrance",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ethernet connection"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/00.webp",
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/01.webp",
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/02.webp",
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/03.webp",
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/04.webp",
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/05.webp",
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/06.webp",
      "/assets/residences/beachfront-heated-pool-spa-rooftop-views/07.webp"
    ],
    "license": null,
    "sourceUrl": "https://coastalreserveproperties.com/property/beachfront-heated-pool-spa-rooftop-views"
  },
  {
    "slug": "lake-front-dock-heated-pool-walk-to-beach",
    "name": "Sea Haven",
    "bookingId": "2356647",
    "title": "Lakefront · Fishing · Heated Pool · Walk to Beach",
    "town": "Holmes Beach",
    "guests": 8,
    "bedrooms": 3,
    "baths": 3,
    "summary": "Sea Haven is a remodeled 3BR/3BA lake-front home in Holmes Beach, about a five-minute walk to the sand. Fish right off the private dock, swim in the heated pool overlooking the water, and cook on the grill with the lanai and the canal in front of you. Single-story throughout. Ping pong and life-size Connect 4 in the two-car garage, along with all the beach gear. Dogs welcome with approval and a fee($150).",
    "details": "VRC # VRC25-000022\nSix- Seater Golf Cart Rental available upon request. Not included in Stay.\nTHE WATER\nOne of only a handful of homes directly on the historic Spring Lake - a secluded 3.5 acre saltwater-fed coastal lagoon just two blocks from the Gulf.\nA private dock on the lake- amazing for fishing, bring rods, cast from the backyard, or on kayak The heated pool looks out over the water.\nINSIDE\nRemodeled in 2025 and single-story throughout, so no stairs anywhere. Bright open layout with a fully stocked kitchen, stainless appliances, and a five-burner range. Dining table for six plus bar seating for four. Living room with a 75-inch TV and Spring Lake views.\nBEDROOMS AND BATHS\n- Primary suite: King, large TV, lake views, walk-in closet\n- Second suite: King, large TV, ensuite with walk-in shower, plus\n- Third King bedroom\n-Bunk room: Two twin-over-twin bunks\n- Hall bath with tub/shower combo\n- Third bath with walk-in shower\n- Washer and drier\n\"The house sleeps 8. The bunk room is set up for four but occupancy is limited to 8 guests.\nTHE GARAGE\nTwo-car garage with beach chairs, a cart, and an umbrella-  plus ping pong and a life-size Connect 4 for the evenings.\nTHE LOCATION\nAbout a five-minute walk to Palmetto Ave Beach and Manatee County Beach. Holmes Beach shops and restaurants are close, and the free island trolley runs the length of Anna Maria Island.\nOther Details to Note\nWATER SAFETY\nThe backyard opens onto the Spring Lake and the dock is not gated.\nChildren should be supervised at all times around the pool, the dock, and the Spring Lake edge.\nDOGS\nDogs welcome with prior approval and a pet fee($150).\nBEACH GEAR INCLUDED\nBeach chairs, cart, and umbrella in the garage. All bath towels, beach towels, and linens provided.\nPARKING\nUp to 4 vehicles.\nGOOD TO KNOW\n- Holmes Beach requires a 7-night minimum stay.\n- The pool is heated.\n- Residential street. Please keep noise considerate day and night.",
    "neighborhood": "Quiet, walkable residential beach neighborhood on the western (Gulf) side of Anna Maria Island. Highlights include 68th Street public beach access, nearby Gulf Drive with waterfront dining and sunset spots, short drives to Pine Avenue (Anna Maria City) and the shops and nightlife of Bradenton Beach at the island’s southern end. The vibe is low-rise coastal Florida, popular with vacationers, families and couples seeking beach access and calm evenings.",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Hair dryer",
          "Heating",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "Alfresco dining",
          "BBQ",
          "Beach essentials",
          "Kayak",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Lake access",
          "Private entrance",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ethernet connection"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Single level home",
          "No stairs in home"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/00.webp",
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/01.webp",
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/02.webp",
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/03.webp",
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/04.webp",
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/05.webp",
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/06.webp",
      "/assets/residences/lake-front-dock-heated-pool-walk-to-beach/07.webp"
    ],
    "license": "VRC25-000022",
    "sourceUrl": "https://coastalreserveproperties.com/property/lake-front-dock-heated-pool-walk-to-beach"
  },
  {
    "slug": "rooftop-deck-heated-pool-spa-1-min-to-beach",
    "name": "Sideways",
    "bookingId": "2356627",
    "title": "Rooftop Deck · Heated Pool & Spa · 1 Min To Beach",
    "town": "Bradenton Beach",
    "guests": 6,
    "bedrooms": 2,
    "baths": 3,
    "summary": "Start your morning with rooftop water views, walk to Cortez Beach, then return to your private heated pool and hot tub. Sideways sleeps up to 6 with a king bedroom, queen bedroom, and living-room sleeper sofa. Enjoy ping-pong and arcade games, a screened porch, and covered poolside seating. Beach chairs, an umbrella, and a cart are provided. Dogs welcome with pet fee.",
    "details": "Six seater golf cart available for rental. Not included in stay.\nTHE VIEW\nThe house sits on the narrow stretch of the island with water on both sides, Intracoastal one way, Gulf the other. Climb to the rooftop deck for both at once. It is the best seat in the house for sunset, and the reason most guests book.\nINSIDE\nFully stocked kitchen with a four-burner stove, bar seating, and a\ndining table for four. Living room with a large sectional sleeper\nsofa, accent chairs, and a big-screen TV. Sliding doors open to the front balcony for the breeze and the water view. Full-size washer and dryer.\nBEDROOMS AND BATHS\n- Primary suite: King, ensuite bath with walk-in shower, waterway\nviews\n- Second bedroom: Queen\n- Living room: Sleeper sofa\n- Full hallway bath with tub/shower combo, plus a third half bath\nTwo and a half bathrooms for six guests. Nobody waits.\nOUTSIDE\nFenced backyard with a heated pool and in-ground spa, six loungers, and a screened porch with seating and a big-screen TV for the evening. Gas grill. Outdoor shower for rinsing off after the beach, beach chairs, umbrella, and a cart are here too. Game room for the kids with ping pong table, arcade video games and more!\nTHE LOCATION\nCortez Beach is about a two-minute walk. Coquina Beach and the restaurants and shops of Bridge Street are within a ten-minute stroll. The free island trolley runs the length of Anna Maria Island.\nOther Details to Note\nBEACH GEAR INCLUDED\n4 beach chairs, a beach cart, and a beach umbrella, plus an outdoor shower. All bath towels, beach towels, and linens provided.\nDOGS\nDogs welcome with prior approval. A pet fee applies -$150.\nPARKING\nUp to 4 vehicles.\nGOOD TO KNOW\n- The rooftop deck is reached by an exterior stair from the front\nbalcony. Not suitable for unsupervised young children.\n- The pool is heated all year-round 85 degrees. Spa heats up to 104 degrees.\n-Game room consists of Ping pong, and two arcade games for kids.\n- Residential street. Please keep noise considerate day and night.",
    "neighborhood": "Small island beach town on Anna Maria Island’s Bradenton Beach district. Close to Bridge Street (shops, bars, restaurants, fishing pier), Coquina Beach and public beach accesses on Gulf Drive, with a relaxed Gulf-front vibe by day and a lively Bridge Street scene by evening. Short local grocery, cafes and rental outfitters nearby; residential blocks behind the commercial strip are quieter.",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Hair dryer",
          "Heating",
          "Hot tub",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "Alfresco dining",
          "BBQ",
          "Beach essentials",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Private entrance"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ethernet connection"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/00.webp",
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/01.webp",
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/02.webp",
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/03.webp",
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/04.webp",
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/05.webp",
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/06.webp",
      "/assets/residences/rooftop-deck-heated-pool-spa-1-min-to-beach/07.webp"
    ],
    "license": null,
    "sourceUrl": "https://coastalreserveproperties.com/property/rooftop-deck-heated-pool-spa-1-min-to-beach"
  },
  {
    "slug": "top-floor-gulf-front-sunset-balcony-heated-pool",
    "name": "Coconuts 109",
    "bookingId": "2356668",
    "title": "Top-Floor Gulf Front · Sunset Balcony · Heated Pool",
    "town": "Holmes Beach",
    "guests": 4,
    "bedrooms": 1,
    "baths": 1,
    "summary": "Coconuts 109 is a top-floor, Gulf-front one-bedroom on the beach in Holmes Beach. Water views from the kitchen, living room, and the sunset balcony -where two loungers and a dining table face west for the sunset. King bed, queen sleeper, full kitchen, in-unit washer and dryer. Shared heated pool and poolside grills a few steps away, and the sand is straight down through the dune path. Sleeps four.",
    "details": "VRC # VRC16-000668\nSix-seater golf cart available for rental. Not included in stay.\nTHE VIEW\nThis is the top floor of the beachfront building- the elevation is\nthe point. Uninterrupted Gulf views from the open kitchen, dining, and living area, and the sun goes down in front of you. Ground-floor units have the dune between them and the water; from up here you see over it.\nTHE BALCONY\nWest-facing, directly above the beach. Two chaise loungers and a dining table for four. Turtle-safe lighting for the evenings, so you can sit out without disturbing the nesting season.\nINSIDE\n- Bedroom: King with a luxury mattress and down pillows, smart TV\n- Living room: Queen sleeper sofa, smart TV, Gulf views\n- Bath: Walk-in shower, shampoo, conditioner, body wash\n- Kitchen: Stainless appliances, full-size fridge with filtered water\nand ice, oven, microwave, dishwasher, cookware, drip/Keurig combo\n- In-unit washer and dryer, four luggage racks, dimmable lighting\nHotel-quality linens from a professional service. Bath towels and\nbeach towels provided.\nTHE GROUNDS\nShared heated pool with patio furniture and propane grills, set in\ntropical landscaping between the buildings. Beach access is direct from the west side of the building through the dune path.\nTHE LOCATION\nManatee County Beach is right here. Bean Point is about a ten-minute walk north. The free island trolley runs the length of Anna Maria Island.\nOther Details to Note\nGETTING IN\nCoconuts 109 is on the top floor of a two-story building, reached by an exterior staircase. There is no elevator. If stairs are a concern, ask, we have ground-floor units in the same building.\nBEACH GEAR\nBeach chairs and a beach umbrella provided, plus all bath towels,\nbeach towels, and linens.\nPARKING\n1 assigned parking spot \"109\"\nSHARED COMMUNITY\nCoconuts is a shared condo community with other owners and guests. Please keep noise considerate around the pool and on the balconies, day and night.",
    "neighborhood": "Mid-island Holmes Beach on Anna Maria Island, a relaxed, primarily residential beach neighborhood with easy access to public gulf beaches (multiple beach access points on Gulf Drive), local cafes, casual seafood restaurants, a nearby grocery market and rentals (bikes, kayaks, golf carts). The vibe is quiet and family-oriented by day, with low-rise cottages, condo buildings and sunset views across the Gulf. Popular nearby spots: Manatee Public Beach and the Sandbar/Bean Point areas and short drives to Pine Avenue (shops/restaurants) and Bridge Street in Bradenton Beach.",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "BBQ",
          "Beach essentials",
          "Outdoor seating",
          "Patio"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Private entrance",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/00.webp",
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/01.webp",
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/02.webp",
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/03.webp",
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/04.webp",
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/05.webp",
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/06.webp",
      "/assets/residences/top-floor-gulf-front-sunset-balcony-heated-pool/07.webp"
    ],
    "license": "VRC16-000668",
    "sourceUrl": "https://coastalreserveproperties.com/property/top-floor-gulf-front-sunset-balcony-heated-pool"
  },
  {
    "slug": "beachfront-heated-pool-steps-to-the-sand",
    "name": "Coconuts 106",
    "bookingId": "2356698",
    "title": "Beachfront · Heated Pool · King Bed",
    "town": "Holmes Beach",
    "guests": 4,
    "bedrooms": 1,
    "baths": 1,
    "summary": "Coconuts 106 is a renovated ground-floor beachfront one-bedroom on Holmes Beach. Open the back slider, cross the screened lanai, and you are on the sand, no stairs at all. Gulf views from the living room, kitchen, and lanai. King bed, queen sleeper, full kitchen, shared heated pool and grills. Four beach chairs, a cart, and an umbrella included. Sleeps four.",
    "details": "VRC # VRC16-000666\nSix- seater golf cart available for rental. Not included in stay.\nTHE ACCESS\nGround floor, directly on the beach. No stairs between your bed and the water, through the slider, across the screened lanai, onto the sand. Good for grandparents, toddlers, and anyone hauling a cooler.\nTHE LANAI\nScreened and facing the water. Morning coffee, evening drinks, sand\nstays outside.\nINSIDE\nRenovated and open-plan, bright throughout, with Gulf views from the living room and kitchen.\n- Bedroom: King with a Stearns & Foster Lux Estate mattress and\npremium pillows, smart TV\n- Living area: Queen sleeper sofa\n- Bath: Updated, with a spacious walk-in shower\n- Kitchen: Fully equipped, with a dining nook\n-Towels, beach chairs & umbrellas included.\nTHE GROUNDS\nShared heated pool with lounge chairs, propane grills, and outdoor dining, set in tropical landscaping between the buildings.\nTHE LOCATION\nThe sand is at your door. Bean Point is about a ten-minute walk north.\nThe free island trolley runs the length of Anna Maria Island.\nOther Details to Note\nLAUNDRY, PLEASE READ\nThere is no washer or dryer inside this unit. Coin-operated laundry is available on the property.\nIf in-unit laundry matters for your stay, ask us - we have units in\nthis building that have it.\nPARKING\nOne vehicle in the space marked \"Unit 106.\"\nMINIMUM STAY\nShort stays are welcome here. Most of the island requires a full\nweek; this building does not.\nBEACH GEAR\n4 beach chairs, a beach cart, and a beach umbrella, plus all bath\ntowels, beach towels, and linens.\nSHARED COMMUNITY\nCoconuts is a shared condo community with other owners and guests.\nYou are also vacationing in a residential area, please keep noise at a respectful level day and night.",
    "neighborhood": "Quiet, walkable beach neighborhood on Anna Maria Island (Holmes Beach) with close access to sandy Gulf beaches, Gulf Drive restaurants and cafes, small grocery/convenience stores on or near Manatee Avenue, and local services in nearby Bradenton and Longboat Key. The area feels residential with tourist-oriented amenities and short distances to Pier/Bridge Street attractions in Bradenton Beach to the south.",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "Alfresco dining",
          "BBQ",
          "Beach essentials",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Laundromat nearby",
          "Private entrance",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ethernet connection"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Single level home",
          "No stairs in home"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/00.webp",
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/01.webp",
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/02.webp",
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/03.webp",
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/04.webp",
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/05.webp",
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/06.webp",
      "/assets/residences/beachfront-heated-pool-steps-to-the-sand/07.webp"
    ],
    "license": "VRC16-000666",
    "sourceUrl": "https://coastalreserveproperties.com/property/beachfront-heated-pool-steps-to-the-sand"
  },
  {
    "slug": "beachfront-heated-pool-screened-patio-on-sand",
    "name": "Coconuts 105",
    "bookingId": "2356679",
    "title": "Beachfront · Heated Pool · King Bed",
    "town": "Holmes Beach",
    "guests": 4,
    "bedrooms": 1,
    "baths": 1,
    "summary": "Coconuts 105 is a ground-floor, Gulf-front one-bedroom on Anna Maria Island. Slide open the doors, cross the screened patio, and you are on the sand, no stairs, no lobby, no walk. King bed, queen sleeper, full kitchen, in-unit washer and dryer, hotel-quality linens. Shared heated pool with grills a few steps away. Dedicated parking space. Sleeps four.",
    "details": "VRC # VRC21-000179\nSix- seater golf cart available for rental. Not included in stay.\nTHE ACCESS\nThis is the ground floor of the beachfront building. There are no\nstairs anywhere between your bed and the water, through the sliding doors, across the screened patio, onto the sand. If you have a grandparent, a toddler, a wagon of beach gear, or a bad knee, this is the unit.\nTHE PATIO\nScreened, private, and facing the water. Coffee in the morning,\nsunset in the evening, no sand in the living room.\nINSIDE\n- Bedroom: King with a Stearns & Foster mattress, down pillows,\nsmart TV\n- Living room: Queen sleeper sofa, 70-inch smart TV\n- Bath: Walk-in shower\n- Kitchen: Stainless appliances, full-size fridge with filtered water\nand ice, oven, microwave, dishwasher, cookware, drip/Keurig combo\n- Full-size front-load washer and dryer in the unit\n-Towels, beach chairs & umbrellas included.\nHotel-quality linens from a professional service. Bath towels and\nbeach towels provided.\nTHE GROUNDS\nShared heated pool with propane grills and patio furniture, set in\ntropical landscaping between the buildings.\nTHE LOCATION\nThe sand is at your door. Manatee County Beach and Palmetto Ave Beach are a short walk north, and Bean Point is a longer stroll. The free island trolley runs the length of Anna Maria Island. Good streets for walking, biking, and running.\nOther Details to Note\nFor your convenience, the home includes 2 beach chairs, , a beach umbrella, and all the bath towels, beach towels, and linens you'll need, everything ready for a relaxing stay!\n1 car maximum is able to park in the dedicated \"105\" parking space. For any over flow there is parking on the road. Always remember to park the way of traffic with all 4 tires off the pavement. We ask our guests to please plan accordingly and coordinate with your group.\nPlease Remember: \"You are vacationing in a residential area. Please be a good neighbor by keeping the noise to a respectful level during the day and night. Excessive and unreasonable noise can deprive neighbors of the peaceful enjoyment of their private property.\"",
    "neighborhood": "Quiet, low‑rise beach neighborhood on Anna Maria Island. Short walks to Manatee Public Beach, Gulf Drive restaurants, ice cream shops and convenience stores. Close to the Anna Maria City Pier (south) and Coquina Beach (north), with easy day trips to Bradenton and Sarasota for grocery stores, medical services and larger dining/entertainment options.",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Kitchen",
          "Dedicated workspace",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Outdoor shower",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "BBQ",
          "Beach essentials",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Private entrance",
          "Resort access",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron",
          "Room-darkening shades"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Entertainment",
        "items": [
          "Ethernet connection"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Single level home",
          "No stairs in home"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/00.webp",
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/01.webp",
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/02.webp",
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/03.webp",
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/04.webp",
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/05.webp",
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/06.webp",
      "/assets/residences/beachfront-heated-pool-screened-patio-on-sand/07.webp"
    ],
    "license": "VRC21-000179",
    "sourceUrl": "https://coastalreserveproperties.com/property/beachfront-heated-pool-screened-patio-on-sand"
  },
  {
    "slug": "heated-pool",
    "name": "Coconuts 102",
    "bookingId": "2330159",
    "title": "Romantic Poolside Villa • Heated Pool • Steps to beach",
    "town": "Holmes Beach",
    "guests": 4,
    "bedrooms": 1,
    "baths": 1,
    "summary": "Step out your door and you’re poolside. Coconuts 102 is a single-story villa in a quiet corner of Holmes Beach, the heated pool right outside your living room, the beach a short walk away. Recently updated, no stairs, easy to love. The poolside spot, not the beachfront one, and that’s the point.",
    "details": "Six-seater golf cart available for rental. Not included in stay.\nTHE SPACE\nOne bedroom, one bath, all on a single floor, no stairs, no elevator, no hauling bags upstairs. The living room's south windows open onto the pool deck; curtains draw when you want the room to yourself. Recently updated throughout. Full kitchen with everything you'd actually cook with, dining table, in-unit washer, room-darkening shades, central A/C and ceiling fans. Private entrance on the quiet north side, away from pool traffic.\nTowels, beach chairs & umbrellas included.\nGUEST ACCESS\nThe whole villa is yours. The heated pool is a few steps out the living room side, you'll use it more than you think. Free parking (1 assigned spot) on the property, no permit, no hunting for a spot. The beach is a short walk west through the resort; there's a path straight through the dunes to the sand. Beach chairs and towels are in the unit.\nTHE NEIGHBORHOOD\n73rd Street sits in the quiet north end of Holmes Beach, residential, low-rise, no high-rises anywhere on the island. The Gulf is seconds away on foot. Manatee Public Beach with its café and restrooms is a short ride south, and the shops and restaurants on Pine Avenue in Anna Maria are ten minutes up Gulf Drive. Groceries, coffee, and takeout are all within a mile.\nGETTING AROUND\nYou can leave the car parked. The free Anna Maria Island Trolley runs the length of the island every twenty minutes and stops near the complex, it'll get you to Bean Point, the Bridge Street pier, and most restaurants without a parking meter in sight. Bikes and golf carts rent locally. If you're flying into Tampa or Sarasota, a car is easiest for the drive in.\nOTHER THINGS TO NOTE\nThis is a one-bedroom, so it's best for a couple or a small family, sleeps up to four, not a group. The complex has coined laundry washer and drier. Coconuts is a shared complex with other owners, so the pool and grounds are common areas. Smart lock entry, please lock the door behind you when you head out. No pets, no smoking, no events or parties. Check-in 4 PM, checkout 10 AM.",
    "neighborhood": "",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Kitchen",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "BBQ",
          "Beach essentials",
          "Outdoor seating",
          "Patio",
          "Sun loungers"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Laundromat nearby",
          "Private entrance",
          "Resort access",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron",
          "Room-darkening shades",
          "Clothing storage"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Single level home",
          "No stairs in home",
          "Free street parking"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/heated-pool/00.webp",
      "/assets/residences/heated-pool/01.webp",
      "/assets/residences/heated-pool/02.webp",
      "/assets/residences/heated-pool/03.webp",
      "/assets/residences/heated-pool/04.webp",
      "/assets/residences/heated-pool/05.webp",
      "/assets/residences/heated-pool/06.webp",
      "/assets/residences/heated-pool/07.webp"
    ],
    "license": null,
    "sourceUrl": "https://coastalreserveproperties.com/property/heated-pool"
  },
  {
    "slug": "heated-pool-1",
    "name": "Coconuts",
    "bookingId": "2330162",
    "title": "2BR Family Condo • Heated Pool • Steps to Sand",
    "town": "Holmes Beach",
    "guests": 8,
    "bedrooms": 2,
    "baths": 2,
    "summary": "Top-floor two-bedroom built for families who don't want to share a bathroom. A king, two queens, and a sleeper sofa across two bedrooms and two full baths , eight people, real space. The west-facing balcony looks out over the pool with a slice of Gulf past the beachfront buildings, and it's the spot you'll end up every evening. Set at the quiet back edge of Coconuts, away from beach foot traffic, with the pool and the sand both a short walk from the door.",
    "details": "We offer six-seater golf cart rentals. Not included in stay.\nYour space\nCoconuts is a small three-building complex on 73rd Street in Holmes Beach, and 117 sits at the south end of the top floor in the back building- the quietest corner of the property.\nInside: a primary bedroom with a king, a second bedroom with two queens, and a sleeper sofa in the living room. Two full baths mean the morning routine doesn't turn into a queue. Full kitchen, in-unit laundry, and a dining table that seats everyone at once.\nThe balcony is the reason people rebook this unit. It faces west across the pool deck, and past the beachfront buildings you catch the Gulf and the end of the sunset. It's a partial view, not a panorama- I'd rather tell you that now than have you find out.\nThe beach is about a two-minute walk through the complex. The pool sits in the center of the property, shared with the other buildings, and it's rarely crowded outside of spring break.\nTowels, beach chairs & umbrellas included.\nGuest access\nThe whole unit is yours, plus the shared pool, the beach path, and two assigned parking spots on the south side of the building. Beach chairs, an umbrella, and towels are in the unit- take them down and bring them back.\nOther things to note\n117 is on the top floor of a two-story building and there's no elevator, so you'll be carrying bags up one flight. Worth knowing if anyone in your group has trouble with stairs, my ground-floor units at Coconuts are a better fit there.\nNeighboring units are owned and rented by other families, so you'll have people around. It's a friendly complex, not a resort.",
    "neighborhood": "",
    "amenities": [
      {
        "group": "Common",
        "items": [
          "Air conditioning",
          "Cooking basics",
          "Dishes and silverware",
          "Dryer",
          "Essentials",
          "Hair dryer",
          "Heating",
          "Kitchen",
          "Pool",
          "TV",
          "Washing Machine",
          "Wifi"
        ]
      },
      {
        "group": "Kitchen and dining",
        "items": [
          "Baking sheet",
          "Barbecue utensils",
          "Blender",
          "Coffee",
          "Coffee maker",
          "Dining table",
          "Dishwasher",
          "Freezer",
          "Hot water kettle",
          "Microwave",
          "Oven",
          "Refrigerator",
          "Stove",
          "Toaster",
          "Wine glasses"
        ]
      },
      {
        "group": "Bathroom",
        "items": [
          "Bathtub",
          "Body soap",
          "Conditioner",
          "Hot Water",
          "Shampoo",
          "Shower gel"
        ]
      },
      {
        "group": "Outdoors",
        "items": [
          "BBQ",
          "Beach essentials",
          "Garden or backyard",
          "Outdoor seating",
          "Patio"
        ]
      },
      {
        "group": "Location features",
        "items": [
          "Beach access",
          "Laundromat nearby",
          "Private entrance",
          "Resort access",
          "Waterfront"
        ]
      },
      {
        "group": "Bedroom and laundry",
        "items": [
          "Bed linens",
          "Extra pillows and blankets",
          "Hangers",
          "Iron",
          "Clothing storage"
        ]
      },
      {
        "group": "Heating and cooling",
        "items": [
          "Ceiling fan"
        ]
      },
      {
        "group": "Home safety",
        "items": [
          "Fire extinguisher",
          "Smoke detector"
        ]
      },
      {
        "group": "Parking and facilities",
        "items": [
          "Free parking on premises",
          "Private living room",
          "Free street parking"
        ]
      },
      {
        "group": "Services",
        "items": [
          "Long term stays allowed"
        ]
      }
    ],
    "images": [
      "/assets/residences/heated-pool-1/00.webp",
      "/assets/residences/heated-pool-1/01.webp",
      "/assets/residences/heated-pool-1/02.webp",
      "/assets/residences/heated-pool-1/03.webp",
      "/assets/residences/heated-pool-1/04.webp",
      "/assets/residences/heated-pool-1/05.webp",
      "/assets/residences/heated-pool-1/06.webp",
      "/assets/residences/heated-pool-1/07.webp"
    ],
    "license": null,
    "sourceUrl": "https://coastalreserveproperties.com/property/heated-pool-1"
  }
];
