import { Button, Link } from "@mui/material";
import Pomodoro from "./pages/Pomodoro";

function App() {

  
  return (
    <div className="app">
      <div className="content">
        <Pomodoro />
        <Button primary>
        <Link href="https://github.com/ALBANO-Daniel/pomodor">Project Git Repository</Link>
        </Button>
        
      </div>
    </div>
  );
}

export default App;
