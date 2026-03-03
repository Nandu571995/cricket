# 3D Cricket Personal Project Roadmap

This project can evolve from a React prototype into a 3D cricket experience where players react to real ball-by-ball activity.

## Stack
- **3D game client**: Unity or Unreal
- **Data relay backend**: Node.js + Express + WebSocket
- **Data providers**: Licensed cricket API (preferred)
- **Source control**: GitHub
- **Deployment**: Railway

## Feature path
1. Team selection for National + IPL teams.
2. Ball event parser (`reactionEngine`) that maps commentary text to animation keys.
3. Backend relay that polls live feed and emits normalized events.
4. 3D runtime consumes events and triggers animation state machine.

## Railway deployment outline
1. Push project to GitHub.
2. Create Railway project from GitHub repo.
3. Add required environment variables in Railway dashboard:
   - `REACT_APP_CRICAPI_KEY` (frontend if needed)
   - `CRICAPI_KEY` (backend recommended)
4. Set build command: `npm run build`
5. Set start command: `npm start` (frontend only) or backend server start command.

## Important note on Cricbuzz
For stability and terms compliance, use officially licensed APIs for production-like usage.
