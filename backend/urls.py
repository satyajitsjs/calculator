from django.contrib import admin
from django.urls import path
from backend_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', index, name='index'),

    # API endpoints
    path('api/calculate/', calculate, name='calculate'),
    path('api/calculations/', get_all_calculations, name='get_all_calculations'),
]
