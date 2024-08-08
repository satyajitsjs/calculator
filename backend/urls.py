from django.contrib import admin
from django.urls import path
from backend_app.views import calculate, get_all_calculations

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/calculate/', calculate, name='calculate'),
    path('api/calculations/', get_all_calculations, name='get_all_calculations'),
]
