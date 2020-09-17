from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
from pathlib import Path
import matplotlib
matplotlib.use('Agg')


# Import fast.ai Library
from fastai import *
from fastai.vision import *

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename


# Define a flask app
app = Flask(__name__)


path = Path("models")
learn = load_learner(path)




def model_predict():
    """
       model_predict will return the preprocessed image
    """
    ##p='/Users/afaundez/Documents/MDS/5 - Desarrollo de Proyectos y Productos de Datos/clase_productodatos_2020_udd/notebooks/data'
    p='/shots'
    predicciones=''
    for imagen in glob.glob(p+"/*.jpg"):
    	img=open_image(imagen)
    	img.show()
    	pred_class,pred_idx,outputs = learn.predict(img)
    	if str(pred_class) == 'Fire':
    		predicciones+= str(imagen)+': '+str(pred_class)+'\t \t'
    return (predicciones)
    





@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
#        f = request.files['file']

        # Save the file to ./uploads
#        basepath = os.path.dirname(__file__)
#        file_path = os.path.join(
#            basepath, 'uploads', secure_filename(f.filename))
#        f.save(file_path)

        # Make prediction
        preds = model_predict()
        return preds
    return None


if __name__ == '__main__':
    
    app.run()


