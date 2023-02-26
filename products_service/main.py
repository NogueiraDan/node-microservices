from fastapi import FastAPI

app = FastAPI()

@app.get("/products")
async def read_products():
    products = [
        { "id": 1, "name": "Smartphone" },
        { "id": 2, "name": "SmartTV" },
        { "id": 3, "name": "Notebook" },
    ]

    return products