import os

def list_files_in_root():
    root_directory = '/'
    files = os.listdir(root_directory)
    for file in files:
        print(file)

if __name__ == "__main__":
    list_files_in_root()