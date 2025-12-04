import {redirect} from "next/navigation";
//[from code tutor] tells next.js to not render this page but send user to another route

export default function Home() {
  redirect("/onboarding/intro");
  //[from code tutor] instead of rendering this page the function send the user to the route of the intro page
  return (
    <div>
    </div>
  );
}