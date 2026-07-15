import Header from "./components/Header.jsx";

import Welcome from "./components/Welcome.jsx";

import Profile from "./components/Profile.jsx";
import UserGreeting from "./components/UserGreeting.jsx";
import DailyMotivation from "./components/DailyMotivation.jsx";
import GoalTracker from "./components/GoalTracker.jsx";

import QuitForm from "./components/QuitForm.jsx";
import QuitTimer from "./components/QuitTimer.jsx";

import CravingHelp from "./components/CravingHelp.jsx";
import CravingDiary from "./components/CravingDiary.jsx";
import Diary from "./components/Diary.jsx";

import Statistics from "./components/Statistics.jsx";
import ProgressCard from "./components/ProgressCard.jsx";
import ProgressChart from "./components/ProgressChart.jsx";
import ProgressEvolution from "./components/ProgressEvolution.jsx";
import CravingStats from "./components/CravingStats.jsx";

import HealthTimeline from "./components/HealthTimeline.jsx";
import HealthProgress from "./components/HealthProgress.jsx";
import HelpResources from "./components/HelpResources.jsx";

import Achievements from "./components/Achievements.jsx";
import Badges from "./components/Badges.jsx";

import BottomNav from "./components/BottomNav.jsx";

import { useNavigation } from "./context/NavigationContext";


function App() {

  const { page } = useNavigation();

  const firstTime =
    localStorage.getItem("welcomeDone");


  return (

    <div className="app">


      {
        !firstTime ?

          <Welcome />

          :

          <>

            <Header />


            <main className="container">


              {
                page === "home" &&

                <>

                  <Profile />

                  <UserGreeting />

                  <DailyMotivation />

                  <GoalTracker />

                  <QuitForm />

                  <QuitTimer />

                  <CravingHelp />

                  <CravingDiary />

                  <Diary />

                </>

              }



              {
                page === "progress" &&

                <>

                  <Statistics />

                  <ProgressCard />

                  <ProgressChart />

                  <ProgressEvolution />

                  <CravingStats />

                </>

              }



              {
                page === "health" &&

                <>

                  <HealthTimeline />

                  <HealthProgress />

                  <HelpResources />

                </>

              }



              {
                page === "achievements" &&

                <>

                  <Achievements />

                  <Badges />

                </>

              }


            </main>


            <BottomNav />


          </>

      }


    </div>

  );

}


export default App;