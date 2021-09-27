import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [
        {
            "Country": "Bahamas",
            "Slug": "bahamas",
            "ISO2": "BS"
        },
        {
            "Country": "Central African Republic",
            "Slug": "central-african-republic",
            "ISO2": "CF"
        },
        {
            "Country": "Liechtenstein",
            "Slug": "liechtenstein",
            "ISO2": "LI"
        },
        {
            "Country": "Namibia",
            "Slug": "namibia",
            "ISO2": "NA"
        },
        {
            "Country": "Uganda",
            "Slug": "uganda",
            "ISO2": "UG"
        },
        {
            "Country": "Cyprus",
            "Slug": "cyprus",
            "ISO2": "CY"
        },
        {
            "Country": "Macao, SAR China",
            "Slug": "macao-sar-china",
            "ISO2": "MO"
        },
        {
            "Country": "Suriname",
            "Slug": "suriname",
            "ISO2": "SR"
        },
        {
            "Country": "Tunisia",
            "Slug": "tunisia",
            "ISO2": "TN"
        },
        {
            "Country": "Benin",
            "Slug": "benin",
            "ISO2": "BJ"
        },
        {
            "Country": "Bosnia and Herzegovina",
            "Slug": "bosnia-and-herzegovina",
            "ISO2": "BA"
        },
        {
            "Country": "Brazil",
            "Slug": "brazil",
            "ISO2": "BR"
        },
        {
            "Country": "China",
            "Slug": "china",
            "ISO2": "CN"
        },
        {
            "Country": "Ghana",
            "Slug": "ghana",
            "ISO2": "GH"
        },
        {
            "Country": "Lesotho",
            "Slug": "lesotho",
            "ISO2": "LS"
        },
        {
            "Country": "Mongolia",
            "Slug": "mongolia",
            "ISO2": "MN"
        },
        {
            "Country": "Cook Islands",
            "Slug": "cook-islands",
            "ISO2": "CK"
        },
        {
            "Country": "Kenya",
            "Slug": "kenya",
            "ISO2": "KE"
        },
        {
            "Country": "Mauritius",
            "Slug": "mauritius",
            "ISO2": "MU"
        },
        {
            "Country": "Monaco",
            "Slug": "monaco",
            "ISO2": "MC"
        },
        {
            "Country": "Niue",
            "Slug": "niue",
            "ISO2": "NU"
        },
        {
            "Country": "Cape Verde",
            "Slug": "cape-verde",
            "ISO2": "CV"
        },
        {
            "Country": "Costa Rica",
            "Slug": "costa-rica",
            "ISO2": "CR"
        },
        {
            "Country": "Guatemala",
            "Slug": "guatemala",
            "ISO2": "GT"
        },
        {
            "Country": "Romania",
            "Slug": "romania",
            "ISO2": "RO"
        },
        {
            "Country": "New Caledonia",
            "Slug": "new-caledonia",
            "ISO2": "NC"
        },
        {
            "Country": "Cambodia",
            "Slug": "cambodia",
            "ISO2": "KH"
        },
        {
            "Country": "Colombia",
            "Slug": "colombia",
            "ISO2": "CO"
        },
        {
            "Country": "Egypt",
            "Slug": "egypt",
            "ISO2": "EG"
        },
        {
            "Country": "Syrian Arab Republic (Syria)",
            "Slug": "syria",
            "ISO2": "SY"
        },
        {
            "Country": "Cocos (Keeling) Islands",
            "Slug": "cocos-keeling-islands",
            "ISO2": "CC"
        },
        {
            "Country": "Grenada",
            "Slug": "grenada",
            "ISO2": "GD"
        },
        {
            "Country": "Russian Federation",
            "Slug": "russia",
            "ISO2": "RU"
        },
        {
            "Country": "Trinidad and Tobago",
            "Slug": "trinidad-and-tobago",
            "ISO2": "TT"
        },
        {
            "Country": "Aruba",
            "Slug": "aruba",
            "ISO2": "AW"
        },
        {
            "Country": "Belarus",
            "Slug": "belarus",
            "ISO2": "BY"
        },
        {
            "Country": "Lao PDR",
            "Slug": "lao-pdr",
            "ISO2": "LA"
        },
        {
            "Country": "Latvia",
            "Slug": "latvia",
            "ISO2": "LV"
        },
        {
            "Country": "Oman",
            "Slug": "oman",
            "ISO2": "OM"
        },
        {
            "Country": "Svalbard and Jan Mayen Islands",
            "Slug": "svalbard-and-jan-mayen-islands",
            "ISO2": "SJ"
        },
        {
            "Country": "Algeria",
            "Slug": "algeria",
            "ISO2": "DZ"
        },
        {
            "Country": "Mauritania",
            "Slug": "mauritania",
            "ISO2": "MR"
        },
        {
            "Country": "Slovenia",
            "Slug": "slovenia",
            "ISO2": "SI"
        },
        {
            "Country": "Vanuatu",
            "Slug": "vanuatu",
            "ISO2": "VU"
        },
        {
            "Country": "Iran, Islamic Republic of",
            "Slug": "iran",
            "ISO2": "IR"
        },
        {
            "Country": "Malta",
            "Slug": "malta",
            "ISO2": "MT"
        },
        {
            "Country": "Poland",
            "Slug": "poland",
            "ISO2": "PL"
        },
        {
            "Country": "Tokelau",
            "Slug": "tokelau",
            "ISO2": "TK"
        },
        {
            "Country": "Samoa",
            "Slug": "samoa",
            "ISO2": "WS"
        },
        {
            "Country": "Greenland",
            "Slug": "greenland",
            "ISO2": "GL"
        },
        {
            "Country": "Guam",
            "Slug": "guam",
            "ISO2": "GU"
        },
        {
            "Country": "Qatar",
            "Slug": "qatar",
            "ISO2": "QA"
        },
        {
            "Country": "Sierra Leone",
            "Slug": "sierra-leone",
            "ISO2": "SL"
        },
        {
            "Country": "South Sudan",
            "Slug": "south-sudan",
            "ISO2": "SS"
        },
        {
            "Country": "Congo (Brazzaville)",
            "Slug": "congo-brazzaville",
            "ISO2": "CG"
        },
        {
            "Country": "Lithuania",
            "Slug": "lithuania",
            "ISO2": "LT"
        },
        {
            "Country": "Saudi Arabia",
            "Slug": "saudi-arabia",
            "ISO2": "SA"
        },
        {
            "Country": "Antigua and Barbuda",
            "Slug": "antigua-and-barbuda",
            "ISO2": "AG"
        },
        {
            "Country": "Burkina Faso",
            "Slug": "burkina-faso",
            "ISO2": "BF"
        },
        {
            "Country": "Equatorial Guinea",
            "Slug": "equatorial-guinea",
            "ISO2": "GQ"
        },
        {
            "Country": "Germany",
            "Slug": "germany",
            "ISO2": "DE"
        },
        {
            "Country": "Brunei Darussalam",
            "Slug": "brunei",
            "ISO2": "BN"
        },
        {
            "Country": "Comoros",
            "Slug": "comoros",
            "ISO2": "KM"
        },
        {
            "Country": "French Polynesia",
            "Slug": "french-polynesia",
            "ISO2": "PF"
        },
        {
            "Country": "Palestinian Territory",
            "Slug": "palestine",
            "ISO2": "PS"
        },
        {
            "Country": "Saint-Barthélemy",
            "Slug": "saint-barthélemy",
            "ISO2": "BL"
        },
        {
            "Country": "Slovakia",
            "Slug": "slovakia",
            "ISO2": "SK"
        },
        {
            "Country": "Guyana",
            "Slug": "guyana",
            "ISO2": "GY"
        },
        {
            "Country": "Montenegro",
            "Slug": "montenegro",
            "ISO2": "ME"
        },
        {
            "Country": "Tonga",
            "Slug": "tonga",
            "ISO2": "TO"
        },
        {
            "Country": "Bahrain",
            "Slug": "bahrain",
            "ISO2": "BH"
        },
        {
            "Country": "Belgium",
            "Slug": "belgium",
            "ISO2": "BE"
        },
        {
            "Country": "United States of America",
            "Slug": "united-states",
            "ISO2": "US"
        },
        {
            "Country": "Azerbaijan",
            "Slug": "azerbaijan",
            "ISO2": "AZ"
        },
        {
            "Country": "Finland",
            "Slug": "finland",
            "ISO2": "FI"
        },
        {
            "Country": "Heard and Mcdonald Islands",
            "Slug": "heard-and-mcdonald-islands",
            "ISO2": "HM"
        },
        {
            "Country": "Thailand",
            "Slug": "thailand",
            "ISO2": "TH"
        },
        {
            "Country": "Mozambique",
            "Slug": "mozambique",
            "ISO2": "MZ"
        },
        {
            "Country": "Armenia",
            "Slug": "armenia",
            "ISO2": "AM"
        },
        {
            "Country": "Bermuda",
            "Slug": "bermuda",
            "ISO2": "BM"
        },
        {
            "Country": "Gambia",
            "Slug": "gambia",
            "ISO2": "GM"
        },
        {
            "Country": "Iceland",
            "Slug": "iceland",
            "ISO2": "IS"
        },
        {
            "Country": "Korea (North)",
            "Slug": "korea-north",
            "ISO2": "KP"
        },
        {
            "Country": "Korea (South)",
            "Slug": "korea-south",
            "ISO2": "KR"
        },
        {
            "Country": "Mali",
            "Slug": "mali",
            "ISO2": "ML"
        },
        {
            "Country": "Isle of Man",
            "Slug": "isle-of-man",
            "ISO2": "IM"
        },
        {
            "Country": "Morocco",
            "Slug": "morocco",
            "ISO2": "MA"
        },
        {
            "Country": "Pakistan",
            "Slug": "pakistan",
            "ISO2": "PK"
        },
        {
            "Country": "United Arab Emirates",
            "Slug": "united-arab-emirates",
            "ISO2": "AE"
        },
        {
            "Country": "Gibraltar",
            "Slug": "gibraltar",
            "ISO2": "GI"
        },
        {
            "Country": "Serbia",
            "Slug": "serbia",
            "ISO2": "RS"
        },
        {
            "Country": "Bangladesh",
            "Slug": "bangladesh",
            "ISO2": "BD"
        },
        {
            "Country": "Barbados",
            "Slug": "barbados",
            "ISO2": "BB"
        },
        {
            "Country": "Nigeria",
            "Slug": "nigeria",
            "ISO2": "NG"
        },
        {
            "Country": "Christmas Island",
            "Slug": "christmas-island",
            "ISO2": "CX"
        },
        {
            "Country": "Ethiopia",
            "Slug": "ethiopia",
            "ISO2": "ET"
        },
        {
            "Country": "France",
            "Slug": "france",
            "ISO2": "FR"
        },
        {
            "Country": "Ireland",
            "Slug": "ireland",
            "ISO2": "IE"
        },
        {
            "Country": "Jamaica",
            "Slug": "jamaica",
            "ISO2": "JM"
        },
        {
            "Country": "Kyrgyzstan",
            "Slug": "kyrgyzstan",
            "ISO2": "KG"
        },
        {
            "Country": "Norway",
            "Slug": "norway",
            "ISO2": "NO"
        },
        {
            "Country": "Albania",
            "Slug": "albania",
            "ISO2": "AL"
        },
        {
            "Country": "American Samoa",
            "Slug": "american-samoa",
            "ISO2": "AS"
        },
        {
            "Country": "Dominican Republic",
            "Slug": "dominican-republic",
            "ISO2": "DO"
        },
        {
            "Country": "Honduras",
            "Slug": "honduras",
            "ISO2": "HN"
        },
        {
            "Country": "Turkey",
            "Slug": "turkey",
            "ISO2": "TR"
        },
        {
            "Country": "Virgin Islands, US",
            "Slug": "virgin-islands",
            "ISO2": "VI"
        },
        {
            "Country": "Faroe Islands",
            "Slug": "faroe-islands",
            "ISO2": "FO"
        },
        {
            "Country": "Kazakhstan",
            "Slug": "kazakhstan",
            "ISO2": "KZ"
        },
        {
            "Country": "Saint Pierre and Miquelon",
            "Slug": "saint-pierre-and-miquelon",
            "ISO2": "PM"
        },
        {
            "Country": "South Africa",
            "Slug": "south-africa",
            "ISO2": "ZA"
        },
        {
            "Country": "Republic of Kosovo",
            "Slug": "kosovo",
            "ISO2": "XK"
        },
        {
            "Country": "Mayotte",
            "Slug": "mayotte",
            "ISO2": "YT"
        },
        {
            "Country": "Moldova",
            "Slug": "moldova",
            "ISO2": "MD"
        },
        {
            "Country": "Tanzania, United Republic of",
            "Slug": "tanzania",
            "ISO2": "TZ"
        },
        {
            "Country": "French Guiana",
            "Slug": "french-guiana",
            "ISO2": "GF"
        },
        {
            "Country": "Saint Lucia",
            "Slug": "saint-lucia",
            "ISO2": "LC"
        },
        {
            "Country": "British Virgin Islands",
            "Slug": "british-virgin-islands",
            "ISO2": "VG"
        },
        {
            "Country": "Jordan",
            "Slug": "jordan",
            "ISO2": "JO"
        },
        {
            "Country": "United Kingdom",
            "Slug": "united-kingdom",
            "ISO2": "GB"
        },
        {
            "Country": "Belize",
            "Slug": "belize",
            "ISO2": "BZ"
        },
        {
            "Country": "Marshall Islands",
            "Slug": "marshall-islands",
            "ISO2": "MH"
        },
        {
            "Country": "Falkland Islands (Malvinas)",
            "Slug": "falkland-islands-malvinas",
            "ISO2": "FK"
        },
        {
            "Country": "French Southern Territories",
            "Slug": "french-southern-territories",
            "ISO2": "TF"
        },
        {
            "Country": "Kiribati",
            "Slug": "kiribati",
            "ISO2": "KI"
        },
        {
            "Country": "Taiwan, Republic of China",
            "Slug": "taiwan",
            "ISO2": "TW"
        },
        {
            "Country": "Timor-Leste",
            "Slug": "timor-leste",
            "ISO2": "TL"
        },
        {
            "Country": "Spain",
            "Slug": "spain",
            "ISO2": "ES"
        },
        {
            "Country": "Guernsey",
            "Slug": "guernsey",
            "ISO2": "GG"
        },
        {
            "Country": "India",
            "Slug": "india",
            "ISO2": "IN"
        },
        {
            "Country": "Italy",
            "Slug": "italy",
            "ISO2": "IT"
        },
        {
            "Country": "Myanmar",
            "Slug": "myanmar",
            "ISO2": "MM"
        },
        {
            "Country": "Palau",
            "Slug": "palau",
            "ISO2": "PW"
        },
        {
            "Country": "Solomon Islands",
            "Slug": "solomon-islands",
            "ISO2": "SB"
        },
        {
            "Country": "Pitcairn",
            "Slug": "pitcairn",
            "ISO2": "PN"
        },
        {
            "Country": "Afghanistan",
            "Slug": "afghanistan",
            "ISO2": "AF"
        },
        {
            "Country": "Cameroon",
            "Slug": "cameroon",
            "ISO2": "CM"
        },
        {
            "Country": "Denmark",
            "Slug": "denmark",
            "ISO2": "DK"
        },
        {
            "Country": "Lebanon",
            "Slug": "lebanon",
            "ISO2": "LB"
        },
        {
            "Country": "Macedonia, Republic of",
            "Slug": "macedonia",
            "ISO2": "MK"
        },
        {
            "Country": "Nicaragua",
            "Slug": "nicaragua",
            "ISO2": "NI"
        },
        {
            "Country": "Estonia",
            "Slug": "estonia",
            "ISO2": "EE"
        },
        {
            "Country": "Hong Kong, SAR China",
            "Slug": "hong-kong-sar-china",
            "ISO2": "HK"
        },
        {
            "Country": "Malawi",
            "Slug": "malawi",
            "ISO2": "MW"
        },
        {
            "Country": "Puerto Rico",
            "Slug": "puerto-rico",
            "ISO2": "PR"
        },
        {
            "Country": "Tuvalu",
            "Slug": "tuvalu",
            "ISO2": "TV"
        },
        {
            "Country": "Yemen",
            "Slug": "yemen",
            "ISO2": "YE"
        },
        {
            "Country": "Austria",
            "Slug": "austria",
            "ISO2": "AT"
        },
        {
            "Country": "Netherlands Antilles",
            "Slug": "netherlands-antilles",
            "ISO2": "AN"
        },
        {
            "Country": "Zambia",
            "Slug": "zambia",
            "ISO2": "ZM"
        },
        {
            "Country": "Canada",
            "Slug": "canada",
            "ISO2": "CA"
        },
        {
            "Country": "Guinea-Bissau",
            "Slug": "guinea-bissau",
            "ISO2": "GW"
        },
        {
            "Country": "Jersey",
            "Slug": "jersey",
            "ISO2": "JE"
        },
        {
            "Country": "Libya",
            "Slug": "libya",
            "ISO2": "LY"
        },
        {
            "Country": "Nepal",
            "Slug": "nepal",
            "ISO2": "NP"
        },
        {
            "Country": "Viet Nam",
            "Slug": "vietnam",
            "ISO2": "VN"
        },
        {
            "Country": "Venezuela (Bolivarian Republic)",
            "Slug": "venezuela",
            "ISO2": "VE"
        },
        {
            "Country": "Andorra",
            "Slug": "andorra",
            "ISO2": "AD"
        },
        {
            "Country": "Bouvet Island",
            "Slug": "bouvet-island",
            "ISO2": "BV"
        },
        {
            "Country": "Cayman Islands",
            "Slug": "cayman-islands",
            "ISO2": "KY"
        },
        {
            "Country": "Hungary",
            "Slug": "hungary",
            "ISO2": "HU"
        },
        {
            "Country": "Mexico",
            "Slug": "mexico",
            "ISO2": "MX"
        },
        {
            "Country": "Papua New Guinea",
            "Slug": "papua-new-guinea",
            "ISO2": "PG"
        },
        {
            "Country": "Swaziland",
            "Slug": "swaziland",
            "ISO2": "SZ"
        },
        {
            "Country": "Wallis and Futuna Islands",
            "Slug": "wallis-and-futuna-islands",
            "ISO2": "WF"
        },
        {
            "Country": "Argentina",
            "Slug": "argentina",
            "ISO2": "AR"
        },
        {
            "Country": "Congo (Kinshasa)",
            "Slug": "congo-kinshasa",
            "ISO2": "CD"
        },
        {
            "Country": "Eritrea",
            "Slug": "eritrea",
            "ISO2": "ER"
        },
        {
            "Country": "Saint Kitts and Nevis",
            "Slug": "saint-kitts-and-nevis",
            "ISO2": "KN"
        },
        {
            "Country": "Senegal",
            "Slug": "senegal",
            "ISO2": "SN"
        },
        {
            "Country": "Seychelles",
            "Slug": "seychelles",
            "ISO2": "SC"
        },
        {
            "Country": "Sudan",
            "Slug": "sudan",
            "ISO2": "SD"
        },
        {
            "Country": "Western Sahara",
            "Slug": "western-sahara",
            "ISO2": "EH"
        },
        {
            "Country": "ALA Aland Islands",
            "Slug": "ala-aland-islands",
            "ISO2": "AX"
        },
        {
            "Country": "Anguilla",
            "Slug": "anguilla",
            "ISO2": "AI"
        },
        {
            "Country": "Greece",
            "Slug": "greece",
            "ISO2": "GR"
        },
        {
            "Country": "Switzerland",
            "Slug": "switzerland",
            "ISO2": "CH"
        },
        {
            "Country": "British Indian Ocean Territory",
            "Slug": "british-indian-ocean-territory",
            "ISO2": "IO"
        },
        {
            "Country": "Cuba",
            "Slug": "cuba",
            "ISO2": "CU"
        },
        {
            "Country": "Madagascar",
            "Slug": "madagascar",
            "ISO2": "MG"
        },
        {
            "Country": "Saint Helena",
            "Slug": "saint-helena",
            "ISO2": "SH"
        },
        {
            "Country": "Malaysia",
            "Slug": "malaysia",
            "ISO2": "MY"
        },
        {
            "Country": "Portugal",
            "Slug": "portugal",
            "ISO2": "PT"
        },
        {
            "Country": "Rwanda",
            "Slug": "rwanda",
            "ISO2": "RW"
        },
        {
            "Country": "Saint Vincent and Grenadines",
            "Slug": "saint-vincent-and-the-grenadines",
            "ISO2": "VC"
        },
        {
            "Country": "South Georgia and the South Sandwich Islands",
            "Slug": "south-georgia-and-the-south-sandwich-islands",
            "ISO2": "GS"
        },
        {
            "Country": "Sri Lanka",
            "Slug": "sri-lanka",
            "ISO2": "LK"
        },
        {
            "Country": "Dominica",
            "Slug": "dominica",
            "ISO2": "DM"
        },
        {
            "Country": "El Salvador",
            "Slug": "el-salvador",
            "ISO2": "SV"
        },
        {
            "Country": "Guinea",
            "Slug": "guinea",
            "ISO2": "GN"
        },
        {
            "Country": "Liberia",
            "Slug": "liberia",
            "ISO2": "LR"
        },
        {
            "Country": "Burundi",
            "Slug": "burundi",
            "ISO2": "BI"
        },
        {
            "Country": "Croatia",
            "Slug": "croatia",
            "ISO2": "HR"
        },
        {
            "Country": "Réunion",
            "Slug": "réunion",
            "ISO2": "RE"
        },
        {
            "Country": "Togo",
            "Slug": "togo",
            "ISO2": "TG"
        },
        {
            "Country": "Turks and Caicos Islands",
            "Slug": "turks-and-caicos-islands",
            "ISO2": "TC"
        },
        {
            "Country": "Côte d'Ivoire",
            "Slug": "cote-divoire",
            "ISO2": "CI"
        },
        {
            "Country": "Montserrat",
            "Slug": "montserrat",
            "ISO2": "MS"
        },
        {
            "Country": "Paraguay",
            "Slug": "paraguay",
            "ISO2": "PY"
        },
        {
            "Country": "Angola",
            "Slug": "angola",
            "ISO2": "AO"
        },
        {
            "Country": "Micronesia, Federated States of",
            "Slug": "micronesia",
            "ISO2": "FM"
        },
        {
            "Country": "Northern Mariana Islands",
            "Slug": "northern-mariana-islands",
            "ISO2": "MP"
        },
        {
            "Country": "Singapore",
            "Slug": "singapore",
            "ISO2": "SG"
        },
        {
            "Country": "Ecuador",
            "Slug": "ecuador",
            "ISO2": "EC"
        },
        {
            "Country": "Philippines",
            "Slug": "philippines",
            "ISO2": "PH"
        },
        {
            "Country": "Uruguay",
            "Slug": "uruguay",
            "ISO2": "UY"
        },
        {
            "Country": "Antarctica",
            "Slug": "antarctica",
            "ISO2": "AQ"
        },
        {
            "Country": "Holy See (Vatican City State)",
            "Slug": "holy-see-vatican-city-state",
            "ISO2": "VA"
        },
        {
            "Country": "Indonesia",
            "Slug": "indonesia",
            "ISO2": "ID"
        },
        {
            "Country": "Panama",
            "Slug": "panama",
            "ISO2": "PA"
        },
        {
            "Country": "San Marino",
            "Slug": "san-marino",
            "ISO2": "SM"
        },
        {
            "Country": "Zimbabwe",
            "Slug": "zimbabwe",
            "ISO2": "ZW"
        },
        {
            "Country": "Bolivia",
            "Slug": "bolivia",
            "ISO2": "BO"
        },
        {
            "Country": "Georgia",
            "Slug": "georgia",
            "ISO2": "GE"
        },
        {
            "Country": "Guadeloupe",
            "Slug": "guadeloupe",
            "ISO2": "GP"
        },
        {
            "Country": "Japan",
            "Slug": "japan",
            "ISO2": "JP"
        },
        {
            "Country": "Kuwait",
            "Slug": "kuwait",
            "ISO2": "KW"
        },
        {
            "Country": "Australia",
            "Slug": "australia",
            "ISO2": "AU"
        },
        {
            "Country": "Chile",
            "Slug": "chile",
            "ISO2": "CL"
        },
        {
            "Country": "Iraq",
            "Slug": "iraq",
            "ISO2": "IQ"
        },
        {
            "Country": "Niger",
            "Slug": "niger",
            "ISO2": "NE"
        },
        {
            "Country": "Tajikistan",
            "Slug": "tajikistan",
            "ISO2": "TJ"
        },
        {
            "Country": "Ukraine",
            "Slug": "ukraine",
            "ISO2": "UA"
        },
        {
            "Country": "Haiti",
            "Slug": "haiti",
            "ISO2": "HT"
        },
        {
            "Country": "Botswana",
            "Slug": "botswana",
            "ISO2": "BW"
        },
        {
            "Country": "Luxembourg",
            "Slug": "luxembourg",
            "ISO2": "LU"
        },
        {
            "Country": "Norfolk Island",
            "Slug": "norfolk-island",
            "ISO2": "NF"
        },
        {
            "Country": "Somalia",
            "Slug": "somalia",
            "ISO2": "SO"
        },
        {
            "Country": "Sweden",
            "Slug": "sweden",
            "ISO2": "SE"
        },
        {
            "Country": "Maldives",
            "Slug": "maldives",
            "ISO2": "MV"
        },
        {
            "Country": "Martinique",
            "Slug": "martinique",
            "ISO2": "MQ"
        },
        {
            "Country": "Peru",
            "Slug": "peru",
            "ISO2": "PE"
        },
        {
            "Country": "Chad",
            "Slug": "chad",
            "ISO2": "TD"
        },
        {
            "Country": "Bhutan",
            "Slug": "bhutan",
            "ISO2": "BT"
        },
        {
            "Country": "Czech Republic",
            "Slug": "czech-republic",
            "ISO2": "CZ"
        },
        {
            "Country": "Gabon",
            "Slug": "gabon",
            "ISO2": "GA"
        },
        {
            "Country": "Israel",
            "Slug": "israel",
            "ISO2": "IL"
        },
        {
            "Country": "Turkmenistan",
            "Slug": "turkmenistan",
            "ISO2": "TM"
        },
        {
            "Country": "Bulgaria",
            "Slug": "bulgaria",
            "ISO2": "BG"
        },
        {
            "Country": "Djibouti",
            "Slug": "djibouti",
            "ISO2": "DJ"
        },
        {
            "Country": "Fiji",
            "Slug": "fiji",
            "ISO2": "FJ"
        },
        {
            "Country": "Netherlands",
            "Slug": "netherlands",
            "ISO2": "NL"
        },
        {
            "Country": "Sao Tome and Principe",
            "Slug": "sao-tome-and-principe",
            "ISO2": "ST"
        },
        {
            "Country": "Uzbekistan",
            "Slug": "uzbekistan",
            "ISO2": "UZ"
        },
        {
            "Country": "US Minor Outlying Islands",
            "Slug": "us-minor-outlying-islands",
            "ISO2": "UM"
        },
        {
            "Country": "Nauru",
            "Slug": "nauru",
            "ISO2": "NR"
        },
        {
            "Country": "New Zealand",
            "Slug": "new-zealand",
            "ISO2": "NZ"
        },
        {
            "Country": "Saint-Martin (French part)",
            "Slug": "saint-martin-french-part",
            "ISO2": "MF"
        }
    ],
      stats:[]
    }
  }
  async componentDidMount(){
    // const resp = await fetch('https://api.covid19api.com/countries')
    // const countries = await resp.json()
    // this.setState({countries})
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    this.state.countries.forEach(async country => {
      const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
      const data = await resp.json()
      if(data.length)
      this.setState(prevState => (
        {stats:prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2})}
      ))
      await delay(2000000);
    })
  }

  render() {
  return (
    <div className="App">
      {
        this.state.stats.map(country => <h1>{country.CountryCode}</h1>)
      }
     
     
    </div>
  );
}
}

