import subprocess

with open('test', 'r') as f:
    list = f.read().split('\n')
    for j, i in enumerate(list): 
        subprocess.run(f'curl {i} > {i}.svg')
        print(f'download {j}')
