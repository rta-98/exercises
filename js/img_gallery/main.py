from fastapi import FastAPI
from fastapi.responses import FileResponse
#from fastapi.staticfiles import StaticFiles
from pathlib import Path
from utility.gen_meta import *

app = FastAPI() 
BASE_DIR = Path(__file__).parent 
STATIC_DIR = BASE_DIR / "./static"
STORAGE_DIR = STATIC_DIR / "./storage"

# FastAPI check routes; sees the GET request, 
# associates {filename} from the GET request with a file on 
# the hardrive in /png/ and sends it back to the browser in 
# the form of binary data 

# Static File Routes ---------------------------------
@app.get("/css/{filename}")
def serve_image(filename: str):
    file_path = STATIC_DIR / "css" / filename
    return FileResponse(file_path) #2 browser recieves file 

@app.get("/js/{filename}") 
def serve_js(filename: str): 
    file_path = STATIC_DIR / "js" / filename 
    return FileResponse(file_path)

@app.get("/png/{filename}") 
def serve_png(filename: str):
    file_path = STORAGE_DIR / "png" / filename 
    return FileResponse(file_path)

# HTML Route ---------------------------------
# FastAPI recieves GET /.; routes match @app.get("/"); sends raw HTML string over the network as text
@app.get("/")
def serve_html():
    file_path = BASE_DIR / "index.html"
    return FileResponse(file_path) #1 broswer recieves html

# API Routes ---------------------------------
@app.get("/api/mol-img-meta")
def get_meta():
    json = STORAGE_DIR / "./json/pfas_meta.json"
    # application/json tells FastAPI to add an HTTP header to the response called
    # Content-Type: application/json thus informing JS that it is safe to parse
    # as a JSON object
    return FileResponse(json, media_type="application/json") 














