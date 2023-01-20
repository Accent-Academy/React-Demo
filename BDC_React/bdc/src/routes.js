import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import Error from "./Error";

const route = [
  {
    name:"home",
    path: "/",
    exact: true,
    component: <Home />,
    fallback: <Home />,
  },
  {
    name:'contact',
    path: "/contact",
    exact: true,
    component: <Contact />,
  },
  {
    path: "*",
    exact: true,
    component: <Error />,
  },
];

export default route;
