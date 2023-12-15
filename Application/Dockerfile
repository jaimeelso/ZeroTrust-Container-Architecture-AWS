# Use the official bun image as the base image
FROM oven/bun

# Set the working directory to /webserver
WORKDIR /webserver

# Copy the inde.js and SSL certificates to /webserver
COPY ./index.js /webserver
COPY ./key.pem /webserver
COPY ./cert.pem /webserver

# Expose port 3000 for the web server
EXPOSE 3000

# Start the web server
CMD ["bun", "index.js"]