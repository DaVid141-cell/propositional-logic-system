from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.logic import router

app = FastAPI(title="Propositional Logic System")
origins = [
    "http://localhost:5173",
    "https://truthtable-analyzer.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)