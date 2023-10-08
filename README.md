# Magnetic Reconnection Analysis using Convolutional Neural Networks (CNN)

## Overview

This repository contains Python scripts to process, clean, analyze, and predict interplanetary magnetic field data from spacecraft missions using Convolutional Neural Networks (CNN). The primary goal is to assess the frequency of magnetic reconnection, a vital space weather phenomenon. Understanding the frequency with which solar wind particles and energy infiltrate the geospace environment can shed light on potential space weather effects.

Website Presentation: [NASA Space Apps Challenge 2023](https://chryskoum.github.io/NASA-Space-Apps-Challenge-2023)

## Data Preprocessing

### Data Import:
The dataset is imported from a tab-separated file named 'data.txt'. Subsets of the data are selected using a step of 3 from 0 to 2000 for training and evaluation purposes.

```python
dataset = pd.read_csv('data.txt', sep="\t", header=0)
s = np.arange(0,2000,3)
X = dataset.iloc[s, 2:8].values
y = dataset.iloc[s, 9].values
```

### Data Cleaning:
The data undergoes a series of checks and modifications:

1. Temperature, Proton Density, Bz, and By values are examined to filter out or modify potential outliers or specific conditions.
2. The dataset is split into training and test sets, with 70% of the data used for training and 30% for testing.
3. Data normalization is applied using `StandardScaler` from Scikit-learn to ensure the model receives data in a standard format.

## CNN Model Implementation

### Initialization:
A sequential model is initialized using TensorFlow's Keras API.

```python
cnn = tf.keras.models.Sequential()
```

### Building the Model:

1. **Input and First Hidden Layer**: The first layer consists of 6 units with a 'relu' activation function.
2. **Second Hidden Layer**: The second layer also contains 6 units with a 'relu' activation function.
3. **Output Layer**: A single unit for binary classification. Since no activation function is provided, it defaults to a linear activation.

### Training the Model:

1. **Compilation**: The model is compiled using the Stochastic Gradient Descent (SGD) optimizer with a learning rate of 0.0001. The loss function used is 'binary_crossentropy', suitable for binary classification tasks.
2. **Training**: The model is trained on the training set with a batch size of 32 for 100 epochs.

### Model Evaluation:

1. **Single Observation Prediction**: The model can predict the class of a single observation.
2. **Test Set Prediction**: The model's predictions on the test set are binarized using a threshold of 0.5.
3. **Performance Metrics**: The confusion matrix and accuracy score are computed using Scikit-learn to evaluate the model's performance on the test set.

## Usage:

To execute the CNN model, ensure TensorFlow and other necessary libraries are installed. Load the dataset, preprocess the data, build the model, train it, and finally evaluate its performance using the provided scripts.

## Conclusion:

This CNN model offers a structured approach to predicting the occurrence of magnetic reconnection based on interplanetary magnetic field data. Regular model evaluations and updates are recommended to ensure its accuracy and relevance.
