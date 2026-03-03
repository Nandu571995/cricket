import React, { useMemo, useState } from 'react';
import { IPL_TEAMS, NATIONAL_TEAMS } from './data/teams';
import { getReactionFromBallEvent } from './engine/reactionEngine';

const App = () => {
  const [competition, setCompetition] = useState('national');
  const [teamA, setTeamA] = useState('India');
  const [teamB, setTeamB] = useState('Australia');
  const [ballEvent, setBallEvent] = useState('6 runs over long-on');

  const options = competition === 'national' ? NATIONAL_TEAMS : IPL_TEAMS;

  const reaction = useMemo(() => getReactionFromBallEvent(ballEvent), [ballEvent]);

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1>3D Cricket Prototype Planner</h1>
      <p>
        Yes, you can build this for personal use: select teams and map live ball-by-ball text into 3D player
        reactions.
      </p>

      <section style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginTop: 16 }}>
        <h2>Match Setup</h2>
        <label>
          Competition:&nbsp;
          <select value={competition} onChange={(e) => setCompetition(e.target.value)}>
            <option value="national">National teams</option>
            <option value="ipl">IPL teams</option>
          </select>
        </label>
        <div style={{ marginTop: 12 }}>
          <label>
            Team A:&nbsp;
            <select value={teamA} onChange={(e) => setTeamA(e.target.value)}>
              {options.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </label>
          &nbsp;&nbsp;
          <label>
            Team B:&nbsp;
            <select value={teamB} onChange={(e) => setTeamB(e.target.value)}>
              {options.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p style={{ marginTop: 10 }}>
          Selected match: <strong>{teamA}</strong> vs <strong>{teamB}</strong>
        </p>
      </section>

      <section style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginTop: 16 }}>
        <h2>Ball-by-ball to 3D Reaction</h2>
        <input
          value={ballEvent}
          onChange={(e) => setBallEvent(e.target.value)}
          placeholder="Example: FOUR through covers"
          style={{ width: '100%', padding: 10, boxSizing: 'border-box' }}
        />
        <div style={{ marginTop: 12, background: '#f7f7f7', padding: 12, borderRadius: 6 }}>
          <div>
            Reaction tag: <strong>{reaction.reaction}</strong>
          </div>
          <div>
            Animation key: <strong>{reaction.animation}</strong>
          </div>
          <div>Confidence: {reaction.confidence}</div>
        </div>
      </section>

      <section style={{ marginTop: 16 }}>
        <h3>Integration Notes</h3>
        <ul>
          <li>GitHub for source and CI/CD.</li>
          <li>Railway for backend APIs and websocket relay.</li>
          <li>Use licensed live cricket APIs for reliable ball-by-ball events.</li>
          <li>Unity/Unreal can consume these reaction keys to trigger player animations.</li>
        </ul>
      </section>
    </main>
  );
};

export default App;
