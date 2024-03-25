## Getting Started

To get started, clone this repository and do the following:

```
npm install # install dependencies
npm start # run in dev mode
npm run build # build to dist dir
npm test # run tests
```

Make sure you are using an up-to-date version of Node (v18 or higher).

In development mode, the app will appear at http://localhost:4321.

When built, a production build will be copied to the `dist` directory. No backend is required other than a simple http server to serve the files. (Preferably it should serve `index.html` for any route request.)

### Displaying the skeletons

To see the skeletons, please adjust the `delay` prop for `ProgramDataOutlet` in `root.tsx`. e.g. for a 2 second delay, set `delay={2000}`.

### Displaying errors

To see the error page, please manually enter an invalid url, e.g. `/foo` or `/tv-shows/123`.

## Technical and architectural choices

The technical and architectural choices were largely dictated by the requirements of the assignment. It had to be a React/Typescript app, built with Webpack and Babel, backed with Jest tests.

Of the optional requirements, I chose to use:

- **React Router**: Because the application was split into separate page concerns (in particular Home and Progam), I chose to use React Router to handle the routing and linking for the separate pages.
- **Redux**: Because Redux provides a global store, it meant that the data could be requested once and stored for the duration of the application, avoiding the need to re-request the same data. Further, that data was then normalised, allowing the Program Page to select the relevant program data with an `O(1)` call. Though it increases both the build size and the memory requirements, it is worth it for the ease of caching important data.

I chose to not use Styled Components, as I felt it that writing static CSS was sufficient for my purposes. Styled Components lets you generate your CSS at runtime, but I didn't feel the extra dependency was worth it in such a small application. Perhaps it would be useful if the application were to grow and it the styling had a lot of dynamic requirements.

### Breakpoints

Speaking of styling, I have used one breakpoint at 900px as it sits halfway between our target screen sizes of 720px and 1080px. Though I have been fairly sparing with media query based styling, writing CSS that generally responds without media queries.

### Carousel

The carousel is the most complex component in the application. Much of the logic lives in the `useCarousel` hook. The Carousel component takes a array of items (which can take any form) and chooses which ones to render. State variables keep track of both the current selection, as well as the the current rendered items. It was necessary to track both because I only wanted to change the rendered items when the selection moved left of the first rendered item or right of the last visible (i.e. second last) rendered item. The hook also it defines keyboard event callbacks for left, right and enter.

Some responsibility is still placed on the parent component for the carousel rendering. In particular, the `renderItem` prop tells the Carousel how to render a given item. Secondly, the `itemKey` prop is also required to render a unique item key (which in turn assists the performance of the React rendering algorithm). The `onSelect` prop must also be defined as that gets called when an the Enter key is clicked on an item.

As an alternative to exposing `renderItem`, I considered and rejected an approach that required the parent component to create all the items as children, with the Carousel selecting a subset to render. However, given this would involve creating and discarding a whole lot of nodes, I considered `renderItem` to be a more sensible approach.

Because of its complexity, the Carousel component has more tests than any other component.

### Routing

Based off the design, I decided to implement the "TV Shows" and "Movies" pages. These return the same carousel as Home but with the programs restricted to those of the relevant type. To make the navigation useful, I had to provide different routes for the two types of programs, which made the linking a bit more complicated. Hence the utility function `programLink` in `utils/program-utils.ts`.

I interpreted the backspace-to-go-back requirement as replicating the browser back functionality. i.e. It's implemented app wide, not just for the program pages.

## Potential improvements

### Saving Carousel state

The main improvement I'd like to make would be to save the state of the Carousel after leaving and then coming back. i.e. The program you'd just visited would be the selected program on the carousel. Though I ultimately decided to leave it, there are a couple of approaches I considered:

- Global state: Instead of the state living in the Carousel, it might instead live in the redux store. The downside of this is that it harms of the reusability and simplicity of the Carousel component, as its now dependent on a global store.
- Prop driven initial state: We could set the initial state of the Carousel based on component prop. This might involve listening to the route change and forward the program id of the previous page to the Carousel. (Unfortunately, this sort of route listening has become more difficult in the latest version of React Router, which no longer exposes the history object.)

## If I had more time

If I had more time, I would like to properly test the data loading. Avoiding multiple data loads is an important requirement, so it's a shame it's not currently tested.

I did get some of the way there: configuring the `msw` package with `jest` to mock the data transfer. However, more debugging is required to get it fully working.
