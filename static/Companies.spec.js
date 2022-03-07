describe("Parcourir un tableau d'objets", () => {

  /** Suite d'exercices afin d'apprendre à parcourir un tableau composé de multiples objets.
   *  Créer des fonctions afin de filtrer, d'ordonner
   *  ou encore de formater des données.
   */


  /** Regrouper la table/database dans une constante
   */

  const database = function () {
    return [
      {
        "inc5000companyId": 116153,
        "inc5000yearId": 237199,
        "rank": 1,
        "featured_image": null,
        "company": "Human Bees",
        "workers": 75,
        "previous_workers": 13,
        "ceo_gender": "Male",
        "ifc_filelocation": "human-bees",
        "website": "humanbees.com",
        "state_s": "CA",
        "state_l": "California",
        "city": "Lathrop",
        "growth": 48345,
        "revenue": "52 Million",
        "ifc_ifiid": 17,
        "industry": "Business Products & Services",
        "ifc_ifmid": 44700,
        "metro": null,
        "metrocode": "Stockton, CA",
        "name": null,
        "zipcode": 95330,
        "founded": 2012,
        "ifc_business_model": "Supplies quality talent for temporary workforce needs at a moment's notice.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 52011050,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "magazine/202104/kevin-j-ryan/human-bees-staffing-agency-inc5000-california.html",
            "inc_typid": "1"
          },
          {
            "inc_filelocation": "magazine/202109/peter-keating/human-bees-ranil-piyaratna-geetesh-goyal-staffing-inc-5000-2021.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10",
          "Minority Leaders"
        ]
      },
      {
        "inc5000companyId": 115394,
        "inc5000yearId": 237203,
        "rank": 2,
        "featured_image": null,
        "company": "Carbon Health",
        "workers": 720,
        "previous_workers": 76,
        "ceo_gender": "Male",
        "ifc_filelocation": "carbon-health",
        "website": "https://carbonhealth.com/",
        "state_s": "CA",
        "state_l": "California",
        "city": "San Francisco",
        "growth": 39734,
        "revenue": "45.7 Million",
        "ifc_ifiid": 54,
        "industry": "Health Services",
        "ifc_ifmid": 41860,
        "metro": "San Francisco",
        "metrocode": "San Francisco-Oakland-Berkeley, CA",
        "name": null,
        "zipcode": 94111,
        "founded": 2015,
        "ifc_business_model": "Provides primary and urgent care",
        "ifc_business_description": "<p></p>",
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 45700000,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "magazine/202109/tom-foster/carbon-health-eren-bali-udemy-primary-care-inc-5000-2021.html",
            "inc_typid": "1"
          },
          {
            "inc_filelocation": "video/how-carbon-health-is-disrupting-the-health-care-industry.html",
            "inc_typid": "4"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10",
          "Minority Leaders"
        ]
      },
      {
        "inc5000companyId": 81708,
        "inc5000yearId": 237207,
        "rank": 3,
        "featured_image": null,
        "company": "Upstream Life Insurance Company",
        "workers": 9,
        "previous_workers": 3,
        "ceo_gender": "Male",
        "ifc_filelocation": "Upstream-Life-Insurance-Company",
        "website": "upstreamlife.us",
        "state_s": "MS",
        "state_l": "Mississippi",
        "city": "Oxford",
        "growth": 36955,
        "revenue": "193.5 Million",
        "ifc_ifiid": 1,
        "industry": "Insurance",
        "ifc_ifmid": null,
        "metro": null,
        "metrocode": null,
        "name": null,
        "zipcode": 38655,
        "founded": 1912,
        "ifc_business_model": "Provides annuities, life insurance, and other financial services to customers across the U.S.",
        "ifc_business_description": null,
        "ifc_paid_business_description": "<p>Upstream Life is an industry leading life insurance company that provides fixed annuity products to the market. Upstream Life was founded to provide niche life insurance products that bridge the gap between fixed and variable annuities with both the client and agent in mind.</p>",
        "ifc_verified_companyflag": "TRUE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 193532547,
        "yrs_on_list": 2,
        "article": [],
        "editorsPick": [
          "The Top 10",
          "Time Tested",
          "Repeat Honorees"
        ]
      },
      {
        "inc5000companyId": 121083,
        "inc5000yearId": 237211,
        "rank": 4,
        "featured_image": null,
        "company": "Revolutionary Clinics",
        "workers": 330,
        "previous_workers": 34,
        "ceo_gender": "Male",
        "ifc_filelocation": "revolutionary-clinics-ii",
        "website": "revolutionaryclinics.org",
        "state_s": "MA",
        "state_l": "Massachusetts",
        "city": "Fitchburg",
        "growth": 32997,
        "revenue": "40.7 Million",
        "ifc_ifiid": 10,
        "industry": "Health",
        "ifc_ifmid": 49340,
        "metro": "Worcester",
        "metrocode": "Worcester, MA-CT",
        "name": null,
        "zipcode": 1420,
        "founded": 2016,
        "ifc_business_model": "Raises the standard for alternative care through its three registered marijuana dispensaries.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 40697000,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "brit-morse/revolutionary-clinics-cannabis-recreational-marijuana-inc5000-2021.html",
            "inc_typid": "1"
          },
          {
            "inc_filelocation": "video/how-this-founder-landed-his-cannabis-company-on-the-2021-inc-5000-list.html",
            "inc_typid": "4"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10"
        ]
      },
      {
        "inc5000companyId": 115418,
        "inc5000yearId": 237215,
        "rank": 5,
        "featured_image": null,
        "company": "Dave",
        "workers": 151,
        "previous_workers": 16,
        "ceo_gender": "Male",
        "ifc_filelocation": "dave",
        "website": "https://dave.com/",
        "state_s": "CA",
        "state_l": "California",
        "city": "Los Angeles",
        "growth": 28972,
        "revenue": "121.8 Million",
        "ifc_ifiid": 2,
        "industry": "Financial Services",
        "ifc_ifmid": 31080,
        "metro": "Los Angeles",
        "metrocode": "Los Angeles-Long Beach-Anaheim, CA",
        "name": null,
        "zipcode": 90019,
        "founded": 2016,
        "ifc_business_model": "Offers a banking app with financial tools to help people build positive financial habits",
        "ifc_business_description": "<p></p>",
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 121844424,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "christine-lagorio-chafkin/dave-jason-wilk-banking-financial-services-inc5000-2021.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10"
        ]
      },
      {
        "inc5000companyId": 121087,
        "inc5000yearId": 237219,
        "rank": 6,
        "featured_image": null,
        "company": "Brander Group",
        "workers": 5,
        "previous_workers": 1,
        "ceo_gender": "Male",
        "ifc_filelocation": "brander-group",
        "website": "brandergroup.net",
        "state_s": "AZ",
        "state_l": "Arizona",
        "city": "Scottsdale",
        "growth": 27096,
        "revenue": "30.8 Million",
        "ifc_ifiid": 28,
        "industry": "IT Management",
        "ifc_ifmid": 38060,
        "metro": "Phoenix",
        "metrocode": "Phoenix-Mesa-Chandler, AZ",
        "name": null,
        "zipcode": 85251,
        "founded": 2016,
        "ifc_business_model": "Offers IT consulting services that help companies reduce costs and streamline their operations.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 30808346,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "amrita-khalid/brander-group-jake-brander-inc5000-2021.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10"
        ]
      },
      {
        "inc5000companyId": 116161,
        "inc5000yearId": 237223,
        "rank": 7,
        "featured_image": null,
        "company": "Varo Bank",
        "workers": 561,
        "previous_workers": 61,
        "ceo_gender": "Male",
        "ifc_filelocation": "varo-bank",
        "website": "https://www.varomoney.com/",
        "state_s": "CA",
        "state_l": "California",
        "city": "San Francisco",
        "growth": 23935,
        "revenue": "41.3 Million",
        "ifc_ifiid": 2,
        "industry": "Financial Services",
        "ifc_ifmid": 41860,
        "metro": "San Francisco",
        "metrocode": "San Francisco-Oakland-Berkeley, CA",
        "name": null,
        "zipcode": 94104,
        "founded": 2015,
        "ifc_business_model": "Offers digital banking services including checking accounts, high-yield savings accounts, and credit",
        "ifc_business_description": "<p></p>",
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 41341000,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "sophie-downes/varo-bank-colin-walsh-fintech-inc5000-2021.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10"
        ]
      },
      {
        "inc5000companyId": 121091,
        "inc5000yearId": 237227,
        "rank": 8,
        "featured_image": null,
        "company": "Hardbody Supplements",
        "workers": 2,
        "previous_workers": 2,
        "ceo_gender": "Male",
        "ifc_filelocation": "hardbody-supplements",
        "website": "hardbodynutritional.com",
        "state_s": "KS",
        "state_l": "Kansas",
        "city": "overland park",
        "growth": 22948,
        "revenue": "25.7 Million",
        "ifc_ifiid": 10,
        "industry": "Health",
        "ifc_ifmid": 28140,
        "metro": "Kansas City",
        "metrocode": "Kansas City, MO-KS",
        "name": null,
        "zipcode": 66221,
        "founded": 2016,
        "ifc_business_model": "Makes organic supplements free of fillers, preservatives, binders, or artificial colors or flavors.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 25665498,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "anna-meyer/hardbody-supplements-fitness-wellness-instagram-inc5000-2021.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10",
          "Minority Leaders"
        ]
      },
      {
        "inc5000companyId": 107625,
        "inc5000yearId": 237231,
        "rank": 9,
        "featured_image": null,
        "company": "Paxon Energy",
        "workers": 125,
        "previous_workers": 1,
        "ceo_gender": "Female",
        "ifc_filelocation": "paxon-energy",
        "website": "paxonengineering.com",
        "state_s": "CA",
        "state_l": "California",
        "city": "Pleasanton",
        "growth": 22742,
        "revenue": "33.8 Million",
        "ifc_ifiid": 16,
        "industry": "Energy",
        "ifc_ifmid": 41860,
        "metro": "San Francisco",
        "metrocode": "San Francisco-Oakland-Berkeley, CA",
        "name": null,
        "zipcode": 94588,
        "founded": 2016,
        "ifc_business_model": "Designs and executes energy-efficient solutions for a cleaner and safer future.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 33767500,
        "yrs_on_list": 2,
        "article": [
          {
            "inc_filelocation": "magazine/202009/kimberly-weisul/paxon-energy-infrastructure-nooshin-behroyan-2020-inc5000.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "The Top 10",
          "Repeat Honorees",
          "Women Leaders",
          "Minority Leaders"
        ]
      },
      {
        "inc5000companyId": 121095,
        "inc5000yearId": 237235,
        "rank": 10,
        "featured_image": null,
        "company": "Budderfly",
        "workers": 90,
        "previous_workers": 20,
        "ceo_gender": "Male",
        "ifc_filelocation": "budderfly",
        "website": "http://budderfly.com",
        "state_s": "CT",
        "state_l": "Connecticut",
        "city": "SHELTON",
        "growth": 22486,
        "revenue": "24.6 Million",
        "ifc_ifiid": 16,
        "industry": "Energy",
        "ifc_ifmid": 14860,
        "metro": "Bridgeport",
        "metrocode": "Bridgeport-Stamford-Norwalk, CT",
        "name": null,
        "zipcode": 6484,
        "founded": 2007,
        "ifc_business_model": "Conserves energy for clients at no cost with software and lighting, HVAC, and refrigeration systems.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 24571530,
        "yrs_on_list": 1,
        "article": [],
        "editorsPick": [
          "The Top 10"
        ]
      },
      {
        "inc5000companyId": 121099,
        "inc5000yearId": 237239,
        "rank": 11,
        "featured_image": null,
        "company": "Texas Solar",
        "workers": 85,
        "previous_workers": 5,
        "ceo_gender": "Male",
        "ifc_filelocation": "texas-solar-integrated",
        "website": "http://txsolar.com",
        "state_s": "TX",
        "state_l": "Texas",
        "city": "San Antonio",
        "growth": 22381,
        "revenue": "36.9 Million",
        "ifc_ifiid": 20,
        "industry": "Construction",
        "ifc_ifmid": 41700,
        "metro": "San Antonio",
        "metrocode": "San Antonio-New Braunfels, TX",
        "name": null,
        "zipcode": 78249,
        "founded": 2006,
        "ifc_business_model": "Designs, develops, installs, and maintains residential solar energy systems in Texas.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 36859132,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 121103,
        "inc5000yearId": 237243,
        "rank": 12,
        "featured_image": null,
        "company": "Solgen Power",
        "workers": 250,
        "previous_workers": 8,
        "ceo_gender": "Male",
        "ifc_filelocation": "solgen-power",
        "website": "solgenpower.com",
        "state_s": "WA",
        "state_l": "Washington",
        "city": "Pasco",
        "growth": 21790,
        "revenue": "33.2 Million",
        "ifc_ifiid": 16,
        "industry": "Energy",
        "ifc_ifmid": 28420,
        "metro": "Kennewick",
        "metrocode": "Kennewick-Richland, WA",
        "name": null,
        "zipcode": 99301,
        "founded": 2017,
        "ifc_business_model": "Sells and installs solar equipment, primarily in the Pacific Northwest.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 33223513,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 121107,
        "inc5000yearId": 237247,
        "rank": 13,
        "featured_image": null,
        "company": "Olympic Media",
        "workers": 26,
        "previous_workers": 1,
        "ceo_gender": "Male",
        "ifc_filelocation": "olympic-media",
        "website": "Olympicmedia.com",
        "state_s": "VA",
        "state_l": "Virginia",
        "city": "Arlington",
        "growth": 20330,
        "revenue": "28.5 Million",
        "ifc_ifiid": 5,
        "industry": "Advertising & Marketing",
        "ifc_ifmid": 47900,
        "metro": "Washington, DC",
        "metrocode": "Washington-Arlington-Alexandria, DC-VA-MD-WV",
        "name": null,
        "zipcode": 22209,
        "founded": 2017,
        "ifc_business_model": "Specializes in digital copywriting, advertising, and marketing automation.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 28473014,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 121111,
        "inc5000yearId": 237251,
        "rank": 14,
        "featured_image": null,
        "company": "Solar Bear",
        "workers": 226,
        "previous_workers": 6,
        "ceo_gender": "Male",
        "ifc_filelocation": "solar-bear",
        "website": "oursolarbear.com",
        "state_s": "FL",
        "state_l": "Florida",
        "city": "CLEARWATER",
        "growth": 19218,
        "revenue": "29.6 Million",
        "ifc_ifiid": 16,
        "industry": "Energy",
        "ifc_ifmid": 45300,
        "metro": "Tampa",
        "metrocode": "Tampa-St. Petersburg-Clearwater, FL",
        "name": null,
        "zipcode": 33764,
        "founded": 2016,
        "ifc_business_model": "Turns homes and businesses green through solar panels, spray foam insulation, and roofing.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 29595125,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 104313,
        "inc5000yearId": 237255,
        "rank": 15,
        "featured_image": null,
        "company": "Snappy ",
        "workers": 78,
        "previous_workers": 8,
        "ceo_gender": "Female",
        "ifc_filelocation": "snappy-gifts",
        "website": "http://www.snappy.com ",
        "state_s": "NY",
        "state_l": "New York",
        "city": "New York",
        "growth": 18708,
        "revenue": "41.8 Million",
        "ifc_ifiid": 17,
        "industry": "Business Products & Services",
        "ifc_ifmid": 35620,
        "metro": "New York",
        "metrocode": "New York-Newark-Jersey City, NY-NJ-PA",
        "name": null,
        "zipcode": 10003,
        "founded": 2015,
        "ifc_business_model": "Helps companies boost morale and improve performance by offering a curated collection of gifts.",
        "ifc_business_description": "<h2>WHY WE'RE A BEST PLACE TO WORK</h2>\r\n<p>At Snappy Gifts, we work hard to develop and nurture our company culture. We host monthly in-office massages, biweekly happy hours, weekly catered lunches, fun activities all year, and holiday parties. We offer employees unlimited paid time off because we believe in work-life balance, and premium health insurance plans for employees and their spouses at no cost because health and well-being is our top priority. Our offices are pet friendly, as we want employees to feel happy and comfortable when working.</p>",
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 41818891,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "magazine/202104/kevin-j-ryan/snappy-corporate-gift-employee-swag-inc5000-new-york.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article",
        "editorsPick": [
          "Women Leaders",
          "Minority Leaders"
        ]
      },
      {
        "inc5000companyId": 121115,
        "inc5000yearId": 237259,
        "rank": 16,
        "featured_image": null,
        "company": "Banyan Software",
        "workers": 220,
        "previous_workers": 42,
        "ceo_gender": "Male",
        "ifc_filelocation": "banyan-software",
        "website": "banyansoftware.com",
        "state_s": "GA",
        "state_l": "Georgia",
        "city": "Atlanta",
        "growth": 18309,
        "revenue": "32.1 Million",
        "ifc_ifiid": 9,
        "industry": "Software",
        "ifc_ifmid": 12060,
        "metro": "Atlanta",
        "metrocode": "Atlanta-Sandy Springs-Alpharetta, GA",
        "name": null,
        "zipcode": 30346,
        "founded": 2016,
        "ifc_business_model": "Acquires, grows, and holds niche-market enterprise software businesses with high recurring revenues.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 32077039,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 121119,
        "inc5000yearId": 237263,
        "rank": 17,
        "featured_image": null,
        "company": "Casely",
        "workers": 5,
        "previous_workers": 2,
        "ceo_gender": "Male",
        "ifc_filelocation": "casely",
        "website": "getcasely.com",
        "state_s": "NY",
        "state_l": "New York",
        "city": "Brooklyn",
        "growth": 16594,
        "revenue": "20.3 Million",
        "ifc_ifiid": 4,
        "industry": "Consumer Products & Services",
        "ifc_ifmid": 35620,
        "metro": "New York",
        "metrocode": "New York-Newark-Jersey City, NY-NJ-PA",
        "name": null,
        "zipcode": 11249,
        "founded": 2017,
        "ifc_business_model": "Sells unique and trendsetting cases and accessories for smartphones and other devices.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 20281876,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 116741,
        "inc5000yearId": 237267,
        "rank": 18,
        "featured_image": null,
        "company": "Chasen Companies",
        "workers": 14,
        "previous_workers": 4,
        "ceo_gender": "Male",
        "ifc_filelocation": "chasen-companies",
        "website": "chasencompanies.com",
        "state_s": "MD",
        "state_l": "Maryland",
        "city": "Baltimore",
        "growth": 15420,
        "revenue": "22.5 Million",
        "ifc_ifiid": 3,
        "industry": "Real Estate",
        "ifc_ifmid": 12580,
        "metro": "Baltimore",
        "metrocode": "Baltimore-Columbia-Towson, MD",
        "name": null,
        "zipcode": 21231,
        "founded": 2016,
        "ifc_business_model": "Acquires and manages luxury real estate properties in greater Baltimore and D.C.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 22527342,
        "yrs_on_list": 1,
        "article": [
          {
            "inc_filelocation": "magazine/202104/christine-lagorio-chafkin/chasen-companies-construction-inc5000-dc-metro.html",
            "inc_typid": "1"
          }
        ],
        "icon": "article"
      },
      {
        "inc5000companyId": 121123,
        "inc5000yearId": 237271,
        "rank": 19,
        "featured_image": null,
        "company": "BigID",
        "workers": 216,
        "previous_workers": 10,
        "ceo_gender": "Male",
        "ifc_filelocation": "bigid",
        "website": "bigid.com",
        "state_s": "NY",
        "state_l": "New York",
        "city": "New York",
        "growth": 14421,
        "revenue": "18.7 Million",
        "ifc_ifiid": 13,
        "industry": "Security",
        "ifc_ifmid": 35620,
        "metro": "New York",
        "metrocode": "New York-Newark-Jersey City, NY-NJ-PA",
        "name": null,
        "zipcode": 10011,
        "founded": 2016,
        "ifc_business_model": "Helps organizations discover, manage, protect, and get more value from their personal data.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 18680663,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 121127,
        "inc5000yearId": 237275,
        "rank": 20,
        "featured_image": null,
        "company": "Care+Wear",
        "workers": 11,
        "previous_workers": 4,
        "ceo_gender": "Male",
        "ifc_filelocation": "careandwear-ii",
        "website": "http://careandwear.com",
        "state_s": "NY",
        "state_l": "New York",
        "city": "New York",
        "growth": 14114,
        "revenue": "34.1 Million",
        "ifc_ifiid": 10,
        "industry": "Health",
        "ifc_ifmid": 35620,
        "metro": "New York",
        "metrocode": "New York-Newark-Jersey City, NY-NJ-PA",
        "name": null,
        "zipcode": 10005,
        "founded": 2014,
        "ifc_business_model": "Makes adaptive clothing for people receiving chronic and long-term care.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 34078928,
        "yrs_on_list": 1,
        "article": [],
        "editorsPick": [
          "Minority Leaders"
        ]
      },
      {
        "inc5000companyId": 121131,
        "inc5000yearId": 237279,
        "rank": 21,
        "featured_image": null,
        "company": "NP Digital",
        "workers": 330,
        "previous_workers": 4,
        "ceo_gender": "Male",
        "ifc_filelocation": "np-digital",
        "website": "npdigital.com",
        "state_s": "CA",
        "state_l": "California",
        "city": "san diego",
        "growth": 13259,
        "revenue": "33.1 Million",
        "ifc_ifiid": 5,
        "industry": "Advertising & Marketing",
        "ifc_ifmid": 41740,
        "metro": "San Diego",
        "metrocode": "San Diego-Chula Vista-Carlsbad, CA",
        "name": null,
        "zipcode": 92101,
        "founded": 2017,
        "ifc_business_model": "Gives brands the speed and efficiency they need to pivot as fast as the digital marketplace.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 33110784,
        "yrs_on_list": 1,
        "article": []
      },
      {
        "inc5000companyId": 121135,
        "inc5000yearId": 237283,
        "rank": 22,
        "featured_image": null,
        "company": "Wild Willies Brand",
        "workers": 14,
        "previous_workers": 3,
        "ceo_gender": "Male",
        "ifc_filelocation": "wild-willies-brand",
        "website": "wild-willies.com",
        "state_s": "GA",
        "state_l": "Georgia",
        "city": "Alpharetta",
        "growth": 12959,
        "revenue": "14.6 Million",
        "ifc_ifiid": 10,
        "industry": "Health",
        "ifc_ifmid": 12060,
        "metro": "Atlanta",
        "metrocode": "Atlanta-Sandy Springs-Alpharetta, GA",
        "name": null,
        "zipcode": 30005,
        "founded": 2016,
        "ifc_business_model": "Meets men’s grooming needs with nutritional supplements and beard-care products.",
        "ifc_business_description": null,
        "ifc_paid_business_description": null,
        "ifc_verified_companyflag": "FALSE",
        "ifc_custom_field": null,
        "ifc_custom_field_label": null,
        "ifc_custom_field_2": null,
        "ifc_custom_field_2_label": null,
        "ifc_custom_field_3": null,
        "ifc_custom_field_3_label": null,
        "ifc_stockexchange": null,
        "ifc_stockticker": null,
        "raw_revenue": 14627058,
        "yrs_on_list": 1,
        "article": []
      },
    ]
  }


  test("23. Lister les industry 'Health'", () => {
    /** Filtrer la table avec une correspondance clé valeur puis recréer une table avec l'échantillon de données
     *  reformaté selon le souhait du client, grâce à une fonction.
     */

    const
      filtreHealth = database().filter(e => e.industry === 'Health').map(e => ({
            company: e.company,
            rank: e.rank,
            industry: e.industry,
            city: e.city,
            website: e.website,
            raw_revenue: e.raw_revenue
          })
      )

    expect(filtreHealth).toEqual([
        {
          company: 'Revolutionary Clinics',
          rank: 4,
          industry: 'Health',
          city: 'Fitchburg',
          website: 'revolutionaryclinics.org',
          raw_revenue: 40697000
        },
        {
          company: 'Hardbody Supplements',
          rank: 8,
          industry: 'Health',
          city: 'overland park',
          website: 'hardbodynutritional.com',
          raw_revenue: 25665498
        },
        {
          company: 'Care+Wear',
          rank: 20,
          industry: 'Health',
          city: 'New York',
          website: 'http://careandwear.com',
          raw_revenue: 34078928
        },
        {
          company: 'Wild Willies Brand',
          rank: 22,
          industry: 'Health',
          city: 'Alpharetta',
          website: 'wild-willies.com',
          raw_revenue: 14627058
        }
      ]
    )
  })


  test('24. Lister les entreprises', () => {
    /** Recréer une table avec uniquement les valeurs de la clé company,
     * grâce à une fonction.
     */

    const allCompanies = database().map(e => e.company)

    expect(allCompanies).toEqual(expect.arrayContaining([expect.any(String)])) // la valeur est une String
    expect(allCompanies).toEqual([
      'Human Bees',
      'Carbon Health',
      'Upstream Life Insurance Company',
      'Revolutionary Clinics',
      'Dave',
      'Brander Group',
      'Varo Bank',
      'Hardbody Supplements',
      'Paxon Energy',
      'Budderfly',
      'Texas Solar',
      'Solgen Power',
      'Olympic Media',
      'Solar Bear',
      'Snappy ',
      'Banyan Software',
      'Casely',
      'Chasen Companies',
      'BigID',
      'Care+Wear',
      'NP Digital',
      'Wild Willies Brand'
    ])
  })


  test('25. Lister les villes', () => {
    /** Recréer une table avec uniquement les valeurs de la clé city,
     * grâce à une fonction.
     */

    const allCities = database().map(e => e.city)

    expect(allCities).toEqual(expect.arrayContaining([expect.any(String)]))
    expect(allCities).toEqual([
      'Lathrop', 'San Francisco',
      'Oxford', 'Fitchburg',
      'Los Angeles', 'Scottsdale',
      'San Francisco', 'overland park',
      'Pleasanton', 'SHELTON',
      'San Antonio', 'Pasco',
      'Arlington', 'CLEARWATER',
      'New York', 'Atlanta',
      'Brooklyn', 'Baltimore',
      'New York', 'New York',
      'san diego', 'Alpharetta'
    ])
  })


  test('26. Lister les dates de fondation', () => {
    /** Recréer une table avec uniquement les valeurs de la clé founded, grâce à une fonction.
     */

    const allFoundedDate = database().map(e => e.founded)

    expect(allFoundedDate).toEqual(expect.arrayContaining([expect.any(Number)]))
    expect(allFoundedDate).toEqual([
      2012, 2015, 1912, 2016,
      2016, 2016, 2015, 2016,
      2016, 2007, 2006, 2017,
      2017, 2016, 2015, 2016,
      2017, 2016, 2016, 2014,
      2017, 2016
    ])
  })


  test('27. Lister les revenus brut', () => {
    /** Recréer une table avec uniquement les valeurs de la clé raw_revenue et formater les valeurs en USD$
     * grâce à une fonction.
     */

    const allRawRevenu = database().map(e => e.raw_revenue.toLocaleString('us', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }))

    console.log(allRawRevenu)
    expect(allRawRevenu).toEqual([
      '52 011 050,00 $US', '45 700 000,00 $US',
      '193 532 547,00 $US', '40 697 000,00 $US',
      '121 844 424,00 $US', '30 808 346,00 $US',
      '41 341 000,00 $US', '25 665 498,00 $US',
      '33 767 500,00 $US', '24 571 530,00 $US',
      '36 859 132,00 $US', '33 223 513,00 $US',
      '28 473 014,00 $US', '29 595 125,00 $US',
      '41 818 891,00 $US', '32 077 039,00 $US',
      '20 281 876,00 $US', '22 527 342,00 $US',
      '18 680 663,00 $US', '34 078 928,00 $US',
      '33 110 784,00 $US', '14 627 058,00 $US'
    ])
  })


  test('28. lister et ordonner les entreprises par rang', () => {
    /** Recréer une table avec les clés - valeurs company et rank, grâce à une fonction, puis
     * inverser l'ordre de la table.
     */

    const sortCompanies = database().map(e => ({
          company: e.company,
          rank: e.rank,
        })
    )
    sortCompanies.reverse()

    expect(sortCompanies).toEqual(expect.arrayContaining([(expect.objectContaining({
      company: expect.any(String),
      rank: expect.any(Number)
    }))]))
    expect(sortCompanies).toEqual([
      {company: 'Wild Willies Brand', rank: 22},
      {company: 'NP Digital', rank: 21},
      {company: 'Care+Wear', rank: 20},
      {company: 'BigID', rank: 19},
      {company: 'Chasen Companies', rank: 18},
      {company: 'Casely', rank: 17},
      {company: 'Banyan Software', rank: 16},
      {company: 'Snappy ', rank: 15},
      {company: 'Solar Bear', rank: 14},
      {company: 'Olympic Media', rank: 13},
      {company: 'Solgen Power', rank: 12},
      {company: 'Texas Solar', rank: 11},
      {company: 'Budderfly', rank: 10},
      {company: 'Paxon Energy', rank: 9},
      {company: 'Hardbody Supplements', rank: 8},
      {company: 'Varo Bank', rank: 7},
      {company: 'Brander Group', rank: 6},
      {company: 'Dave', rank: 5},
      {company: 'Revolutionary Clinics', rank: 4},
      {company: 'Upstream Life Insurance Company', rank: 3},
      {company: 'Carbon Health', rank: 2},
      {company: 'Human Bees', rank: 1}
    ])
  })


  test("29. Lister les industry 'Health' et 'Software'", () => {
    /** Filtrer la table par les clés Health et Software puis mapper avec key company.
     */

    const filtreIndustry = database().filter(e => e.industry === 'Health' || e.industry === 'Software').map(e => e.company)

    console.log(filtreIndustry)

    expect(filtreIndustry.length).toEqual(5)
    expect(filtreIndustry).toStrictEqual(([
        'Revolutionary Clinics',
        'Hardbody Supplements',
        'Banyan Software',
        'Care+Wear',
        'Wild Willies Brand'

      ])
    )

  })


})


