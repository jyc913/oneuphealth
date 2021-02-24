# oneuphealth


1. download docker (https://www.docker.com/get-started)
2. open a terminal, git clone https://github.com/jyc913/oneuphealth.git
3. go to backend folder, run `npm i` 
3. go to project root folder (make sure the folder has docker-compose.yml in this location)
4. on the root directory, run  `docker-compose build`
5. on the root directory, run  `docker-compose up -d` 
7. go to localhost:3000, and click details page. It should show the patient info there
8. run `docker-compose down` to stop the app


Note: the data in the web app was static that store on the backend/api/data folder and it was inserted to mongodb
