[![PyPI](https://img.shields.io/badge/PyPi-v1.3-f39f37.svg)](https://pypi.python.org/pypi/ctdl)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/nikhilkumarsingh/content-downloader/blob/master/LICENSE.txt)

# content-downloader

Python package with **command line utility** to download files on any topic in bulk.

content-downloader supports Python 2 as well as Python 3.

**Feature update:** Download files parallely.
![](https://media.giphy.com/media/3oKIPlt7APHqWuVl3q/giphy.gif)

## Installation

To install content-downloader, simply,
```
$ pip install -r requirements.txt
```

## Command line usage

* **IMPORTANT NOTE**: If the command `ctdl` does not accept arguments and results in error
then the library `ctdl` may not have been updated to incorporate my changes. In this case do the following:
    * In ctdl/ctdl.py, remove the `.` prefix from `.downloader` and `.utils` for the following imports, so it changes:
        * FROM
            ```
            from .downloader import download_series, download_parallel
            from .utils import FILE_EXTENSIONS, THREAT_EXTENSIONS
            ```
        * TO
            ```
            from downloader import download_series, download_parallel
            from utils import FILE_EXTENSIONS, THREAT_EXTENSIONS
            ```

    * Run the python file directly `python ctdl/ctdl.py ___` (instead of with `ctdl ___`)

    * Note that after you install the dependencies with `pip install -r requirements.txt` you may optionally try other tqdm library Patches that may be used as follows:
        ```
        pip uninstall tqdm
        pip install git+https://github.com/nikhilkumarsingh/tqdm
        ```

```
$ ctdl [-h] [-f FILE_TYPE] [-l LIMIT] [-d DIRECTORY] [-p] [-a] [-t]
       [-minfs MIN_FILE_SIZE] [-maxfs MAX_FILE_SIZE] [-nr]
       [query]
```
Optional arguments are:

- -f FILE_TYPE : set the file type. (can take values like ppt, pdf, xml, etc.)

                 Default value: pdf

- -l LIMIT : specify the number of files to download.

             Default value: 10

- -d DIRECTORY : specify the directory where files will be stored.

                 Default: A directory with same name as the search query in the current directory.

- -p : for parallel downloading.

- -a : list of all available filetypes.

- -t : list of all common virus carrier filetypes.

- -minfs MIN_FILE_SIZE : specify minimum file size to download in Kilobytes (KB).

                 Default: 0

- -maxfs MAX_FILE_SIZE : specify maximum file size to download in Kilobytes (KB).

                 Default: -1 (represents no maximum file size)

- -nr : prevent download redirects.

                 Default: False

Here are some examples:

- To get list of available filetypes:

  ```
  $ ctdl -a
  ```

- To get list of potential high threat filetypes:

  ```
  $ ctdl -t
  ```

- To download pdf files on topic 'python':

  ```
  $ ctdl python
  ```
  This is the default behaviour which will download 10 pdf files in a folder named 'python' in current directory.

- To download 3 ppt files on 'health':

  ```
  $ ctdl -f ppt -l 3 health
  ```

- To explicitly specify download folder:

  ```
  $ ctdl -d /home/nikhil/Desktop/ml-pdfs machine learning
  ```

- To download files parallely:
  ```
  $ ctdl -f pdf -p python
  ```

- To search for and download in parallel 10 files in PDF format containing
  the text "python" and "algorithm", without allowing any url redirects,
  and where the file size is between 10,000 KB (10 MB) and 100,000KB (100 MB),
  where KB means Kilobytes, which has an equivalent value expressed in Megabytes:
  ```
  $ ctdl -f pdf -l 10 -minfs 10000 -maxfs 100000 -nr -p "python algorithm"`
  ```

## Usage in Python files

```python
from ctdl import ctdl

filetype = 'ppt'
limit = 5
directory = '/home/nikhil/Desktop/ml-pdfs'
query = 'machine learning using python'

ctdl.download_content(query, filetype, directory, limit)
```

![](https://github.com/nikhilkumarsingh/content-downloader/blob/master/example.png)
