from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.logic import router

app = FastAPI(title="Propositional Logic System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[""],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)