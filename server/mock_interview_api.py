from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

# Configuration
os.environ['GOOGLE_API_KEY'] = 'AIzaSyCBdBErf70UANSb8FMMJyZXSKyzmCKb808'
genai.configure(api_key=os.environ['GOOGLE_API_KEY'])
model = genai.GenerativeModel("gemini-1.5-pro-latest")

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

@app.route('/generate-questions', methods=['POST'])
def generate_questions():
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

@app.route('/evaluate-answer', methods=['POST'])
def evaluate_answer():
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

if __name__ == '__main__':
    app.run(port=5002, debug=True)
