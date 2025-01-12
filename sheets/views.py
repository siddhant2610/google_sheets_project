# from django.shortcuts import render
# from django.http import HttpResponse
# from django.template import TemplateDoesNotExist

# def spreadsheet_view(request):
#     try:
#         # Attempt to render the template
#         return render(request, 'sheets/spreadsheet.html', {})
#     except TemplateDoesNotExist:
#         # Provide a detailed error response for debugging
#         return HttpResponse("Template 'sheets/spreadsheet.html' does not exist. Check template location and path.")


from django.shortcuts import render

def spreadsheet_view(request):
    rows = [
        {'index': i, 'cells': [{'column': j, 'value': ''} for j in range(1, 6)]}
        for i in range(1, 6)
    ]
    column_headers = ["A", "B", "C", "D", "E"]
    return render(request, 'spreadsheet.html', {'rows': rows, 'column_headers': column_headers})
