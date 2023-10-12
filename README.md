# Magnetic Reconnection Analysis

## Overview

This repository contains Python scripts to process, clean, and analyze interplanetary magnetic field data from spacecraft missions. The goal is to assess how often magnetic reconnection, a critical space weather phenomenon, occurs. This analysis is vital for understanding how frequently solar wind particles and energy penetrate the geospace environment, leading to potential space weather effects.

Website Presentation: [NASA Space Apps Challenge 2023](https://chryskoum.github.io/NASA-Space-Apps-Challenge-2023)

## Data Cleaning

### Files:
- `wind_def_2022.txt`: Raw data file containing the interplanetary magnetic field measurements.
- `wind_def_2022_clean.txt`: Cleaned data with imputed missing values.
- `wind_def_2022_clean_month.txt`: Cleaned data with added month and day columns.
- `wind_def_2022_clean_month_plus.txt`: Cleaned data with added month and day columns with an extra step of fill verification.

### Cleaning Steps:

1. **Data Import**: Data is imported into a pandas dataframe from the raw data file.
2. **Placeholders Replacement**: Placeholder values, which might represent missing or erroneous data, are replaced with NaN (Not a Number).
3. **Linear Interpolation**: Missing values (NaNs) are imputed using linear interpolation. This ensures continuity in the data and fills in gaps.
4. **Date Conversion**: The day of the year is converted to the corresponding month and day, making the dataset more readable and easier to analyze.

To run the data cleaning scripts, execute the right files.
For Example:

```python
input_file_path = "wind_def_2022.txt"
output_file_path = "wind_def_2022_clean.txt"
clean_and_impute(input_file_path, output_file_path)
```
## Data Analysis

### Functionality:
- **Plotting Bz**: The main function, `plotBz`, is designed to visualize the Bz component of the magnetic field over a specified period and to compute statistical measures like the mean, standard deviation, and percentiles.
- **Yearly and Monthly Breakdown**: The script provides a detailed breakdown of the Bz component for the entire data range, each individual year, and each month within those years.

### Analysis Steps:
1. **Statistical Analysis**: For the specified period, calculate essential statistics such as the mean, standard deviation, minimum, maximum, and the 99th percentile of the Bz component.
2. **Visualization**: Plot the Bz component against time. Highlight the 99th percentile with dashed lines for easy identification of extreme values.
3. **Yearly and Monthly Insights**: Visualize the Bz component for each year and further break it down month by month to identify patterns and anomalies specific to periods.

To run the data analysis scripts, ensure that the cleaned data(`wind_def_2022_clean_month_plus.txt`) is loaded into a dataframe named `data`, then execute:

```python
print("\t\t Bz for 2019-2022")
plotBz(data,"2019-2022")
```

## Convolutional Neural Network

### Usefulness

There was a need to create a model for predicting when the phenomenon of magnetic reconnection might happen based on the following variables: temperture, proton density, Bz and Bx (Geocentric Solar Magnetospheric). These variables have been selected based on established scientific research regarding the phenomenon and data accessibility through NASA's open access satellite data. However, the complexity of predicting magnetic reconnection arises from the multifaceted nature of the process, its spatial and temporal variability, and the inherent challenges tied to data quality and availability. An explenation of the algorithm's steps is provided below.

### Data Import and Preprocessing

Assuming the data is already correct and clean, we start by importing our dataset. In this case, it is a .txt file containing the variables' values at the corresponding time (year,day,hour,min). We preprocess the data by extracting the relevant features into the X variable and generating labels based on certain thresholds into the y variable. When the y equals to 0 it means there is no magnetic reconnection and when y equals to 1 the event is on place. Important note is that we had to imply low pass filtering for the noise on data.

### Data Splitting and Standardization

We split the dataset into training and testing sets using train_test_split. This step helps in evaluating the model's performance on unseen data. We also standardize the features using StandardScaler. Standardization ensures that all features have a similar scale, which can improve the model's performance, avoiding errors based on scale difference from temperture (10^5).

### CNN Initialization

We create an instance of the Sequential model using TensorFlow's Keras API. This model is a sequential stack of layers.

### Input Layer 

We add the input layer and reshape the input data to match the expected input shape of the CNN. In this case, we reshape it to have dimensions (6, 1, 1) to represent 6 features.

### Convolutional Layers

We add two convolutional layers (Conv2D) with different filter sizes and activation functions (ReLU). These layers are responsible for learning spatial patterns in the data. The first convolutional layer has 32 filters, and the second has 64. After each convolutional layer, we add a max-pooling layer (MaxPooling2D). Max-pooling reduces the spatial dimensions of the data, retaining the most important information.

### Flatten Layer

After the convolutional and max-pooling layers, we add a flatten layer to transform the 2D output into a 1D vector. This step is necessary before passing the data to fully connected layers.

### Fully Connected Layers

We add two fully connected (dense) layers with ReLU activation. These layers are responsible for learning complex patterns and making predictions. The last dense layer has a single unit with a sigmoid activation function. This unit represents the output of the binary classification model, where values close to 0 represent one class (no event) and values close to 1 represent the other class (event).

### Model Compilation

We compile the model using stochastic gradient descent (SGD) as the optimizer. We also specify the loss function as binary cross-entropy, which is suitable for binary classification tasks. The accuracy metric is used to evaluate the model's performance during training.

### Model Training

We train the model on the training data using the compiled configuration. The training process involves adjusting the model's weights and biases to minimize the loss function.

### Prediction

We use the trained model to make predictions. For example, we can predict the outcome for a single observation or the entire test set.

### Evaluation

We evaluate the model's performance by computing the confusion matrix and accuracy score on the test set. The confusion matrix shows how many true positives, true negatives, false positives, and false negatives the model predicted. The accuracy score quantifies the model's overall accuracy in predicting the correct class.


### Conclusion

The model has exhibited significant variability in its accuracy metric, primarily due to its sensitivity to the train-test data split. To enhance the model's robustness in such scenarios, it is advisable to incorporate alternative evaluation techniques, such as bootstrapping. Bootstrapping can provide a more stable and reliable measure of accuracy, reducing the impact of data partitioning variability on model assessment. As a next step, you may consider exploring the effectiveness of other neural network models, such as Artificial Neural Networks (ANN) or Feedforward Neural Networks (FNN). The initial selection of the current model, Convolutional Neural Network (CNN), was based on the assumption that the data could conclude real-time data images from the Sun at the near future. However, experimenting with various neural network architectures can provide valuable insights into which model is best suited for your specific task and dataset.
