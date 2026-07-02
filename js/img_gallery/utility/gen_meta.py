from rdkit import Chem 
from typing import Optional, List  

class InternalValid: 
     @staticmethod
     def validator(non_canon): 
           custom_SO3 = (
               "SULFONIC_ACID\t"
               "[S:1]([O:2])([O:3])([O:4])[#6:5]>>"
               "[S:1](=[O:2])(=[O:3])([O:4])[#6:5]\n"
           )
           params = rdMolStandardize.CleanupParameters()
           norm_SO3 = rdMolStandardize.NormalizerFromData(custom_SO3,
           params)
           if not isinstance(non_canon, str):
               raise TypeError("SMILES must be a string")
           smi = non_canon.strip()
           mol = Chem.MolFromSmiles(smi) 
           if mol is None:
               raise ValueError(f"Bad SMILES: {smi}")
           mol = norm_SO3.normalize(mol)
           mol = rdMolStandardize.Cleanup(mol)
           return Chem.MolToSmiles(mol, canonical=True)

class SubstructMatch(InternalValid):

    sub_mol_pfeca = Chem.MolFromSmarts('[*]-[#8]-[#6](-[#6](=[#8])-[#8]-[#1])(-[#9])-[*]') 
    sub_mol_pfsa = Chem.MolFromSmarts('[#8]=[#16](-[#8]-[#1])(=[#8])-[#6](-[#9])(-[#9])-[*]')
    sub_mol_ftoh = Chem.MolFromSmarts('[#8](-[#6](-[#6](-[#1])(-[#1])-[*])(-[#1])-[#1])-[#1]')
    sub_mol_pfoh = Chem.MolFromSmarts('[#8](-[#6](-[#6](-[*])(-[#9])-[#9])(-[#9])-[#9])-[#1]')
    sub_mol_mefasaa = Chem.MolFromSmarts('[#8](-[#1])-[#6](=[#8])-[#6](-[#1])(-[#1])-[#7](-[#1])-[#16](=[#8])(=[#8])-[#6](-[#9])(-[#9])-[*]')
    sub_mol_ftca = Chem.MolFromSmarts('[#6](-[#1])(-[#1])(-[#6](-[#6](-[#8]-[#1])=[#8])(-[#1])-[#1])-[*]')
    sub_mol_fts = Chem.MolFromSmarts('[#6](-[#1])(-[#1])(-[#6](-[#16](=[#8])(-[#8]-[#1])=[#8])(-[#1])-[#1])-[*]') 
    sub_mol_pfca = Chem.MolFromSmarts('[#6](=[#8])(-[#8]-[#1])-[#6](-[*])(-[#9])-[#9]')
    sub_mol_pfasa = Chem.MolFromSmarts('[#7](-[#16](=[#8])(=[#8])-[#6](-[#9])(-[#9])-[*])(-[#1])-[#1]')
    sub_mol_fasa = Chem.MolFromSmarts('[#7](-[#16](=[#8])(=[#8])-[#6](-[#6](-[*])(-[#1])-[#1])(-[#1])-[#1])(-[#1])-[#1]')
    sub_mol_pfal = Chem.MolFromSmarts('[#6](=[#8])(-[#9])-[#6](-[#9])(-[#9])-[*]') 
 
    if sub_mol_pfeca is None: 
        print("ERROR") 

    def __init__(self) -> None:
        self.pfeca: List[tuple] = []
        self.fasa: List[tuple] = []
        self.pfasa: List[tuple] = []
        self.pfca: List[tuple] = []
        self.fts: List[tuple] = []
        self.ftca: List[tuple] = []
        self.mefasaa: List[tuple] = []
        self.ftoh: List[tuple] = []
        self.pfoh: List[tuple] = []
        self.pfsa: List[tuple] = []
        self.pfal: List[tuple] = []
#         self.CF_chain: List[tuple] = []

    def match_pfeca(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_pfeca):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.pfeca.append((matched_smiles, mol_in))
            return True
        return False

    def match_fasa(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_fasa):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.fasa.append((matched_smiles, mol_in))
            return True
        return False

    def match_pfasa(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_pfasa):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.pfasa.append((matched_smiles, mol_in))
            return True
        return False

    def match_pfca(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_pfca):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.pfca.append((matched_smiles, mol_in))
            return True
        return False

    def match_fts(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_fts):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.fts.append((matched_smiles, mol_in))
            return True
        return False

    def match_ftca(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_ftca):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.ftca.append((matched_smiles, mol_in))
            return True
        return False

    def match_mefasaa(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_mefasaa):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.mefasaa.append((matched_smiles, mol_in))
            return True
        return False

    def match_ftoh(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_ftoh):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.ftoh.append((matched_smiles, mol_in))
            return True
        return False

    def match_pfoh(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_pfoh):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.pfoh.append((matched_smiles, mol_in))
            return True
        return False

    def match_pfsa(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_pfsa):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.pfsa.append((matched_smiles, mol_in))
            return True
        return False

    def match_pfal(self, mol_in) -> bool:
        if mol_in and mol_in.HasSubstructMatch(self.sub_mol_pfal):
            matched_smiles = Chem.MolToSmiles(mol_in)
            self.pfal.append((matched_smiles, mol_in))
            return True
        return False

    def classify(self, mol_in) -> List[str]:
        mol_cats: List[str] = []
        if self.match_pfeca(mol):
            mol_cats.append("PFECA")
        if self.match_pfasa(mol):
            mol_cats.append("PFASA") 
        if self.match_fasa(mol):
            mol_cats.append("FASA")
        if self.match_pfca(mol):
            mol_cats.append("PFCA")
        if self.match_fts(mol):
            mol_cats.append("FTS")
        if self.match_ftca(mol):
            mol_cats.append("FTCA")
        if self.match_mefasaa(mol):
            mol_cats.append("MeFASAA")
        if self.match_ftoh(mol):
            mol_cats.append("FTOH")
        if self.match_pfoh(mol):
            mol_cats.append("PFOH")
        if self.match_pfsa(mol):
            mol_cats.append("PFSA")
        if self.match_pfal(mol):
            mol_cats.append("PFAL")
        return str(mol_cats)


def load_mols_sdf(path): 
    """Produces Mol objects from an .sdf
    Args:
        path (str): directory with the concatenated sdf
    Returns:
        list[Mol]: a list of mol objects; the order in which 
                    mol objects were fed in to save_mols_sdf(): 
                    is the order in which they are returned here. 
    out: Mol object
    """
    suppl = Chem.SDMolSupplier(str(path), sanitize=True, removeHs=False) 
    return [m for m in suppl if m is not None] 

