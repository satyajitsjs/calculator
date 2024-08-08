from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Calculation
from .serializers import CalculationSerializer
import math

@api_view(['POST'])
def calculate(request):
    if request.method == 'POST':
        expression = request.data.get('expression')
        try:
            result = eval(expression, {"__builtins__": None}, math.__dict__)
            calculation = Calculation.objects.create(expression=expression, result=result)
            serializer = CalculationSerializer(calculation)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_calculations(request):
    calculations = Calculation.objects.all()
    serializer = CalculationSerializer(calculations, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)