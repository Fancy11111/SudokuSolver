# Sudoku Solver

## Background

During my time spent doing mandatory civil services in Austria, I started doing sudokus daily.

At the same time, I was thinking about doing a side project to sharpen my skills, but I wasn't sure what to do as I didn't want the classical portfolio fillers.

So this is how this was created.

Let me be clear, there are a lot of sudoku apps and websites out there. I'm not trying to reinvent the wheel, this is just a side project. 
But I think this could be pretty fun, because I have a lot of ideas how I can expand from a simple Sudoku application and solver to amp up the complexity.

## Technologies

I am going to use react and Rust, dockerize both the front- and the backend and "orchestrate" with docker-compose (maybe ).

I only recently learned react (I have much more experience)

I have never before worked with Rust (this is going to be the fun part)

I have basic knowledge of docker. I don't know much about optimizing, but I can setup an environment for my applications pretty quickly.

## Ideas

- Sudoku App in Browser (react)
  - Fill in numbers
  - Fill in ideas
  - (?) Coloring 
  - (?) Flexible complexity (9x9, 16x16)
- Sudoku Solver (Rust)
  - Feed in current field, get result
    - Feed in via REST API or command line + files
  - First implementation with Backtracing
    - Maybe look at some other algorithms (?)
  - (?) Hook up either a DB or Redis to save different games
    - With player ids
- DevOps
  - Dockerize front- and backend
  - (?) setup Github Actions to automatically build the containers
    - (?) Deploy to AWS / Heroku / DigitalOcean
    - (?) K8S for orchestration
