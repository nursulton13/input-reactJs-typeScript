import Input from "./components/input.tsx/input";
import { useState } from "react";
import "./index.css";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-[600px] h-[400px] mx-auto my-[200px] bg-gray-100 backdrop-blur-sm flex flex-col justify-between p-[30px] rounded-md">
      <div className="mb-4 text-center text-[28px]">Input component</div>
      <Input
        id="login"
        label="Login"
        value={login}
        onchange={(ev: any) => setLogin(ev.target.value)}
      />
      <Input
        id="password"
        label="Password"
        value={password}
        type="number"
        onchange={(ev: any) => setPassword(ev.target.value)}
      />
      <Input
        id="email"
        label="Email"
        value={email}
        type="email"
        onchange={(ev: any) => setEmail(ev.target.value)}
      />
    </div>
  );
}

export default App;
