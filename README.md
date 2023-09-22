# ApiTest
# install npm i
# node ./bin/www
# postman
curl --location 'http://localhost:3000/api/v1/shipping/shipping-rates' \
--header 'Content-Type: application/json' \
--data-raw '{
    "seller_address": {
        "first_name": "John",
        "last_name": "Doe",
        "street": "123 West Main Street",
        "city": "Dallas",
        "state": "TX",
        "zip_code": "75208",
        "country": "USA",
        "phone": "4691234567",
        "email": "support@nailzy.com"
    },
    "customer_address": {
        "first_name": "John",
        "last_name": "Doe",
        "street": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip_code": "94103",
        "country": "USA",
        "phone": "4151234567",
        "email": "john@example.com"
    },
    "cart": {
        "id": "3351250171",
        "user_id": "9069541976",
        "products": [
            {
                "quantity": "1",
                "id": "1189610295",
                "name": "Product A",
                "variant": {
                    "id": "1946566909",
                    "name": "Size S",
                    "price": "19.99",
                    "dimensions": {
                        "length": "10 in",
                        "width": "8 in",
                        "height": "6 in"
                    },
                    "weight": "1.2 oz"
                }
            },
            {
                "quantity": "4",
                "id": "3676866221",
                "name": "Product B",
                "variant": {
                    "id": "2811329500",
                    "name": "Size L",
                    "price": "33.49",
                    "dimensions": {
                        "length": "3 in",
                        "width": "7 in",
                        "height": "2 in"
                    },
                    "weight": "1.9 oz"
                }
            },
            {
                "quantity": "2",
                "id": "1189610295",
                "name": "Product C",
                "variant": {
                    "id": "1370939202",
                    "name": "Red",
                    "price": "12.25",
                    "dimensions": {
                        "length": "0.7 ft",
                        "width": "0.3 ft",
                        "height": "0.2 ft"
                    },
                    "weight": "0.5 lbs"
                }
            }
        ]
    }
}'
