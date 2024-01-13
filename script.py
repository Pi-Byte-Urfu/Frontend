import os

def count_lines(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return sum(1 for line in file)

def count_lines_in_directory(directory):
    total_lines = 0
    for dir_path, _, files in os.walk(directory):
        for file_name in files:
            if file_name.endswith('.tsx') or file_name.endswith('.ts') or file_name.endswith('.scss'):
                file_path = os.path.join(dir_path, file_name)
                total_lines += count_lines(file_path)
                print(f"{file_path}: {count_lines(file_path)} lines")
    print(f"Total lines in the project: {total_lines}")

# Укажите путь к вашему проекту
project_path = 'D:\\Pi_Byte\\ts_pi_byte\\src'

if os.path.exists(project_path):
    count_lines_in_directory(project_path)
else:
    print("Invalid project path or directory does not exist.")