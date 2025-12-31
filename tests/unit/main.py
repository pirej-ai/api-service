import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.requests import Request
from pydantic import BaseModel
from typing import Optional

load_dotenv()

class User(BaseModel):
    id: int
    name: str
    email: str

app = FastAPI()

@app.get("/users/")
async def read_users():
    return [
        {"id": 1, "name": "John Doe", "email": "john@example.com"},
        {"id": 2, "name": "Jane Doe", "email": "jane@example.com"}
    ]

@app.get("/users/{user_id}")
async def read_user(user_id: int):
    user = {"id": user_id, "name": "John Doe", "email": "john@example.com"}
    return user

@app.post("/users/")
async def create_user(user: User):
    return user

@app.put("/users/{user_id}")
async def update_user(user_id: int, user: User):
    return user

@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    return {"message": f"User {user_id} deleted"}

@app.get("/healthcheck")
async def healthcheck():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)