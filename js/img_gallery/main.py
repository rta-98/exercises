from fastapi import FastAPI, Body
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel 
from pathlib import Path
from utility.gen_meta import *
import pandas as pd

app = FastAPI() 
app.mount("/css", StaticFiles(directory="static/css"), name="css")
app.mount("/js", StaticFiles(directory="static/js"), name="js")
app.mount("/png", StaticFiles(directory="static/storage/png"), name="png")
app.mount("/pdb", StaticFiles(directory="static/storage/pdb"), name="pdb") 

BASE_DIR = Path(__file__).parent 
STATIC_DIR = BASE_DIR / "./static"
STORAGE_DIR = STATIC_DIR / "./storage"
TEMPLATES_DIR = STATIC_DIR / "./templates" 

# FastAPI check routes; sees the GET request, 
# associates {filename} from the GET request with a file on 
# the hardrive in /png/ and sends it back to the browser in 
# the form of binary data 

class MolName(BaseModel):
  molname: str

# Static File Routes ---------------------------------
"""
@app.get("/css/{filename}")
def serve_image(filename: str):
    file_path = STATIC_DIR / "css" / filename
    return FileResponse(file_path) #2 browser recieves file 

@app.get("/js/{filename}") 
def serve_js(filename: str): 
    file_path = STATIC_DIR / "js" / filename
    return FileResponse(file_path) 

@app.get("/js/modules/{filename}") 
def serve_modules(filename: str):
    try:
        file_path = STATIC_DIR / "js" / "modules" / filename
    except Exception as e: 
        raise RuntimeError(f"{e}")
    return FileResponse(file_path) 

@app.get("/png/{filename}") 
def serve_png(filename: str):
    file_path = STORAGE_DIR / "png" / filename 
    return FileResponse(file_path)
"""

# HTML Route ---------------------------------
# FastAPI recieves GET /.; routes match @app.get("/"); sends raw HTML string over the network as text
@app.get("/")
def serve_html():
    file_path = TEMPLATES_DIR / "page1_gallery.html"
    return FileResponse(file_path) #1 broswer recieves html

@app.get("/details/{name}")
def serve_template(name: str): 
    file_path = TEMPLATES_DIR / "page2_details.html"
    return FileResponse(file_path) #1 broswer recieves html

# API Routes ---------------------------------
@app.get("/api/mol-img-meta")
def get_meta():
    json = STORAGE_DIR / "./json/df1_fbd.json"
    # application/json tells FastAPI to add an HTTP header to the response called
    # Content-Type: application/json thus informing JS that it is safe to parse
    # as a JSON object
    return FileResponse(json, media_type="application/json") 

@app.post("/api/details")
def serve_data(mol_name: MolName):
    name = mol_name.molname # accessing the molname attribute of the mol_name instance;
    # that is the instance of the Pydantic Model, a DTO (data transfer object) 
    df_json = STORAGE_DIR / "./json/df1_fbd.json"
    df = pd.read_json(df_json)
    filtered_df = df[df["Molecule"] == f"{name}"]
    nested_df = filtered_df.set_index("Molecule").to_dict(orient="index")
    return {"data": nested_df} #1 broswer recieves html
    
