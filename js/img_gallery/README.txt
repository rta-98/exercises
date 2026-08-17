# CLONE REPO --------------------------------- 
git clone feature_toggle_subclass_info https://github.com/rta-98/exercises.git

# CREATE ENV --------------------------------- 

# Create a virtual environment
python -m venv venv

venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate

# Install the dependencies
pip install -r requirements.txt

# conda 
conda env create -f environment.yml
conda activate pfas_webapp

