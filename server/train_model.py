from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os

# Configure API Key
os.environ["GOOGLE_API_KEY"] = "AIzaSyCBdBErf70UANSb8FMMJyZXSKyzmCKb808"  # Use environment variable in production

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("models/gemini-1.5-flash")

app = FastAPI()

# Allow MERN frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        prompt = f"""
        You are a helpful AI tutor. Answer the following question clearly.

        User: {request.message}
        AI:
        """
        response = model.generate_content(prompt)
        return {"response": response.text.strip()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
