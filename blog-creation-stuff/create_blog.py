import requests
import sys
import time

with open(f'./{sys.argv[1]}.md', 'r') as f:
    content = f.read()

for i in range(int(sys.argv[2])):
    requests.post('http://localhost:4000/api/v1/create', json={
        "title": "this is a titlej",
        "body": content,
        "summery": "this is a summery"
        })
    time.sleep(0.5)
    print(i)

print(sys.argv[2] + ' blog added successfully')
