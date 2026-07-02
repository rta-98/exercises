from rdkit import Chem 
from rdkit.Chem import Draw
from rdkit.Chem.rdchem import Mol
from rdkit.Chem.Draw import MolDrawOptions
from pathlib import Path
from utility import gen_meta
import pandas as pd
#|%%--%%| <V8z9C2WhEZ|GjkaVQp8Rv>
base = Path.cwd() 
storage = base / "./static/storage/"
sdf = storage / "./sdf"
csv = storage / "./csv"
img = storage / "./png"
json = storage / "./json"

#|%%--%%| <GjkaVQp8Rv|BuhLvaQs47>
SIZE = (200,200)
BG_COLOR = (.29, .31, .33)
drawOptions = MolDrawOptions() 
drawOptions.setBackgroundColour(BG_COLOR) 

#|%%--%%| <BuhLvaQs47|wQ0lriGOUr>
# converting "df1.csv" to json 
df = pd.read_csv( csv / "df1.csv")
df['Molecule']

img_paths = []
for p in sdf.iterdir():
    for name in df['Molecule']:
        if p.stem == name:
           suppl = Chem.SDMolSupplier(str(p), sanitize=True, removeHs=False) 
           mol = suppl[0]
           mol_fname = f"{p.stem}.png" 
           img_path = img / mol_fname
           Draw.MolToImage(mol, size=SIZE, options=drawOptions).save(img_path)
           img_paths.append(mol_fname)

df["img"] = img_paths
df.to_json(json / "pfas_meta.json", orient="records") 
