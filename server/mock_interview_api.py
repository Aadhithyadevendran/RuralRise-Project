from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from google.api_core.exceptions import ResourceExhausted
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Correctly get API key
api_key = os.getenv('GOOGLE_API_KEY')
if not api_key:
    raise Exception("GOOGLE_API_KEY not set in environment variables!")

# Configure Gemini API
genai.configure(api_key=api_key)
model = genai.GenerativeModel("models/gemini-2.5-flash")

# Initialize Flask
app = Flask(__name__)
CORS(app)

@app.route('/generate-questions', methods=['POST'])
def generate_questions():
    try:
        data = request.get_json()
        domain = data['domain']
        language = data['language']
        interview_type = data['interview_type']
        difficulty = data['difficulty']
        num = data.get('num_questions', 5)

        prompt = f"""
Generate {num} {difficulty} level {interview_type} interview questions in {language} for a candidate in the {domain} domain.
Number them from 1 to {num}. Keep each question concise.
"""
        response = model.generate_content(prompt)
        questions = [line.split('.', 1)[1].strip() for line in response.text.split('\n') if '.' in line]
        return jsonify(questions=questions)

    except ResourceExhausted:
        return jsonify(error="Gemini API quota exceeded. Please try again later or upgrade your plan."), 429
    except Exception as e:
        return jsonify(error=f"Internal server error: {str(e)}"), 500


@app.route('/evaluate-answer', methods=['POST'])
def evaluate_answer():
    try:
        data = request.get_json()
        question = data['question']
        answer = data['answer']
        language = data['language']

        prompt = f"""
Question: {question}
Candidate's Answer: {answer}

Evaluate the answer based on clarity, confidence, relevance, and communication skills.
Give a brief comment and score out of 10.
Language: {language}
Output format:
Feedback: <your evaluation>
Score: <X>/10
"""
        response = model.generate_content(prompt)
        return jsonify(evaluation=response.text.strip())

    except ResourceExhausted:
        return jsonify(error="Gemini API quota exceeded. Please try again later or upgrade your plan."), 429
    except Exception as e:
        return jsonify(error=f"Internal server error: {str(e)}"), 500


if __name__ == '__main__':
    port = int(os.getenv('PORT', 5002))  # Use PORT from .env or default 5002
    app.run(host='0.0.0.0', port=port, debug=True)
