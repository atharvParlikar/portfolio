import requests
import sys

with open(f'./{sys.argv[1]}.md', 'r') as f:
    content = f.read()

requests.post('http://localhost:4000/api/v1/create', json={
    "title": "first blog",
    "body": content
    })

print('blog added successfully')
