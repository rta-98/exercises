# CLONE REPO --------------------------------- 
git clone feature_toggle_subclass_info https://github.com/rta-98/exercises.git

# CREATE ENV 
cd img_gallery

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate

# Install the dependencies
pip install -r requirements.txt

Option 2: Using environment.yml (Conda/Miniconda)
This is highly recommended when working with rdkit, as Conda handles complex C++ background dependencies perfectly across Windows, Mac (including
Apple Silicon/M1/M2), and Linux without compilation errors.

  # Navigate to the folder
  cd img_gallery
  # Create the environment from the file
  conda env create -f environment.yml
  # Activate the new environment
  conda activate pfas_webapp

