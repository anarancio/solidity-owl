# React Skeleton #



### What is this repository for? ###


This is a template project that you can use to bootstrap your **ReactJS** application, using **Redux** as Flux implementation.

The project has some already defined **generic components**, the idea is to make that folder grow.

This SPA template is conceived as a **multi-tab** application, so you will find a generic TabNavItem that uses React Router to mount the right tab. Each tab is a Container.


It also has some **particular components** related with a previous project business logic, and particular styles, so you can take that components as
**flow examples, and delete them later**. That components are part of this template just to understand the architecture easily, but **you can delete all the components and put inside the ApplicationRouter childs your custom made jsx files**.

**Important note**:

If you are not interested in using Redux, navigation or another thing used in this project you might consider use just the https://github.com/facebook/create-react-app template.

**The main technologies used are**:

* React JS
    * React-Redux
    * React-Router
    * Redux-Thunk
* HTML5
* CSS3
* Bootstrap 4
* Swagger Client 2
* Auxiliar libraries:
    * Reactstrap
    * ReactTable


### How do I get set up? ###

* Clone repo
* Run yarn install
* Run yarn start
* Open browser on localhost:3000
* Example flow login: change the API_BASE_URL in deployConstants.js to your API url, this template assumes this login request: {loginData: {username, password}}
* Login with the user, example credentials: usuariostg@infuy.com/Test123, API: 'http://192.168.1.244:8080/blockchain-exchange-api/v2/api-docs'
* You will be redirected to UserDashboard

### Project structure ###


|-src
   |---actions: Actions that will be hit an endpoint and produce some change in the state
   |---components: React reusable components that can be childs of N containers
   |---config: Configuration files will be included here
   |---abstractComponents: Base components that containers will implement
   |---containers: React components that are linked with the Redux state
   |-----UserDashboardContainer.jsx: Example of container
   |---genericComponents: Components that are generic and can be used at any project
   |---reducers: React-redux reducers will be here
   |-----helpers: Reducer  helpers
   |---restClient: Creation of the restClient using Swagger client
   |---routing: Definition of the main router of the application and routes restrictions

|-design:
   |---styles: CSS SASS/SCSS will be here
   |---bootrsap-4.0.0.dist: bootstrap v4


### Description of an example flow of the application: Login ###

- Take a look at index.js, you will find the store creation and the main App render.
- The AuthorizationContainer is the first component to get rendered, thats because it has the initial route on the ApplicationRouter:
                <Route exact path="/" component={AuthorizationContainer} />
- AuthorizationContainer is binded with the redux state and redux actions using mapStateToProps and mapDispatchToProps functions, so
you can access to the part of the state that you want or dispatch some action from here.
- That container includes a Login component and a onLoginClick callback function. That callback will dispatch the login action (src/actions/authorizationActions.js)
- Since we are using react redux with thunk as a middleware we can inject the Rest Client on that action call, so the basic structure of an actions is:
```

export const someAction = (loginData) =>
    (dispatch, getState, restClient) =>
        new Promise((resolve, reject) =>
            ...
            ...
            dispatch(something)


```

- Each action will dispatch a change in the redux state. The reducers will be listening to this actions, the way that an action matchs with a reducer is by adding it in the types.js file and capturing it in the createReducer function of the reducer.
In this scenario, the AuthorizationReducer will handle that action call and will set the API response in the authorizationData part of the state. Now any component that is linked
to the redux state and has that property on the mapStateToProps function can access to the user info.
- Each action returns a Promise to handle async functions, after a promise is resolved or rejected the redux state has the information stable, so you can decide wich flow your application will follow.

Example:

```
 //Call login action
 this.props.login(loginData).then(()=>{
        // this.props.authorizationData is the part of the state that we want to use
        if(this.props.authorizationData.role === ADMIN_ROLE){
            // redirect to admin dashboard using react-router
            this.props.history.push('/adminDashboard');
        }else{
            // redirect to user dashboard using react-router
            this.props.history.push('/userDashboard');
         }
  });
```


### Contribution guidelines ###

##### Git flow and branching model

* master: production ready code state
* dev should be merged to master when code is ready to be released
Devs should work in a local feature branch, branched off from dev and then merged back in once it finished
See http://nvie.com/posts/a-successful-git-branching-model/ for more details



### Who do I talk to? ###

http://infuy.com


### This project was initialy bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).