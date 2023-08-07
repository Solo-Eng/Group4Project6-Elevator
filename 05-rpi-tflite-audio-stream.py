"""
Connect a resistor and LED to board pin 8 and run this script.
Whenever you say "stop", the LED should flash briefly
"""

import sounddevice as sd
import numpy as np
import scipy.signal
import timeit
import python_speech_features
import selectors                                                # import the selectors library to handle multiple connections simultaneously
import socket                                                   # import python sockets library
import types                                                    # dynamic type creation
import mysql.connector

from tflite_runtime.interpreter import Interpreter

# Parameters
debug_time = 1
debug_acc = 0
led_pin = 8
word_threshold = 0.5
rec_duration = 0.5
window_stride = 0.5
sample_rate = 48000
resample_rate = 8000
num_channels = 1
num_mfcc = 16
model_path = 'wake_word_one_lite.tflite'
model_path2 = 'wake_word_two_lite.tflite'
model_path3 = 'wake_word_three_lite.tflite'
# Sliding window
window = np.zeros(int(rec_duration * resample_rate) * 2)

# Load one model (interpreter)
interpreter = Interpreter(model_path)
interpreter.allocate_tensors()
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()
print(input_details)

# Load two model (interpreter)
interpreter2 = Interpreter(model_path2)
interpreter2.allocate_tensors()
input_details2 = interpreter2.get_input_details()
output_details2 = interpreter2.get_output_details()
print(input_details2)

# Load three model (interpreter)
interpreter3 = Interpreter(model_path3)
interpreter3.allocate_tensors()
input_details3 = interpreter3.get_input_details()
output_details3 = interpreter3.get_output_details()
print(input_details3)

# Decimate (filter and downsample)
def decimate(signal, old_fs, new_fs):
    
    # Check to make sure we're downsampling
    if new_fs > old_fs:
        print("Error: target sample rate higher than original")
        return signal, old_fs
    
    # We can only downsample by an integer factor
    dec_factor = old_fs / new_fs
    if not dec_factor.is_integer():
        print("Error: can only decimate by integer factor")
        return signal, old_fs

    # Do decimation
    resampled_signal = scipy.signal.decimate(signal, int(dec_factor))

    return resampled_signal, new_fs

# This gets called every 0.5 seconds
def sd_callback(rec, frames, time, status):

    # Start timing for testing
    start = timeit.default_timer()
    
    # Notify if errors
    if status:
        print('Error:', status)
    
    # Remove 2nd dimension from recording sample
    rec = np.squeeze(rec)
    
    # Resample
    rec, new_fs = decimate(rec, sample_rate, resample_rate)
    
    # Save recording onto sliding window
    window[:len(window)//2] = window[len(window)//2:]
    window[len(window)//2:] = rec

    # Compute features
    mfccs = python_speech_features.base.mfcc(window, 
                                        samplerate=new_fs,
                                        winlen=0.256,
                                        winstep=0.050,
                                        numcep=num_mfcc,
                                        nfilt=26,
                                        nfft=2048,
                                        preemph=0.0,
                                        ceplifter=0,
                                        appendEnergy=False,
                                        winfunc=np.hanning)
    mfccs = mfccs.transpose()

    # Make prediction from model
    in_tensor = np.float32(mfccs.reshape(1, mfccs.shape[0], mfccs.shape[1], 1))
    interpreter.set_tensor(input_details[0]['index'], in_tensor)
    interpreter.invoke()
    output_data = interpreter.get_tensor(output_details[0]['index'])
    val = output_data[0][0]
    
    interpreter2.set_tensor(input_details2[0]['index'], in_tensor)
    interpreter2.invoke()
    output_data2 = interpreter2.get_tensor(output_details2[0]['index'])
    val2 = output_data2[0][0]
    
    interpreter3.set_tensor(input_details3[0]['index'], in_tensor)
    interpreter3.invoke()
    output_data3 = interpreter3.get_tensor(output_details3[0]['index'])
    val3 = output_data3[0][0]
    
        #connect to MySQL database
    conn = mysql.connector.connect(
        host = 'localhost',
        user = 'ese',
        password = 'ese',
        database = 'elevator'
    )
    
    
    if val > word_threshold:
        print('one')
        # Create a cursor object to execute SQl queries
        cursor = conn.cursor()
         # prepare the SQL query to store data into database
        query = "UPDATE elevatorNetwork SET requestedFloor = 1 WHERE nodeID = 1"
        # Execute the query with the data from the form
        cursor.execute(query)
        # commit the changes to the database
        conn.commit()
        # close cursor and connection
        cursor.close()
    if val2 > word_threshold:
        print('two')
        # Create a cursor object to execute SQl queries
        cursor = conn.cursor()
         # prepare the SQL query to store data into database
        query = "UPDATE elevatorNetwork SET requestedFloor = 2 WHERE nodeID = 1"
        # Execute the query with the data from the form
        cursor.execute(query)
        # commit the changes to the database
        conn.commit()
        # close cursor and connection
        cursor.close()
    if val3 > word_threshold:
        print('three')
        # Create a cursor object to execute SQl queries
        cursor = conn.cursor()
         # prepare the SQL query to store data into database
        query = "UPDATE elevatorNetwork SET requestedFloor = 3 WHERE nodeID = 1"
        # Execute the query with the data from the form
        cursor.execute(query)
        # commit the changes to the database
        conn.commit()
        # close cursor and connection
        cursor.close()

    if debug_acc:
        print(val)
    
    if debug_time:
        print(timeit.default_timer() - start)

# Start streaming from microphone
with sd.InputStream(channels=num_channels,
                    samplerate=sample_rate,
                    blocksize=int(sample_rate * rec_duration),
                    callback=sd_callback):
    while True:
        pass
