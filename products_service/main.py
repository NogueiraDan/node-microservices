from fastapi import FastAPI

app = FastAPI()

@app.get("/products")
async def read_products():
    products = [
        {"message": "PRODUCTS SERVICE"},
        { "id": 1, "name": "Product 1" },
        { "id": 2, "name": "Product 2" },
    ]

    return products