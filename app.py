from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router

app = FastAPI(
    title="AmazonShield API",
    description="AI-assisted phishing and scam investigation backend.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def root():
    return {
        "name": "AmazonShield",
        "status": "online",
        "message": "AmazonShield Backend is running",
    }


@app.get("/health")
def health():
    return {"status": "ok"}
