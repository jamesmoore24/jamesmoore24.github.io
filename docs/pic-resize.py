from PIL import Image
import os

file_name = 'xray.png'
ratio = 4

# Open the image
img = Image.open(file_name)
        
# Calculate the new size (half of the original)
new_size = (img.width // ratio, img.height // ratio)
        
# Resize the image while preserving the aspect ratio
resized_img = img.resize(new_size, Image.ANTIALIAS)
        
# Save the resized image, overwriting the original
resized_img.save(file_name)

print("Images resized and overwritten successfully!")