{% extends "template/default.html.swig" %}

{% block content %}
  This is the content {{ name }}

  {% for i in range(1, 3) %}
    {% include 'components/article-' + i + '/article-' + i + '.html.swig' %}
  {% endfor %}
{% endblock %}
