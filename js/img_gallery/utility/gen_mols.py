import sys
import os 
import pandas as pd
from rdkit import Chem 
from rdkit.Chem import Draw, AllChem
from rdkit.Chem.rdchem import Mol
from rdkit.Chem.Draw import rdMolDraw2D, MolDraw2DCairo
from pathlib import Path
from utility import gen_meta
modules = '/home/yang/projects/t99_calc/data/generation/cheminformatics/modules'
if modules not in sys.path:
    sys.path.append(modules)
import data.bridge
import data.services
#|%%--%%| <KiSIfsFEMQ|EVag4yrKRL>
# Dir spec ---------------------------------
os.chdir("/home/yang/exercises/js/img_gallery")
base = Path.cwd() 
storage = base / "./static/storage/"
sdf = storage / "./sdf"
sdf_202 = storage / "./sdf_202_list"
csv = storage / "./csv"
img = storage / "./png"
json = storage / "./json"

df1 = Path('/home/yang/projects/t99_calc/data/storage/json/df1_fbd.json')

df = pd.read_json(df1)

# converting "df1.csv" to json ---------------------------------
df1_meta = pd.read_json()
help(mol2sdf)
#print(df[["smi_check", "SMILES", "Motif"]].head(100).to_string(index=False))
SIZE = (200,200)
BG_COLOR = (.29, .31, .33)
smi_valid = data.services.InternalValid.validator 

#|%%--%%| <EVag4yrKRL|f88wVnqhVe>
# Converting df_smiles/df1.sdf into a list of Mol objects; the order correlates with df1 from nasa7_torsions_gen.py  
mol2sdf = data.bridge.load_mols_sdf
df1_mols, df1_paths = mol2sdf(sdf_df / "df1_meta.json")
df1_img_paths = []
df1_smiles_list = [] 
i = 0
for mol, path in zip(df1_mols, df1_paths):
    mol_h = Chem.AddHs(mol)
    smiles = Chem.MolToSmiles(mol_h)
    df1_smiles_list.append(smiles)
    mol_h_fname = Path(path).stem
    img_path = img / mol_h_fname
    AllChem.Compute2DCoords(mol_h)
    drawer = rdmol_hDraw2D.mol_hDraw2DCairo(200, 200)
    live_ops = drawer.drawOptions()
    live_ops.setBackgroundColour(BG_COLOR) 
    live_ops.bracketsAroundAtomLists = False 
    drawer.Drawmol_hecule(mol_h)
    drawer.FinishDrawing() 
    drawer.WriteDrawingText(img_path)
    df1_img_paths.append(mol_h_fname)

df["img"] = df1_img_paths
df.to_json(json / "df1_meta.json", orient="records") 

#|%%--%%| <f88wVnqhVe|VPlnLgpaJX>
df1_img_paths = []
df1_smiles_list = [] 
for path in sdf_202.iterdir():
    file_name = path.stem
    mol = Chem.SDMolSupplier(path)
    mol = mol[0]
    smiles = Chem.MolToSmiles(mol)
    for df_name in df["Molecule"].to_list():
        if df_name == file_name:
            print(smiles, file_name)
            img_path = img / f"{file_name}.png"
            AllChem.Compute2DCoords(mol)
            drawer = rdMolDraw2D.MolDraw2DCairo(200, 200)
            live_ops = drawer.drawOptions()
            live_ops.setBackgroundColour(BG_COLOR) 
            live_ops.bracketsAroundAtomLists = False 
            drawer.DrawMolecule(mol)
            drawer.FinishDrawing() 
            drawer.WriteDrawingText(img_path)
            df1_img_paths.append(img_path)
            df1_smiles_list.append(smiles)


#|%%--%%| <VPlnLgpaJX|P8e5OMnbiq>
for df_smiles in df1_fbd["SMILES"].to_list():
    print(df_smiles)
        mol = Chem.SDMolSupplier(path) 
        mol = mol[0]
        smiles = Chem.MolToSmiles(mol)
        mol_fname = Path(path).stem
        img_path = img / f"{mol_fname}.png"
        AllChem.Compute2DCoords(mol)
        drawer = rdMolDraw2D.MolDraw2DCairo(200, 200)
        live_ops = drawer.drawOptions()
        live_ops.setBackgroundColour(BG_COLOR) 
        live_ops.bracketsAroundAtomLists = False 
        drawer.DrawMolecule(mol)
        drawer.FinishDrawing() 
        drawer.WriteDrawingText(img_path)
        df1_img_paths.append(img_path.name)
        df1_smiles_list.append(smiles)
            
df1_fbd["smi_check"] = df1_smiles_list
#|%%--%%| <P8e5OMnbiq|qJ8rJtOlDr>



