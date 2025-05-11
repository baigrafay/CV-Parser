from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
import magic
from io import BytesIO
from pdfminer.high_level import extract_text
import requests
import json

ML_API_URL = 'https://ml-service-render.onrender.com/predict'

@csrf_exempt
def categorizer(request):
    if request.method == 'POST':
        resume = request.FILES.get('resume')
        file_format = magic.from_buffer(resume.read(1024), mime=True)

        if file_format != 'application/pdf':
            message = 'Invalid file format. Please upload a PDF file.'
            return render(request, 'categorizer.html', {"error": message})
        else:
            resume.seek(0)
            file_data = resume.read()
            file_like_object = BytesIO(file_data)
            text = extract_text(file_like_object)

            try:
                response = requests.post(
                    ML_API_URL,
                    headers={'Content-Type': 'application/json'},
                    data=json.dumps({"text": text})
                )
                if response.status_code == 200:
                    result = response.json()
                    category_name = result.get("category", "Unknown")
                    return JsonResponse({"category": f'{category_name}'})
                else:
                    return JsonResponse({"error": "Error from ML service. Try again later."}, status=500)
            except Exception as e:
                return JsonResponse({"error": f'Failed to connect to ML service: {str(e)}'}, status=500)
