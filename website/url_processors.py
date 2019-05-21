from .models import Content

def PageMeta(request):
    meta = Content.objects.values_list('slug', 'title')
    print(meta)
    url_dic = {
        'privacypolicy': meta[0][0]
    }
    print(url_dic)
    return {
        'meta': url_dic,  # Add 'contacts' to the context
    }