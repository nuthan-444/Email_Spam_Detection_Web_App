from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailRequest(BaseModel):
    email: str


@app.get("/")
def home():
    return {"message":"Hello this is my first fastapi server"}


@app.post("/api/predict")
def predict(data: EmailRequest):
    email = data.email
    try:
        model = joblib.load("./model/spam_model.pkl")
        cv = joblib.load("./model/vectorizer.pkl")
        email = cv.transform([email])
        prediction = model.predict(email) 
        return {
            "prediction":prediction[0],
            "status":True,
            "statuscode":200
            }
    except Exception as e:
        return {
            "e":e,
            "error":"Server Error ! Please Try Again",
            "status":False,
            "statuscode":500
            }