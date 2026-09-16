from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()


class EmailRequest(BaseModel):
    email: str


@app.get("/")
def home():
    return {"message":"Hello this is my first fastapi server"}


@app.post("/api/predict")
def predict(data: EmailRequest):
    email = data.email
    model = joblib.load("./model/spam_model.pkl")
    cv = joblib.load("./model/vectorizer.pkl")
    email = cv.transform([email])
    prediction = model.predict(email) 
    return {"prediction":prediction[0]}