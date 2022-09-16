import './mainBody.css'
import PopularList from '../popularList/PopularList'

const MainBody = () => {
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        <h1>Most popular JavaScript frameworks</h1>
        <PopularList
          title="React"
          description="React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. It lets you compose complex UIs from small
          and isolated pieces of code called “components”. React has a few
          different kinds of components, but we'll start with React.Component
          subclasses: class ShoppingList extends React."
          released="2013"
        />
        <PopularList
          title="Angular"
          description="Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more."
          released="2016"
        />
        <PopularList
          title="Vue"
          description="Vue.js is an open-source model view viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
          released="2014"
        />
      </div>
    </div>
  )
}

export default MainBody
