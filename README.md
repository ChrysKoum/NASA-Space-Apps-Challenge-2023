# Magnetic Reconnection Analysis

## Overview

This repository contains Python scripts to process, clean, and analyze interplanetary magnetic field data from spacecraft missions. The goal is to assess how often magnetic reconnection, a critical space weather phenomenon, occurs. This analysis is vital for understanding how frequently solar wind particles and energy penetrate the geospace environment, leading to potential space weather effects.

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

To run the data cleaning scripts, execute:

```python
input_file_path = "path_to_your_input_file"
output_file_path = "path_to_your_output_file"
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

To run the data analysis scripts, ensure that the cleaned data is loaded into a dataframe named `data`, then execute:

```python
print("\t\t Bz for 2019-2022")
plotBz(data,"2019-2022")
