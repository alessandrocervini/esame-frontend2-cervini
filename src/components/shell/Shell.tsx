import { Outlet } from "react-router";
import { Header } from "../Header";

export const Shell = () => {
  return (
    <div className="shell">Shell
    <Header />
    <main className="main">
      <Outlet />
    </main>
    
    
    </div>
  )
}
