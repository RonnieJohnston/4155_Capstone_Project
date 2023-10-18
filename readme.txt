This is the 4155 capstone project github for Course Review Collective.

*ALWAYS start any new development by pulling down any changes from main branch onto your local branch*

Git cloning and creating a new branch:
- open your code editor and create a new project by cloning the git repo
- Pull any new changes from main
- Run 'git checkout -b your-new-branch-name' to create a new branch (only run this command to create a new branches) 
  - your branch name should be in the format 'name-dev' for example 'presley-dev'
- Run "git commit -am 'commit message'" to add and commit all changes
- Run 'git push -u origin main' to push changes and your new branch to repo

To set up app:
- open two separate terminals inside your code editor, in the first terminal run 'cd api' to move to api folder
- in the second terminal, run 'cd client' to move to client folder
- run 'npm install' on the api folder to install all dependencies
- run 'npm install' on the client folder to install dependencies

To start App:
- Starting with the first terminal, run the command 'npm start', to start up the api.
- In the second terminal, run the command 'npm start', to start up the client.
- I find it helpful to have api open in one window completely, and client in a separate window.
- Finally, navigate to http://localhost:3000 in your browser
